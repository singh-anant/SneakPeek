import React from 'react'

const ModalImage = ({setOpenModal,image}) => {
  return (
    <div className='modal-background'>
        <div className="modal-container">
            <div className="cancel-button" onClick={()=>setOpenModal(false )}>
                <button>✗</button>
            </div>
            <div className="modal-body">
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ModalImage
