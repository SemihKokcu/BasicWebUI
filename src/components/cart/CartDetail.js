import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Button, Table } from "reactstrap";
import alertify from "alertifyjs";
class CartDetail extends Component {
  // this den gelmesi için props u buradan aldık
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + "Ürün Sepetten Çıkarıldı");
  }
  render() {
    return (
      <div>
        <Table responsive striped>
          <thead>
            <tr>
              <th>id</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>

                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    Çıkar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

// state bağlantısı için
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
