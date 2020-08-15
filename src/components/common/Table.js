import React, { useState, useEffect } from 'react';

const Pagging = ({ total, perPage = 5, onChange = () => null, currentPage = 1 }) => {
  const pages = Math.ceil(total / perPage);
  const pageNumber = [];

  for (let index = 1; index <= pages; index++) {
    pageNumber.push(index);
  }

  const onChangePage = (p) => {
    onChange(p);
  };

  return (
    <ul className="pagination mt-2 justify-content-end">
      {pageNumber &&
        pageNumber.map((p, i) => (
          <li
            className={`page-item page-link c-pointer ${currentPage === i + 1 ? 'active' : ''}`}
            key={i}
            onClick={() => onChangePage(i + 1)}
          >
            {p}
          </li>
        ))}
    </ul>
  );
};

const Table = ({ dataSource = [] }) => {
  const perPage = 5;
  const headers = Object.keys(dataSource[0]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(dataSource.slice(perPage * (page - 1), perPage * page));

  useEffect(() => {
    setData(dataSource.slice(perPage * (page - 1), perPage * page));
  }, [page, dataSource]);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th className="upper-first-letter" key={i}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((dt, index) => {
              const values = Object.values(dt);
              return (
                <tr key={index}>
                  {values.map((v, i) => (
                    <td key={i}>{v}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagging total={dataSource.length} currentPage={page} onChange={(p) => setPage(p)} />
    </>
  );
};

export default Table;
