"use client";

import { MainEvent } from "@/utils/interfaces";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import Pop from "/public/pop.svg";
import Time from "/public/time.svg";
import ParentalGuidance from "/public/parental-guidance.svg";
import Language from "/public/language.svg";
import Image from "next/image";
import Separator from "./ui/Separator";
import Interested from "./Interested";
import Artist from "./Artist";

interface MoreInfoProps {
  event: MainEvent;
}

const MoreInfo: React.FC<MoreInfoProps> = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);

  const mainTopics = [
    {
      icon: Pop,
      label: event.event_type[2],
    },
    {
      icon: Time,
      label: event.duration,
    },
    {
      icon: ParentalGuidance,
      label: event.age_constraint,
    },
    {
      icon: Language,
      label: event.language.map((item, index) => (
        <span key={index}>
          {item}
          {index !== event.language.length - 1 && ", "}
        </span>
      )),
    },
  ];

  return (
    <div className="mt-4 border border-t-slate-300 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className=" text-xl font-semibold">More Information</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <ChevronUp height={20} width={20} />
          ) : (
            <ChevronDown height={20} width={20} />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 flex flex-col justify-center items-center">
          <div className=" mr-auto flex flex-col justify-center items-center gap-y-3">
            {mainTopics.map((topic, index) => (
              <div
                key={index}
                className="flex justify-start items-center mr-auto gap-x-[6px]"
              >
                <Image src={topic.icon} alt="popIcon" height={14} width={14} />
                <p>{topic.label}</p>
              </div>
            ))}
          </div>
          <Separator />
          <Interested />
          <Separator />
          <Artist event={event} />
        </div>
      )}
    </div>
  );
};

export default MoreInfo;
