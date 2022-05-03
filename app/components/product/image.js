import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ProductImageComponent extends Component {
    @action
    toggleZoom() {
        if (this.args.toggleZoom) {
            this.args.toggleZoom();
        }
    }
}
