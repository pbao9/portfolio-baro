'use client'
import { ReactNode } from 'react'
import useLenis from './useLenis'

export default function LenisProvider({ children }: { children: ReactNode }) {
  useLenis()
  return <>{children}</>
}