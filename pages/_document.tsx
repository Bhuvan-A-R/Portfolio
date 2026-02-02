import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          
          <meta charSet="UTF-8" />
          <script src="https://cdn.tailwindcss.com"></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <style>{`:root { --deep-black: #050505; }
            body { background-color: var(--deep-black); color: white; margin: 0; font-family: 'Space Grotesk', sans-serif; overflow-x: hidden; }
            h1, h2, h3, .heading-font { font-family: 'Syne', sans-serif; letter-spacing: -0.05em; }
            .noise-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.05; z-index: 9999; background-image: url('https://grainy-gradients.vercel.app/noise.svg'); }
            ::selection { background: #4f46e5; color: white; }
            ::-webkit-scrollbar { width: 4px; }
            ::-webkit-scrollbar-track { background: #050505; }
            ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
