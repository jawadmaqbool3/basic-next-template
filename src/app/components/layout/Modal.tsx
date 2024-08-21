import React, { forwardRef, useImperativeHandle, useRef } from "react";

export interface ModalProps {
  id: string;
  title: string;
  size?: string;
  body: React.ReactNode;
  footer: React.ReactNode;
}
export interface ModalHandle {
  openModal: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ id, title, body, size, footer }, ref) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => ({
      openModal() {
        if (modalRef.current) {
          const modal = new bootstrap.Modal(modalRef.current);
          modal.show();
        }
      },
    }));

    return (
      <div
        className="modal fade"
        id={id}
        ref={modalRef}
        tabIndex={-1}
        aria-labelledby={`${id}Label`}
        aria-hidden="true"
      >
        <div className={`modal-dialog ${size}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id={`${id}Label`}>
                {title}
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">{body}</div>
            <div className="modal-footer">{footer}</div>
          </div>
        </div>
      </div>
    );
  }
);

export default Modal;
