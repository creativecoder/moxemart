import { ReactNode } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import { StateInterface } from '../store';

export const Layout = ({
  children,
  title = 'MoxeMart',
  cartQuantity = 0,
}: {
  children: ReactNode;
  title?: string;
  cartQuantity?: number;
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
        <ul>
          <li>
            <Link href="/">
              <a>Products</a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a>
                Cart
                <span>{cartQuantity > 0 ? ` ( ${cartQuantity} )` : ''}</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <h1>MoxeMart</h1>
    </header>

    {children}

    <footer>
      <a href="https://github.com/creativecoder/moxemart" target="_blank">
        See the source on Github
      </a>
    </footer>
  </div>
);

const mapStateToProps = (
  state: StateInterface,
  ownProps: {
    children: ReactNode;
    title: string;
  },
) => {
  return {
    children: ownProps.children,
    title: ownProps.title,
    cartQuantity: Object.values(state.cart).reduce(
      (total, item) => total + item.quantity,
      0,
    ),
  };
};

export default connect(mapStateToProps)(Layout);
