import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('contact');
  },
  //creating an action on our route handler
  actions: {
    saveContact3(params) {
      var newContact = this.store.createRecord('contact', params);
      newContact.save();
      this.transitionTo('index');
    },

    update(contact, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          contact.set(key, params[key]);
        }
      });
      contact.save();
      this.transitionTo('index');
    },

    destroyContact(contact) {
      contact.destroyRecord();
      this.transitionTo('index');
    }
  }
});
