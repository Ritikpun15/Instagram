import { createClient } from "pexels";
import React, { useEffect, useState } from "react";

const client = createClient(
  "WcLjMEQAtnz4kDmzbXTVgCURzus2N1eSm0uOzZ4fnvCmzfrxpJKlmYfU"
);
const query = 'Travel'

function Reels() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await client.videos.search({query, per_page: 80 });
      setVideos(response.videos);
    } catch (err) {
      console.error("Error fetching videos", err);
    }
  };

  useEffect(() => {
    const url = 'https://instagram-scraper-api2.p.rapidapi.com/v1/post_info?code_or_id_or_url=CxYQJO8xuC6&include_insights=true';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '59e050d1b0msh7b38a098e91b1adp183dc6jsn5b28787b39e1',
		'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
	}
};

const fetchData = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData()

    fetchVideos();
  }, []);

  

  return (
    <div className="flex flex-col h-full">
    <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
      {videos.map(video => (
        <div key={video.id} className="relative w-full" style={{ paddingBottom: '100%' }}>
          <div className="absolute inset-0 flex flex-col items-center">
            <video className="w-full h-full object-cover" autoPlay muted loop>
              <source src={video.video_files[0].link} type="video/mp4" />
            </video>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Reels;
