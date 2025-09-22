-- 상담 신청 테이블 생성
-- ID를 auto-increment 정수로 설정

-- 기존 테이블 삭제 (데이터가 있다면 백업 후 진행)
DROP TABLE IF EXISTS consultations;

-- 새로운 테이블 생성 (ID를 auto-increment 정수로)
CREATE TABLE consultations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  service_type VARCHAR(50) NOT NULL,
  message TEXT NOT NULL,
  privacy_agreed BOOLEAN NOT NULL DEFAULT false,
  status VARCHAR(20) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) 활성화
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- 관리자만 데이터를 볼 수 있도록 정책 생성 (일단 모든 사용자가 insert 가능하도록)
CREATE POLICY "Anyone can insert consultations" ON consultations
  FOR INSERT WITH CHECK (true);

-- SELECT 정책 추가 (모든 사용자가 읽기 가능하도록)
CREATE POLICY "Anyone can select consultations" ON consultations
  FOR SELECT USING (true);

-- 인덱스 생성 (검색 최적화)
CREATE INDEX idx_consultations_created_at ON consultations(created_at DESC);
CREATE INDEX idx_consultations_service_type ON consultations(service_type);
CREATE INDEX idx_consultations_status ON consultations(status);

-- UPDATE 정책 추가 (관리자가 status 업데이트 가능하도록)
CREATE POLICY "Anyone can update consultations" ON consultations
  FOR UPDATE USING (true);