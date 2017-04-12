import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	file: DS.attr(),
	content: DS.attr(),
	replys: DS.hasMany('reply', {async: true})
});
