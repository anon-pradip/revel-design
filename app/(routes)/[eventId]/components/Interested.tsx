import React from "react";
import Like from "/public/like.svg";
import Image from "next/image";

const Interested = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mr-auto">
        Click on Interested to stay updated about this event.
      </h1>
      <div className=" flex items-center gap-2 pt-5 ">
        <Image src={Like} alt="popIcon" height={18} width={20} />
        <p>1000</p>
      </div>

      <div className=" grid grid-cols-2 place-content-between">
        <p className=" py-[7px] w-full text-slate-700">
          People who have shown interest recently
        </p>
        <button className=" ml-auto h-max w-max py-2 px-5  border-[2px] border-purple-800 rounded-xl">
          Interested ?
        </button>
      </div>
    </div>
  );
};

export default Interested;
