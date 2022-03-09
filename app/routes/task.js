import Route from '@ember/routing/route';

export default class TaskRoute extends Route {
  model(params) {
    const { task_id } = params;
    return task_id;
  }
}
