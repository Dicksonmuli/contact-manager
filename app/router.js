import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});
//adding dynamic segment to our new route's entry in the router(admin.js)
Router.map(function() {
  this.route('admin', {
    path: '/admin/:admin_id'
  });
  this.route('chat');
  this.route('contact');
  this.route('about');
});

export default Router;
