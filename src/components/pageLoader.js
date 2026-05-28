"use client"

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./pageLoader.module.scss";

const PageLoader = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 850);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className={styles.loader} aria-label="Chargement de la page" role="status">
      <div className={styles.pulseMark}>
        <span />
        <span />
        <span />
      </div>
      <p>Chargement</p>
    </div>
  );
};

export default PageLoader;
