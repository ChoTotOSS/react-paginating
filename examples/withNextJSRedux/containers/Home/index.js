import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import Pagination from 'react-paginating';

import { LIMIT, PAGE_COUNT } from './constants';

import ListPageItem from '../../components/ListPageItem';
import PageItem from '../../components/PageItem';

import ListGroup from '../../components/ListGroup';
import ListGroupItem from '../../components/ListGroupItem';

const AppWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 16px;
  width: 80%;
  margin: 0 auto;
  input {
    font-size: 16px;
  }
`;

class Home extends React.Component {
  render() {
    const { data: { results, count }, query: { page } } = this.props;
    return (
      <AppWrapper>
        <ListGroup>
          {results.map(item => (
            <ListGroupItem key={item.url}>{item.url}</ListGroupItem>
          ))}
        </ListGroup>
        <div>
          <Pagination
            total={count}
            limit={LIMIT}
            pageCount={PAGE_COUNT}
            currentPage={page ? parseInt(page, 10) : 1}
          >
            {({
              pages,
              currentPage,
              hasNextPage,
              hasPreviousPage,
              previousPage,
              nextPage,
              totalPages,
              getPageItemProps
            }) => (
              <ListPageItem>
                <PageItem>
                  <Link href={{ pathname: '/', query: { page: 1 } }} passHref>
                    <a className="first">first</a>
                  </Link>
                </PageItem>

                {hasPreviousPage && (
                  <PageItem>
                    <Link
                      href={{ pathname: '/', query: { page: previousPage } }}
                      passHref
                    >
                      <a>{'<'}</a>
                    </Link>
                  </PageItem>
                )}

                {pages.map(page => {
                  let activePageClass = null;
                  if (currentPage === page) {
                    activePageClass = 'active';
                  }
                  return (
                    <PageItem key={page}>
                      <Link href={{ pathname: '/', query: { page } }} passHref>
                        <a className={activePageClass}>{page}</a>
                      </Link>
                    </PageItem>
                  );
                })}

                {hasNextPage && (
                  <PageItem>
                    <Link
                      href={{ pathname: '/', query: { page: nextPage } }}
                      passHref
                    >
                      <a>{'>'}</a>
                    </Link>
                  </PageItem>
                )}

                <PageItem>
                  <Link
                    href={{ pathname: '/', query: { page: totalPages } }}
                    passHref
                  >
                    <a className="last">last</a>
                  </Link>
                </PageItem>
              </ListPageItem>
            )}
          </Pagination>
        </div>
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    home: state.home
  };
};

export default connect(mapStateToProps, null)(Home);
