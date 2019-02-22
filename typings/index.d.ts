import * as React from "react";

export interface PaginationState {
  pages: number[];
  previousPage: number;
  nextPage: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  getPageItemProps: (props: any) => void;
}

export interface PaginationProps {
  total: number;
  children: (props: PaginationState) => React.ReactNode;
  limit?: number;
  pageCount?: number;
  currentPage?: number;
  pageValue?: number;
  onPageChange?: (page?: number) => void;
}

declare function Pagination(props: any): React.SFC<PaginationProps>;

export default Pagination;
