import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../slice/modalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.3)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        display: modal.isShowModal ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '300px',
          height: '200px',
          background: 'white',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '60%',
          }}
        >
          {modal.content}
        </div>
        <div
          style={{
            width: '100%',
            height: '40%',
          }}
        >
          <button onClick={() => dispatch(toggleModal({ content: '' }))}>tắt</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
