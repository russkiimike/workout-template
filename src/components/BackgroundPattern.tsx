import React from 'react';

interface BackgroundUrlProps {
  imgurl: string;
}

const BackgroundPattern: React.FC<BackgroundUrlProps> = ({ imgurl }) => {
  return (
    <div
      className="fixed inset-0 z-0 bg-repeat opacity-40"
      style={{
        backgroundImage: `url(${imgurl})`,
        backgroundSize: '400px 400px',
        filter: 'brightness(90%)',
      }}
    ></div>
  );
};

export default BackgroundPattern;
