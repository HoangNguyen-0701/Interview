import React from 'react';

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

export default Pagging;
