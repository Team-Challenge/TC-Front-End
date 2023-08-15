interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  buttonText: string;
}

export const Modal = ({ isOpen, onClose, children, buttonText }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.5)]'>
      <div className='w-[706px] h-[462px] rounded-2xl bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.3)] px-[30px] py-[60px]'>
        {children}
        <button
          className='w-full px-4 py-3 bg-[black] rounded-md text-white text-xs font-light uppercase'
          onClick={onClose}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
