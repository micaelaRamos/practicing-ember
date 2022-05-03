import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export interface Price {
    original: number,
    current: number,
}

export interface Color {
    color: string,
    image: string,
}

export interface Product {
    id: string,
    name: string,
    description: string,
    price: Price,
    features: string[],
    colors: Color[],
}

export default class IndexRoute extends Route {
    @service store;

    async model(): Promise<Product[]> {
        const products = await this.store.findAll('product');
        return products;
    }
}
