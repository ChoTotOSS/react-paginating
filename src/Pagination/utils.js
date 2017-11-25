export function getRange(start, end) {
  return [...Array(end - start + 1)].map((_, i) => start + i);
}

export function getPageInfo({ limit, pageCount, total, page }) {
  const totalPages = Math.ceil(total / limit);

  const totalResults = parseInt(total, 10);
  let currentPage = parseInt(page, 10);

  if (currentPage < 1) {
    currentPage = 1;
  }

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  let firstPage = Math.max(1, currentPage - Math.floor(pageCount / 2));

  let lastPage = Math.min(totalPages, currentPage + Math.floor(pageCount / 2));

  if (lastPage - firstPage + 1 < pageCount) {
    if (currentPage < totalPages / 2) {
      lastPage = Math.min(
        totalPages,
        lastPage + (pageCount - (lastPage - firstPage))
      );
    } else {
      firstPage = Math.max(1, firstPage - (pageCount - (lastPage - firstPage)));
    }
  }

  if (lastPage - firstPage + 1 > pageCount) {
    if (currentPage > totalPages / 2) {
      // eslint-disable-next-line
      firstPage++;
    } else {
      // eslint-disable-next-line
      lastPage--;
    }
  }
  const firstResult = limit * (currentPage - 1);
  const lastResult = limit * currentPage - 1;

  return {
    totalPages,
    pages: Math.min(lastPage - firstPage + 1, totalPages),
    currentPage,
    firstPage,
    lastPage,
    previousPage: currentPage - 1,
    nextPage: currentPage + 1,
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < totalPages,
    totalResults,
    results: Math.min(lastResult - firstResult + 1, totalResults),
    firstResult,
    lastResult
  };
}
