import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filters.name);

  const searchedContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase()),
  );

  return (
    <ul className={styles.list}>
      {searchedContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
