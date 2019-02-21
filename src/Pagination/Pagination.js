import React, { useState } from 'react';
import { getRange, getPageInfo } from './utils';

function Pagination(props) {
  // Declare a new state variable, which we'll call "count"
  const [currentPage, setCurrentPage] = useState(1);

  if (props.currentPage && currentPage !== props.currentPage) {
    setCurrentPage(parseInt(props.currentPage, 10));
  }

  function _getPageItemProps(props) {
    const { pageValue, onPageChange: handlePageChange, ...rest } = props;

    const onPageChange = e => {
      if (typeof handlePageChange === 'function') {
        handlePageChange(pageValue, e);
      }
      setCurrentPage(pageValue);
    };

    return {
      onClick: onPageChange,
      ...rest,
    };
  }

  const { total, limit, pageCount } = props;

  const pageInfo = getPageInfo({
    limit,
    pageCount,
    total,
    page: currentPage,
  });

  const {
    firstPage,
    lastPage,
    hasNextPage,
    hasPreviousPage,
    previousPage,
    nextPage,
    totalPages,
  } = pageInfo;

  const pages = total ? getRange(firstPage, lastPage) : [];

  return (
    <div>
      {props.children({
        pages,
        previousPage,
        nextPage,
        totalPages,
        currentPage,
        hasNextPage,
        hasPreviousPage,
        getPageItemProps: _getPageItemProps,
      })}
    </div>
  );
}

export default Pagination;
