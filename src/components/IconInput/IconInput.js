import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const [text, setText] = useState('');
  const Style = {
    small: {
      fontSize: 14,
      bottomBorder: 1,
      iconSize: 16,
      iconStroke: 1,
      paddingLeft: 24
    },
    large: {
      fontSize: 18,
      bottomBorder: 2,
      iconSize: 24,
      iconStroke: 2,
      paddingLeft: 36
    }
  }
  const styles = Style[size];

  if (!styles) {
    throw new Error('Please use small or large size only, following size not supported: ' + size);
  }

  return (
    <Wrapper style={{
      '--color': text === '' ? COLORS.gray500 : COLORS.gray700,
      }} >
      <IconWrapper style={{ '--size': 16 + 'px'}} >
        <Icon id={icon} size={styles.iconSize} strokeWidth={styles.iconStroke}/>
      </IconWrapper>
      <TextInput 
        style={{
          '--font-size': styles.fontSize + 'px',
          '--font-weight': text === '' ? 400 : 700,
          '--border-bottom' : styles.bottomBorder + 'px',
          '--padding-left' : styles.paddingLeft + 'px',
          '--width': width + 'px'
        }}
        placeholder={placeholder}
        label={label}
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  
  color: var(--color);
  

  :hover {
    color: ${COLORS.black};
  }
  
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size)px;
`;

const TextInput = styled.input`
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  border: none;
  border-bottom: var(--border-bottom) solid ${COLORS.black};
  padding-left: var(--padding-left);
  width: var(--width);

  :focus-visible {
    outline-offset: 2px;
  }
  
`;

export default IconInput;
