import DS from 'ember-data';

//route for the objects
export default DS.Model.extend({
  contact_name: DS.attr(),
  contact_no: DS.attr()
});
