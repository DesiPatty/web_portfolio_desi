export default defineConfig(() => {
  return {
    base: '/web_portfolio_desi/',

    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
