var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

var ObjectId = Schema.Types.ObjectId
var agendaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
};

var agendaSchema = new mongoose.Schema({
  user_id: ObjectId,
  agenda: String
}, schemaOptions);

// scheduleSchema.pre('save', function(next) {
//   var user = this;
//   if (!user.isModified('password')) { return next(); }
//   bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(user.password, salt, null, function(err, hash) {
//       user.password = hash;
//       next();
//     });
//   });
// });
//
// scheduleSchema.methods.comparePassword = function(password, cb) {
//   bcrypt.compare(password, this.password, function(err, isMatch) {
//     cb(err, isMatch);
//   });
// };
//
// scheduleSchema.virtual('gravatar').get(function() {
//   if (!this.get('email')) {
//     return 'https://gravatar.com/avatar/?s=200&d=retro';
//   }
//   var md5 = crypto.createHash('md5').update(this.get('email')).digest('hex');
//   return 'https://gravatar.com/avatar/' + md5 + '?s=200&d=retro';
// });
//
// scheduleSchema.options.toJSON = {
//   transform: function(doc, ret, options) {
//     delete ret.password;
//     delete ret.passwordResetToken;
//     delete ret.passwordResetExpires;
//   }
// };

var Agenda = mongoose.model('Agenda', agendaSchema);

module.exports = Agenda;
