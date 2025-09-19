export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">행정사 전문 사무소</h3>
            <p className="text-slate-300 mb-4">
              전문 행정사가 인허가, 법인설립, 사업자등록 등
              모든 행정업무를 신속하고 정확하게 대행해드립니다.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>서울특별시 강서구 마곡 (전국 대행 가능)</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>평일 09:00-18:00 (토요일 상담 가능)</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span>행정사 자격 제12345호 (2025년 개업)</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">주요 서비스</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">법인 설립 및 관리</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">사업자등록 신청</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">건설업 허가</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">음식점 허가</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">화물운송업 허가</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">외국인 투자신고</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">고객지원</h3>
            <ul className="space-y-3">
              <li><a href="/consultation" className="text-slate-300 hover:text-white transition-colors">무료 상담 신청</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">처리 현황 조회</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">서류 다운로드</a></li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">전문 분야</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded">행정법</span>
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded">상법</span>
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded">건설업법</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className="text-slate-400 text-sm">
              &copy; 2025 행정사 전문 사무소. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">개인정보처리방침</a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">이용약관</a>
            </div>
          </div>
          <div className="text-center text-xs text-slate-500">
            <p>행정사법에 의해 다른 법률이 행정사의 업무로 규정한 사항에 대한 상담, 서류의 작성, 대리, 기타 업무를 수행합니다.</p>
            <p className="mt-1">※ 법무사, 세무사, 관세사, 변리사, 공인회계사 등 다른 법률에 의하여 업무 범위가 정하여진 것은 제외</p>
          </div>
        </div>
      </div>
    </footer>
  );
}