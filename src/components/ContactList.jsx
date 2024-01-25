import PropTypes from 'prop-types';
// import ContactListItem from './ContactIListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        // <ContactListItem
        //   id={contact.id}
        //   name={contact.name}
        //   number={contact.number}
        // />
        <li key={contact.id}>
          {contact.name} tel: {contact.number}
          <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
