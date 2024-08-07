import { Avatar } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

function Suggestions() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?per_page=6&query=instagram+post&client_id=vz1cokfGilDv77Jhn5h6-efCrgD7tiP8QIxX68sNbj8"
      )
      .then((response) => {
        setUser(response.data.results);
        console.log(response.data.results);
      });
  }, []);
  return (
    <>
      <div className="m-5">
        <div className="flex justify-between items-center w-60">
          <p>Suggestions for you</p>
          <p className="text-sm">See all</p>
        </div>
        {
          user.map((item) => (
            
        <div key={item.id} className="flex justify-between items-center w-60 mt-3">
        <div className="flex gap-3 items-center">
        <img
                className="w-20 h-20 md:w-12 md:h-12 object-cover rounded-full"
                src={item.user.profile_image.large}
                alt="profile"
              />
          <span className="text-sm">
            <p>{item.user.instagram_username}</p>
            <p className="text-xs text-neutral-400">New to instagram</p>
          </span>
        </div>
        <p className="text-xs text-blue-600 hover:text-white cursor-pointer ">
          Follow
        </p>
      </div>
          ))
        }
      </div>
    </>
  );
}

export default Suggestions;
