import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('message');
	},
	// actions
	actions: {
		saveMessage(params){
			var newMessage = this.store.createRecord('message', params);
			newMessage.save();
			this.transitionTo('chat');
		},
		saveReply(params){
			var newReply = this.store.createRecord('reply', params);
			newReply.save();
			this.transitionTo('chat');
		}
	}
});
