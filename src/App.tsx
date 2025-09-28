import { Route, Routes } from "react-router-dom";
import Login from './pages/login'
import DashboardLayout from "./pages/layout/dashboardLayout";
import OverView from "./pages/overView";
import StarShips from "./pages/starShips";
import People from "./pages/people";
import Species from "./pages/species";
import OverViewDetails from "./pages/overView/overViewDetails";
import StarShipsDetails from "./pages/starShips/starShipDetails";
import PeopleDetails from "./pages/people/peopleDetails";
import SpeciesDetails from "./pages/species/speciesDetails";

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/overView" element={<OverView />} />
          <Route path="/overView/details/:id" element={<OverViewDetails />} />
          <Route path="/starships" element={<StarShips />} />
          <Route path="/starships/details/:id" element={<StarShipsDetails />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/details/:id" element={<PeopleDetails />} />
          <Route path="/species" element={<Species />} />
          <Route path="/species/details/:id" element={<SpeciesDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
