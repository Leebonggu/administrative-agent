'use client';

import { Button } from './index';
import Modal from './Modal';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title,
  message,
  buttonText = '확인'
}: SuccessModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 mb-6" dangerouslySetInnerHTML={{ __html: message }} />
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={onClose}
        >
          {buttonText}
        </Button>
      </div>
    </Modal>
  );
}