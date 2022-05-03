import React, { useMemo } from 'react';
import TableWithPagination from '../../components/TableWithPagination';

const PaginationTable = () => {
  const columns = useMemo(() => {
    return [
      {
        Header: 'Coluna 1',
        accessor: 'col1',
      },
      {
        Header: 'Coluna 2',
        accessor: 'col2',
      },
    ];
  }, []);

  const data = [
    {
      col1: 'Teste',
      col2: 'Pagina 1',
    },
    {
      col1: 'Teste',
      col2: 'Pagina 1',
    },
    {
      col1: 'Teste',
      col2: 'Pagina 1',
    },
    {
      col1: 'Teste',
      col2: 'Pagina 2',
    },
    {
      col1: 'Teste',
      col2: 'Pagina 2',
    },
    {
      col1: 'Teste',
      col2: 'Pagina 2',
    },
    {
      col1: 'Teste',
      col2: 'Pagina 3',
    },
    {
      col1: 'Teste',
      col2: 'Pagina 3',
    },
    {
      col1: 'Teste',
      col2: 'Pagina 3',
    },
  ];

  return (
    <TableWithPagination
      columns={columns}
      data={data}
      pageIndex={3}
      onPaginate={(event) => console.log(event)}
    />
  );
};

export default PaginationTable;
