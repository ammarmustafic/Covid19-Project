import { useEffect, useState } from "react";
import { CardContainer, Insert, MiniCard } from "./css";
import axios from "axios";
const CountryStats = () => {
  const [countryData, setCountryData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    if (searchValue === "") {
      setCountryData(null);
      setErrorMessage("");
      return;
    }

    fetchCountryStats();
  };

  useEffect(() => {
    if (errorMessage) {
      setErrorMessage("");
    }
  }, [searchValue]);

  const fetchCountryStats = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/statistics",
        headers: {
          "X-RapidAPI-Key":
            "cc28d2e5d1msh517cb34697fab94p106bddjsnb52786ff6b23",
          "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      const countryStats = response.data.response.find(
        (country) => country.country.toLowerCase() === searchValue.toLowerCase()
      );

      if (countryStats) {
        setCountryData(countryStats);
        setErrorMessage("");
      } else {
        setCountryData(null);
        setErrorMessage("Country not found");
      }
    } catch (error) {
      console.error(error);
      setCountryData(null);
      setErrorMessage("An error occurred while fetching data");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Insert>
        <input
          style={{ height: "30px", width: "500px", borderRadius: "20px" }}
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search countries..."
        />
      </Insert>
      <div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {countryData && (
          <CardContainer>
            <MiniCard>
              <h3>Country Name:</h3>
              <h1>
                <span style={{ color: "#4e4376" }}>{countryData.country}</span>
              </h1>
            </MiniCard>
            <MiniCard>
              <h2>Recovered:</h2>
              <h1>
                <span style={{ color: "darkgreen" }}>
                  {countryData.cases.recovered}
                </span>
              </h1>
            </MiniCard>
            <MiniCard>
              <h2>Deaths:</h2>
              <h1>
                <span style={{ color: "red" }}>{countryData.deaths.total}</span>
              </h1>
            </MiniCard>
            <MiniCard>
              <h2>Active Cases:</h2>
              <h1>
                <span style={{ color: "blue" }}>
                  {countryData.cases.active}
                </span>
              </h1>
            </MiniCard>
          </CardContainer>
        )}
      </div>
    </div>
  );
};

export default CountryStats;
