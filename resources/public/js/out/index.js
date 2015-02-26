// Compiled by ClojureScript 0.0-2505
goog.provide('index');
goog.require('cljs.core');
goog.require('goog.dom');
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
index.verifyAssertion = (function verifyAssertion(assertion){
util.console_log.call(null,[cljs.core.str("verifyAssertion CALLED / assertion: "),cljs.core.str(assertion)].join(''));

return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/verify-assertion",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assertion","assertion",-1645134882),assertion], null),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),cljs.core.partial.call(null,common.basicHandler,(function (e,xhr){
var data = xhr.getResponseText();
var responseF = cljs.reader.read_string.call(null,data);
return index.user_handler.call(null,e,xhr,responseF);
}))], null));
});
index.enable_signin = (function enable_signin(){
return om.core.root.call(null,(function (state,owner){
if(typeof index.t6968 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t6968 = (function (owner,state,enable_signin,meta6969){
this.owner = owner;
this.state = state;
this.enable_signin = enable_signin;
this.meta6969 = meta6969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t6968.prototype.om$core$IRender$ = true;

index.t6968.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"onClick": index.loginClickHandler},"login");
});

index.t6968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6970){
var self__ = this;
var _6970__$1 = this;
return self__.meta6969;
});

index.t6968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6970,meta6969__$1){
var self__ = this;
var _6970__$1 = this;
return (new index.t6968(self__.owner,self__.state,self__.enable_signin,meta6969__$1));
});

index.t6968.cljs$lang$type = true;

index.t6968.cljs$lang$ctorStr = "index/t6968";

index.t6968.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t6968");
});

index.__GT_t6968 = (function __GT_t6968(owner__$1,state__$1,enable_signin__$1,meta6969){
return (new index.t6968(owner__$1,state__$1,enable_signin__$1,meta6969));
});

}

return (new index.t6968(owner,state,enable_signin,null));
}),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.enable_signout = (function enable_signout(){
return om.core.root.call(null,(function (state,owner){
if(typeof index.t6976 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t6976 = (function (owner,state,enable_signout,meta6977){
this.owner = owner;
this.state = state;
this.enable_signout = enable_signout;
this.meta6977 = meta6977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t6976.prototype.om$core$IRender$ = true;

index.t6976.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div(null,"logout");
});

index.t6976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6978){
var self__ = this;
var _6978__$1 = this;
return self__.meta6977;
});

index.t6976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6978,meta6977__$1){
var self__ = this;
var _6978__$1 = this;
return (new index.t6976(self__.owner,self__.state,self__.enable_signout,meta6977__$1));
});

index.t6976.cljs$lang$type = true;

index.t6976.cljs$lang$ctorStr = "index/t6976";

index.t6976.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t6976");
});

index.__GT_t6976 = (function __GT_t6976(owner__$1,state__$1,enable_signout__$1,meta6977){
return (new index.t6976(owner__$1,state__$1,enable_signout__$1,meta6977));
});

}

return (new index.t6976(owner,state,enable_signout,null));
}),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.show_listings = (function() {
var show_listings = null;
var show_listings__0 = (function (){
return show_listings.call(null,"app-container");
});
var show_listings__1 = (function (element_container){
om.core.root.call(null,(function (state,owner){
if(typeof index.t6986 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t6986 = (function (owner,state,element_container,show_listings,meta6987){
this.owner = owner;
this.state = state;
this.element_container = element_container;
this.show_listings = show_listings;
this.meta6987 = meta6987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t6986.prototype.om$core$IRender$ = true;

index.t6986.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div(null,React.DOM.div({"id": "tags"}),React.DOM.div({"id": "availabilities"}));
});

index.t6986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6988){
var self__ = this;
var _6988__$1 = this;
return self__.meta6987;
});

index.t6986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6988,meta6987__$1){
var self__ = this;
var _6988__$1 = this;
return (new index.t6986(self__.owner,self__.state,self__.element_container,self__.show_listings,meta6987__$1));
});

index.t6986.cljs$lang$type = true;

index.t6986.cljs$lang$ctorStr = "index/t6986";

index.t6986.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t6986");
});

index.__GT_t6986 = (function __GT_t6986(owner__$1,state__$1,element_container__$1,show_listings__$1,meta6987){
return (new index.t6986(owner__$1,state__$1,element_container__$1,show_listings__$1,meta6987));
});

}

return (new index.t6986(owner,state,element_container,show_listings,null));
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

return index.show_listings.call(null,listings_container);
});
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
index.user_handler = (function user_handler(e,xhr,data){
cljs.core.swap_BANG_.call(null,common.app_state,(function (e__$1){
return cljs.core.update_in.call(null,e__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),(function (f){
return data;
}));
}));

return index.session_check.call(null);
});
util.ready.call(null,(function (_){
return common.load_user_data.call(null,index.user_handler);
}));

//# sourceMappingURL=index.js.map