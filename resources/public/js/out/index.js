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

navigatorId.watch(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loggedInUser","loggedInUser",-239133008),currentUser,new cljs.core.Keyword(null,"onlogin","onlogin",-866049072),index.verifyAssertion,new cljs.core.Keyword(null,"onlogout","onlogout",2097570828),codepair.signoutUser], null)));

return navigatorId.request();
});
index.verifyAssertion = (function verifyAssertion(assertion){
util.console_log.call(null,[cljs.core.str("verifyAssertion CALLED / assertion: "),cljs.core.str(assertion)].join(''));

return codepair.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/verify-assertion",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assertion","assertion",-1645134882),assertion], null),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),cljs.core.partial.call(null,codepair.basicHandler,(function (e,xhr){
var data = xhr.getResponseText();
var responseF = cljs.reader.read_string.call(null,data);
return index.user_handler.call(null,e,xhr,responseF);
}))], null));
});
index.login_button = (function login_button(state,owner){
if(typeof index.t9080 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t9080 = (function (owner,state,login_button,meta9081){
this.owner = owner;
this.state = state;
this.login_button = login_button;
this.meta9081 = meta9081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t9080.prototype.om$core$IRender$ = true;

index.t9080.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"onClick": index.loginClickHandler},"login");
});

index.t9080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9082){
var self__ = this;
var _9082__$1 = this;
return self__.meta9081;
});

index.t9080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9082,meta9081__$1){
var self__ = this;
var _9082__$1 = this;
return (new index.t9080(self__.owner,self__.state,self__.login_button,meta9081__$1));
});

index.t9080.cljs$lang$type = true;

index.t9080.cljs$lang$ctorStr = "index/t9080";

index.t9080.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t9080");
});

index.__GT_t9080 = (function __GT_t9080(owner__$1,state__$1,login_button__$1,meta9081){
return (new index.t9080(owner__$1,state__$1,login_button__$1,meta9081));
});

}

return (new index.t9080(owner,state,login_button,null));
});
index.logout_button = (function logout_button(state,owner){
if(typeof index.t9088 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t9088 = (function (owner,state,logout_button,meta9089){
this.owner = owner;
this.state = state;
this.logout_button = logout_button;
this.meta9089 = meta9089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t9088.prototype.om$core$IRender$ = true;

index.t9088.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div(null,"logout");
});

index.t9088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9090){
var self__ = this;
var _9090__$1 = this;
return self__.meta9089;
});

index.t9088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9090,meta9089__$1){
var self__ = this;
var _9090__$1 = this;
return (new index.t9088(self__.owner,self__.state,self__.logout_button,meta9089__$1));
});

index.t9088.cljs$lang$type = true;

index.t9088.cljs$lang$ctorStr = "index/t9088";

index.t9088.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t9088");
});

index.__GT_t9088 = (function __GT_t9088(owner__$1,state__$1,logout_button__$1,meta9089){
return (new index.t9088(owner__$1,state__$1,logout_button__$1,meta9089));
});

}

return (new index.t9088(owner,state,logout_button,null));
});
index.enable_signin = (function enable_signin(){
return om.core.root.call(null,index.login_button,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.enable_signout = (function enable_signout(){
return om.core.root.call(null,index.logout_button,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.session_check = (function session_check(){
if((new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)) == null)){
return index.enable_signin.call(null);
} else {
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
common.load_tags.call(null,index.tags_handler);

common.load_availabilities.call(null,index.availabilities_handler);

return common.load_user_data.call(null,index.user_handler);
}));

//# sourceMappingURL=index.js.map