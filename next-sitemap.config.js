/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.filmkatha.com',
    changefreq: 'daily',
    priority: 0.7,
    generateRobotsTxt: true,  
    exclude: ['/admin'],
    transform: async (config, path) => {
        return {
          loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
          changefreq: config.changefreq,
          priority: config.priority,
          lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
          alternateRefs: config.alternateRefs ?? [],
        }
      },
      robotsTxtOptions: {
        policies: [
          {
            userAgent: '*',
            allow: '/',
          },
          {
            userAgent: 'test-bot',
            allow: ['/path', '/path-2'],
          },
          {
            userAgent: 'black-listed-bot',
            disallow: ['/sub-path-1', '/path-2'],
          },
        ],
    }
    // ...other options
  }