import React, { useMemo, useState } from 'react';
import TableWithPagination from '../../components/TableWithPagination';

const PaginationTable = () => {
  const [data, setData] = useState([]);

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

  const handlePagination = (pageEvent) => {
    setData([]);
    const data = [];
    for (let index = 0; index < 10; index++) {
      data.push({
        col1: `item${index}`,
        col2: `Página ${pageEvent.pageIndex + 1}`,
      });
    }
    setData(data);
  };

  return (
    <TableWithPagination
      columns={columns}
      data={data}
      pageIndex={3}
      onPaginate={handlePagination}
    />
  );
};

export default PaginationTable;
