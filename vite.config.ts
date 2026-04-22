import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

function inlineCSS(): Plugin {
    return {
        name: 'inline-css',
        closeBundle() {
            const distDir = path.resolve(__dirname, 'dist')
            const htmlPath = path.join(distDir, 'index.html')
            let html = fs.readFileSync(htmlPath, 'utf-8')

            const assetsDir = path.join(distDir, 'assets')
            const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'))

            for (const cssFile of cssFiles) {
                const cssPath = path.join(assetsDir, cssFile)
                const css = fs.readFileSync(cssPath, 'utf-8')
                html = html.replace(/<link[^>]*rel="stylesheet"[^>]*>/g, '')
                html = html.replace('</head>', `<style>${css}</style></head>`)
                fs.rmSync(cssPath)
            }

            fs.writeFileSync(htmlPath, html)
        },
    }
}

export default defineConfig({
    plugins: [react(), tailwindcss(), inlineCSS()],
    build: {
        cssCodeSplit: false,
    },
})
