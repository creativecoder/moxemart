import * as React from 'react';
import * as withRedux from 'next-redux-wrapper';
import { initStore } from '../store';
import Layout from '../components/Layout';

export class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div />
      </Layout>
    );
  }
}

export default withRedux(initStore)(Index);
