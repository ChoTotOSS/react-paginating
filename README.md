
# React Paginating

[![Build Status](https://travis-ci.org/ChoTotOSS/react-paginating.svg?branch=master)](https://travis-ci.org/ChoTotOSS/react-paginating)
[![codecov](https://codecov.io/gh/ChoTotOSS/react-paginating/branch/master/graph/badge.svg)](https://codecov.io/gh/ChoTotOSS/react-paginating)
[![npm version](https://badge.fury.io/js/react-paginating.svg)](https://badge.fury.io/js/react-paginating)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ChoTotOSS/react-paginating/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Simple lightweight pagination component.

<div align="center">
  <img src="https://user-images.githubusercontent.com/6290720/33229010-d65daf4a-d1f8-11e7-851a-7d3e0d454b48.gif" />
  <br />
  <br />
</div>

The component applied `Function as Child Components` pattern. (You can read more
about this pattern
[here](https://medium.com/merrickchristensen/function-as-child-components-5f3920a9ace9)).

This approach allows you to fully control UI component and behaviours.

> See [the intro blog post](https://medium.com/@nndung179/introducing-react-paginating-9128f30f1f6b)

## Table content

* [Installation](https://github.com/ChoTotOSS/react-paginating#installation)
* [Usage](https://github.com/ChoTotOSS/react-paginating#usage)
* [Examples](https://github.com/ChoTotOSS/react-paginating#examples)
* [Input Props](https://github.com/ChoTotOSS/react-paginating#input-props)
* [Child callback functions](https://github.com/ChoTotOSS/react-paginating#child-callback-functions)
* [Controlled Props](https://github.com/ChoTotOSS/react-paginating#controlled-props)
* [Alternatives](https://github.com/ChoTotOSS/react-paginating#alternatives)

## Installation

```bash
npm install --save react-paginating
```

or

```bash
yarn add react-paginating
```

## Usage

You can check out the basic demo here:
[https://codesandbox.io/s/z2rr7z23ol](https://codesandbox.io/s/z2rr7z23ol)

```js
import React from 'react';
import { render } from 'react-dom';
import Pagination from 'react-paginating';

const fruits = [
  ['apple', 'orange'],
  ['banana', 'avocado'],
  ['coconut', 'blueberry'],
  ['payaya', 'peach'],
  ['pear', 'plum']
];
const limit = 2;
const pageCount = 3;
const total = fruits.length * limit;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
  }

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <div>
        <ul>
          {fruits[currentPage - 1].map(item => <li key={item}>{item}</li>)}
        </ul>
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
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
              <button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.handlePageChange
                })}
              >
                first
              </button>

              {hasPreviousPage && (
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {'<'}
                </button>
              )}

              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: '#fdce09' };
                }
                return (
                  <button
                    key={page}
                    style={activePage}
                    {...getPageItemProps({
                      pageValue: page,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}

              {hasNextPage && (
                <button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {'>'}
                </button>
              )}

              <button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.handlePageChange
                })}
              >
                last
              </button>
            </div>
          )}
        </Pagination>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
```

## Examples

* [with simple basic data](https://github.com/ChoTotOSS/react-paginating/tree/master/examples/withBasic)
* [with redux & query param from url](https://github.com/ChoTotOSS/react-paginating/tree/master/examples/withNextJSRedux)

## Input Props

### total

> `number`

Total results

### limit

> `number`

Number of results per page

### pageCount

> `number`

How many pages number you want to display in pagination zone.

### currentPage

> `number`

Current page number

## Child callback functions

### getPageItemProps

> `function({ pageValue: number, onPageChange: func })`

Allow to pass props and event to page item. When page is clicked, `onPageChange`
will be executed with param value `pageValue`.

**Note:** This callback function should only use for paging with state change.
If you prefer parsing page value from `query` url (**Please don't use this
callback function**).

## Controlled Props

### pages

> `array: [number]`

List of pages number will be displayed. E.g: [1, 2, 3, 4, 5]

### currentPage

> `number`

### previousPage

> `number`

### nextPage

> `number`

### totalPages

> `number`

### hasNextPage

> `boolean`

Check if it has `next page` or not.

### hasPreviousPage

> `boolean`

Check if it has `previous page` or not.

## Alternatives

If you don’t agree with the choices made in this project, you might want to
explore alternatives with different tradeoffs. Some of the more popular and
actively maintained ones are:

* [react-paginate](https://github.com/AdeleD/react-paginate)
