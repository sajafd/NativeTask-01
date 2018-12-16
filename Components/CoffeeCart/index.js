import React, { Component } from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";
import cartStore from "../../stores/CartStore";

class CoffeeCart extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   list: [
    //     {
    //       drink: "Latte",
    //       option: "Small",
    //       quantity: 2
    //     },
    //     {
    //       drink: "Espresso",
    //       option: "Large",
    //       quantity: 1
    //     }
    //   ]
    // };
  }
  render() {
    let coffeeshops = cartStore.orderList;
    let content;
    if (coffeeshops) {
      content = coffeeshops.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {content}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default observer(CoffeeCart);
