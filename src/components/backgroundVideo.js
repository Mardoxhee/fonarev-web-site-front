import React from 'react';

const BackgroundVideoContainer = ({ children, videoSource }) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      paddingTop: "100rem"
    }}>
      <video autoPlay  style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: '-1',
        
      }}>
        <source src={videoSource} type="video/mp4" />

      </video>
      <div style={{
        position: 'relative',
        zIndex: '1',
        width: '100%',
        height: '100%',
        display : "flex",
        alignItems: "end",
        justifyContent : "flex-start",
        padding : "0rem 8rem",
        paddingBottom : "3rem"
      }}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundVideoContainer;
