import { getSingleEvent } from "@/utils/get-response";
import { MainEvent } from "@/utils/interfaces";
import React from "react";
import BreadCrumb from "./components/BreadCrumb";
import ImageAndMainCard from "./components/ImageAndMainCard";
import MoreInfo from "./components/MoreInfo";

const SingleEvent: React.FC = async () => {
  const event: MainEvent = await getSingleEvent();
  //   console.log(event);
  return (
    <div>
      <BreadCrumb breadCrumbName={event.name} />
      <ImageAndMainCard
        title={event.name}
        categories={event.category}
        subCategories={event.subcategory}
        venue={event.venue}
        image={event.image}
        start_date={event.start_date}
        end_date={event.end_date}
      />
      <MoreInfo event={event} />
    </div>
  );
};

export default SingleEvent;
