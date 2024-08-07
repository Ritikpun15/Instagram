import { createClient } from "pexels";
import React, { useEffect, useState } from "react";

const client = createClient(
  "WcLjMEQAtnz4kDmzbXTVgCURzus2N1eSm0uOzZ4fnvCmzfrxpJKlmYfU"
);

function Explore() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await client.photos.curated({ per_page: 80 });
      setImages(response.photos);
      console.log(response);
      
    } catch (err) {
      console.error("Error fetching photos", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-1 my-2 min-h-screen h-full">
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.src.original} className="h-96 w-[310px]" />
        </div>
      ))}
    </div>
  );
}

export default Explore;
