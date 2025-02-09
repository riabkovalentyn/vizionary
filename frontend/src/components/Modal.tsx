import React from 'react';

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children })=> {
    if(!isOpen) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <div className='bg-white p-8 rounded-lg shadow-lg relative'>

            <button onClick={closeModal} className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'>&times;</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;