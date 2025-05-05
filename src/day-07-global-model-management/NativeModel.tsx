import { useEffect, useRef } from 'react';
import './NativeModel.css'; // Using separate CSS for NativeModel
import { useGlobalModel } from './GlobalModelContext';

interface NativeModelProps {
  onCloseHandler?: () => void;
  showCloseIcon?: boolean;
  headRenderer?: () => React.ReactNode;
  contentRenderer?: () => React.ReactNode;
  footerRenderer?: () => React.ReactNode;
}

const NativeModel = ({ onCloseHandler, showCloseIcon = true, headRenderer, contentRenderer, footerRenderer }: NativeModelProps) => {
  const { isOpen, hideModel } = useGlobalModel();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isOpen) {
        dialogRef.current.showModal();
        document.body.style.overflow = 'hidden';
      } else {
        dialogRef.current.close();
        document.body.style.overflow = 'auto';
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        hideModel();
        if (onCloseHandler) onCloseHandler();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [hideModel, onCloseHandler]);

  if (!isOpen) return null;

  return (
    <dialog ref={dialogRef} className="native-model">
      <div className="native-model__wrapper">
        {showCloseIcon && (
          <div role="button" tabIndex={0} aria-label="Close modal" className="native-model__close" onClick={hideModel}>
            x
          </div>
        )}
        <div className="native-model__scrollable-content">
          <div className="native-model__header">{headRenderer ? headRenderer() : <h2 className="native-model__title">Native Modal</h2>}</div>
          <div className="native-model__content">{contentRenderer ? contentRenderer() : <p className="native-model__text">Default content goes here.</p>}</div>
          <div className="native-model__footer">
            {footerRenderer ? (
              footerRenderer()
            ) : (
              <>
                <button className="native-model__button native-model__button--cancel">Cancel</button>
                <button className="native-model__button native-model__button--confirm">Confirm</button>
              </>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default NativeModel;
