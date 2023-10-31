"use client";
import Blog from "@/components/Blog";
import SignUp from "@/components/SignUp";
import * as React from "react";
import { BiLogIn } from "react-icons/bi";

export default function Home(props) {
  const [open, setopen] = React.useState(false);
  let close=(state)=>{
    setopen(state)
  }
  return (
    <div className="">
      <div className="absolute top-[22%] cursor-pointer">
        <BiLogIn
          size={70}
          onClick={() => {
            setopen(!open);
          }}
        />
      </div>
      <div className={`absolute w-full z-10 }`}>
        <SignUp open={open} close={close} />
      </div>
      <Blog />
    </div>
  );
}
