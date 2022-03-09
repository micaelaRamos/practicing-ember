import EmberRouter from '@ember/routing/router';
import config from 'practice/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('tasks', function() {
    this.route('new');
  });
  this.route('task', { path: '/task/:task_id' });
  this.route('not-found', { path: '/*path'});
});
