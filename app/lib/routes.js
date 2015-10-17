Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    this.render('AccessDenied');
  } else
  {
    this.next();
  }
}, {only: ['quotesList', 'insertQuote']});


Router.route('/', {
  name: 'quotesList',
  controller: 'QuotesListController',
  where: 'client'
});

Router.route('insert_quote', {
  name: 'insertQuote',
  controller: 'InsertQuoteController',
  where: 'client'
});


Router.route('/quotes/id', {
  name: 'quotesId',
  controller: 'IdController',
  where: 'client'
});
