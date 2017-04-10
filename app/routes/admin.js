import Ember from 'ember';

export default Ember.Route.extend({
  //creating an action on our route handler
  actions: {
    saveAdmin3(params) {
      var newAdmin = this.store.createRecord('admin', params);
      newAdmin.save();
      this.transitionTo('index');
    },

    update(admin, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          admin.set(key, params[key]);
        }
      });
      admin.save();
      this.transitionTo('index');
    },

    destroyAdmin(admin) {
      admin.destroyRecord();
      this.transitionTo('index');
    }
  }
});
