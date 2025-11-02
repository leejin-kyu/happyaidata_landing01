'use client'

import { useEffect, useState } from 'react'
import { BarChart3, Users, MousePointer, Mail, Calendar } from 'lucide-react'

interface AnalyticsData {
  pageViews: number
  serviceButtonClicks: number
  emailButtonClicks: number
  kmongBadgeClicks: number
  todayViews: number
}

export default function AdminPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 0,
    serviceButtonClicks: 0,
    emailButtonClicks: 0,
    kmongBadgeClicks: 0,
    todayViews: 0,
  })

  useEffect(() => {
    loadAnalytics()
    const interval = setInterval(loadAnalytics, 5000) // 5초마다 업데이트
    return () => clearInterval(interval)
  }, [])

  const loadAnalytics = () => {
    const data = {
      pageViews: parseInt(localStorage.getItem('analytics_pageViews') || '0'),
      serviceButtonClicks: parseInt(localStorage.getItem('analytics_serviceClicks') || '0'),
      emailButtonClicks: parseInt(localStorage.getItem('analytics_emailClicks') || '0'),
      kmongBadgeClicks: parseInt(localStorage.getItem('analytics_badgeClicks') || '0'),
      todayViews: parseInt(localStorage.getItem('analytics_todayViews') || '0'),
    }
    setAnalytics(data)
  }

  const resetAnalytics = () => {
    if (confirm('정말 모든 통계를 초기화하시겠습니까?')) {
      localStorage.setItem('analytics_pageViews', '0')
      localStorage.setItem('analytics_serviceClicks', '0')
      localStorage.setItem('analytics_emailClicks', '0')
      localStorage.setItem('analytics_badgeClicks', '0')
      localStorage.setItem('analytics_todayViews', '0')
      loadAnalytics()
    }
  }

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: '총 방문자 수',
      value: analytics.pageViews,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: '오늘 방문자',
      value: analytics.todayViews,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <MousePointer className="w-8 h-8 text-purple-600" />,
      title: '서비스 문의 클릭',
      value: analytics.serviceButtonClicks,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-600" />,
      title: '이메일 문의 클릭',
      value: analytics.emailButtonClicks,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
      title: '크몽 배지 클릭',
      value: analytics.kmongBadgeClicks,
      gradient: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">관리자 대시보드</h1>
          <p className="text-gray-600">해피AI 랜딩페이지 분석 통계</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value.toLocaleString()}</p>
            </div>
          ))}
        </div>

        {/* Conversion Rate */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">전환율 분석</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">서비스 문의 전환율</p>
              <p className="text-2xl font-bold text-purple-600">
                {analytics.pageViews > 0
                  ? ((analytics.serviceButtonClicks / analytics.pageViews) * 100).toFixed(1)
                  : 0}%
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">이메일 문의 전환율</p>
              <p className="text-2xl font-bold text-orange-600">
                {analytics.pageViews > 0
                  ? ((analytics.emailButtonClicks / analytics.pageViews) * 100).toFixed(1)
                  : 0}%
              </p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">총 클릭률</p>
              <p className="text-2xl font-bold text-indigo-600">
                {analytics.pageViews > 0
                  ? (((analytics.serviceButtonClicks + analytics.emailButtonClicks + analytics.kmongBadgeClicks) / analytics.pageViews) * 100).toFixed(1)
                  : 0}%
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            메인 페이지로
          </button>
          <button
            onClick={resetAnalytics}
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all"
          >
            통계 초기화
          </button>
        </div>

        {/* Info */}
        <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
          <p className="text-sm text-gray-700">
            <strong>참고:</strong> 통계는 브라우저의 localStorage에 저장됩니다.
            브라우저를 초기화하면 데이터가 삭제될 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}
