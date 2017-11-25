import React from 'react';

import Pagination from '../';

export const fruits = [
  ['apple', 'orange'],
  ['banana', 'avocado'],
  ['coconut', 'blueberry'],
  ['payaya', 'peach'],
  ['pear', 'plum']
];

export const limit = 2;
export const pageCount = 3;
export const currentPage = 1;
export const totalPages = fruits.length;
export const total = fruits.length * limit;

export default function setup({ data = fruits, itemProps = {} } = {}) {
  const Children = jest.fn(
    ({
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
        <a
          {...getPageItemProps({ pageValue: 1, ...itemProps })}
          id="page_first"
          href="1"
        >
          first
        </a>

        {hasPreviousPage && (
          <a
            {...getPageItemProps({ pageValue: previousPage, ...itemProps })}
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
              {...getPageItemProps({ pageValue: page, ...itemProps })}
            >
              {page}
            </a>
          );
        })}

        {hasNextPage && (
          <a
            {...getPageItemProps({ pageValue: nextPage, ...itemProps })}
            id="page_next"
            href={`${nextPage}`}
          >
            {'>'}
          </a>
        )}

        <a
          {...getPageItemProps({ pageValue: totalPages, ...itemProps })}
          id="page_last"
          href={`${totalPages}`}
        >
          last
        </a>
      </div>
    )
  );

  function BasicPagination(props) {
    return (
      <Pagination
        total={total}
        limit={limit}
        pageCount={pageCount}
        currentPage={currentPage}
        {...props}
      >
        {Children}
      </Pagination>
    );
  }
  return {
    BasicPagination,
    Children
  };
}
