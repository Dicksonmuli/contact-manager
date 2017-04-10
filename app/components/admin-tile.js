import Ember from 'ember';

//delete functionality for button delete
export default Ember.Component.extend({
  actions: {
    delete(admin) {
      if (confirm('Are you sure you want to delete this contact?')) {
        this.sendAction('destroyAdmin', admin);
      }
    }
  }
});
