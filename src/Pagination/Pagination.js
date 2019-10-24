import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getRange, getPageInfo } from 'paging-algorithm';

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);

  if (props.currentPage && currentPage !== props.currentPage) {
    setCurrentPage(parseInt(props.currentPage, 10));
  }

  const _getPageItemProps = props => {
    const { pageValue, onPageChange: handlePageChange, ...rest } = props;

    const onPageChange = e => {
      if (typeof handlePageChange === 'function') {
        handlePageChange(pageValue, e);
      }
      setCurrentPage(pageValue);
    };

    return {
      onClick: onPageChange,
      ...rest
    };
  };

  const { total, limit, pageCount, wrapperComponent, wrapperStyles = {} } = props;

  const pageInfo = getPageInfo({
    limit,
    pageCount,
    total,
    page: currentPage
  });

  const { firstPage, lastPage, hasNextPage, hasPreviousPage, previousPage, nextPage, totalPages } = pageInfo;

  const pages = total > 0 ? getRange(firstPage, lastPage) : [];

  const Wrapper = wrapperComponent || 'div';

  return (
    <Wrapper {...wrapperStyles}>
      {props.children({
        pages,
        previousPage,
        nextPage,
        totalPages,
        currentPage,
        hasNextPage,
        hasPreviousPage,
        getPageItemProps: _getPageItemProps
      })}
    </Wrapper>
  );
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  limit: PropTypes.number,
  pageCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageValue: PropTypes.number,
  children: PropTypes.func.isRequired,
  onPageChange: PropTypes.func,
  wrapperComponent: PropTypes.element,
  wrapperStyles: PropTypes.object
};

Pagination.defaultProps = {
  limit: 10,
  pageCount: 5,
  currentPage: 0,
  pageValue: 0
};

export default Pagination;
