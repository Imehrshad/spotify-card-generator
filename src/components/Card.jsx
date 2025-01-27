import React, { useEffect, useState, useRef } from "react";
import SpotifySvg from "./SpotifySvg";
import html2canvas from "html2canvas";

const Card = ({ values, clickCounter, cardRef }) => {
  const { song, artist, lyrics, musicCover, logoColor, backgroundColor, size } =
    values;
  const [imageUrl, setImageUrl] = useState(null);
  const downloadAsImage = async () => {
    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: null,
          scale: 2, // Higher quality
        });

        const image = canvas.toDataURL("image/png", 1.0);
        const link = document.createElement("a");
        link.download = `${song || "music"}-card.png`;
        link.href = image;
        link.click();
      } catch (err) {
        console.error("Error generating image:", err);
      }
    }
  };
  useEffect(() => {
    if (clickCounter > 0) {
      downloadAsImage();
    }
  }, [clickCounter]);

  useEffect(() => {
    if (musicCover && musicCover instanceof File) {
      const url = URL.createObjectURL(musicCover);
      setImageUrl(url);

      // Cleanup the URL when component unmounts or musicCover changes
      return () => URL.revokeObjectURL(url);
    }
  }, [musicCover]);

  return (
    <>
      <div
        ref={cardRef}
        className="flex flex-col items-center justify-center  gap-2 rounded-lg py-7 px-8 w-full "
        style={{
          backgroundColor: backgroundColor,
          minWidth: size === "1/1" ? "50%" : "100%",
          color: logoColor,
          aspectRatio: size,
        }}
      >
        <div className="flex items-center justify-start gap-5 w-full">
          <img
            src={imageUrl || "/images/dummy.png"}
            alt="album cover"
            className="w-24 h-24 object-cover"
          />
          <div className="flex flex-col items-start justify-start ">
            <h3 className="text-xl font-bold">{song || "music title"}</h3>
            <h4 className="text-sm font-regular">{artist || "artist name"}</h4>
          </div>
        </div>
        <div className="w-full dual-font">
          <p 
            className="text-xl font-bold w-full whitespace-pre-wrap break-words overflow-wrap-anywhere text-center"
            style={{ wordBreak: 'break-word' }}
          >
            {lyrics || "lorem ipsum dolor sit amet"}
          </p>
        </div>
        <SpotifySvg
          className="w-16    h-16   self-start text-start p-0"
          fill={logoColor || "#FFFF"}
        />
      </div>
    </>
  );
};

export default Card;
