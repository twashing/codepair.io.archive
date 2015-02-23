// Compiled by ClojureScript 0.0-2505
goog.provide('index');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('util');
goog.require('landing');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('codepair');
goog.require('common');
goog.require('cljs.reader');
index.onClickHandler = (function onClickHandler(){
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
var _ = util.console_log.call(null,[cljs.core.str("sanity check... "),cljs.core.str(responseF)].join(''));
var groupname = new cljs.core.Keyword(null,"groupname","groupname",-493355733).cljs$core$IFn$_invoke$arity$1(responseF);
var username = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(responseF);
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(responseF);
return cljs.core.swap_BANG_.call(null,landing.user_state,((function (data,responseF,_,groupname,username,token){
return (function (inp){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"groupname","groupname",-493355733),groupname,new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"source","source",-433931539),responseF], null);
});})(data,responseF,_,groupname,username,token))
);
}))], null));
});
index.enable_signin = (function enable_signin(){
var temp__4124__auto__ = goog.dom.getElement("signin");
if(cljs.core.truth_(temp__4124__auto__)){
var signinLink = temp__4124__auto__;
return signinLink.onclick = index.onClickHandler;
} else {
return null;
}
});
index.tags_handler = (function tags_handler(e,xhr,data){
util.console_log.call(null,[cljs.core.str("tags: "),cljs.core.str(data)].join(''));

return cljs.core.swap_BANG_.call(null,common.app_state,(function (e__$1){
return cljs.core.update_in.call(null,e__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null),(function (f){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,data);
}));
}));
});
index.availabilities_handler = (function availabilities_handler(e,xhr,data){
util.console_log.call(null,[cljs.core.str("availabilities: "),cljs.core.str(data)].join(''));

return cljs.core.swap_BANG_.call(null,common.app_state,(function (e__$1){
return cljs.core.update_in.call(null,e__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availabilities","availabilities",-9113555)], null),(function (f){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,data);
}));
}));
});
util.ready.call(null,(function (_){
index.enable_signin.call(null);

common.list_tags.call(null,index.tags_handler);

return common.list_availabilities.call(null,index.availabilities_handler);
}));

//# sourceMappingURL=index.js.map