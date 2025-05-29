import "../../goit-neo-react-hw-module6/src/App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const localContactsData = localStorage.getItem("contactsData");
  //   if (localContactsData !== null) return JSON.parse(localContactsData);
  //   return defaultContacts;
  // });

  // useEffect(() => {
  //   localStorage.setItem("contactsData", JSON.stringify(contacts));
  // }, [contacts]);

  // const [search, setSearch] = useState("");

  // const addContact = (newContact) => {
  //   setContacts((contacts) => {
  //     return [...contacts, newContact];
  //   });
  // };

  // const deleteContact = (contactId) => {
  //   setContacts((contacts) => {
  //     return contacts.filter((contact) => contact.id !== contactId);
  //   });
  // };

  return (
    <>
      <div className={"container"}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
