import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#241d24', rose:'#f45b82', blush:'#fff2f6' }, boxShadow:{soft:'0 24px 80px rgba(111,55,77,.10)'} } }, plugins:[] };
export default config;
