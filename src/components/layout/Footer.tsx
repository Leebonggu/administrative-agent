export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">인허가닷컴</h3>
            <p className="text-slate-300 mb-4">
              효율적인 행정업무 관리를 위한 전문 솔루션입니다.
              고객 관리부터 서류 작성까지 모든 업무를 체계적으로 관리하세요.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">서비스</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">고객 관리</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">서류 관리</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">일정 관리</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">업무 통계</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">고객지원</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">이용 가이드</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">고객센터</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">문의하기</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; 2025 인허가닷컴. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">개인정보처리방침</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}