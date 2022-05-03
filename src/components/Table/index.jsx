import React from 'react';
import { useTable } from 'react-table';

const Table = ({ columns, data }) => {
  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table className="w-full border shadow-sm" {...getTableProps()}>
      <thead className="">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((header) => (
              <th
                className="px-2 py-4 border-b border-r"
                {...header.getHeaderProps()}
              >
                {header.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr
              className={`${index % 2 === 0 && 'bg-gray-100'}`}
              {...row.getRowProps()}
            >
              {row.cells.map((cell) => (
                <td
                  className={`px-2 py-4 border-b border-r`}
                  {...cell.getCellProps()}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
