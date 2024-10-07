'use client';

import { useEffect, useState } from 'react';
import { getFileLink } from '@/lib/Requests';
import SocialShareButtons from './socialShare.js';
import AliceCarousel from 'react-alice-carousel';

const ClientComponents = ({ articleDetails }) => {
  const [imageLinks, setImageLinks] = useState([]);

  useEffect(() => {
    const fetchImageLinks = async () => {
    //   const links = await Promise.all(articleDetails?.photos?.map(photoUrl => getFileLink(photoUrl)));
    //   setImageLinks(links);
    };
    fetchImageLinks();
  }, [articleDetails.photos]);

  return (
    <>
      {/* <article dangerouslySetInnerHTML={{ __html: insertImageAfterThirdParagraph(articleDetails.contenu, imageLinks) }}></article> */}
      <SocialShareButtons articleDetails={articleDetails} />
      <div className="imgCaroussel">
        {/* {imageLinks.map((fileLink, index) => (
          <div className="imgPhotos" key={index} style={{ backgroundImage: `url(${fileLink})` }}></div>
        ))} */}
      </div>
    </>
  );
};

export default ClientComponents;
