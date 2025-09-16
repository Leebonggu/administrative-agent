'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-slate-900">인허가닷컴</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center">
            <div className="flex items-baseline space-x-8">
              <a
                href="#"
                className="text-slate-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                서비스
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                기능
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                고객지원
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                문의하기
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-primary-600 hover:bg-slate-100"
            >
              <span className="sr-only">메뉴 열기</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#" className="text-slate-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              서비스
            </a>
            <a href="#" className="text-slate-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              기능
            </a>
            <a href="#" className="text-slate-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              고객지원
            </a>
            <a href="#" className="text-slate-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
              문의하기
            </a>
          </div>
        </div>
      )}
    </header>
  );
}