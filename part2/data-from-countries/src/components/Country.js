import Weather from "./Weather";
const Country = ({ show }) => {
  return (
    <div>
      <h1>{show[0].name}</h1>
      <p>capital {show[0].capital}</p>
      <br />
      <h2>languages</h2>
      <br />
      <div>
        <ul>
          {show[0].languages.map((lang) => (
            <li key={lang.name}>{lang.name}</li>
          ))}
        </ul>
        <img src={show[0].flag} alt="flag" width="150px" height="150px" />
        <div>
          <Weather show={show} />
        </div>
      </div>
    </div>
  );
};

export default Country;
