import React, { useState, useEffect } from 'react';
import { Pagging } from './index';

const Table = ({ dataSource = [] }) => {
  const perPage = 5;
  const headers = dataSource && dataSource.length ? Object.keys(dataSource[0]) : [];
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
