export default {
  github: 'https://github.com/kaiseryao/docs',
  docsRepositoryBase: 'https://github.com/kaiseryao/docs/tree/main',
  titleSuffix: ' – docs.yaokaiser.dev',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Yao Kaiser</span>
      <span className="text-gray-600 font-normal hidden md:inline">
       Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Yao Kaiser's Docs: My personal development documentation" />
      <meta name="og:description" content="Yao Kaiser's Docs: My personal development documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.yaokaiser.dev/og.png" />
      <meta name="twitter:site:domain" content="docs.yaokaiser.dev" />
      <meta name="twitter:url" content="https://docs.yaokaiser.dev" />
      <meta name="og:title" content="Yao Kaiser's Docs: My personal development documentation" />
      <meta name="og:image" content="https://docs.yaokaiser.dev/og.png" />
      <meta name="apple-mobile-web-app-title" content="Yao Kaiser's Docs" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/docs_favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/docs_favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/docs_favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/docs_favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/docs_favicon.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>{new Date().getFullYear()} © Yao Kaiser</>,
  unstable_faviconGlyph: '👋',
}
