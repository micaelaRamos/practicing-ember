import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    const tasks = [{
      title: "Task A",
      description: "Make breakfast",
    }, {
      title: "Task B",
      description: "Pay rent",
    }];

    return tasks;
  }
}
