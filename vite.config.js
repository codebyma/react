import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// mode에 따라 base 자동 분기
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/react/' : '/', // repo 이름 맞춰서 변경
}))
