
var express = require('express');
var util = require('util');
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var api = require('./api/api.js');
var request = require('request');
require('dotenv').config();

var callbackUrl = process.env.CALLBACK_URL || "http://localhost:3000/auth/callback";

var getApp = function(passport, Auth0Strategy, github) {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  passport.use(new Auth0Strategy({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: callbackUrl
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
          return done(null, profile);
      });
    }
  ));

  var app = express();

  app.use(bodyParser());
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(session({ secret: process.env.SESSION_SECRET }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use( "/private", [ ensureAuthenticated, addToUsers, express.static( "private" ) ] );
  app.use('/api', [ensureAuthenticated, addToUsers, api.router]);

  app.use( "/", express.static( "public" ) );

  // app.get('/auth',
  //   passport.authenticate('auth0', { scope: [ 'user:email' ] }),
  //   function(req, res){
  //   });

  app.get('/env.js', function(req, res) {
    var script =
      'var env = {' +
      'AUTH0_CLIENT_ID: "' + process.env.AUTH0_CLIENT_ID + '",' +
      'AUTH0_DOMAIN: "' + process.env.AUTH0_DOMAIN + '",' +
      'CALLBACK_URL: "' + callbackUrl + '"' +
      '}';
      res.set('Content-Type', 'text/javascript');
      res.send(script);
  });

  app.get('/auth/callback',
    passport.authenticate('auth0', { failureRedirect: '/not-authorized.html' }),
    function(req, res) {
      res.redirect('/private/index.html');
    });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/auth');
  };

  function addToUsers(req, res, next) {
    api.db.collection('users').findOne({username: req.user.username},
      function(err, user) {
        if(!user) {
          var user = {username: req.user.username,
            earliestDueDate: new Date().setYear(3000),
            fullName: req.user._json.name,
            imgUrl: req.user._json.avatar_url};
          api.db.collection('users').insert(user)
        }
        next();
      });
  }

  return app;
}

module.exports['getApp'] = getApp;

var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

if (require.main === module) {
  var app = getApp(passport, Auth0Strategy);
  var server = require('http').createServer(app);
  server.listen(process.env.PORT || 3000, function () {});
}
