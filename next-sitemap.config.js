/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://schaeffertank.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://schaeffertank.com'}/sitemap.xml`,
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different page types
    let priority = 0.7;
    let changefreq = 'monthly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/services')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
