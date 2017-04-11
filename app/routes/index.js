import Ember from 'ember';

//model-hook to fetch objects from route admin.js
export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    contacts: this.store.findAll('rental'),
    messages: this.store.findAll('review'),
    replys: this.store.findAll('review')
  });
  },
});
