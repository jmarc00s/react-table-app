import React, { useEffect } from 'react';
import { useTable, usePagination } from 'react-table';

const TableWithPagination = ({ columns, data, onPaginate, numberOfPages }) => {
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    pageCount,
    canNextPage,
    canPreviousPage,
    gotoPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 3 },
      manualPagination: true,
      pageCount: numberOfPages,
    },
    usePagination
  );

  useEffect(() => {
    onPaginate({ pageIndex, pageSize });
  }, [pageIndex, pageSize]);

  return (
    <>
      <table className="w-full border shadow-sm" {...getTableProps()}>
        <thead>
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
          {page.map((row, index) => {
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

      <div className="flex items-center justify-end gap-1 py-8">
        <div>
          {pageIndex + 1} de {pageCount}
        </div>
        <button
          onClick={() => gotoPage(0)}
          className="px-4 py-2 text-white bg-blue-700 rounded-md shadow-sm hover:bg-blue-800 disabled:bg-gray-300 disabled:text-gray-800"
          disabled={!canPreviousPage}
        >
          Primeira
        </button>
        <button
          onClick={() => previousPage()}
          className="px-4 py-2 text-white bg-blue-700 rounded-md shadow-sm hover:bg-blue-800 disabled:bg-gray-300 disabled:text-gray-800"
          disabled={!canPreviousPage}
        >
          Anterior
        </button>
        <button
          onClick={() => nextPage()}
          className="px-4 py-2 text-white bg-blue-700 rounded-md shadow-sm hover:bg-blue-800 disabled:bg-gray-300 disabled:text-gray-800"
          disabled={!canNextPage}
        >
          Próxima
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          className="px-4 py-2 text-white bg-blue-700 rounded-md shadow-sm hover:bg-blue-800 disabled:bg-gray-300 disabled:text-gray-800"
          disabled={!canNextPage}
        >
          Última
        </button>
      </div>
    </>
  );
};

export default TableWithPagination;
