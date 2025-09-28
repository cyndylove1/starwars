import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPeopleById } from "../../api";
import PeopleImage from "../../components/images/peopleImage";
export default function PeopleDetails() {
  const { id } = useParams<{ id: string }>();

   const {
     data: people,
     isLoading,
     isError,
   } = useQuery({
     queryKey: ["people", id],
     queryFn: () => fetchPeopleById(id!),
     enabled: !!id,
   });

   if (isLoading) return <div className="pt-6 px-4">Loading people details...</div>;
   if (isError) return <div className="pt-6 px-4">Failed to load people details.</div>;
  return (
    <>
      <div className="pt-8 flex items-start md:gap-10 gap-6 mb-20 mx-4">
        {/* image */}
        <div>
          <PeopleImage />
        </div>
        <div className="md:pt-10 pt-2">
          <h2 className="md:text-[48px] text-md font-[700] md:leading-[45px] leading-[20px]">
            {people.name}
          </h2>
          <h5 className="md:pt-6 pt-2 md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
            Gender: {people.gender}
          </h5>
          <h6 className="md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
            Year of birth: {people.birth_year}
          </h6>
          <h3 className="md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
            Skin Color: {people.skin_color}
          </h3>
          <h4 className="md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
            Height: {people.height}
          </h4>
        </div>
      </div>
    </>
  );
}
