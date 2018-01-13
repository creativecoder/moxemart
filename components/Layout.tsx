import { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default ({
  children,
  title = 'moxemart',
}: {
  children: ReactNode;
  title?: string;
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Products</a>
        </Link>
      </nav>
      <h1>moxemart</h1>
    </header>

    {children}

    <footer>
      <a href="https://github.com/creativecoder/moxemart" target="_blank">
        See the source on Github
      </a>
    </footer>
  </div>
);
