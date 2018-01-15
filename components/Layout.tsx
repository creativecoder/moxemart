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
    <style jsx>{`
      nav li {
        display: inline-block;
        margin-right: 0.75rem;
        padding-right: 0.75rem;
        border-right: 1px solid grey;
      }

      nav li:last-of-type {
        border-right: none;
      }

      footer {
        margin-top: 1.5rem;
      }
    `}</style>

    <style global jsx>{`
      ul {
        padding: 0;
      }
      li {
        list-style: none;
      }
    `}</style>

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

          <li>
            <Link href="/cart1">
              <a>Cart 1</a>
            </Link>
          </li>

          <li>
            <Link href="/cart2">
              <a>Cart 2</a>
            </Link>
          </li>

          <li>
            <Link href="/cart3">
              <a>Cart 3</a>
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
