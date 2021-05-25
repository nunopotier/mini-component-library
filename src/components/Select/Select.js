import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange} style={{'--width': displayedValue.length * 10}}>
      {children}
      <Icon 
        id='chevron-down'
        size="12"
      />
    </Wrapper>
  );
};

const Wrapper = styled.select`
  width: var(--width);
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 16px;
  line-height: 19px;
  border-radius: 8px;
  border-width: 0;
  padding: 12px 16px;
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;

  :hover {
    color: black;
  }
`;

export default Select;
