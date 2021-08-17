const Modal = ({closeModal, image}) => {
  return (
    <div className="modal">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <img src={image} alt="Techpartner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
