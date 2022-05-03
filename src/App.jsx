import { useMemo } from 'react';
import Navbar from './components/Navbar';
import Table from './components/Table';

function App() {
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

  const data = useMemo(() => {
    return [
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
  });

  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />
      <div className="container mx-auto">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}

export default App;
