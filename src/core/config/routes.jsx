import PaginationTable from '../../pages/PaginationTable';
import SimpleTable from '../../pages/SimpleTable';

const routes = [
  {
    path: '/',
    element: <SimpleTable />,
  },
  {
    path: '/pagination',
    element: <PaginationTable />,
  },
];

export default routes;
