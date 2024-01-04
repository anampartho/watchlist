'use client'
import { Theme } from '@radix-ui/themes'
import React, { ReactNode } from 'react'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <Theme>{children}</Theme>
}

export default ThemeProvider
