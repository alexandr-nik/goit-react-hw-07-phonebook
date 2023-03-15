// import { deleteContact } from 'components/redux/contactsSlice';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selector';

import {
  ContactsBlock,
  ContactsList,
  ContactsItem,
  ContactsText,
  ContactsButton,
} from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);
  const findFilterContact = () => {
    const filterName = filter.trim().toLowerCase();
    return contacts.filter(elem => {
      return elem.name.toLowerCase().includes(filterName);
    });
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsBlock>
      <ContactsList>
        {contacts.length > 0 &&
          findFilterContact().map(item => {
            return (
              <ContactsItem key={item.id}>
                <ContactsText>{item.name}</ContactsText>
                <ContactsText>{item.phone}</ContactsText>
                <ContactsButton
                  type="button"
                  value={item.id}
                  onClick={() => dispatch(deleteContact(item.id))}
                >
                  delete
                </ContactsButton>
              </ContactsItem>
            );
          })}
      </ContactsList>
    </ContactsBlock>
  );
};
