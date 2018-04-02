import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Categories = ({ categories })=> {
  return (
    <ul>
      {
        categories.map( category => {
          return (
            <li key={ category.id }>
              <Link to={`/categories/${category.id}`}>{ category.name }</Link>
            </li>
          );
        })
      }
    </ul>
  );
};

const mapState = ({ categories })=> {
  return {
    categories
  };
};

export default connect(mapState)(Categories);
