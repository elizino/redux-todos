import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <div>
    <Link to='/'>All-Todos</Link>
    <Link to='/active'>New-Totos</Link>
    <Link to='/completed'>Completed-Todos</Link>
  </div>
)
