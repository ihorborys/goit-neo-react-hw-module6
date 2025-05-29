import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { del } from "../../redux/contactsSlice.js";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);

  const dispatch = useDispatch();
  const deleteContact = (contactId) => {
    dispatch(del(contactId));
  };

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onSearchContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
