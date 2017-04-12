
import Ember from 'ember';
import config from './config/environment';

//routes
const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin');
  this.route('message');
  this.route('contact');
  this.route('about');
  this.route('login');
  this.route('calendar');
});

export default Router;
