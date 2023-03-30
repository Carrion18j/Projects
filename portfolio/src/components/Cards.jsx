import { bg } from "../assets";

const Card1 = () => {
  return (
    <div className="m-[40px] bg-slate-200 h-[220px]  flex flex-row-reverse rounded-[10px] shadow-2xl shadow-black cursor-pointer">
      <img
        src={bg}
        alt="card-img"
        className="aspect-[8/5] opacity-80 rounded-[6px]"
      />
      <div id="card-left-part" className="relative left-[26px] z-20 ">
        <h1
          id="card-heading"
          className="text-[22px] font-semibold mr-10 mt-10 ml-4 border-b-[1px] border-black-800 object-contain"
        >
          Cat <br />
          Shrine <br />
          And A Nice Car
        </h1>
        <div id="devider" className="h-[3px] bg-black m-[10px]"></div>
        <p className="font-semibold opacity-60 ml-[10px]">
          01 <br /> <span>→</span>
        </p>
      </div>
    </div>
  );
};

const Card2 = () => {
  return (
    <div className="m-[40px] bg-slate-200 h-[220px]  flex flex-row-reverse rounded-[10px] shadow-2xl shadow-black cursor-pointer">
      <img
        src={bg}
        alt="card-img"
        className="aspect-[8/5] opacity-80 rounded-[6px]"
      />
      <div id="card-left-part" className="relative left-[26px] z-20 ">
        <h1
          id="card-heading"
          className="text-[22px] font-semibold mr-10 mt-10 ml-4 border-b-[1px] border-black-800 object-contain"
        >
          Cat <br />
          Shrine <br />
          And A Nice Car
        </h1>
        <div id="devider" className="h-[3px] bg-black m-[10px]"></div>
        <p className="font-semibold opacity-60 ml-[10px]">
          02 <br /> <span>→</span>
        </p>
      </div>
    </div>
  );
};

const Card3 = () => {
  return (
    <div className="m-[40px] bg-slate-200 h-[220px]  flex flex-row-reverse rounded-[10px] shadow-2xl shadow-black cursor-pointer">
      <img
        src={bg}
        alt="card-img"
        className="aspect-[8/5] opacity-80 rounded-[6px]"
      />
      <div id="card-left-part" className="relative left-[26px] z-20 ">
        <h1
          id="card-heading"
          className="text-[22px] font-semibold mr-10 mt-10 ml-4 border-b-[1px] border-black-800 object-contain"
        >
          Cat <br />
          Shrine <br />
          And A Nice Car
        </h1>
        <div id="devider" className="h-[3px] bg-black m-[10px]"></div>
        <p className="font-semibold opacity-60 ml-[10px]">
          03 <br /> <span>→</span>
        </p>
      </div>
    </div>
  );
};

export { Card1, Card2, Card3 };
