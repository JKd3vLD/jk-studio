import { defineConfig } from 'astro/config'
import solid from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
	integrations: [solid(), tailwind()],
	output: 'server',
	adapter: vercel(),
})
