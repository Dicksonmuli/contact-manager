import DS from 'ember-data';

export default DS.Model.extend({
  contact_name: DS.attr(),
  contact_no: DS.attr()
});
