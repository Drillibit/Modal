import React from 'react';
import styled from 'styled-components';
import { string, node } from 'prop-types';

const StyledBody = styled.div`
  flex: 1;
  padding: 16px;
  font-family: Open Sans;
`;

export const ModalBody = ({ className, children }) => (
  <StyledBody className={className}>{children}</StyledBody>
);

ModalBody.propTypes = {
  className: string,
  children: node.isRequired,
};

ModalBody.defaultProps = {
  className: null,
};
