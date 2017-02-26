import React from 'react';
import Modal from 'react-modal';

export default props => {
  return(
    <Modal
      onRequestClose={()=> props.openModal(false)}
      isOpen={props.isOpen}
      contentLabel='hi'
    >
      <p>modal</p>
    </Modal>
  )
}
