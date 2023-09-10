import { formatted_date } from "@/utils/format-date";
import { Venue } from "@/utils/interfaces";
import { Share2, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ImageAndMainCardProps {
  categories: string[];
  title: string;
  subCategories: string[];
  venue: Venue[];
  image: string;
  start_date: string;
  end_date: string;
}

const Badge = ({
  children,
  bgcolor,
}: {
  children: React.ReactNode;
  bgcolor: string;
}) => {
  return (
    <div
      className={`${bgcolor} px-2 py-1 max-w-max rounded-md text-white capitalize tracking-wide font-medium`}
    >
      {children}
    </div>
  );
};

const ImageAndMainCard: React.FC<ImageAndMainCardProps> = ({
  categories,
  subCategories,
  venue,
  image,
  title,
  start_date,
  end_date,
}) => {
  //   console.log(categories[2]);
  return (
    <div className="flex flex-col relative max-w-md flex-grow">
      <div className="">
        <Image
          src={image}
          alt="event image"
          height={300}
          width={400}
          className="aspect-square rounded-xl object-cover object-center"
        />
      </div>

      {/* SECOND CARD */}
      <div
        className="flex -mt-20 flex-col gap-y-4 rounded-xl w-full bg-white top-72
       px-2 py-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
      >
        {/* FIRST ROW STARTS */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <button>
            <Share2 height={30} width={30} className=" text-purple-800" />
          </button>
        </div>
        {/* FIRST ROW ENDS */}

        <div className="flex justify-start items-center gap-x-1">
          {venue[0].ticket_option[0].tag.includes("In High Demand") ? (
            <Badge bgcolor="bg-red-500">High In Demand</Badge>
          ) : null}
          <Badge bgcolor="bg-red-500">Limited Booking</Badge>
        </div>
        <div className="flex justify-start items-center gap-x-1">
          {categories[2] === "Music Shows" ? (
            <Badge bgcolor="bg-slate-500">Music Show</Badge>
          ) : null}
          <Badge bgcolor="bg-slate-500">{subCategories[0]}</Badge>
        </div>

        {/* CALENDAR STARTS*/}
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-x-1">
            <CalendarDays height={20} width={20} className="text-purple-700" />
            <span>{formatted_date(start_date)}</span> -{" "}
            <span>{formatted_date(end_date)}</span>
          </div>
          <button className="text-purple-800">Add to Calendar</button>
        </div>
        {/* CALENDAR ENDS */}

        {/* VENUE STARTS */}
        <div className="flex justify-between items-center ">
          <div className="flex justify-start items-center gap-x-1">
            <MapPin height={20} width={20} className="text-purple-700" />
            <span>{venue[0].name}</span>
          </div>
          <p className="text-purple-800 ml-auto">View on Map</p>
        </div>
        {/* VENUE ENDS */}
      </div>
    </div>
  );
};

export default ImageAndMainCard;
