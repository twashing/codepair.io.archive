// Compiled by ClojureScript 0.0-2505
goog.provide('index');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('codepair');
goog.require('cljs.reader');
index.onClickHandler = (function onClickHandler(){
var currentUser = "twashing@gmail.com";
var navigatorId = navigator.id;
codepair.console_log.call(null,"Signin CLICKED");

navigatorId.watch(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loggedInUser","loggedInUser",-239133008),currentUser,new cljs.core.Keyword(null,"onlogin","onlogin",-866049072),codepair.verifyAssertion,new cljs.core.Keyword(null,"onlogout","onlogout",2097570828),codepair.signoutUser], null)));

return navigatorId.request();
});
index.start = (function start(){
var temp__4124__auto__ = goog.dom.getElement("signin");
if(cljs.core.truth_(temp__4124__auto__)){
var signinLink = temp__4124__auto__;
return signinLink.onclick = index.onClickHandler;
} else {
return null;
}
});
index.start.call(null);

//# sourceMappingURL=index.js.map