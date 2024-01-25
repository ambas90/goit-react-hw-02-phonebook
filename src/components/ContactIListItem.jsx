import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, id }) => {
  return (
    <li key={id}>
      {name} tel: {number}
    </li>
  );
};

export default ContactListItem;

ContactListItem.propType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
