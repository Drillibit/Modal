import React from 'react';
import { string, bool, func, node } from 'prop-types';
import styled from 'styled-components';

import { Modal } from './Modal';
import { ModalBody } from './ModalBody';
import { Button } from '../Button';

const StyledModal = styled(Modal)`
  width: 300px;
  min-width: 300px;
  border-radius: 5px;
`;

const ConfirmationHeader = styled.div`
  padding-top: 21px;
  text-align: center;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
`;

const StyledModalBody = styled(ModalBody)`
  padding: 10px 76px;
  font-size: 12px;
  color: #8e98a9;
  text-align: center;
  box-sizing: border-box;
`;

const ConfirmationFooter = styled.div`
  padding: 9px 0 15px 0;
  text-align: center;

  ${Button}:first-child {
    margin-right: 15px;
  }
`;

export const ConfirmationModal = ({
  open,
  title,
  confirmLabel,
  onConfirm,
  onClose,
  children,
}) => {
  const onHandleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <StyledModal open={open}>
      <ConfirmationHeader>{title}</ConfirmationHeader>
      <StyledModalBody>{children}</StyledModalBody>
      <ConfirmationFooter>
        <Button as="secondary" transparent onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onHandleConfirm}>{confirmLabel}</Button>
      </ConfirmationFooter>
    </StyledModal>
  );
};

ConfirmationModal.propTypes = {
  open: bool,
  title: string,
  confirmLabel: string,
  onConfirm: func.isRequired,
  onClose: func.isRequired,
  children: node,
};

ConfirmationModal.defaultProps = {
  open: false,
  title: null,
  confirmLabel: 'Confirm',
  children: null,
};
