import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function HomePage() {
  const [countriesList, setCountriesList] = useState([]);

  const getCountries = async () => {
    const response = await fetch(
      `https://ih-countries-api.herokuapp.com/countries`
    );
    const data = await response.json();
    setCountriesList(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const countries = countriesList.map((country) => (
    <Link
      key={country._id}
      className="list-group-item list-group-item-action "
      to={`/${country.alpha3Code}`}
    >
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={`${country.name.common} flag`}
        style={{ marginRight: "20px", width:"25px" }}
      />
      {country.name.common}
    </Link>
  ));
  
  return (
    <div>
      <Navbar />
      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>
        <div className="list-group">{countries}</div>
      </div>
    </div>
  );
}

export default HomePage;
