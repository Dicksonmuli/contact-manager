import Ember from 'ember';

//model-hook to fetch objects from route admin.js
export default Ember.Route.extend({
  model() {
    return this.store.findAll('admin');
  },
  //creating an action on our route handler
  actions: {
    destroyAdmin(admin) {
      admin.destroyRecord();
      this.transitionTo('index');
    }
  }
});
