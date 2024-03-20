import React from "react";

function SectionTitle({ catTitle, sectionTitle, timer, button }) {
  return (
    <div className="w-[100%] mt-20">
      <div className="cat-title border-l-8 border-red-500 rounded-sm ps-3">
        <h1 className=" text-red-500">{catTitle}</h1>
      </div>
      <div className="bottom mt-2 flex justify-between">
        <div className="left flex flex-col sm:flex-row gap-10">
          <span className="text-black text-2xl font-semibold">
            {sectionTitle}
          </span>
          {timer && (
            <div className="Timer flex justify-center text-center gap-2 items-center">
              <span>
                <p className="text-xs font-semibold">Days</p>
                <h2 className="font-bold">{timer.days}</h2>
              </span>
              <div className="break text-red-500 font-semibold">:</div>
              <span>
                <p className="text-xs font-semibold">Hours</p>
                <h2 className="font-bold">{timer.hours}</h2>
              </span>
              <div className="break text-red-500 font-semibold">:</div>
              <span>
                <p className="text-xs font-semibold">Minutes</p>
                <h2 className="font-bold">{timer.minutes}</h2>
              </span>
              <div className="break text-red-500 font-semibold">:</div>
              <span>
                <p className="text-xs font-semibold">Seconds</p>
                <h2 className="font-bold">{timer.seconds}</h2>
              </span>
            </div>
          )}
        </div>
        {button && (
          <button className="bg-red-500 text-white w-[100px]">View All</button>
        )}
      </div>
    </div>
  );
}

export default SectionTitle;
