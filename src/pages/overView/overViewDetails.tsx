import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchFilmById } from "../../api";

import OverViewImage from "../../components/images/overViewImage";

export default function OverViewDetails() {
  const { id } = useParams<{ id: string }>();

  const {
    data: film,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["film", id],
    queryFn: () => fetchFilmById(id!),
    enabled: !!id,
  });

  if (isLoading) return <div className="pt-6">Loading film details...</div>;
  if (isError) return <div>Failed to load film details.</div>;

  return (
    <div className="pt-8 flex items-start md:gap-10 gap-6 mb-20 mx-4 lg:mx-0">
      {/* image */}
      <OverViewImage />
      <div className="md:pt-10 pt-2">
        <h2 className="md:text-[48px] text-md font-[700] md:leading-[45px] leading-[20px]">{film.title}</h2>
        <h5 className="md:pt-6 pt-2 md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
          Director: {film.director}
        </h5>
        <h6 className="md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
          Producer: {film.producer}
        </h6>
        <h3 className="md:text-[16px] text-[11px] font-[500] leading-[24px] text-[#303B54]">
          Release Date: {film.release_date}
        </h3>
      </div>
    </div>
  );
}
