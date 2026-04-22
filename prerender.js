import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, 'dist')

const routes = [
    { path: '/index.html', title: 'Baro Pham — Software Engineer & Fullstack Developer' },
    { path: '/projects/index.html', title: 'Baro Pham — Projects' },
    { path: '/tools/index.html', title: 'Baro Pham — Tools & Technologies' },
    { path: '/experience/index.html', title: 'Baro Pham — Work Experience' },
    { path: '/contact/index.html', title: 'Baro Pham — Contact' },
    { path: '/projects-list/index.html', title: 'Baro Pham — All Projects' },
    { path: '/projects/victoire-lms/index.html', title: 'Victoire LMS — Baro Pham' },
    { path: '/projects/rose-dao/index.html', title: 'Rose DAO — Baro Pham' },
    { path: '/projects/the-gioi-tui-vai/index.html', title: 'Thế giới túi vải — Baro Pham' },
    { path: '/projects/pos-system/index.html', title: 'POS System — Baro Pham' },
    { path: '/projects/nexon7-corporate-gifts/index.html', title: 'Nexon7 Corporate Gifts — Baro Pham' },
    { path: '/projects/dermat-vn/index.html', title: 'Dermat.vn — Baro Pham' },
    { path: '/projects/kfc-survey-system/index.html', title: 'KFC Survey System — Baro Pham' },
    { path: '/projects/ai-chatbot-system/index.html', title: 'AI Chatbot System — Baro Pham' },
    { path: '/projects/toeic-mastery-course/index.html', title: 'TOEIC Mastery Course — Baro Pham' },
    { path: '/projects/ecommerce-api-cms/index.html', title: 'Ecommerce API & CMS — Baro Pham' },
    { path: '/projects/visonland-real-estate/index.html', title: 'VisonLand Real Estate — Baro Pham' },
    { path: '/projects/vipfishing-booking/index.html', title: 'VipFishing Booking — Baro Pham' },
    { path: '/projects/devro-ecommerce/index.html', title: 'Devro Ecommerce — Baro Pham' },
    { path: '/projects/lafresh-ecommerce/index.html', title: 'Lafresh Ecommerce — Baro Pham' },
    { path: '/projects/school-transport-booking/index.html', title: 'School Transport Booking — Baro Pham' },
    { path: '/projects/viethouse-rentals/index.html', title: 'VietHouse Rentals — Baro Pham' },
]

const metaTemplate = (title, description, url) => `
    <title>${title}</title>
    <meta name="title" content="${title}">
    <meta name="description" content="${description}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="https://baro.devrotech.com${url}">
    <meta property="og:type" content="website">
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="${title}">
    <meta property="twitter:description" content="${description}">
`

const descriptions = {
    '/index.html': 'Portfolio of Baro Pham, a Software Engineer at Devro Tech specializing in fullstack development with Laravel, Next.js, Vue.js, and more. 35+ projects completed for clients worldwide.',
    '/projects/index.html': 'Browse all projects by Baro Pham including web development, eCommerce, and API projects.',
    '/tools/index.html': 'Technologies and tools used by Baro Pham including Laravel, Next.js, Vue.js, React, TypeScript, and more.',
    '/experience/index.html': "Baro Pham's work experience at Devro Tech and Mevivu Technology, specializing in fullstack development.",
    '/contact/index.html': 'Get in touch with Baro Pham for web development, fullstack projects, and collaboration opportunities.',
}

routes.forEach(({ path: routePath, title }) => {
    const dir = path.join(distDir, path.dirname(routePath))
    fs.mkdirSync(dir, { recursive: true })

    const indexPath = path.join(distDir, routePath)
    const htmlFile = path.join(distDir, 'index.html')

    if (!fs.existsSync(htmlFile)) {
        console.warn(`Warning: ${htmlFile} not found. Run build first.`)
        return
    }

    let html = fs.readFileSync(htmlFile, 'utf-8')

    const desc = descriptions[routePath] || descriptions['/index.html']
    const url = routePath.replace('/index.html', '') || '/'

    const meta = metaTemplate(title, desc, url)

    html = html.replace(
        /<title>.*?<\/title>[\s\S]*?<meta property="twitter:image"[\s\S]*?>/,
        meta.trim()
    )

    fs.writeFileSync(indexPath, html)
    console.log(`Generated: ${routePath}`)
})

console.log('\nPrerender complete!')
