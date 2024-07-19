import React from "react";
import instagram from "../assets/instagram.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";
import { IoMdHome } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { LiaFacebookMessenger } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineAddBox } from "react-icons/md";
import { Avatar } from "@mui/material";
import { SlMenu } from "react-icons/sl";
import { Link } from "react-router-dom";

function Navbar() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  return (
    <>
      <div className="bg-black h-full w-1/6 border-r border-zinc-900 fixed top-0">
        <div className="pt-6 pl-4">
          <div>
            <img src={instagram} width={150} />
          </div>
          <div className="my-3">
            <Link to="/" className="flex items-center gap-4 text-lg h-10 w-44 pl-2 rounded-md cursor-pointer hover:bg-neutral-900">
              <IoMdHome size={24} /> Home
            </Link>
            <Link to="/explore" className="flex items-center gap-4 text-lg h-10 w-44 pl-2 rounded-md cursor-pointer hover:bg-neutral-900">
              <MdOutlineExplore size={24} /> Explore
            </Link>
            <div className="flex items-center gap-4 text-lg h-10 w-44 pl-2 rounded-md cursor-pointer hover:bg-neutral-900">
              <GoVideo size={22} /> Reel
            </div>
            <div className="flex items-center gap-4 text-lg h-10 w-44 pl-2 rounded-md cursor-pointer hover:bg-neutral-900">
              <LiaFacebookMessenger size={24} /> Messages
            </div>

            <div className="flex items-center gap-4 text-lg h-10 w-44 pl-2 rounded-md cursor-pointer hover:bg-neutral-900">
              <IoMdHeartEmpty size={24} /> Notifications
            </div>
            <div className="flex items-center gap-4 text-lg h-10 w-44 pl-2 rounded-md cursor-pointer hover:bg-neutral-900">
              <MdOutlineAddBox size={24} /> Create
            </div>
          </div>
          <div className="flex mt-8 gap-4">
            <Link to="/profile">
              <Avatar className="cursor-pointer">
                {user.username.charAt(0).toUpperCase()}
              </Avatar>
            </Link>
            <span className="flex flex-col items-center justify-center">
              <p>{user.username}</p>
              <button
                onClick={handelLogout}
                className="bg-neutral-900 px-3 py-1 rounded-lg text-xs hover:bg-neutral-700"
              >
                Log out
              </button>
            </span>
          </div>
        </div>
        <div className="absolute bottom-4 left-10 text-lg cursor-pointer flex items-center gap-4">
          <SlMenu size={20} /> More
        </div>
      </div>
    </>
  );
}

export default Navbar;
