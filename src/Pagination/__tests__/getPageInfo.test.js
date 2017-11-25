import { getPageInfo } from '../utils';
import { testCase1, testCase3, testCase4 } from '../fixtures/testCase';

const { it } = global;

function compare(result, testCase) {
  expect(result.totalPages).toBe(testCase.totalPages);
  expect(result.pages).toBe(testCase.pages);
  expect(result.currentPage).toBe(testCase.currentPage);
  expect(result.firstPage).toBe(testCase.firstPage);
  expect(result.lastPage).toBe(testCase.lastPage);
  expect(result.previousPage).toBe(testCase.previousPage);
  expect(result.hasPreviousPage).toBe(testCase.hasPreviousPage);
  expect(result.hasNextPage).toBe(testCase.hasNextPage);
  expect(result.totalResults).toBe(testCase.totalResults);
  expect(result.results).toBe(testCase.results);
  expect(result.firstResult).toBe(testCase.firstResult);
  expect(result.lastResult).toBe(testCase.lastResult);
}

it('test case 1', () => {
  const pageInfo = getPageInfo({
    limit: 10,
    pageCount: 5,
    total: 90,
    page: 1
  });
  compare(pageInfo, testCase1);
});

it('test case 2', () => {
  const pageInfo = getPageInfo({
    limit: 10,
    pageCount: 5,
    total: 90,
    page: 0
  });
  compare(pageInfo, testCase1);
});

it('test case 3', () => {
  const limit = 10;
  const total = 90;
  const totalPages = Math.ceil(total / limit);

  const pageInfo = getPageInfo({
    limit: 10,
    pageCount: 5,
    total: 90,
    page: totalPages + 1
  });
  compare(pageInfo, testCase3);
});

it('test case 4', () => {
  const limit = 10;
  const total = 90;
  const totalPages = Math.ceil(total / limit);

  const pageInfo = getPageInfo({
    limit: 10,
    pageCount: 5,
    total: 90,
    page: 5
  });
  compare(pageInfo, testCase4);
});
