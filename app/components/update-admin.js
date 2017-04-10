import Ember from 'ember';

//actions for update-admin.hbs where it is receiving admin as an argument
export default Ember.Component.extend({
  updateAdminForm: false,
  actions: {
    updateAdminForm() {
      this.set('updateAdminForm', true);
    },
    update(admin) {
      var params = {
        contact_name: this.get('contact_name'),
        contact_no: this.get('contact_no'),
      };
      this.set('updateAdminForm', false);
      this.sendAction('update', admin, params);
    }
  }
});
