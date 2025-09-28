import { statsData } from "../../../statsData";
import FilmTable from "../../components/tables/filmTable";
// import FilmTable from "../"
export default function OverView() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 mt-10  mx-4">
        {statsData.map((item) => (
          <div
            key={item.id}
            className="relative lg:w-[200px] p-3 h-[130px] bg-white shadow-md rounded-lg "
          >
            {/* colored square */}
            <div className="flex items-center justify-between">
              <h2 className="text-[#434854] font-[700] text-[16px] pt-2 leading-[24px]">
                {item.title}
              </h2>
              <span className="text-[#434854] font-[700] text-[16px] leading-[24px]">
                {item.color}
              </span>
            </div>

            {/* subtitle */}
            <p className="text-[#434854] font-[700] text-[16px] leading-[24px] pt-8">
              {item.value}
            </p>
            <p className="text-[#00992B] font-[400] text-[9px] leading-[24px]">
              {item.change}
            </p>
          </div>
        ))}
      </div>
      <FilmTable />
    </>
  );
}
