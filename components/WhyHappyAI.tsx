'use client'

import { XCircle, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react'

export default function WhyHappyAI() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              이런 <span className="text-red-600">실수</span>, 하고 계신가요?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              잘못된 접근 vs 올바른 해결방법
            </p>
          </div>

          {/* Wrong vs Right Approach */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Wrong Approaches */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h3 className="text-2xl font-bold text-red-900">❌ 잘못된 시도</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>무료 도구만 사용:</strong> 단순 워드클라우드, 기초 통계만으로는 연구 깊이 부족</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>비전문가 외주:</strong> 단순 데이터 정리만 제공, 해석력과 인사이트 없음</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>내부 인력만 의존:</strong> 최신 AI 기법(LLM, BERTopic 등) 활용 불가</span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>결과만 받는 방식:</strong> 기관 내부에 분석 노하우가 축적되지 않음</span>
                </li>
              </ul>
            </div>

            {/* Right Approaches */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-300">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-green-900">✅ 해피AI의 방법</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>AI LLM 기반 고급 분석:</strong> ChatGPT·LLaMA·BERT 등 최신 기법 적용</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>검증된 전문가 팀:</strong> 과학기술정책연구원 등 300건 이상 실적 보유</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>맞춤형 분석 설계:</strong> 기관 특성에 맞는 분석 파이프라인 구축</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700"><strong>교육 및 역량 강화:</strong> 직접 배우는 분석, 기관 내부 노하우 축적</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              해피AI만의 차별점
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                '과학기술정책연구원·삼성전자 등 300건+ 프로젝트 검증',
                '단순 결과 제공 ❌ → 직접 배우는 분석 교육 ✅',
                'ChatGPT·LLaMA·BERTopic 등 최신 AI 기법',
                '기관 맞춤형 분석 파이프라인 설계',
                '전문가 컨소시엄 팀 운영 (비전문가 외주 ❌)',
                '고품질 결과물 보장제 (만족하지 않으면 비용 청구 안 함)',
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
