import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import React, { useEffect } from "react";

type ModalComponentProps = {
  openModal?: (func: () => void) => void;
};
const UserModal: React.FC<ModalComponentProps> = ({ openModal }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const open = () => {
    onOpen();
  };

  useEffect(() => {
    if (openModal) {
      openModal(open);
    }
  }, [openModal]);
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div
                  className="modal fade show"
                  id="staticBackdropLive"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex={-1}
                  aria-labelledby="staticBackdropLiveLabel"
                  aria-modal="true"
                  role="dialog"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLiveLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <p>
                          I will not close if you click outside me. Don't even
                          try to press escape key.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Understood
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default UserModal;
