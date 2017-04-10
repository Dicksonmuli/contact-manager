import Ember from 'ember';

//model-hook to fetch objects from route admin.js
export default Ember.Route.extend({
  model() {
    return this.store.findAll('admin');
  },
  //creating an action on our route handler
  actions: {
    saveAdmin3(params) {
      var newAdmin = this.store.createRecord('admin', params);
      newAdmin.save();
      this.transitionTo('index');
    },

    update(admin, params) {
      debugger;
      admin.save();
      this.transitionTo('index');
    },

    destroyAdmin(admin) {
      admin.destroyRecord();
      this.transitionTo('index');
    }
  }
});
