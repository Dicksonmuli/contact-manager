import Ember from 'ember';

export default Ember.Component.extend({
	// actions
	actions: {
		saveMessage(){
			var params = {
				file: this.get('file'),
				content: this.get('file'),
				name: this.get('name')
			}
			this.sendAction('saveMessage', params)
		}
	}
});
