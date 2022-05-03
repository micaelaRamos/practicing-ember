import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { Price, Color } from '../routes/index';
import ShoppingCartService from '../services/shopping-cart.js';


export interface ProductType {
    id: string,
    name: string,
    description: string,
    price: Price,
    features: string[],
    colors: Color[],
}

interface ProductArgs {
    product: ProductType, 
}

export default class Product extends Component<ProductArgs> {
    @service declare shoppingCart: ShoppingCartService;
    
    productImage = this.args.product.colors[0]?.image;
}
