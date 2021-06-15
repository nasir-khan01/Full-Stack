import Country from "./Country";
const Display = ({ show, setShow }) => {
  if (show.length === 0) {
    return "";
  }
  if (show.length >= 10) {
    return <p>Too many matches,specify another filter</p>;
  }
  if (show.length > 1 && show.length < 10) {
    return (
      <div>
        {show.map((data) => (
          <div key={data.area}>
            {data.name}
            <button
              onClick={() => {
                setShow(show.filter((value) => value.name === data.name));
              }}
            >
              show
            </button>
          </div>
        ))}
      </div>
    );
  }

  if (show.length === 1) {
    return <Country show={show} />;
  }
};
export default Display;
