import { useEffect } from 'react';
import './GlobalModel.css';
import { useGlobalModel } from './GlobalModelContext';

interface GlobalModelProps {
  onCloseHandler?: () => void;
  showCloseIcon?: boolean;
  headRenderer?: () => React.ReactNode;
  contentRenderer?: () => React.ReactNode;
  footerRenderer?: () => React.ReactNode;
}

const GlobalModel = ({ onCloseHandler, showCloseIcon = true, headRenderer, contentRenderer, footerRenderer }: GlobalModelProps) => {
  const { isOpen, hideModel } = useGlobalModel();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'auto'; // Restore scrolling when modal closes
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (onCloseHandler && event.key === 'Escape') {
        hideModel();
        onCloseHandler();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onCloseHandler, hideModel]);

  if (!isOpen) return null;

  return (
    <div className="global-model">
      <div className="global-model__overlay"></div>
      <div className="global-model__wrapper">
        {showCloseIcon && (
          <div
            className="global-model__close"
            role="button"
            tabIndex={0}
            aria-label="Close modal"
            onClick={() => {
              hideModel();
              if (onCloseHandler) onCloseHandler();
            }}
          >
            x
          </div>
        )}
        <div className="global-model__scrollable-content">
          <div className="global-model__header">{headRenderer ? headRenderer() : <h2 className="global-model__title">Model Title</h2>}</div>
          <div className="global-model__content">{contentRenderer ? contentRenderer() : <p className="global-model__text">Default content goes here.</p>}</div>
          <div className="global-model__footer">
            {footerRenderer ? (
              footerRenderer()
            ) : (
              <>
                <button className="global-model__button global-model__button--cancel">Cancel</button>
                <button className="global-model__button global-model__button--confirm">Confirm</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalModel;
