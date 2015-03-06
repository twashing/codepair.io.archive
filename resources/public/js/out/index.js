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
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('common');
goog.require('cljs.reader');




index.loginClickHandler = (function loginClickHandler(){
return navigator.id.request();
});
index.logoutClickHandler = (function logoutClickHandler(){
return navigator.id.logout();
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
if(typeof index.t40830 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t40830 = (function (owner,state,enable_signin,meta40831){
this.owner = owner;
this.state = state;
this.enable_signin = enable_signin;
this.meta40831 = meta40831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t40830.prototype.om$core$IRender$ = true;

index.t40830.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return React.DOM.div({"onClick": index.loginClickHandler},"login");
});

index.t40830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40832){
var self__ = this;
var _40832__$1 = this;
return self__.meta40831;
});

index.t40830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40832,meta40831__$1){
var self__ = this;
var _40832__$1 = this;
return (new index.t40830(self__.owner,self__.state,self__.enable_signin,meta40831__$1));
});

index.t40830.cljs$lang$type = true;

index.t40830.cljs$lang$ctorStr = "index/t40830";

index.t40830.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t40830");
});

index.__GT_t40830 = (function __GT_t40830(owner__$1,state__$1,enable_signin__$1,meta40831){
return (new index.t40830(owner__$1,state__$1,enable_signin__$1,meta40831));
});

}

return (new index.t40830(owner,state,enable_signin,null));
}),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.enable_signout = (function enable_signout(){
return om.core.root.call(null,(function (state,owner){
if(typeof index.t40836 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t40836 = (function (owner,state,enable_signout,meta40837){
this.owner = owner;
this.state = state;
this.enable_signout = enable_signout;
this.meta40837 = meta40837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t40836.prototype.om$core$IRender$ = true;

index.t40836.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return React.DOM.div({"onClick": index.logoutClickHandler},"logout");
});

index.t40836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40838){
var self__ = this;
var _40838__$1 = this;
return self__.meta40837;
});

index.t40836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40838,meta40837__$1){
var self__ = this;
var _40838__$1 = this;
return (new index.t40836(self__.owner,self__.state,self__.enable_signout,meta40837__$1));
});

index.t40836.cljs$lang$type = true;

index.t40836.cljs$lang$ctorStr = "index/t40836";

index.t40836.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t40836");
});

index.__GT_t40836 = (function __GT_t40836(owner__$1,state__$1,enable_signout__$1,meta40837){
return (new index.t40836(owner__$1,state__$1,enable_signout__$1,meta40837));
});

}

return (new index.t40836(owner,state,enable_signout,null));
}),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.show_listings = (function() {
var show_listings = null;
var show_listings__0 = (function (){
return show_listings.call(null,"app-container");
});
var show_listings__1 = (function (element_container){
om.core.root.call(null,(function (state,owner){
if(typeof index.t40849 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t40849 = (function (owner,state,element_container,show_listings,meta40850){
this.owner = owner;
this.state = state;
this.element_container = element_container;
this.show_listings = show_listings;
this.meta40850 = meta40850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t40849.prototype.om$core$IRender$ = true;

index.t40849.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return React.DOM.div(null,React.DOM.nav({"className": "top-bar", "data-topbar": true, "role": "navigation"},React.DOM.ul({"className": "left", "id": "listing-search-field"},React.DOM.li({"className": "has-form"},React.DOM.div({"className": "row collapse"},React.DOM.div({"className": "large-8 small-9 columns"},sablono.interpreter.input.call(null,{"type": "text", "id": "search-field", "placeholder": "Find Availabilities"})),React.DOM.div({"className": "large-4 small-3 columns"},React.DOM.a({"className": "alert button expand", "href": "#", "onClick": ((function (this__7159__auto____$1){
return (function (e){
return common.search_availabilities.call(null,view.availabilities_handler,$("#search-field").val());
});})(this__7159__auto____$1))
},"Search"))))),((common.user_logged_in_QMARK_.call(null))?React.DOM.ul({"className": "right", "id": "listing-create-button"},React.DOM.li({"className": "has-form show-for-large-up"},React.DOM.a({"className": "button", "href": "#", "onClick": ((function (this__7159__auto____$1){
return (function (e){
var syncfn = ((function (this__7159__auto____$1){
return (function (){
var availability = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"ongoing","ongoing",-30673877),new cljs.core.Keyword(null,"title","title",636505583),$("#availability-title").val(),new cljs.core.Keyword(null,"description","description",-1428560544),$("#availability-description").val(),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.mapv.call(null,((function (this__7159__auto____$1){
return (function (e__$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.replace.call(null,clojure.string.lower_case.call(null,e__$1),/\-/,"")], null);
});})(this__7159__auto____$1))
,cljs.core.filter.call(null,((function (this__7159__auto____$1){
return (function (p1__40839_SHARP_){
return cljs.core.re_find.call(null,/\w/,p1__40839_SHARP_);
});})(this__7159__auto____$1))
,clojure.string.split.call(null,$("#availability-tags").val(),/\s/)))], null);
var group_name = new cljs.core.Keyword(null,"groupname","groupname",-493355733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(common.get_app_state.call(null)));
util.console_log.call(null,[cljs.core.str(availability)].join(''));

return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/add-availability?groupname="),cljs.core.str(group_name)].join(''),new cljs.core.Keyword(null,"data","data",-232669377),availability,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),common.localCommonHandler.call(null,((function (availability,group_name,this__7159__auto____$1){
return (function (e__$1,xhr,data){
util.console_log.call(null,[cljs.core.str("SUCCESS: "),cljs.core.str(data)].join(''));

return window.location = "/";
});})(availability,group_name,this__7159__auto____$1))
)], null));
});})(this__7159__auto____$1))
;
$("#availability-title").val("");

$("#availability-description").val("");

$("#availability-tags").val("");

$("#availability-save").off("click");

$("#availability-save").click(syncfn);

return secretary.core.dispatch_BANG_.call(null,"/availabilities");
});})(this__7159__auto____$1))
},"Create"))):null)),React.DOM.div({"id": "tags"}),React.DOM.div({"id": "availabilities"}));
});

