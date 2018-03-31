import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = ({ products })=> {
  return (
    <ul>
      <li>
        <Link to='/products'>
          All Products ({ products.length })
        </Link>
      </li>
      <li>
        <Link to='/categories'>
          Categories
        </Link>
      </li>
    </ul>
  );
};

const mapStateToProps = ({ products })=> {
  return {
   products
  };
};

export default connect(mapStateToProps)(Nav);
