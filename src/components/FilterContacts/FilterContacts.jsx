import React from 'react';
import PropTypes from 'prop-types';
import { InputFilter, TextFilter } from './FilterContacts.styled';

export const FilterContacts = ({ value, onChange }) => {
  return (
    <InputFilter>
      <label htmlFor="">
        {' '}
        <TextFilter>Filter</TextFilter>
        <input type="text" value={value} id="" onChange={onChange} />
      </label>
    </InputFilter>
  );
};

FilterContacts.propType = {
  onChange: PropTypes.func.isRequired,
};
