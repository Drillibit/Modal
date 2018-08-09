import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../../../src/js/components/UIKit/Modal';
import { Button } from '../../../src/js/components/UIKit/Button';
import { Textarea } from '../../../src/js/components/UIKit/Textarea';
import { Label } from '../../../src/js/components/UIKit/Label';
import { Theme, VerticalGrid } from '../../helpers';

const stories = storiesOf('UIKit/Modal', module);

const onConfirm = action('onConfirm');

class ModalWithTheme extends React.Component {
  state = { open: false };

  toggleModal = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;

    return (
      <Theme>
        <VerticalGrid>
          <Button as="primary" onClick={this.toggleModal}>
            Open modal
          </Button>
          <Modal open={open} onClose={this.toggleModal}>
            <ModalHeader closeButton>Modal Title</ModalHeader>
            <ModalBody>
              <Label>
                Text
                <Textarea />
              </Label>
            </ModalBody>
            <ModalFooter>
              <Button as="secondary" transparent onClick={this.toggleModal}>
                Cancel
              </Button>
              <Button as="primary" onClick={onConfirm}>
                Confirm
              </Button>
            </ModalFooter>
          </Modal>
        </VerticalGrid>
      </Theme>
    );
  }
}

stories.addWithJSX('default', () => <ModalWithTheme />, { skip: 1 });
