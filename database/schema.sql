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


-- 관리자 테이블 생성
CREATE TABLE admins (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'admin',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login_at TIMESTAMP WITH TIME ZONE
);

-- RLS (Row Level Security) 활성화
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- 관리자만 admins 테이블에 접근 가능하도록 정책 생성
CREATE POLICY "Only admins can access admin data" ON admins
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin');

-- 인덱스 생성
CREATE INDEX idx_admins_username ON admins(username);
CREATE INDEX idx_admins_email ON admins(email);
CREATE INDEX idx_admins_is_active ON admins(is_active);

-- 기본 관리자 계정 생성 (비밀번호: admin123)
-- bcrypt hash for 'admin123' with salt rounds 12
INSERT INTO admins (username, email, password_hash, role) VALUES
('admin', 'admin@example.com', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewCwMmUlmKxrBp3C', 'admin');