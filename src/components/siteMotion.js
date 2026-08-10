"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const isInOpeningViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
};

const setMotion = (element, type, index, observer) => {
  if (!(element instanceof HTMLElement) || element.dataset.motion) return;

  element.dataset.motion = type;
  element.style.setProperty("--motion-delay", `${Math.min((index % 5) * 70, 280)}ms`);

  if (type === "section") {
    element.dataset.motionDirection = index % 3 === 1 ? "left" : index % 3 === 2 ? "right" : "up";
  }

  if (isInOpeningViewport(element)) {
    element.classList.add("is-motion-visible");
  } else {
    observer.observe(element);
  }
};

const clearMotion = (main) => {
  main.querySelectorAll("[data-motion]").forEach((element) => {
    delete element.dataset.motion;
    delete element.dataset.motionDirection;
    element.classList.remove("is-motion-visible");
    element.style.removeProperty("--motion-delay");
  });
};

export default function SiteMotion() {
  const pathname = usePathname();
  const progressRef = useRef(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const body = document.body;
    const main = document.querySelector("main");

    if (!main) return undefined;

    body.classList.add("motion-enabled");
    main.dataset.motionPage = "";

    if (reducedMotion) {
      main.querySelectorAll("[data-motion]").forEach((element) => element.classList.add("is-motion-visible"));
      return () => {
        clearMotion(main);
        body.classList.remove("motion-enabled");
        delete main.dataset.motionPage;
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-motion-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.11, rootMargin: "0px 0px -7% 0px" }
    );

    const registerMotion = () => {
      const sections = [...main.querySelectorAll(":scope > section")];
      sections.forEach((element, index) => setMotion(element, "section", index, observer));

      const editorialItems = [...main.querySelectorAll("[data-contact-reveal]")];
      editorialItems.forEach((element, index) => setMotion(element, "item", index, observer));

      const headings = [...main.querySelectorAll("h1, h2")];
      headings.forEach((element, index) => setMotion(element, "heading", index, observer));

      const cards = [...main.querySelectorAll("article, [class*='Card'], [class*='card']")]
        .filter((element) => !element.closest("header, footer"));
      cards.forEach((element, index) => setMotion(element, "item", index, observer));

      const media = [...main.querySelectorAll("figure, [class*='Image'], [class*='image'], [class*='Media'], [class*='media']")]
        .filter((element) => !element.closest("article, [data-motion='item']"));
      media.forEach((element, index) => setMotion(element, "media", index, observer));
    };

    registerMotion();

    const mutationObserver = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.addedNodes.length > 0)) registerMotion();
    });
    mutationObserver.observe(main, { childList: true, subtree: true });

    let animationFrame = 0;
    const updateProgress = () => {
      animationFrame = 0;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0;
      progressRef.current?.style.setProperty("--site-scroll-progress", progress.toString());
    };

    const handleScroll = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateProgress();

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      clearMotion(main);
      body.classList.remove("motion-enabled");
      delete main.dataset.motionPage;
    };
  }, [pathname]);

  return (
    <>
      <div ref={progressRef} className="site-scroll-progress" aria-hidden="true" />
      <div key={pathname} className="site-route-veil" aria-hidden="true" />
    </>
  );
}
