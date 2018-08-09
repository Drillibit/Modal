import React from 'react';
import { bool, func, node } from 'prop-types';
import styled from 'styled-components';
import Icon from 'react-fontawesome';

const StyledHeader = styled.div`
  display: flex;
  height: 58px;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #eceff1;
`;

const Title = styled.span`
  color: #666666;
  font-size: 20px;
  font-weight: bold;
  font-family: Open Sans;
`;

const Close = styled(Icon)`
  /* font-size: 14px; */
  color: ${({ theme }) => theme.color.icon};
  cursor: pointer;

  &:hover {
    color: #666666;
  }
`;

export const ModalHeader = ({ onClose, closeButton, children }) => (
  <StyledHeader>
    <Title>{children}</Title>
    {closeButton && <Close name="close" onClick={onClose} />}
  </StyledHeader>
);

ModalHeader.propTypes = {
  onClose: func,
  closeButton: bool,
  children: node,
};

ModalHeader.defaultProps = {
  onClose: null,
  closeButton: false,
  children: null,
};
