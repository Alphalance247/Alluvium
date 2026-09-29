import Image from "next/image";
import React from "react";

const HostCard = ({ name, role, img }) => {
  return (
    <div className="flex gap-4 flex-shrink-0">
      {/* Fixed image container */}
      <div className="relative w-[72px] h-[72px] flex-shrink-0">
        <Image
          src={img}
          alt={`${name} image`}
          fill
          sizes="72px"
          className="object-cover rounded-lg"
        />
      </div>

      {/* Host information */}
      <div className="flex flex-col gap-2">
        <div className="text-tertiary-400 font-semibold font-manrope text-sm">
          {name}
        </div>

        <div className="text-[#595959] font-semibold font-manrope w-full lg:w-[180px] xl:w-[270px] text-sm">
          {role}
        </div>
      </div>
    </div>
  );
};

export default HostCard;
