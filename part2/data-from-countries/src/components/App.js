import React, { useState, useEffect } from "react";
import axios from "axios";
import Display from "./Display";

const App = () => {
  const [country, setCountry] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [show, setShow] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log(response);
      setCountry(response.data);
    });
  }, []);

  const handleInput = (event) => {
    setSearchField(event.target.value);
    setShow(
      country.filter((data) => data.name.toLowerCase().includes(searchField))
    );
  };

  return (
    <div>
      find countries
      <input value={searchField} onChange={handleInput} />
      <Display show={show} setShow={setShow} />
    </div>
  );
};
export default App;
