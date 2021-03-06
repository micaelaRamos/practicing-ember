import Controller from '@ember/controller';
import { inject as service} from '@ember/service';

import { action } from '@ember/object';
export default class CartController extends Controller {
    @service shoppingCart;
    
    get subtotal() {
        return this.shoppingCart.itemList.reduce((accumulator, item) => {
            return accumulator + (item.price * item.count);
          }, 0);
    };
    get tax() {
        return 0.09 * this.subtotal;
    };

    get total() {
        return this.subtotal + this.tax;
    };

    @action
    updateItemCount(item, event) {
        const count = event.target.value;
        item.count = count;

        if (count >= 0) {
            item.count = count;
        } else {
            item.count = 0;
        }
    }
}
