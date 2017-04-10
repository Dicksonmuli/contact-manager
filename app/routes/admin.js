import Ember from 'ember';

//to allow dynamic segment information from router.js
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('admin', params.admin_id);
  },
});
