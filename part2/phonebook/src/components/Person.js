import React from "react";
const Person = ({ SearchedElements, handleDelete }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <br />
      {SearchedElements.map((person) => {
        return (
          <div key={person.name}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person.id, person.name)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Person;
