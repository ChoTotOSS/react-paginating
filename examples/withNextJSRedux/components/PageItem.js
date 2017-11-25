import styled from 'styled-components';

const PageItem = styled.li`
  display: inline;
  a {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #0275d8;
    background-color: #fff;
    border: 1px solid #ddd;
    touch-action: manipulation;
    text-decoration: none;

    &:hover {
      color: #014c8c;
      text-decoration: none;
      background-color: #eceeef;
      border-color: #ddd;
    }

    &.active {
      z-index: 2;
      color: #fff;
      background-color: #0275d8;
      border-color: #0275d8;
    }

    &.first {
      margin-left: 0;
      border-bottom-left-radius: 0.25rem;
      border-top-left-radius: 0.25rem;
    }

    &.last {
      border-bottom-right-radius: 0.25rem;
      border-top-right-radius: 0.25rem;
    }
  }
`;

export default PageItem;
