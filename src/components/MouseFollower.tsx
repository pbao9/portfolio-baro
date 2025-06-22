import { useEffect, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'

export const MouseFollower = () => {
  const { theme } = useTheme()
  const dotRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<HTMLDivElement[]>([])

  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const trails = useRef(
    Array.from({ length: 6 }).map(() => ({ x: 0, y: 0 }))
  )

  const lerp = (start: number, end: number, amt: number) => start + (end - start) * amt

  // Theme-aware colors
  const getThemeColors = () => {
    if (theme === 'dark') {
      return {
        dotColor: 'rgb(48, 194, 61)', // Green for dark mode
        dotGlow: '0 0 25px rgb(48, 194, 61), 0 0 50px rgba(48, 194, 61, 0.5)',
        trailColor: 'rgba(48, 194, 61, 0.2)',
        mixBlendMode: 'screen' as const
      }
    } else {
      return {
        dotColor: 'rgb(59, 130, 246)', // Blue for light mode
        dotGlow: '0 0 25px rgb(59, 130, 246), 0 0 50px rgba(59, 130, 246, 0.5)',
        trailColor: 'rgba(59, 130, 246, 0.2)',
        mixBlendMode: 'multiply' as const
      }
    }
  }

  const colors = getThemeColors()

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    window.addEventListener('mousemove', handleMove)

    const animate = () => {
      // Main dot move
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.15)
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.15)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }

      // Trail move
      trails.current.forEach((t, i) => {
        const target = i === 0 ? pos.current : trails.current[i - 1]
        t.x = lerp(t.x, target.x, 0.15)
        t.y = lerp(t.y, target.y, 0.15)

        const el = trailRefs.current[i]
        if (el) {
          el.style.transform = `translate(${t.x}px, ${t.y}px)`
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  // Update colors when theme changes
  useEffect(() => {
    const colors = getThemeColors()
    
    if (dotRef.current) {
      dotRef.current.style.backgroundColor = colors.dotColor
      dotRef.current.style.boxShadow = colors.dotGlow
      dotRef.current.style.mixBlendMode = colors.mixBlendMode
    }

    trailRefs.current.forEach((trail) => {
      if (trail) {
        trail.style.backgroundColor = colors.trailColor
        trail.style.mixBlendMode = colors.mixBlendMode
      }
    })
  }, [theme])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: 16,
          height: 16,
          borderRadius: '50%',
          backgroundColor: colors.dotColor,
          boxShadow: colors.dotGlow,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-100px, -100px)',
          mixBlendMode: colors.mixBlendMode,
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        }}
      />

      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailRefs.current[i] = el
          }}
          style={{
            position: 'fixed',
            width: `${12 - i}px`,
            height: `${12 - i}px`,
            borderRadius: '50%',
            backgroundColor: colors.trailColor,
            filter: 'blur(1.5px)',
            pointerEvents: 'none',
            zIndex: 9998,
            transform: 'translate(-100px, -100px)',
            mixBlendMode: colors.mixBlendMode,
            transition: 'background-color 0.3s ease',
          }}
        />
      ))}
    </>
  )
}
