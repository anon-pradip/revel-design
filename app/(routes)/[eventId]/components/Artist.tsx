"use client";

import { MainEvent } from "@/utils/interfaces";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface ArtistProps {
  event: MainEvent;
}

const Artist: React.FC<ArtistProps> = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex flex-col gap-y-3">
      <div className="flex justify-between items-center">
        <h1 className=" text-xl font-semibold">Artist</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <ChevronUp height={20} width={20} />
          ) : (
            <ChevronDown height={20} width={20} />
          )}
        </button>
      </div>

      {/* Artist row stack */}

      {isOpen && (
        <div
          className="flex flex-row justify-start items-start gap-x-2"
          style={{ overflowX: "auto", scrollbarWidth: "none" }}
        >
          {event.artist.map((singleArtist) => {
            return (
              <div
                className="flex flex-col gap-y-1 justify-center items-center "
                key={singleArtist.id}
              >
                {/* IMAGE */}
                <div className="rounded-full h-20 w-20 relative overflow-hidden">
                  <Image
                    src={singleArtist.image}
                    alt="Single Artist"
                    fill
                    className=" object-cover"
                  />
                </div>
                <p className=" text-center font-medium">{singleArtist.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Artist;
