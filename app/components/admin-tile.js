import Ember from 'ember';

//functionality for button delete and also for update for component admin-tile.hbs
export default Ember.Component.extend({
  actions: {
    update(admin, params) {
      this.sendAction('update', admin, params);
    },
    delete(admin) {
      if (confirm('Are you sure you want to delete this contact?')) {
        this.sendAction('destroyAdmin', admin);
      }
    }
  }
});
