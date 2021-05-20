/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <Background size={size}>
      <OuterBar size={size}>
        <InnerBar
          value={value}
          size={size}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"></InnerBar>
      </OuterBar>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Background>
    
  );
};

const Background = styled.div`
  width: 370px;
  height: ${p => p.size == 'small'
    ? '8px'
    : p.size == 'medium'
      ? '12px'
      : '24px'
    };
  background-color: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
  padding: ${p => p.size == 'large' ? '4px' : '0'};
  border-radius: ${p => p.size == 'large' ? '8px' : '4px'};
  overflow: hidden;
`;

const OuterBar = styled.div`
  width: ${p => p.size == 'large' ? '362px' : '100%'};
  height: ${p => p.size == 'large' ? '16px' : '100%'};
  border-radius: ${p => p.size == 'large' ? '4px' : '0'};
  overflow: hidden;
`;

const InnerBar = styled.div`
  width: ${p => `${p.value}`}%;
  height: ${p => p.size == 'large' ? '20px' : '100%'};
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
