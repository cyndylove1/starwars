import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchStarShip } from "../../api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";



export default function StarShipTable() {
  const navigate = useNavigate();
  
    const {
      data: starships,
      isLoading,
      isError,
    } = useQuery({
      queryKey: ["starships"],
      queryFn: fetchStarShip,
    });
  
    const handleRowClick = (starshipId: string) => {
      navigate(`/starships/details/${starshipId}`);
    };
  return (
    <div className="mx-4">
      <h2 className="py-10 text-[#A4A7B7] md:text-[16px] text-[12px] font-[400] leading-[24px]">
        StartShips
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
                    inputProps={{
                      "aria-label": "select all films",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Name</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Model</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Class</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Passenger</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Length</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Character</TableCell>
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
                    Something went wrong while fetching starShips.
                  </TableCell>
                </TableRow>
              )}
              {!isLoading && !isError && starships?.length === 0 && (
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
                starships?.map((starship: any, index: number) => {
                  const starshipId = starship.url.split("/").slice(-2, -1)[0];

                  return (
                    <TableRow
                      key={index}
                      hover
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleRowClick(starshipId)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {starship.name}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {starship.model}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {starship.starship_class}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {starship.passengers}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {starship.length}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {starship.films}
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
