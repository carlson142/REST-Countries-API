import React from "react";

import axios from "axios";

import { useState, useEffect } from "react";
import { ALL_COUNTRIES } from "../components/config";
import ListOfCountries from "../components/ListOfCountries";
import Card from "../components/Card";
import Controls from "../components/Controls";

import { useNavigate } from "react-router-dom";

const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((value) => value.region.includes(region));
    }

    if (search) {
      data = data.filter((value) =>
        value.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries]);

  const nav = useNavigate();

  return (
    <>
      <Controls onSearch={handleSearch}></Controls>
      <ListOfCountries>
        {filteredCountries.map((value, idx) => {
          const countryInfo = {
            img: value.flags.png,
            name: value.name,
            info: [
              {
                title: "Population",
                description: value.population,
              },
              { title: "Region", description: value.region },
              { title: "Capital", description: value.capital },
            ],
          };

          return (
            <Card
              key={idx}
              {...countryInfo}
              onClick={() => {
                nav(`/country/:${value.name}`);
              }}
            ></Card>
          );
        })}
      </ListOfCountries>
    </>
  );
};

export default HomePage;
