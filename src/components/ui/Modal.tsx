'use client';

import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export default function Modal({ isOpen, onClose, children, size = 'md' }: ModalProps) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 적당한 dimmed 오버레이 */}
      <div
        className="absolute inset-0 bg-black/20"
        onClick={onClose}
      />

      {/* 모달 콘텐츠 */}
      <div className={`relative bg-white rounded-xl shadow-2xl mx-4 ${sizeClasses[size]} w-full`}>
        {children}
      </div>
    </div>
  );
}