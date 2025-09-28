import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchStarShipById } from "../../api";
import StarShipImage from "../../components/images/starShipImage";

export default function StarShipsDetails() {
  const { id } = useParams<{ id: string }>();

 

  const {
    data: starships,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["starships", id],
    queryFn: () => fetchStarShipById(id!),
    enabled: !!id,
  });

  if (isLoading) return <div className="pt-6">Loading starship details...</div>;
  if (isError) return <div>Failed to load starship details.</div>;

  return (
    <>
      <div className="pt-8 flex items-start md:gap-10 gap-6 mb-20 mx-4 lg:mx-0">
        {/* image */}
        <div>
          <StarShipImage />
        </div>
        <div className="md:pt-10 pt-4">
          <h2 className="md:text-[48px] text-md font-[700] md:leading-[45px] leading-[20px]">
            {starships.name}
          </h2>
          <h5 className="md:pt-6 pt-2 md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
            Model: {starships.model}
          </h5>
          <h6 className="md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
            Passengers: {starships.passengers}
          </h6>
          <h3 className="md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
            Pilots:{" "}
            {starships.pilots.length > 0 ? (
              starships.pilots.map((pilot: string, index: number) => (
                <div key={index} className="break-words">
                  {pilot}
                </div>
              ))
            ) : (
              <span>None</span>
            )}
          </h3>
        </div>
      </div>
    </>
  );
}
