import React from 'react';
import fetch from 'isomorphic-fetch';
import Pagination from 'react-paginating';

const limit = 5;
const pageCount = 5;

const style = {
  pageItem: {
    display: "inline",
    position: "relative",
    padding: "0.5rem 0.75rem",
    marginLeft: "-1px",
    lineHeight: "1.25",
    color: "#0275d8",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    touchAction: "manipulation",
    textDecoration: "none"
  },
  pageItemActive: {
    color: "#fff",
    backgroundColor: "#0275d8",
    borderColor: "#0275d8"
  },
  listGroup: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 0
  },
  listGroupItem: {
    position: "relative",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    padding: "0.75rem 1.25rem",
    marginBottom: "-1px",
    backgroundColor: "#fff",
    border: "1px solid rgba(0, 0, 0, 0.125)"
  }
};

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      data: {
        count: 0,
        results: []
      }
    };
  }

  componentDidMount() {
    let currentPage = this.state.page;
    if (!currentPage || currentPage === 0) {
      currentPage = 1;
    }

    const offset = (currentPage - 1) * limit;
    const url = `https://pokeapi.co/api/v2/evolution-chain/?limit=${limit}&offset=${offset}`;
    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          data,
          page: currentPage
        });
      });
  }

  handlePageChange = (page, e) => {
    this.setState(
      {
        page
      },
      async () => {
        let currentPage = this.state.page;
        if (!currentPage || currentPage === 0) {
          currentPage = 1;
        }

        const offset = (currentPage - 1) * limit;
        const url = `https://pokeapi.co/api/v2/evolution-chain/?limit=${limit}&offset=${offset}`;
        const data = await fetch(url).then(data => data.json());

        this.setState({
          data,
          page: currentPage
        });
      }
    );
  };

  render() {
    const {
      data: { count, results },
      page
    } = this.state;

    return (
      <div>
        <ul style={style.listGroup}>
          {results.map(item => (
            <li style={style.listGroupItem} key={item.url}>
              {item.url}
            </li>
          ))}
        </ul>

        <div>
          <Pagination
            total={count}
            limit={limit}
            pageCount={pageCount}
            currentPage={page ? parseInt(page, 10) : 1}
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
                <a
                  {...getPageItemProps({
                    pageValue: 1,
                    onPageChange: this.handlePageChange,
                    className: "first",
                    style: style.pageItem
                  })}
                >
                  first
                </a>

                {hasPreviousPage && (
                  <a
                    {...getPageItemProps({
                      pageValue: previousPage,
                      onPageChange: this.handlePageChange,
                      className: "first",
                      style: style.pageItem
                    })}
                  >
                    {"<"}
                  </a>
                )}

                {pages.map(page => {
                  let activePage = {};
                  if (currentPage === page) {
                    activePage = style.pageItemActive;
                  }
                  return (
                    <a
                      {...getPageItemProps({
                        key: page,
                        pageValue: page,
                        onPageChange: this.handlePageChange,
                        className: "first",
                        style: { ...style.pageItem, ...activePage }
                      })}
                    >
                      {page}
                    </a>
                  );
                })}

                {hasNextPage && (
                  <a
                    {...getPageItemProps({
                      pageValue: nextPage,
                      onPageChange: this.handlePageChange,
                      className: "first",
                      style: style.pageItem
                    })}
                  >
                    {">"}
                  </a>
                )}

                <a
                  {...getPageItemProps({
                    pageValue: totalPages,
                    onPageChange: this.handlePageChange,
                    className: "first",
                    style: style.pageItem
                  })}
                >
                  last
                </a>
              </div>
            )}
          </Pagination>
        </div>
      </div>
    );
  }
}
