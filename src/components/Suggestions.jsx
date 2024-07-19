import { Avatar } from "@mui/material";

function Suggestions() {
  return (
    <>
      <div className="m-5">
        <div className="flex justify-between items-center w-60">
          <p>Suggestions for you</p>
          <p className="text-sm">See all</p>
        </div>
        <div className="flex justify-between items-center w-60 mt-3">
          <div className="flex gap-3">
            <Avatar>S</Avatar>
            <span className="text-sm">
              <p>sam77</p>
              <p className="text-xs text-neutral-400">New to instagram</p>
            </span>
          </div>
          <p className="text-xs text-blue-600 hover:text-white cursor-pointer ">
            Follow
          </p>
        </div>
        <div className="flex justify-between items-center w-60 mt-3">
          <div className="flex gap-3">
            <Avatar>J</Avatar>
            <span className="text-sm">
              <p>jackson</p>
              <p className="text-xs text-neutral-400">New to instagram</p>
            </span>
          </div>
          <p className="text-xs text-blue-600 hover:text-white cursor-pointer ">
            Follow
          </p>
        </div>
        <div className="flex justify-between items-center w-60 mt-3">
          <div className="flex gap-3">
            <Avatar>J</Avatar>
            <span className="text-sm">
              <p>jon_323</p>
              <p className="text-xs text-neutral-400">New to instagram</p>
            </span>
          </div>
          <p className="text-xs text-blue-600 hover:text-white cursor-pointer ">
            Follow
          </p>
        </div>
        <div className="flex justify-between items-center w-60 mt-3">
          <div className="flex gap-3">
            <Avatar>T</Avatar>
            <span className="text-sm">
              <p>tyrell</p>
              <p className="text-xs text-neutral-400">New to instagram</p>
            </span>
          </div>
          <p className="text-xs text-blue-600 hover:text-white cursor-pointer ">
            Follow
          </p>
        </div>
      </div>
    </>
  );
}

export default Suggestions;
