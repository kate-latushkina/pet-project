import { type Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import { useCallback, type ReactNode, useState, useRef, useEffect } from "react";
import Portal from "../Portal/Portal";

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose: () => void
}

const ANIMATION_DELAY = 300;

export const Modal = ({
  className = "",
  children,
  isOpen,
  onClose
}: ModalProps): JSX.Element => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  };

  const closeHandler = useCallback(() => {
    if (onClose != null) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen != null) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
      <Portal>
          <div className={classNames(cls.Modal, mods, [className])}>
              <div className={cls.overlay} onClick={closeHandler}>
                  <div
                      className={cls.content}
                      onClick={onContentClick}
                >
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  );
};
