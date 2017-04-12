import DS from 'ember-data';

export default DS.Model.extend({
	replyFile: DS.attr(),
	comment: DS.attr(),
	message: DS.belongsTo('message', {async: true})
});
