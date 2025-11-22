import {
  cloneElement,
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
import { Overlay, StyledModal } from "./Modal.styles";
import { createPortal } from "react-dom";
import { useOutsideClick } from "src/presentation/hooks/useOutsideClick";
import { ModalContextType, ModalProps, OpenProps, WindowProps } from "./IModal";

const ModalContext = createContext<ModalContextType | undefined>(undefined);

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }: OpenProps) {
  const { open } = useContext(ModalContext) as ModalContextType;

  if (
    !children ||
    typeof children === "string" ||
    typeof children === "number"
  ) {
    return null;
  }

  return cloneElement(children as ReactElement<{ onClick?: () => void }>, {
    onClick: () => open(openWindowName),
  });
}

function Window({ children, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext) as ModalContextType;
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  if (
    !children ||
    typeof children === "string" ||
    typeof children === "number"
  ) {
    return null;
  }

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        {cloneElement(children as ReactElement<{ onClose?: () => void }>, {
          onClose: close,
        })}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
