import Image from "next/image";
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
      <Image
        key={index}
        src={icon.src}
        alt={icon.alt}
        width={50}
        height={50}
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
