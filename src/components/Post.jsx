import { Avatar } from "@mui/material";
import React from "react";
import { IoIosMore } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { TbMessageCircle } from "react-icons/tb";
import { IoPaperPlane } from "react-icons/io5";
import { LiaBookmark } from "react-icons/lia";

function Post({ user, postImage, likes, comments, timestamp }) {
  return (
    <div className="flex justify-center h-full">
      <div className="w-2/3 flex flex-col justify-center items-center border-b border-zinc-600">
        <div className="w-full flex justify-between items-center px-1 my-3">
          <div className="flex items-center gap-3">
            <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
            <span>
              {user} • {timestamp}
            </span>
          </div>
          <IoIosMore />
        </div>
        <div>
          <img src={postImage} className="rounded-sm" />
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
            <LiaBookmark size={24} className="cursor-pointer"/>
          </div>
        </div>
        <div className="w-full mb-4">
          <p>{likes} Likes</p>
          <p className="text-zinc-400 cursor-pointer">View all comments...</p>
          <p className="text-zinc-400">{comments} comments</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
