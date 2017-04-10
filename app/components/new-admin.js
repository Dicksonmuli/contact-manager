import Ember from 'ember';

//adding behavior for the button
export default Ember.Component.extend({
  addNewContact: false,
  actions: {
    contactFormShow() {
      this.set('addNewContact', true);
    },
    // adding save behavior of new-admin.hbs
    saveContact1() {
      var params = {
        contact_name: this.get('contact_name'),
        contact_no: this.get('contact_no'),
      };
      this.set('addNewContact', false);
      this.sendAction('saveContact2', params);
    }
  }
});
