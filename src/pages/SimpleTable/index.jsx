import React, { useMemo } from 'react';
import Table from '../../components/Table';

const SimpleTable = () => {
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
      col2: 'Teste 2',
    },
    {
      col1: 'Teste',
      col2: 'Teste 2',
    },
    {
      col1: 'Teste',
      col2: 'Teste 2',
    },
    {
      col1: 'Teste',
      col2: 'Teste 2',
    },
    {
      col1: 'Teste',
      col2: 'Teste 2',
    },
  ];
  return <Table columns={columns} data={data} />;
};

export default SimpleTable;
