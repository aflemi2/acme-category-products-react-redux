import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCategory } from './store';

class CategoryCreate extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
  }

  onSave() {
    this.props.saveCategory({name: this.props.name});
  }

  render() {
    const { onSave } = this;
    return (
      <div>
        <button onClick={ onSave }>Create Category</button>
      </div>
    );
  }
}
const mapStateToProps = ()=> {
  const randomNum = Math.floor(Math.random()*1000);
  const name = `${randomNum}-Category`;
  return {
    name
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    saveCategory: (category)=> dispatch(createCategory(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCreate);
