import "../../goit-neo-react-hw-module6/src/App.css";
import defaultContacts from "./components/defaultContacts.json";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./redux/contactsSlice.js";

function App() {
  const [contacts, setContacts] = useState(() => {
    const localContactsData = localStorage.getItem("contactsData");
    if (localContactsData !== null) return JSON.parse(localContactsData);
    return defaultContacts;
  });

  // const counter = useSelector((state) => {
  //   console.log(state.counter.value);
  //   return state.counter.value;
  // });

  const dispatch = useDispatch();

  const addContact = (newContact) => {
    dispatch(add(newContact));
  };

  // const handleDecrement = () => {
  //   dispatch({ payload: 1, type: "decrement" });
  // };

  useEffect(() => {
    localStorage.setItem("contactsData", JSON.stringify(contacts));
  }, [contacts]);

  const [search, setSearch] = useState("");

  // const addContact = (newContact) => {
  //   setContacts((contacts) => {
  //     return [...contacts, newContact];
  //   });
  // };

  const deleteContact = (contactId) => {
    setContacts((contacts) => {
      return contacts.filter((contact) => contact.id !== contactId);
    });
  };

  const searchContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <div className={"container"}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
        <SearchBox search={search} setSearch={setSearch} />
        <ContactList
          onSearchContact={searchContact}
          onDeleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
