import Ember from 'ember';

//functionality for button delete of admin-tile.hbs
export default Ember.Component.extend({
  actions: {
    delete(admin) {
      if (confirm('Are you sure you want to delete this contact?')) {
        this.sendAction('destroyAdmin', admin);
      }
    }
  }
});
