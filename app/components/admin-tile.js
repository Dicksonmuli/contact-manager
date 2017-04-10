import Ember from 'ember';

//functionality for button delete and also for update for component admin-tile.hbs
export default Ember.Component.extend({
  actions: {
    update(contact, params) {
      this.sendAction('update', contact, params);
    },
    delete(contact) {
      if (confirm('Are you sure you want to delete this contact?')) {
        this.sendAction('destroyContact', contact);
      }
    }
  }
});
