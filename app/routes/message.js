import Ember from 'ember';

export default Ember.Route.extend({
	model() {
  return   Ember.RSVP.hash({
        messages: this.store.findAll('message'),
        replys: this.store.findAll('reply')
    });
  },
	// model(params){
  //   return this.store.findRecord('message', params.message_id);
  // },
	// actions
	actions: {
		saveMessage(params){
			var newMessage = this.store.createRecord('message', params);
			newMessage.save();
			this.transitionTo('message');
		},
		saveReply(params){
			var newReply = this.store.createRecord('reply', params);
			var message = params.message;
			message.get('replys').addObject(newReply);
			newReply.save().then(function () {
				return message.save();
			});
			this.transitionTo('message');
		}
	}
});
