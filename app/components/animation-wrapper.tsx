"use client"

import { useEffect, ReactNode } from "react"
import { initAllAnimations } from "@/app/utils/animations"

interface AnimationWrapperProps {
  children: ReactNode
}

export function AnimationWrapper({ children }: AnimationWrapperProps) {
  useEffect(() => {
    // Initialize all animations when component mounts
    const cleanup = initAllAnimations()
    
    // Cleanup function to remove event listeners
    return () => {
      if (cleanup && typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [])

  return <>{children}</>
}
