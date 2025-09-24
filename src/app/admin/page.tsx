'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Section from '@/components/layout/Section';
import { Card, CardHeader, CardTitle, CardContent, Heading, Text } from '@/components/ui';

interface ConsultationData {
  id: number;
  name: string;
  phone: string;
  email: string;
  company?: string;
  service_type: string;
  message: string;
  privacy_agreed: boolean;
  status: 'pending' | 'completed';
  created_at: string;
  updated_at: string;
}

type SortField = 'created_at' | 'name' | 'status' | 'service_type';
type SortDirection = 'asc' | 'desc';

export default function AdminPage() {
  const [consultations, setConsultations] = useState<ConsultationData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [jwtToken, setJwtToken] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);
  const [sortField, setSortField] = useState<SortField>('created_at');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const fetchConsultations = useCallback(async (token?: string) => {
    try {
      setLoading(true);
      const currentToken = token || jwtToken;
      const response = await fetch('/api/admin/consultations', {
        headers: {
          'Authorization': `Bearer ${currentToken}`,
        },
      });

      if (response.status === 401) {
        // 토큰이 만료되었거나 유효하지 않음
        if (typeof window !== 'undefined') {
          localStorage.removeItem('adminToken');
        }
        setIsAuthenticated(false);
        setJwtToken('');
        setError('세션이 만료되었습니다. 다시 로그인해주세요.');
        return;
      }

      if (!response.ok) {
        throw new Error('데이터를 불러오는데 실패했습니다.');
      }
      const data = await response.json();
      setConsultations(data);
      setError(null); // 성공 시 에러 초기화
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  }, [jwtToken]);

  // 컴포넌트 마운트 시 저장된 토큰 확인
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const savedToken = localStorage.getItem('adminToken');
      if (savedToken) {
        setJwtToken(savedToken);
        setIsAuthenticated(true);
        fetchConsultations(savedToken);
      } else {
        setLoading(false);
      }
    }
  }, [fetchConsultations]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setJwtToken(data.token);
        if (typeof window !== 'undefined') {
          localStorage.setItem('adminToken', data.token);
        }
        setIsAuthenticated(true);
        fetchConsultations(data.token);
      } else {
        alert('아이디 또는 비밀번호가 잘못되었습니다.');
      }
    } catch {
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  const updateStatus = async (id: number, newStatus: 'pending' | 'completed') => {
    try {
      const response = await fetch(`/api/admin/consultations/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.status === 401) {
        // 토큰이 만료되었거나 유효하지 않음
        if (typeof window !== 'undefined') {
          localStorage.removeItem('adminToken');
        }
        setIsAuthenticated(false);
        setJwtToken('');
        alert('세션이 만료되었습니다. 다시 로그인해주세요.');
        return;
      }

      if (!response.ok) {
        throw new Error('상태 업데이트에 실패했습니다.');
      }

      // 로컬 상태 업데이트
      setConsultations(prev =>
        prev.map(consultation =>
          consultation.id === id
            ? { ...consultation, status: newStatus }
            : consultation
        )
      );
    } catch (error) {
      alert(error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.');
    }
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ko-KR');
  };

  const sortedConsultations = [...consultations].sort((a, b) => {
    let aValue: string | number = a[sortField];
    let bValue: string | number = b[sortField];

    if (sortField === 'created_at') {
      aValue = new Date(a.created_at).getTime();
      bValue = new Date(b.created_at).getTime();
    }

    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase();
    }
    if (typeof bValue === 'string') {
      bValue = bValue.toLowerCase();
    }

    if (sortDirection === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <span className="text-gray-400">↕</span>;
    }
    return sortDirection === 'asc' ?
      <span className="text-primary-600">↑</span> :
      <span className="text-primary-600">↓</span>;
  };

  // 컴포넌트가 마운트되기 전까지는 로딩 상태를 표시
  if (!isMounted) {
    return (
      <Layout>
        <Section background="gray" padding="xl">
          <Card>
            <CardContent>
              <Text className="text-center py-8">로딩 중...</Text>
            </CardContent>
          </Card>
        </Section>
      </Layout>
    );
  }

  if (!isAuthenticated) {
    return (
      <Layout>
        <Section background="gray" padding="xl">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">관리자 로그인</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-2">
                      아이디
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="아이디를 입력하세요"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                      비밀번호
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="비밀번호를 입력하세요"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    로그인
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Section background="gray" padding="xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Heading level={1}>상담 신청 관리</Heading>
            <div className="flex gap-4">
              <Link
                href="/api/admin/consultations/export"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors font-medium text-sm"
              >
                CSV 내보내기
              </Link>
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  setJwtToken('');
                  if (typeof window !== 'undefined') {
                    localStorage.removeItem('adminToken');
                  }
                }}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-md transition-colors font-medium text-sm"
              >
                로그아웃
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md mb-6">
              {error}
            </div>
          )}

          {loading ? (
            <Card>
              <CardContent>
                <Text className="text-center py-8">데이터를 불러오는 중...</Text>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                <CardTitle>전체 상담 신청 ({consultations.length}건)</CardTitle>
                <div className="text-sm text-gray-500">
                  대기: {consultations.filter(c => c.status === 'pending').length}건 |
                  완료: {consultations.filter(c => c.status === 'completed').length}건
                </div>
              </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSort('created_at')}
                        >
                          <div className="flex items-center gap-1">
                            신청일시 {getSortIcon('created_at')}
                          </div>
                        </th>
                        <th
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSort('name')}
                        >
                          <div className="flex items-center gap-1">
                            성명 {getSortIcon('name')}
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          연락처
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          이메일
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          회사명
                        </th>
                        <th
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSort('service_type')}
                        >
                          <div className="flex items-center gap-1">
                            상담 업무 {getSortIcon('service_type')}
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          상담 내용
                        </th>
                        <th
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                          onClick={() => handleSort('status')}
                        >
                          <div className="flex items-center gap-1">
                            상태 {getSortIcon('status')}
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          작업
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {sortedConsultations.map((consultation) => (
                        <tr key={consultation.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatDate(consultation.created_at)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {consultation.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {consultation.phone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {consultation.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {consultation.company || '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {consultation.service_type}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                            {consultation.message}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span
                              className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                consultation.status === 'completed'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {consultation.status === 'completed' ? '상담완료' : '대기중'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <button
                              onClick={() => updateStatus(
                                consultation.id,
                                consultation.status === 'pending' ? 'completed' : 'pending'
                              )}
                              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                                consultation.status === 'pending'
                                  ? 'bg-green-600 hover:bg-green-700 text-white'
                                  : 'bg-yellow-600 hover:bg-yellow-700 text-white'
                              }`}
                            >
                              {consultation.status === 'pending' ? '완료처리' : '대기처리'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {consultations.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      아직 상담 신청이 없습니다.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </Section>
    </Layout>
  );
}