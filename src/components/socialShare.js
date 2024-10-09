'use client';

import { Icon } from '@iconify/react';

const SocialShareButtons = ({ articleDetails }) => {
  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/share.php?u=https://www.fonarev.cd/actualites/details?articleId=${articleDetails._id}`;
    window.open(facebookUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=https://www.fonarev.cd/actualites/details?articleId=${articleDetails._id}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?url=https://www.fonarev.cd/actualites/details?articleId=${articleDetails._id}`;
    window.open(linkedInUrl, '_blank');
  };

  return (
    <div className="ctaContainer">
      <p>Partager l'article sur</p>
      <ul className="socialMedia">
        <li>
          <Icon icon="logos:facebook" className="icone" onClick={shareOnFacebook} />
        </li>
        <li onClick={shareOnTwitter}>
          <Icon icon="logos:twitter" className="icone" />
        </li>
        <li onClick={shareOnLinkedIn}>
          <Icon icon="devicon:linkedin" className="icone" />
        </li>
      </ul>
    </div>
  );
};

export default SocialShareButtons;
