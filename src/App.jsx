import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";


function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:countryId" element={<CountryDetails />}/>
      </Routes>
    </>

  );
}

export default App;
