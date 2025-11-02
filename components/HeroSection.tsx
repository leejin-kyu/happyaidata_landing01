'use client'

import { ArrowRight, Sparkles, Award, Users } from 'lucide-react'
import { useState } from 'react'
import ContactModal from './ContactModal'
import { trackClick } from '@/hooks/useAnalytics'

export default function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <a
            href="https://kmong.com/gig/345782"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick('badgeClicks')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8 animate-fade-in hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Award className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700">
              크몽 Prime 인증 서비스
            </span>
          </a>

          {/* Problem Statement - 문제 제기 */}
          <div className="mb-8 max-w-3xl mx-auto animate-slide-up">
            <p className="text-lg sm:text-xl text-gray-600 mb-4 leading-relaxed">
              <span className="text-red-600 font-bold">&ldquo;연구 프로젝트에 데이터 분석이 필요한데, 어디서부터 시작해야 할지 막막합니다.&rdquo;</span><br />
              <span className="text-red-600 font-bold">&ldquo;정책 평가를 위한 여론 분석, AI로 가능할까요?&rdquo;</span><br />
              <span className="text-red-600 font-bold">&ldquo;비정형 텍스트 데이터 분석, 내부 인력만으로는 한계가 있습니다.&rdquo;</span>
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up animation-delay-200">
            <span className="block text-gray-900 mb-2">AI 기반 빅데이터 분석으로</span>
            <span className="block gradient-text">연구의 깊이를 더합니다</span>
          </h1>

          {/* Empathy & Solution - 공감 + 해결방식 */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto animate-slide-up animation-delay-400">
            정책 분석부터 학술 연구까지 <span className="font-bold text-purple-600">AI LLM 기반 전문 분석 서비스</span>
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-500">
            과학기술정책연구원·한국교육과정평가원·삼성전자 등 300건 이상 프로젝트 실적
          </p>

          {/* Value Proposition */}
          <div className="mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-600">
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 shadow-lg">
              <p className="text-base sm:text-lg font-semibold text-gray-800 leading-relaxed">
                <span className="text-purple-600 text-xl block mb-2">✓ 단순 결과 제공이 아닌, 직접 배우는 분석</span>
                검증된 전문가 컨소시엄 팀 → 맞춤형 분석 파이프라인 설계 → 기관 내부 역량 강화까지<br />
                <span className="text-purple-600">전 과정을 체계적으로 지원합니다</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center mb-12 animate-slide-up animation-delay-600">
            {/* Main CTA - 서비스 문의하기 (강조) */}
            <a
              href="https://kmong.com/gig/345782"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackClick('serviceClicks')}
              className="group px-12 py-5 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              서비스 문의하기
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA - 이메일 문의 */}
            <button
              onClick={() => {
                trackClick('emailClicks')
                setIsContactModalOpen(true)
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-purple-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              이메일 문의
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in animation-delay-800">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">7년</div>
              <div className="text-sm text-gray-600">빅데이터 분석 경력</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">300+</div>
              <div className="text-sm text-gray-600">프로젝트 수행</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600">고객 만족도</div>
            </div>
          </div>

          {/* Expected Benefits - 변화 */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-purple-600 rounded-r-xl p-6 shadow-md">
              <div className="space-y-3">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-purple-700 block mb-2">🏆 실적 및 강점</span>
                  과학기술정책연구원·한국교육과정평가원·삼성전자 등 300건 이상 프로젝트 수행<br />
                  AI LLM(ChatGPT·LLaMA·BERT) 기반 최신 분석 기법 적용<br />
                  검증된 전문가 컨소시엄 팀 운영 · 고품질 결과물 보장제
                </p>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">
                    <span className="font-semibold text-gray-800">✓ 기관 맞춤형 분석 파이프라인 설계</span>
                    <br />
                    정책·여론 분석, 학술 텍스트마이닝, LDA·STM·BERTopic 등 고급 분석 기법
                  </p>
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">※ 본 서비스는 기관 프로젝트 전용이며, 개인 논문 대필·컨설팅과 무관합니다.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
    </>
  )
}
