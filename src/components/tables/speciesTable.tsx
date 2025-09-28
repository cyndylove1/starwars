import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchSpecies } from "../../api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";




export default function SpeciesTable() {
   const navigate = useNavigate();
  
    const {
      data: species,
      isLoading,
      isError,
    } = useQuery({
      queryKey: ["species"],
      queryFn: fetchSpecies,
    });
  
    const handleRowClick = (speciesId: string) => {
      navigate(`/species/details/${speciesId}`);
    };
  return (
    <div className="mx-4">
      <h2 className="py-10 text-[#A4A7B7] md:text-[16px] text-[12px] font-[400] leading-[24px]">
        Species
      </h2>
      <div className="border-[1px] border-[#e0e0e0] rounded-[4px]">
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
                <TableCell sx={{ fontSize: "12px" }}>Classification</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Eye colors</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Hair Color</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Height</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Created</TableCell>
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
              {!isLoading && !isError && species?.length === 0 && (
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
                species?.map((species: any, index: number) => {
                  const speciesId = species.url.split("/").slice(-2, -1)[0];
                  return (
                    <TableRow
                      key={index}
                      hover
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleRowClick(speciesId)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {species.name}
                      </TableCell>
                      <TableCell
                        sx={{ whiteSpace: "nowrap", fontSize: "10px" }}
                      >
                        {species.classification}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {species.eye_colors}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {species.hair_colors}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {species.average_height}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {species.created}
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
