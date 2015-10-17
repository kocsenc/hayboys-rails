QuotesController = RouteController.extend({
  
  // A place to put your subscriptions
  // this.subscribe('items');
  // // add the subscription to the waitlist
  // this.subscribe('item', this.params._id).wait();
  
  subscriptions: function() {
    this.subscribe('quotes', Meteor.userId());
  },
  
   
  // A data function that can be used to automatically set the data context for
  // our layout. This function can also be used by hooks and plugins. For
  // example, the "dataNotFound" plugin calls this function to see if it
  // returns a null value, and if so, renders the not found template.
  // return Posts.findOne({_id: this.params._id});
  
  data: function () {
    return Quotes.findOne({_id: this.params._id});
  },
  
  insert: function () {
    this.render('InsertQuote', {});
  },

  list: function(){
    this.render('QuotesList', {});
  },

  edit: function(){
    this.render('EditQuote', {});
  }

});
