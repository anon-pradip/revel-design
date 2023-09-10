import Link from "next/link";
import React from "react";

interface BreadCrumbProps {
  breadCrumbName?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ breadCrumbName }) => {
  return (
    <div className=" mt-[10px] text-[10px] pt-7 pb-2">
      <span className="text-purple-500">
        <Link href={"/"}>Events</Link>
      </span>
      <span>/</span>
      <span>{breadCrumbName}</span>
    </div>
  );
};

export default BreadCrumb;
