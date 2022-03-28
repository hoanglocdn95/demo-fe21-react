import { toggleModal } from '../slice/modalSlice';
import { useDispatch, useSelector } from 'react-redux';

function Footer() {
  const dispatch = useDispatch();
  return (
    <div className="footer">
      <button
        onClick={() =>
          dispatch(
            toggleModal({
              content: (
                <div>
                  <label>Name</label>
                  <input />
                </div>
              ),
            })
          )
        }
      >
        Mở Modal ở Footer
      </button>
      <button className="footer__previous">Previous</button>
      <div className="footer__number">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <button className="footer__next">Next</button>
    </div>
  );
}

export default Footer;
