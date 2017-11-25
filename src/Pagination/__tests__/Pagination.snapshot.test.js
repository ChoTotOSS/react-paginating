import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../';

const { describe, it } = global;

describe('Pagination render page items', () => {
  it('should render page items 1 -> 5', () => {
    const total = 90;
    const limit = 10;
    const currentPage = 1;
    const tree = renderer
      .create(
        <Pagination
          total={total}
          limit={limit}
          pageCount={5}
          currentPage={currentPage}
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
            <div>
              <div>
                <a
                  {...getPageItemProps({ pageValue: 1 })}
                  id="page_first"
                  href="1"
                >
                  first
                </a>

                {hasPreviousPage && (
                  <a
                    {...getPageItemProps({
                      pageValue: previousPage
                    })}
                    id="page_prev"
                    href={`${previousPage}`}
                  >
                    {'<'}
                  </a>
                )}

                {pages.map(page => {
                  let activePage = null;
                  if (currentPage === page) {
                    activePage = { backgroundColor: '#fdce09' };
                  }
                  return (
                    <a
                      id={`page_${page}`}
                      key={page}
                      href={`${page}`}
                      {...getPageItemProps({ pageValue: page })}
                    >
                      {page}
                    </a>
                  );
                })}

                {hasNextPage && (
                  <a
                    {...getPageItemProps({ pageValue: nextPage })}
                    id="page_next"
                    href={`${nextPage}`}
                  >
                    {'>'}
                  </a>
                )}

                <a
                  {...getPageItemProps({ pageValue: totalPages })}
                  id="page_last"
                  href={`${totalPages}`}
                >
                  last
                </a>
              </div>
            </div>
          )}
        </Pagination>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render page items 2 -> 6', () => {
    const total = 90;
    const limit = 10;
    const currentPage = 4;
    const tree = renderer
      .create(
        <Pagination
          total={total}
          limit={limit}
          pageCount={5}
          currentPage={currentPage}
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
            <div>
              <div>
                <a
                  {...getPageItemProps({ pageValue: 1 })}
                  id="page_first"
                  href="1"
                >
                  first
                </a>

                {hasPreviousPage && (
                  <a
                    {...getPageItemProps({
                      pageValue: previousPage
                    })}
                    id="page_prev"
                    href={`${previousPage}`}
                  >
                    {'<'}
                  </a>
                )}

                {pages.map(page => {
                  let activePage = null;
                  if (currentPage === page) {
                    activePage = { backgroundColor: '#fdce09' };
                  }
                  return (
                    <a
                      id={`page_${page}`}
                      key={page}
                      href={`${page}`}
                      {...getPageItemProps({ pageValue: page })}
                    >
                      {page}
                    </a>
                  );
                })}

                {hasNextPage && (
                  <a
                    {...getPageItemProps({ pageValue: nextPage })}
                    id="page_next"
                    href={`${nextPage}`}
                  >
                    {'>'}
                  </a>
                )}

                <a
                  {...getPageItemProps({ pageValue: totalPages })}
                  id="page_last"
                  href={`${totalPages}`}
                >
                  last
                </a>
              </div>
            </div>
          )}
        </Pagination>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
