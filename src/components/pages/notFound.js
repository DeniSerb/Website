import React from 'react';
import {
  Link
}                           from 'react-router-dom';

const NotFound = () => (
  <div>
    <Link to="/">
      <img className="notFound" src="404.jpg" alt="Страница не найдена =("></img>   
    </Link>
  </div>
);

export default NotFound;
