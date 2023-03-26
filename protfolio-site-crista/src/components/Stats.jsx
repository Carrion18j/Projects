import { stats } from "../constants";

const Stats = () => (
  <section className={`flex flex-wrap D-padding border-t-[1px] border-t-[#3F3E45]`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center text-P flex-row m-3 `}
      >
        <h4 className="mr-1 text-[40px] font-semibold">
          {stat.value}
        </h4>
        <p className="text-[22px] text-gradient">
            {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
