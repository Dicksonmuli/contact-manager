import Ember from 'ember';

//actions for update-admin.hbs where it is receiving admin as an argument
export default Ember.Component.extend({
  updateContactForm: false,
  actions: {
    updateContactForm() {
      this.set('updateContactForm', true);
    },
    update(contact) {
      var params = {
        contact_name: this.get('contact_name'),
        contact_no: this.get('contact_no'),
      };
      this.set('updateContactForm', false);
      this.sendAction('update', contact, params);
    }
  }
});
