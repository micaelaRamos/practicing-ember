import Controller from '@ember/controller';

export default class CartController extends Controller {
    get subtotal() {
        return this.model.items.reduce((accumulator, item) => {
            return accumulator + item.price;
          }, 0);
    };
    get tax() {
        return 0.09 * this.subtotal;
    };

    get total() {
        return this.subtotal + this.tax;
    };
}
