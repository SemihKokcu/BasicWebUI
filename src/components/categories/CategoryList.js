import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
class CategoryList extends Component {
  // uygulama açıldığında category getir
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
  };
  render() {
    return (
      <div>
        <Badge color="success">
          
          <h3>Categories {this.props.categories.length}</h3>
        </Badge>

        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              color="warning"
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h5>
          <Badge color="success">Seçili Kategori :</Badge>
          <Badge color="dark">{this.props.currentCategory.categoryName}</Badge>
        </h5>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ), // getProducts da çağrılır ve getProducts içerisinde getProducts id ye göre sıralama yapılabilir
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
