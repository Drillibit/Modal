import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const StyledFooter = styled.div`
  display: flex;
  height: 58px;
  align-items: center;
  justify-content: space-between;
  padding: 11px 15px 13px 15px;
  border-top: 1px solid #eceff1;
  box-sizing: border-box;
`;

export const ModalFooter = ({ children }) => (
  <StyledFooter>{children}</StyledFooter>
);

ModalFooter.propTypes = {
  children: node.isRequired,
};
