import Ember from 'ember';

export default Ember.Component.extend({
	replyShowing: false,

	// actions
	actions: {
		reply() {
			this.set('replyShowing', true);
		},
		saveReply(){
			var params = {
				content: this.get('content'),
				file: this.get('file')
			}
			this.set('replyShowing', false)
			this.sendAction('saveReply', message, params)
		}
	}
});
