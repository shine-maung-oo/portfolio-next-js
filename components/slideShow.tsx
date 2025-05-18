import React from "react";

type SlideShowItem = {
  src: string;
  alt: string;
  rounded?: boolean;
};

type SlideShowProps = {
  data: SlideShowItem[];
};

const SlideShow: React.FC<SlideShowProps> = ({ data }) => {
  const renderIcons = () =>
    data.map((icon, index) => (
      <img
        key={index}
        src={icon.src}
        alt={icon.alt}
        style={icon.rounded ? { borderRadius: 5 } : undefined}
      />
    ));

  return (
    <div className="slideshow">
      <div className="move">{renderIcons()}</div>
      <div className="move">{renderIcons()}</div>
    </div>
  );
};

export default SlideShow;
