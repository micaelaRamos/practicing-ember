import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service} from '@ember/service';

export default class ItemController extends Controller {
    @service shoppingCart;
    
    @tracked color;
    @tracked isZoomed = false;
    
    get productImage() {
        return this.model.colors.find(currColor => currColor.color === this.color).image;
    }

    @action
    onChangeColor(newColor) {
        this.color = newColor;
    }

    @action
    toggleZoom() {
        this.isZoomed = !this.isZoomed;
    }
}
