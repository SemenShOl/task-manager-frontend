import React, { FC } from "react";
import { ModalBackgroundWrapper, ModalContentWrapper } from "../../wrappers";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import cl from "./SaveChangesModal.module.scss";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
type SaveChangesModalProps = {
  isActive: boolean;
  onSaveClose: () => void;
  onCancelClose: () => void;
};

export const SaveChangesModal: FC<SaveChangesModalProps> = ({
  isActive,
  onSaveClose,
  onCancelClose,
}) => {
  return (
    <ModalBackgroundWrapper isActive={isActive}>
      <ModalContentWrapper
        isActive={isActive}
        style={{ width: "30%", height: "20%" }}
      >
        <div className={cl.main}>
          <p>Сохранить изменения перед выходом?</p>
          <div className={cl.btns}>
            <RxCross2 onClick={onCancelClose} />
            <IoMdCheckmark onClick={onSaveClose} />
          </div>
        </div>
      </ModalContentWrapper>
    </ModalBackgroundWrapper>
  );
};
