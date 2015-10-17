Quotes = new Mongo.Collection('quotes');

Quotes.attachSchema(new SimpleSchema({
  quote: { 
    type: String,
    label: "Quote",
    max: 500
  },
  author: {
    type: String,
    label: "Author",
    max: 250
  },
  year: {
    type: Number,
    label: "2k Year"
  },
  createdBy: {
    type: String,
    autoValue: function (){return this.userId}
  }
}));

if (Meteor.isServer) {
  Quotes.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
