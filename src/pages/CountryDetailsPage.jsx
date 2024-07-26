import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function CountryDetails() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCountry = async (countryId) => {
    const response = await fetch(
      `https://ih-countries-api.herokuapp.com/countries/${countryId}`
    );
    const data = await response.json();
    setCountry(data);
  };

  useEffect(() => {
    getCountry(countryId);
  }, []);

  console.log(country);

  if (!country) return <div>Loading</div>;

  return (
    <div>
      <Navbar />
      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
        <h1>{country.name.common}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders?.map((c) => (
                    <li key={c}>
                      <Link to="/AND">{c}</Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
