import Controller from '@ember/controller';

export default class NewTaskController extends Controller {
  title = "Write a title";
  description = "Describe what you've got to do";

  // Here I can do something like this.modal.prop, and then get the properties that are defined in the model
  // Each time I used them in the template like this.prop, it will get the value that I've defined in here
}
