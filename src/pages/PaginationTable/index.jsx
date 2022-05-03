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
      {
        Header: 'Ações',
        accessor: 'colActions',
      },
    ];
  }, []);

  const handlePagination = (pageEvent) => {
    setData([]);
    const data = [];
    for (let index = 0; index < 10; index++) {
      const item = `item${index}`;
      data.push({
        col1: item,
        col2: `Página ${pageEvent.pageIndex + 1}`,
        colActions: (
          <div className="flex justify-center">
            <button
              className="px-4 py-2 text-white bg-blue-700 rounded-md shadow-sm hover:bg-blue-800"
              onClick={() => console.log('clicou no item:::', item)}
            >
              Logar
            </button>
          </div>
        ),
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
      numberOfPages={10}
    />
  );
};

export default PaginationTable;
