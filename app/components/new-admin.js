import Ember from 'ember';

//adding behavior for the button
export default Ember.Component.extend({
  addNewAdmin: false,
  actions: {
    adminFormShow() {
      this.set('addNewAdmin', true);
    }
  }
});
