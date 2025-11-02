import { useEffect } from 'react'

export const usePageView = () => {
  useEffect(() => {
    // 페이지 뷰 카운트
    const pageViews = parseInt(localStorage.getItem('analytics_pageViews') || '0')
    localStorage.setItem('analytics_pageViews', (pageViews + 1).toString())

    // 오늘 날짜 체크
    const today = new Date().toDateString()
    const lastVisit = localStorage.getItem('analytics_lastVisit')

    if (lastVisit !== today) {
      // 새로운 날짜면 오늘 방문자 초기화
      localStorage.setItem('analytics_todayViews', '1')
      localStorage.setItem('analytics_lastVisit', today)
    } else {
      // 같은 날이면 증가
      const todayViews = parseInt(localStorage.getItem('analytics_todayViews') || '0')
      localStorage.setItem('analytics_todayViews', (todayViews + 1).toString())
    }
  }, [])
}

export const trackClick = (eventName: string) => {
  const key = `analytics_${eventName}`
  const count = parseInt(localStorage.getItem(key) || '0')
  localStorage.setItem(key, (count + 1).toString())
}
