import React, { useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import axios from "axios";
import { IoIosMore } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";
import { IoPaperPlane } from "react-icons/io5";
import { LiaBookmark } from "react-icons/lia";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?per_page=30&query=instagram_feed&client_id=vz1cokfGilDv77Jhn5h6-efCrgD7tiP8QIxX68sNbj8"
      )
      .then((response) => {
        setPosts(response.data.results);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 bg-black h-full">
      <div className="col-span-2">
        {posts.map((post) => (
          <div key={post.id} className="flex justify-center">
            <div className="w-2/3 flex flex-col justify-center items-center border-b border-zinc-600">
              <div className="w-full flex justify-between items-center px-1 my-3">
                <div className="flex items-center gap-3">
                    <img
                      className="w-10 h-10 md:w-14 md:h-14 object-cover rounded-full border-2 border-pink-600 p-0.5"
                      src={post.user.profile_image.large}
                      alt="profile"
                    />
                  <span>{post.user.instagram_username}</span> • <span className="text-sm text-zinc-400">{post.height.toString().charAt(0)} hr</span>
                </div>
                <IoIosMore />
              </div>
              <div>
                <img src={post.urls.full} className="rounded-sm" />
              </div>
              <div className="w-full flex items-center justify-between my-2">
                <div className="flex items-center justify-center gap-4 cursor-pointer">
                  <span>
                    <FaRegHeart size={24} />
                  </span>
                  <span>
                    <TbMessageCircle size={28} />
                  </span>
                  <span>
                    <IoPaperPlane size={22} />
                  </span>
                </div>
                <div>
                  <LiaBookmark size={24} className="cursor-pointer" />
                </div>
              </div>
              <div className="w-full mb-4">
                <p>{post.likes} Likes</p>
                <p className="text-zinc-400 cursor-pointer">
                  View all comments...
                </p>
                <p className="text-zinc-400">
                  {post.user.total_likes} comments
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
