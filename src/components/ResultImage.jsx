import React, { useEffect, useState, useRef } from "react";
import SpotifySvg from "./SpotifySvg";
import html2canvas from "html2canvas";

const ResultImage = ({ values, clickCounter }) => {
  const { song, artist, lyrics, musicCover } = values;
  const [imageUrl, setImageUrl] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (musicCover && musicCover instanceof File) {
      const url = URL.createObjectURL(musicCover);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [musicCover, clickCounter]);
  
  
  return (
    <>
      <div
        ref={cardRef}
        className="py-10  flex-col items-center justify-center w-full gap-2 flex"
      >
        <div className="flex items-center justify-start gap-5 w-full">
          <img
            src={imageUrl || "default-image-path.jpg"}
            alt="album cover"
            className="w-24 h-24"
          />
          <div>
            <h3 className="text-xl font-bold">{song || "music title"}</h3>
            <h4 className="text-sm">{artist || "artist name"}</h4>
          </div>
        </div>
        <div className="w-full h-full dual-font">
          <p className="text-sm">{lyrics || "lorem ipsum dolor sit amet"}</p>
        </div>
        <SpotifySvg className="w-24 h-24 self-start" fill="#FFFF" />
      </div>
    </>
  );
};

export default ResultImage;
