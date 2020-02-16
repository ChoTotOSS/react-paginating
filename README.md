# React Paginating

[![Build Status](https://travis-ci.org/ChoTotOSS/react-paginating.svg?branch=master)](https://travis-ci.org/ChoTotOSS/react-paginating) [![CircleCI](https://circleci.com/gh/davidnguyen179/react-paginating.svg?style=svg)](https://circleci.com/gh/davidnguyen179/react-paginating) [![cypress](https://img.shields.io/badge/cypress-dashboard-brightgreen.svg)](https://dashboard.cypress.io/#/projects/qncx9e/runs)

[![CircleCI](https://img.shields.io/npm/dm/react-paginating.svg)](https://img.shields.io/npm/dm/react-paginating.svg) [![codecov](https://codecov.io/gh/ChoTotOSS/react-paginating/branch/master/graph/badge.svg)](https://codecov.io/gh/ChoTotOSS/react-paginating) [![npm version](https://img.shields.io/npm/v/react-paginating.svg?style=flat-square)](https://badge.fury.io/js/react-paginating) [![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ChoTotOSS/react-paginating/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![gzip size](http://img.badgesize.io/https://unpkg.com/react-paginating@1.2.1/dist/react-paginating.umd.min.js?compression=gzip&label=gzip%20size&style=flat-square)](https://unpkg.com/react-paginating@1.2.1/dist/) [![module formats](https://img.shields.io/badge/module%20formats-umd,%20cjs,%20es-green.svg?style=flat-square)](https://unpkg.com/react-paginating@1.2.1/dist/) [![Greenkeeper badge](https://badges.greenkeeper.io/ChoTotOSS/react-paginating.svg)](https://greenkeeper.io/) [![Package Quality](https://npm.packagequality.com/shield/react-paginating.svg)](https://packagequality.com/#?package=react-paginating)

[![Package Quality](https://npm.packagequality.com/badge/react-paginating.png)](http://packagequality.com/#?package=react-paginating) 


## Motivation

During development, we were facing problems supporting server-rendering of our web app & SEO (require pagination links). To solve that, we had to add 2 snippets of code, one to support the server-side and another to support the client-side which lead to being hard for maintenance. Most of the pagination libraries only support client-rendering by attaching event handlers on the pagination button to redirect. Because of that, we created this library which allows flexibly to customize behaviors (attaching event handlers or href attribute) and user interface.

<hr />

<div align="center">
  <img src="https://user-images.githubusercontent.com/6290720/33229010-d65daf4a-d1f8-11e7-851a-7d3e0d454b48.gif" />
  <br />
  <br />
</div>

The component applied `Render Props` pattern. (You can read more
about this pattern
[here](https://reactjs.org/docs/render-props.html)).

This approach allows you to fully control UI component and behaviours.

> See [the intro blog post](https://medium.com/chotot/introducing-react-paginating-9128f30f1f6b)

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
- Javascript: [https://codesandbox.io/s/z2rr7z23ol](https://codesandbox.io/s/z2rr7z23ol)
- Typescript: [https://codesandbox.io/s/9252p34v8r](https://codesandbox.io/s/9252p34v8r)
- Server-Side Rendering: [https://codesandbox.io/s/vq40kw1yn5](https://codesandbox.io/s/vq40kw1yn5)

```css
.bg-red {
  background-color: red;
}
```

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

  handlePageChange = (page, e) => {
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
          className="bg-red"
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
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
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

* [withClientSideRendering](https://github.com/ChoTotOSS/react-paginating/tree/hook/examples/withClientSideRendering)
* [withServerSideRendering](https://github.com/ChoTotOSS/react-paginating/tree/hook/examples/withServerSideRendering)

## Input Props

### total

> `number`

Total results

### className

> `string`

Customizable style for pagination wrapper

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

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.dzungnguyen.dev/about"><img src="https://avatars3.githubusercontent.com/u/6290720?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Dzung Nguyen</b></sub></a><br /><a href="https://github.com/davidnguyen179/react-paginating/commits?author=davidnguyen179" title="Documentation">📖</a> <a href="https://github.com/davidnguyen179/react-paginating/commits?author=davidnguyen179" title="Code">💻</a> <a href="#ideas-davidnguyen179" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/davidnguyen179/react-paginating/pulls?q=is%3Apr+reviewed-by%3Adavidnguyen179" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/davidnguyen179/react-paginating/issues?q=author%3Adavidnguyen179" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://nartc.netlify.com/about"><img src="https://avatars0.githubusercontent.com/u/25516557?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Chau Tran</b></sub></a><br /><a href="https://github.com/davidnguyen179/react-paginating/commits?author=nartc" title="Code">💻</a> <a href="#ideas-nartc" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/davidnguyen179/react-paginating/pulls?q=is%3Apr+reviewed-by%3Anartc" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/davidnguyen179/react-paginating/issues?q=author%3Anartc" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/abusada"><img src="https://avatars3.githubusercontent.com/u/2572320?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Faris Abusada</b></sub></a><br /><a href="https://github.com/davidnguyen179/react-paginating/commits?author=abusada" title="Code">💻</a> <a href="https://github.com/davidnguyen179/react-paginating/issues?q=author%3Aabusada" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
