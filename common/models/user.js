
var disableAllMethods = require('./helper').disableAllMethods;
var redis = require('redis');
var client = redis.createClient()
var app = require('../../server/server')

module.exports = function (User) {
  disableAllMethods(User, ["create", "resetPassword", "login", "setPassword"]);

  User.afterRemote('login', function (ctx, modelInstance, next) {
    var fundoouser = app.models.user;
    try {
      if (typeof ctx.result.userId === 'undefined') {
        throw new Error('ID is missing');
      }
      User.find({ where: { id: ctx.result.userId } }, function (error, data) {
        if (error) {
          throw error;
        } else {
          ctx.result.firstName = data[0].firstName,
            ctx.result.lastName = data[0].lastName,
            ctx.result.email = data[0].email
          ctx.result.url = data[0].url
        }
        next();
      })
    } catch (e) {
      console.error('Error: ', e);
      if (e instanceof ERR_ASSERTION
        || e instanceof RangeError
        || e instanceof ReferenceError
        || e instanceof SyntaxError
        || e instanceof SystemError
        || e instanceof TypeError) {
        return cb('Something bad happened!');
      } else {
        return cb(e.message);
      }
    }
  });
}