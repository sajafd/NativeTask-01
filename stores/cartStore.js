import { decorate, observable } from "mobx";

class CartStore {
  constructor() {
    this.orderList = null;
  }
}

decorate(CartStore, {
  orderList: observable
});

const cartStore = new CartStore();

export default cartStore;
