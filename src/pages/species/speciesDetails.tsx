import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSpeciesById } from "../../api";
import SpeciesImage from "../../components/images/speciesImage";

export default function SpeciesDetails() {
  const { id } = useParams<{ id: string }>();

   const {
     data: species,
     isLoading,
     isError,
   } = useQuery({
     queryKey: ["species", id],
     queryFn: () => fetchSpeciesById(id!),
     enabled: !!id,
   });

   if (isLoading) return <div className="pt-6 px-4">Loading species details...</div>;
   if (isError) return <div className="pt-6 px-6">Failed to load species details.</div>;
  return (
    <>
      <div className="pt-8 flex items-start md:gap-10 gap-6 mb-20 mx-4">
        {/* image */}
        <div>
          <SpeciesImage />
        </div>
        <div className="md:pt-10 pt-2">
          <h2 className="md:text-[48px] text-md font-[700] md:leading-[45px] leading-[20px]">
            {species.name}
          </h2>
          <h5 className="md:pt-6 pt-2 md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
            Designation: {species.designation}
          </h5>
          <h6 className="md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
            Language: {species.language}
          </h6>
          <h3 className="md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
            Eye Colors: {species.eye_colors}
          </h3>
          <h4 className="md:text-[16px] text-[11 leading-[20px]px] font-[500] leading-[24px] text-[#303B54]">
            Average Lifespan: {species.average_lifespan}
          </h4>
        </div>
      </div>
    </>
  );
}
