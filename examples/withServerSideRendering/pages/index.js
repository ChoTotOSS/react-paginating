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
  static async getInitialProps(context) {
    const { query } = context;
    let { page } = query;

    if (!page || page === 0) {
      query.page = 1;
    }

    const offset = (page - 1) * limit;
    const url = `https://pokeapi.co/api/v2/evolution-chain/?limit=${limit}&offset=${offset}`;
    const data = await fetch(url).then(data => data.json());

    return {
      query,
      data
    };
  }

  render() {
    const {
      data: { count, results },
      query: { page }
    } = this.props;

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
                <a href={`/?page=1`} style={style.pageItem} className="first">
                  first
                </a>

                {hasPreviousPage && (
                  <a
                    href={`/?page=${previousPage}`}
                    style={style.pageItem}
                    className="first"
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
                      key={page}
                      href={`/?page=${page}`}
                      style={{ ...style.pageItem, ...activePage }}
                      className="first"
                    >
                      {page}
                    </a>
                  );
                })}

                {hasNextPage && (
                  <a
                    href={`/?page=${nextPage}`}
                    style={style.pageItem}
                    className="first"
                  >
                    {">"}
                  </a>
                )}

                <a
                  href={`/?page=${totalPages}`}
                  style={style.pageItem}
                  className="first"
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
