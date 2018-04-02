import React from 'react';
import { connect } from 'react-redux';

const Categories = ({ categories })=> {
  return (
    <ul>
      {
        categories.map( category => {
          return (
            <li key={ category.id }>
              { category.name }
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
