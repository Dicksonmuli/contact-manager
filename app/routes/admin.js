import Ember from 'ember';

//route for the objects
export default Ember.Route.extend({
  contact_name: DS.attr(),
  contact_no: DS.attr()
});
