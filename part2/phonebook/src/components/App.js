import React, { useEffect, useState } from "react";
import Search from "./Search";
import Person from "./Person";
import Form from "./Form";
import personService from "../services/person";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [addmessage, setAddMessage] = useState(null);
  let togglemessage = false;

  useEffect(() => {
    personService.getAll().then((returnedObject) => setPersons(returnedObject));
  }, [persons]);

  const addName = (event) => {
    event.preventDefault();
    const newObject = {
      name: newName,
      number: newNumber,
    };

    const findDuplicates = persons.find((p) => p.name === newName);
    const changedObject = { ...findDuplicates, number: newNumber };

    if (findDuplicates) {
      let result = window.confirm(
        `${newName} is already added to phonebook,replace the old number with new one ?`
      );
      if (result) {
        personService
          .update(findDuplicates.id, changedObject)
          .catch((error) => {
            togglemessage = true;
            setAddMessage(
              `Information of ${newName} has already been removed from server`
            );
            setTimeout(() => {
              setAddMessage(null);
            }, 3000);
          });
      }
    } else {
      personService
        .create(newObject)
        .then((newObject) => persons.concat(newObject));
    }
    setAddMessage(`Added ${newName}`);
    setTimeout(() => {
      setAddMessage(null);
    }, 5000);
    setNewName("");
    setNewNumber("");
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleOnSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const SearchedElements = persons.filter((person) => {
    return person.name.toLowerCase().includes(searchValue);
  });

  const handleDelete = (id, name) => {
    let result = window.confirm(`Delete ${name} ?`);
    result ? personService.delPerson(id) : alert(`${name} not deleted`);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <br />
      {togglemessage ? (
        <Notification message={addmessage} classValue="error" />
      ) : (
        <Notification message={addmessage} classValue="added" />
      )}
      <Search searchValue={searchValue} handleOnSearch={handleOnSearch} />
      <Form
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <Person SearchedElements={SearchedElements} handleDelete={handleDelete} />
    </div>
  );
};
export default App;
