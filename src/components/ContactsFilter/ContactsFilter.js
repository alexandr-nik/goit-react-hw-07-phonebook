import { filterContacts } from 'components/redux/filterSlice';
import { getFilter } from 'components/redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { FilterBlock, FilterTitle, FilterInput } from './ContactsFilter.styled';

export const ContactsFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterHandle = e => {
    const { value } = e.currentTarget;
    dispatch(filterContacts(value));
  };

  return (
    <FilterBlock>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Find Name"
        value={filter}
        onChange={filterHandle}
      />
    </FilterBlock>
  );
};

