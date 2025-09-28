import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { fetchPeople } from "../../api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";



export default function PeopleTable() {
  const navigate = useNavigate();

  const {
    data: people,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["people"],
    queryFn: fetchPeople,
  });

  const handleRowClick = (peopleId: string) => {
    navigate(`/people/details/${peopleId}`);
  };
  return (
    <div className="mx-4">
      <h2 className="py-10 text-[#A4A7B7] font-[400] md:text-[16px] text-[12px] leading-[24px]">
        People
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
                <TableCell sx={{ fontSize: "12px" }}>Birth year</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>Gender</TableCell>
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
                    Something went wrong while fetching starShips.
                  </TableCell>
                </TableRow>
              )}
              {!isLoading && !isError && people?.length === 0 && (
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
                people?.map((person: any, index: number) => {
                  const peopleId = person.url.split("/").slice(-2, -1)[0];

                  return (
                    <TableRow
                      key={index}
                      hover
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleRowClick(peopleId)}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox />
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {person.name}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {person.birth_year}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {person.gender}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {person.hair_color}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {person.height}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "10px", whiteSpace: "nowrap" }}
                      >
                        {person.created}
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
