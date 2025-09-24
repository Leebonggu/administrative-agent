-- 상담 신청 테이블
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

-- 상담 테이블 RLS 활성화
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- 상담 테이블 정책
CREATE POLICY "Anyone can insert consultations" ON consultations FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can select consultations" ON consultations FOR SELECT USING (true);
CREATE POLICY "Anyone can update consultations" ON consultations FOR UPDATE USING (true);

-- 상담 테이블 인덱스
CREATE INDEX idx_consultations_created_at ON consultations(created_at DESC);
CREATE INDEX idx_consultations_service_type ON consultations(service_type);
CREATE INDEX idx_consultations_status ON consultations(status);

-- 관리자 테이블
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

-- 관리자 테이블 인덱스
CREATE INDEX idx_admins_username ON admins(username);
CREATE INDEX idx_admins_email ON admins(email);
CREATE INDEX idx_admins_is_active ON admins(is_active);

-- 기본 관리자 계정 (admin/admin123)
INSERT INTO admins (username, email, password_hash, role) VALUES
('admin', 'admin@example.com', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewCwMmUlmKxrBp3C', 'admin');