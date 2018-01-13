import * as React from 'react';
import { initStore } from '../store';
import * as withRedux from 'next-redux-wrapper';

export class Index extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

export default withRedux(initStore)(Index);
