// Compiled by ClojureScript 0.0-2505
goog.provide('index');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('view');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('util');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('codepair');
goog.require('common');
goog.require('cljs.reader');





index.loginClickHandler = (function loginClickHandler(){
var currentUser = "twashing@gmail.com";
var navigatorId = navigator.id;
util.console_log.call(null,"Signin CLICKED");

navigatorId.watch(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loggedInUser","loggedInUser",-239133008),currentUser,new cljs.core.Keyword(null,"onlogin","onlogin",-866049072),index.verifyAssertion,new cljs.core.Keyword(null,"onlogout","onlogout",2097570828),common.signoutUser], null)));

return navigatorId.request();
});
index.logoutClickHandler = (function logoutClickHandler(){
var currentUser = "twashing@gmail.com";
var navigatorId = navigator.id;
util.console_log.call(null,"Signin CLICKED");

return navigatorId.logout();
});
index.verifyAssertion = (function verifyAssertion(assertion){
util.console_log.call(null,[cljs.core.str("verifyAssertion CALLED / assertion: "),cljs.core.str(assertion)].join(''));

return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/verify-assertion",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assertion","assertion",-1645134882),assertion], null),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),cljs.core.partial.call(null,common.basicHandler,(function (e,xhr){
var data = xhr.getResponseText();
var responseF = cljs.reader.read_string.call(null,data);
common.user_handler.call(null,e,xhr,responseF);

return index.session_check.call(null);
}))], null));
});
index.enable_signin = (function enable_signin(){
return om.core.root.call(null,(function (state,owner){
if(typeof index.t7482 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t7482 = (function (owner,state,enable_signin,meta7483){
this.owner = owner;
this.state = state;
this.enable_signin = enable_signin;
this.meta7483 = meta7483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t7482.prototype.om$core$IRender$ = true;

index.t7482.prototype.om$core$IRender$render$arity$1 = (function (this__5894__auto__){
var self__ = this;
var this__5894__auto____$1 = this;
return React.DOM.div({"onClick": index.loginClickHandler},"login");
});

index.t7482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7484){
var self__ = this;
var _7484__$1 = this;
return self__.meta7483;
});

index.t7482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7484,meta7483__$1){
var self__ = this;
var _7484__$1 = this;
return (new index.t7482(self__.owner,self__.state,self__.enable_signin,meta7483__$1));
});

index.t7482.cljs$lang$type = true;

index.t7482.cljs$lang$ctorStr = "index/t7482";

index.t7482.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t7482");
});

index.__GT_t7482 = (function __GT_t7482(owner__$1,state__$1,enable_signin__$1,meta7483){
return (new index.t7482(owner__$1,state__$1,enable_signin__$1,meta7483));
});

}

return (new index.t7482(owner,state,enable_signin,null));
}),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.enable_signout = (function enable_signout(){
return om.core.root.call(null,(function (state,owner){
if(typeof index.t7488 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t7488 = (function (owner,state,enable_signout,meta7489){
this.owner = owner;
this.state = state;
this.enable_signout = enable_signout;
this.meta7489 = meta7489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t7488.prototype.om$core$IRender$ = true;

index.t7488.prototype.om$core$IRender$render$arity$1 = (function (this__5894__auto__){
var self__ = this;
var this__5894__auto____$1 = this;
return React.DOM.div({"onClick": index.logoutClickHandler},"logout");
});

index.t7488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7490){
var self__ = this;
var _7490__$1 = this;
return self__.meta7489;
});

index.t7488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7490,meta7489__$1){
var self__ = this;
var _7490__$1 = this;
return (new index.t7488(self__.owner,self__.state,self__.enable_signout,meta7489__$1));
});

index.t7488.cljs$lang$type = true;

index.t7488.cljs$lang$ctorStr = "index/t7488";

index.t7488.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t7488");
});

index.__GT_t7488 = (function __GT_t7488(owner__$1,state__$1,enable_signout__$1,meta7489){
return (new index.t7488(owner__$1,state__$1,enable_signout__$1,meta7489));
});

}

return (new index.t7488(owner,state,enable_signout,null));
}),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.show_listings = (function() {
var show_listings = null;
var show_listings__0 = (function (){
return show_listings.call(null,"app-container");
});
var show_listings__1 = (function (element_container){
om.core.root.call(null,(function (state,owner){
if(typeof index.t7496 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t7496 = (function (owner,state,element_container,show_listings,meta7497){
this.owner = owner;
this.state = state;
this.element_container = element_container;
this.show_listings = show_listings;
this.meta7497 = meta7497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t7496.prototype.om$core$IRender$ = true;

index.t7496.prototype.om$core$IRender$render$arity$1 = (function (this__5894__auto__){
var self__ = this;
var this__5894__auto____$1 = this;
return React.DOM.div(null,React.DOM.div({"id": "tags"}),React.DOM.div({"id": "availabilities"}));
});

index.t7496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7498){
var self__ = this;
var _7498__$1 = this;
return self__.meta7497;
});

index.t7496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7498,meta7497__$1){
var self__ = this;
var _7498__$1 = this;
return (new index.t7496(self__.owner,self__.state,self__.element_container,self__.show_listings,meta7497__$1));
});

index.t7496.cljs$lang$type = true;

index.t7496.cljs$lang$ctorStr = "index/t7496";

index.t7496.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t7496");
});

index.__GT_t7496 = (function __GT_t7496(owner__$1,state__$1,element_container__$1,show_listings__$1,meta7497){
return (new index.t7496(owner__$1,state__$1,element_container__$1,show_listings__$1,meta7497));
});

}

return (new index.t7496(owner,state,element_container,show_listings,null));
}),cljs.core.deref.call(null,common.app_state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(element_container)], null));

