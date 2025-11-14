// SmoothScroll.tsx
import { useEffect } from 'react'
import Lenis from 'lenis'

export const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
    })

    // Expose Lenis instance to window for use in other components
    ;(window as any).lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      delete (window as any).lenis
    }
  }, [])

  return null
}
