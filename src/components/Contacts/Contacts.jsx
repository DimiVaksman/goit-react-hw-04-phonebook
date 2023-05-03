import { DeleteButton } from 'components/DeleteButton/DeleteButton';
import PropTypes from 'prop-types';
import { ContactsContainer, Items, List, Text } from './Contacts.styled';

export const Contacts = ({ items, onDelete }) => {
  return (
    <ContactsContainer>
      {items.map(item => (
        <Items key={item.id}>
          <List>
            <Text>
              <span>{item.name}</span> : <span>{item.number}</span>
            </Text>
            <DeleteButton item={item} onDelete={onDelete} />
          </List>
        </Items>
      ))}
    </ContactsContainer>
  );
};

Contacts.propType = {
  onDelete: PropTypes.func.isRequired,
};
