import React from 'react';
import { Link } from 'react-location';

const Navbar = () => {
  return (
    <nav className="flex p-3 text-gray-200 bg-gray-800 h-18">
      <span className="text-xl font-semibold">React-table-app</span>
      <span className="flex-1"></span>
      <ul className="flex gap-2">
        <li>
          <Link to="/" className="hover:underline">
            Tabela simples
          </Link>
        </li>
        <li>
          <Link className="hover:underline" to="/pagination">
            Tabela com paginação
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
