import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { fetchFilms } from "../../api";

export default function FilmTable() {
  const navigate = useNavigate();

  const {
    data: films,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["films"],
    queryFn: fetchFilms,
  });

  const handleRowClick = (filmId: string) => {
    navigate(`/overview/details/${filmId}`);
  };

  return (
    <div className="mx-4">
      <h2 className="py-10 text-[#A4A7B7] px-4 md:px-0 md:text-[16px] text-[12px] font-[400] leading-[24px]">
        Films
      </h2>
      <div className="border-[1px] border-[#e0e0e0] rounded-[4px] mb-20">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, borderCollapse: "collapse" }}
            size="small"
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f9fafb" }}>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    inputProps={{ "aria-label": "select all films" }}
                  />
                </TableCell>
                <TableCell sx={{ fontSize: "12px", whiteSpace: "nowrap" }}>
                  Film Title
                </TableCell>
                <TableCell sx={{ fontSize: "12px", whiteSpace: "nowrap" }}>
                  Release Date
                </TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Director</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Producer</TableCell>
                <TableCell sx={{ fontSize: "12px", whiteSpace: "nowrap" }}>
                  Episode ID
                </TableCell>
                <TableCell sx={{ fontSize: "12px", whiteSpace: "nowrap" }}>
                  Characters
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {isLoading && (
                <TableRow>
                  <TableCell colSpan={8} sx={{ fontSize: "12px" }}>
                    Loading...
                  </TableCell>
                </TableRow>
              )}
              {isError && (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    align="center"
                    sx={{ fontSize: "12px" }}
                  >
                    Something went wrong while fetching films.
                  </TableCell>
                </TableRow>
              )}
              {!isLoading && !isError && films?.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    align="center"
                    sx={{ fontSize: "12px" }}
                  >
                    No films found.
                  </TableCell>
                </TableRow>
              )}

              {!isLoading &&
                !isError &&
                films?.map((film: any, index: number) => {
                  const filmId = film.url.split("/").slice(-2, -1)[0];
                  return (
                    <TableRow
                      key={index}
                      hover
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleRowClick(filmId)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {film.title}
                      </TableCell>
                      <TableCell
                        sx={{ whiteSpace: "nowrap", fontSize: "10px" }}
                      >
                        {film.release_date}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {film.director}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {film.producer}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {film.episode_id}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {film.characters}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
