'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init()
  }, [])

  return <>
  {children}
  
  </>
}