index.t40849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40851){
var self__ = this;
var _40851__$1 = this;
return self__.meta40850;
});

index.t40849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40851,meta40850__$1){
var self__ = this;
var _40851__$1 = this;
return (new index.t40849(self__.owner,self__.state,self__.element_container,self__.show_listings,meta40850__$1));
});

index.t40849.cljs$lang$type = true;

index.t40849.cljs$lang$ctorStr = "index/t40849";

index.t40849.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t40849");
});

index.__GT_t40849 = (function __GT_t40849(owner__$1,state__$1,element_container__$1,show_listings__$1,meta40850){
return (new index.t40849(owner__$1,state__$1,element_container__$1,show_listings__$1,meta40850));
});

}

return (new index.t40849(owner,state,element_container,show_listings,null));
}),cljs.core.deref.call(null,common.app_state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(element_container)], null));

common.load_tags.call(null,index.tags_handler);

return common.load_availabilities.call(null,view.availabilities_handler);
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

var video_40875 = document.querySelector("video");
var constraints_40876 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"audio","audio",1819127321),false,new cljs.core.Keyword(null,"video","video",156888130),true,new cljs.core.Keyword(null,"maxWidth","maxWidth",-1375124795),(640),index.maxHight,(480)], true, false));
var __40877 = navigator.getUserMedia = (function (){var or__3622__auto__ = navigator.getUserMedia;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
var or__3622__auto____$1 = navigator.webkitGetUserMedia;
if(cljs.core.truth_(or__3622__auto____$1)){
return or__3622__auto____$1;
} else {
return navigator.mozGetUserMedia;
}
}
})();
var successCallback_40878 = ((function (video_40875,constraints_40876,__40877,listings_container){
return (function (stream){
window.stream = stream;

if(cljs.core.truth_(window.URL)){
return video_40875.src = window.URL.createObjectURL(stream);
} else {
return video_40875.src = stream;
}
});})(video_40875,constraints_40876,__40877,listings_container))
;
var errorCallback_40879 = ((function (video_40875,constraints_40876,__40877,successCallback_40878,listings_container){
return (function (error){
return util.console_log.call(null,[cljs.core.str("navigator.getUserMedia error: "),cljs.core.str(error)].join(''));
});})(video_40875,constraints_40876,__40877,successCallback_40878,listings_container))
;
navigator.getUserMedia(constraints_40876,successCallback_40878,errorCallback_40879);

secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__5899__auto___40880 = ((function (listings_container){
return (function (params__5900__auto__){
if(cljs.core.map_QMARK_.call(null,params__5900__auto__)){
var map__40867 = params__5900__auto__;
var map__40867__$1 = ((cljs.core.seq_QMARK_.call(null,map__40867))?cljs.core.apply.call(null,cljs.core.hash_map,map__40867):map__40867);
var params = map__40867__$1;
return view.switch_tab.call(null,"#tab-listings-link","/#");
} else {
if(cljs.core.vector_QMARK_.call(null,params__5900__auto__)){
var map__40868 = params__5900__auto__;
var map__40868__$1 = ((cljs.core.seq_QMARK_.call(null,map__40868))?cljs.core.apply.call(null,cljs.core.hash_map,map__40868):map__40868);
var params = map__40868__$1;
return view.switch_tab.call(null,"#tab-listings-link","/#");
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/listings",action__5899__auto___40880);


var action__5899__auto___40881 = ((function (listings_container){
return (function (params__5900__auto__){
if(cljs.core.map_QMARK_.call(null,params__5900__auto__)){
var map__40869 = params__5900__auto__;
var map__40869__$1 = ((cljs.core.seq_QMARK_.call(null,map__40869))?cljs.core.apply.call(null,cljs.core.hash_map,map__40869):map__40869);
var params = map__40869__$1;
return view.switch_tab.call(null,"#tab-availabilities-link","/#availabilities");
} else {
if(cljs.core.vector_QMARK_.call(null,params__5900__auto__)){
var map__40870 = params__5900__auto__;
var map__40870__$1 = ((cljs.core.seq_QMARK_.call(null,map__40870))?cljs.core.apply.call(null,cljs.core.hash_map,map__40870):map__40870);
var params = map__40870__$1;
return view.switch_tab.call(null,"#tab-availabilities-link","/#availabilities");
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/availabilities",action__5899__auto___40881);


var action__5899__auto___40882 = ((function (listings_container){
return (function (params__5900__auto__){
if(cljs.core.map_QMARK_.call(null,params__5900__auto__)){
var map__40871 = params__5900__auto__;
var map__40871__$1 = ((cljs.core.seq_QMARK_.call(null,map__40871))?cljs.core.apply.call(null,cljs.core.hash_map,map__40871):map__40871);
var params = map__40871__$1;
return view.switch_tab.call(null,"#tab-session-link","/#session");
} else {
if(cljs.core.vector_QMARK_.call(null,params__5900__auto__)){
var map__40872 = params__5900__auto__;
var map__40872__$1 = ((cljs.core.seq_QMARK_.call(null,map__40872))?cljs.core.apply.call(null,cljs.core.hash_map,map__40872):map__40872);
var params = map__40872__$1;
return view.switch_tab.call(null,"#tab-session-link","/#session");
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/session",action__5899__auto___40882);


var action__5899__auto__ = ((function (listings_container){
return (function (params__5900__auto__){
if(cljs.core.map_QMARK_.call(null,params__5900__auto__)){
var map__40873 = params__5900__auto__;
var map__40873__$1 = ((cljs.core.seq_QMARK_.call(null,map__40873))?cljs.core.apply.call(null,cljs.core.hash_map,map__40873):map__40873);
var params = map__40873__$1;
return view.switch_tab.call(null,"#tab-account-link","/#account");
} else {
if(cljs.core.vector_QMARK_.call(null,params__5900__auto__)){
var map__40874 = params__5900__auto__;
var map__40874__$1 = ((cljs.core.seq_QMARK_.call(null,map__40874))?cljs.core.apply.call(null,cljs.core.hash_map,map__40874):map__40874);
var params = map__40874__$1;
return view.switch_tab.call(null,"#tab-account-link","/#account");
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/account",action__5899__auto__);

return ((function (action__5899__auto__,listings_container){
return (function() { 
var G__40883__delegate = function (args__5898__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/account",args__5898__auto__);
};
var G__40883 = function (var_args){
var args__5898__auto__ = null;
if (arguments.length > 0) {
  args__5898__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__40883__delegate.call(this,args__5898__auto__);};
G__40883.cljs$lang$maxFixedArity = 0;
G__40883.cljs$lang$applyTo = (function (arglist__40884){
var args__5898__auto__ = cljs.core.seq(arglist__40884);
return G__40883__delegate(args__5898__auto__);
});
G__40883.cljs$core$IFn$_invoke$arity$variadic = G__40883__delegate;
return G__40883;
})()
;
;})(action__5899__auto__,listings_container))
});
index.route = (function route(loc){
return secretary.core.dispatch_BANG_.call(null,loc);
});
goog.exportSymbol('index.route', index.route);
index.session_check = (function session_check(){
var currentUser_40885 = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(common.get_app_state.call(null)));
var navigatorId_40886 = navigator.id;
navigatorId_40886.watch(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"loggedInUser","loggedInUser",-239133008),currentUser_40885,new cljs.core.Keyword(null,"onlogin","onlogin",-866049072),index.verifyAssertion,new cljs.core.Keyword(null,"onlogout","onlogout",2097570828),common.signoutUser], null)));

if(!(common.user_logged_in_QMARK_.call(null))){
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
util.ready.call(null,(function (_){
return common.load_user_data.call(null,(function (e,xhr,data){
common.user_handler.call(null,e,xhr,data);

return index.session_check.call(null);
}));
}));

//# sourceMappingURL=index.js.map