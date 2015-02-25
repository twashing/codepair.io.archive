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
if(typeof index.t9985 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t9985 = (function (owner,state,enable_signin,meta9986){
this.owner = owner;
this.state = state;
this.enable_signin = enable_signin;
this.meta9986 = meta9986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t9985.prototype.om$core$IRender$ = true;

index.t9985.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"onClick": index.loginClickHandler},"login");
});

index.t9985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9987){
var self__ = this;
var _9987__$1 = this;
return self__.meta9986;
});

index.t9985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9987,meta9986__$1){
var self__ = this;
var _9987__$1 = this;
return (new index.t9985(self__.owner,self__.state,self__.enable_signin,meta9986__$1));
});

index.t9985.cljs$lang$type = true;

index.t9985.cljs$lang$ctorStr = "index/t9985";

index.t9985.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t9985");
});

index.__GT_t9985 = (function __GT_t9985(owner__$1,state__$1,enable_signin__$1,meta9986){
return (new index.t9985(owner__$1,state__$1,enable_signin__$1,meta9986));
});

}

return (new index.t9985(owner,state,enable_signin,null));
}),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.enable_signout = (function enable_signout(){
return om.core.root.call(null,(function (state,owner){
if(typeof index.t9993 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t9993 = (function (owner,state,enable_signout,meta9994){
this.owner = owner;
this.state = state;
this.enable_signout = enable_signout;
this.meta9994 = meta9994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t9993.prototype.om$core$IRender$ = true;

index.t9993.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div(null,"logout");
});

index.t9993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9995){
var self__ = this;
var _9995__$1 = this;
return self__.meta9994;
});

index.t9993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9995,meta9994__$1){
var self__ = this;
var _9995__$1 = this;
return (new index.t9993(self__.owner,self__.state,self__.enable_signout,meta9994__$1));
});

index.t9993.cljs$lang$type = true;

index.t9993.cljs$lang$ctorStr = "index/t9993";

index.t9993.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t9993");
});

index.__GT_t9993 = (function __GT_t9993(owner__$1,state__$1,enable_signout__$1,meta9994){
return (new index.t9993(owner__$1,state__$1,enable_signout__$1,meta9994));
});

}

return (new index.t9993(owner,state,enable_signout,null));
}),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.show_listings = (function() {
var show_listings = null;
var show_listings__0 = (function (){
return show_listings.call(null,"app-container");
});
var show_listings__1 = (function (element_container){
om.core.root.call(null,(function (state,owner){
if(typeof index.t10003 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t10003 = (function (owner,state,element_container,show_listings,meta10004){
this.owner = owner;
this.state = state;
this.element_container = element_container;
this.show_listings = show_listings;
this.meta10004 = meta10004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t10003.prototype.om$core$IRender$ = true;

index.t10003.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div(null,React.DOM.div({"id": "tags"}),React.DOM.div({"id": "availabilities"}));
});

index.t10003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10005){
var self__ = this;
var _10005__$1 = this;
return self__.meta10004;
});

index.t10003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10005,meta10004__$1){
var self__ = this;
var _10005__$1 = this;
return (new index.t10003(self__.owner,self__.state,self__.element_container,self__.show_listings,meta10004__$1));
});

index.t10003.cljs$lang$type = true;

index.t10003.cljs$lang$ctorStr = "index/t10003";

index.t10003.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t10003");
});

index.__GT_t10003 = (function __GT_t10003(owner__$1,state__$1,element_container__$1,show_listings__$1,meta10004){
return (new index.t10003(owner__$1,state__$1,element_container__$1,show_listings__$1,meta10004));
});

}

return (new index.t10003(owner,state,element_container,show_listings,null));
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
if(typeof index.t10013 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t10013 = (function (owner,state,listings_container,show_landing,meta10014){
this.owner = owner;
this.state = state;
this.listings_container = listings_container;
this.show_landing = show_landing;
this.meta10014 = meta10014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t10013.prototype.om$core$IRender$ = true;

index.t10013.prototype.om$core$IRender$render$arity$1 = ((function (listings_container){
return (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"id": "one"},React.DOM.div({"id": self__.listings_container}),React.DOM.div(null,"thing"));
});})(listings_container))
;

index.t10013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (listings_container){
return (function (_10015){
var self__ = this;
var _10015__$1 = this;
return self__.meta10014;
});})(listings_container))
;

index.t10013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (listings_container){
return (function (_10015,meta10014__$1){
var self__ = this;
var _10015__$1 = this;
return (new index.t10013(self__.owner,self__.state,self__.listings_container,self__.show_landing,meta10014__$1));
});})(listings_container))
;

index.t10013.cljs$lang$type = true;

index.t10013.cljs$lang$ctorStr = "index/t10013";

index.t10013.cljs$lang$ctorPrWriter = ((function (listings_container){
return (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t10013");
});})(listings_container))
;

index.__GT_t10013 = ((function (listings_container){
return (function __GT_t10013(owner__$1,state__$1,listings_container__$1,show_landing__$1,meta10014){
return (new index.t10013(owner__$1,state__$1,listings_container__$1,show_landing__$1,meta10014));
});})(listings_container))
;

}

return (new index.t10013(owner,state,listings_container,show_landing,null));
});})(listings_container))
,cljs.core.deref.call(null,common.app_state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app-container")], null));

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