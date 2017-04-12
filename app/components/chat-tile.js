import Ember from 'ember';

export default Ember.Component.extend({
	replyShowing: false,

	// actions
	actions: {
		reply() {
			this.set('replyShowing', true);
		},
		cancel(){
			// this.transitionTo('message');
			this.set('replyShowing', false)
		},
		saveReply(){
			var params = {
				comment: this.get('comment'),
				replyFile: this.get('replyFile') || "",
				message: this.get('message')
			};
			this.sendAction('saveReply', params)
		}
	}
});
