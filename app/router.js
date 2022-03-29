import EmberRouter from '@ember/routing/router';
import config from 'practice/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('item', { path: '/item/:item_id' });
  this.route('cart', { path: 'shopping-cart'}); // displays shopping-cart on web

  this.route('not-found', { path: '/*path'});
});
