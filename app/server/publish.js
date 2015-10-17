Meteor.publish('quotes', function (userId) {
 return Quotes.find({createdBy: userId});
});