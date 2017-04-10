import Ember from 'ember';

//adding behavior for the button
export default Ember.Component.extend({
  addNewAdmin: false,
  actions: {
    adminFormShow() {
      this.set('addNewAdmin', true);
    },
    // adding save behavior of new-admin.hbs
    saveAdmin1() {
      var params = {
        contact_name: this.get('contact_name'),
        contact_no: this.get('contact_no'),
      };
      this.set('addNewAdmin', false);
      this.sendAction('saveAdmin2', params);
    }
  }
});
