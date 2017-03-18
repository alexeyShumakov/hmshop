import React from 'react';
import Modal from 'react-modal';
import Category from './category';


export default props => {
  const {isOpenModal, openModal, categoriesTree, action} = props;
  return(
    <Modal
      onRequestClose={() => openModal(false)}
      isOpen={isOpenModal}
      contentLabel='categories tree'
      className='modal-window'
      overlayClassName='modal-window__overlay'
    >
      <div className="modal-window__titlebar">
        <i
          onClick={() => openModal(false)}
          className='fa fa-close'
        ></i>
      </div>
      <div className="modal-window__content">
        {categoriesTree.map((category) => {
          return <Category key={category.get('id')} category={category} action={action}/>
        })}
      </div>
    </Modal>
  )
}
