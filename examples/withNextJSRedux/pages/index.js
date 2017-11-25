import React from 'react';
import withRedux from 'next-redux-wrapper';
import Home from '../containers/Home';
import { fetchData } from '../containers/Home/actions';
import { LIMIT } from '../containers/Home/constants';
import { initStore } from '../store';

class Index extends React.Component {
  static async getInitialProps(context) {
    const { store, query } = context;
    const { page } = query;
    const data = await store.dispatch(
      fetchData({
        limit: LIMIT,
        page: page || 1
      })
    );
    return {
      query,
      data
    };
  }
  render() {
    return <Home {...this.props} />;
  }
}
export default withRedux(initStore, null, null)(Index);