common.load_tags.call(null,index.tags_handler);

return common.load_availabilities.call(null,index.availabilities_handler);
});
show_listings = function(element_container){
switch(arguments.length){
case 0:
return show_listings__0.call(this);
case 1:
return show_listings__1.call(this,element_container);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
show_listings.cljs$core$IFn$_invoke$arity$0 = show_listings__0;
show_listings.cljs$core$IFn$_invoke$arity$1 = show_listings__1;
return show_listings;
})()
;
index.show_landing = (function show_landing(){
var listings_container = "listings-container";
om.core.root.call(null,((function (listings_container){
return (function (state,owner){
return view.landing_view.call(null,listings_container);
});})(listings_container))
,cljs.core.deref.call(null,common.app_state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app-container")], null));

$(document).foundation("tab","reflow");

index.show_listings.call(null,listings_container);

var action__4634__auto___7517 = ((function (listings_container){
return (function (params__4635__auto__){
if(cljs.core.map_QMARK_.call(null,params__4635__auto__)){
var map__7509 = params__4635__auto__;
var map__7509__$1 = ((cljs.core.seq_QMARK_.call(null,map__7509))?cljs.core.apply.call(null,cljs.core.hash_map,map__7509):map__7509);
var params = map__7509__$1;
console.log([cljs.core.str("Listings Called: "),cljs.core.str(params)].join(''));

return $("#tab-listings-link").click();
} else {
if(cljs.core.vector_QMARK_.call(null,params__4635__auto__)){
var map__7510 = params__4635__auto__;
var map__7510__$1 = ((cljs.core.seq_QMARK_.call(null,map__7510))?cljs.core.apply.call(null,cljs.core.hash_map,map__7510):map__7510);
var params = map__7510__$1;
console.log([cljs.core.str("Listings Called: "),cljs.core.str(params)].join(''));

return $("#tab-listings-link").click();
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/listings",action__4634__auto___7517);


var action__4634__auto___7518 = ((function (listings_container){
return (function (params__4635__auto__){
if(cljs.core.map_QMARK_.call(null,params__4635__auto__)){
var map__7511 = params__4635__auto__;
var map__7511__$1 = ((cljs.core.seq_QMARK_.call(null,map__7511))?cljs.core.apply.call(null,cljs.core.hash_map,map__7511):map__7511);
var params = map__7511__$1;
console.log([cljs.core.str("Availabilities Called: "),cljs.core.str(params)].join(''));

return $("#tab-availabilities-link").click();
} else {
if(cljs.core.vector_QMARK_.call(null,params__4635__auto__)){
var map__7512 = params__4635__auto__;
var map__7512__$1 = ((cljs.core.seq_QMARK_.call(null,map__7512))?cljs.core.apply.call(null,cljs.core.hash_map,map__7512):map__7512);
var params = map__7512__$1;
console.log([cljs.core.str("Availabilities Called: "),cljs.core.str(params)].join(''));

return $("#tab-availabilities-link").click();
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/availabilities",action__4634__auto___7518);


var action__4634__auto___7519 = ((function (listings_container){
return (function (params__4635__auto__){
if(cljs.core.map_QMARK_.call(null,params__4635__auto__)){
var map__7513 = params__4635__auto__;
var map__7513__$1 = ((cljs.core.seq_QMARK_.call(null,map__7513))?cljs.core.apply.call(null,cljs.core.hash_map,map__7513):map__7513);
var params = map__7513__$1;
console.log([cljs.core.str("Session Called: "),cljs.core.str(params)].join(''));

return $("#tab-session-link").click();
} else {
if(cljs.core.vector_QMARK_.call(null,params__4635__auto__)){
var map__7514 = params__4635__auto__;
var map__7514__$1 = ((cljs.core.seq_QMARK_.call(null,map__7514))?cljs.core.apply.call(null,cljs.core.hash_map,map__7514):map__7514);
var params = map__7514__$1;
console.log([cljs.core.str("Session Called: "),cljs.core.str(params)].join(''));

return $("#tab-session-link").click();
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/session",action__4634__auto___7519);


var action__4634__auto__ = ((function (listings_container){
return (function (params__4635__auto__){
if(cljs.core.map_QMARK_.call(null,params__4635__auto__)){
var map__7515 = params__4635__auto__;
var map__7515__$1 = ((cljs.core.seq_QMARK_.call(null,map__7515))?cljs.core.apply.call(null,cljs.core.hash_map,map__7515):map__7515);
var params = map__7515__$1;
console.log([cljs.core.str("Account Called: "),cljs.core.str(params)].join(''));

return $("#tab-account-link").click();
} else {
if(cljs.core.vector_QMARK_.call(null,params__4635__auto__)){
var map__7516 = params__4635__auto__;
var map__7516__$1 = ((cljs.core.seq_QMARK_.call(null,map__7516))?cljs.core.apply.call(null,cljs.core.hash_map,map__7516):map__7516);
var params = map__7516__$1;
console.log([cljs.core.str("Account Called: "),cljs.core.str(params)].join(''));

return $("#tab-account-link").click();
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/account",action__4634__auto__);

return ((function (action__4634__auto__,listings_container){
return (function() { 
var G__7520__delegate = function (args__4633__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/account",args__4633__auto__);
};
var G__7520 = function (var_args){
var args__4633__auto__ = null;
if (arguments.length > 0) {
  args__4633__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__7520__delegate.call(this,args__4633__auto__);};
G__7520.cljs$lang$maxFixedArity = 0;
G__7520.cljs$lang$applyTo = (function (arglist__7521){
var args__4633__auto__ = cljs.core.seq(arglist__7521);
return G__7520__delegate(args__4633__auto__);
});
G__7520.cljs$core$IFn$_invoke$arity$variadic = G__7520__delegate;
return G__7520;
})()
;
;})(action__4634__auto__,listings_container))
});
index.route = (function route(loc){
return secretary.core.dispatch_BANG_.call(null,loc);
});
goog.exportSymbol('index.route', index.route);
index.session_check = (function session_check(){
if((new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)) == null)){
index.show_listings.call(null);

return index.enable_signin.call(null);
} else {
index.show_landing.call(null);

return index.enable_signout.call(null);
}
});
index.tags_handler = (function tags_handler(e,xhr,data){
cljs.core.swap_BANG_.call(null,common.app_state,(function (e__$1){
return cljs.core.update_in.call(null,e__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null),(function (f){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,data);
}));
}));

return om.core.root.call(null,view.tags_view,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("tags")], null));
});
index.availabilities_handler = (function availabilities_handler(e,xhr,data){
cljs.core.swap_BANG_.call(null,common.app_state,(function (e__$1){
return cljs.core.update_in.call(null,e__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availabilities","availabilities",-9113555)], null),(function (f){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,data);
}));
}));

return om.core.root.call(null,view.availabilities_view,new cljs.core.Keyword(null,"availabilities","availabilities",-9113555).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("availabilities")], null));
});
util.ready.call(null,(function (_){
return common.load_user_data.call(null,(function (e,xhr,data){
common.user_handler.call(null,e,xhr,data);

return index.session_check.call(null);
}));
}));

//# sourceMappingURL=index.js.map