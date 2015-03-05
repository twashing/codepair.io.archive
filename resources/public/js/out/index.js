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
if(typeof index.t34372 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t34372 = (function (owner,state,enable_signin,meta34373){
this.owner = owner;
this.state = state;
this.enable_signin = enable_signin;
this.meta34373 = meta34373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t34372.prototype.om$core$IRender$ = true;

index.t34372.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return React.DOM.div({"onClick": index.loginClickHandler},"login");
});

index.t34372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34374){
var self__ = this;
var _34374__$1 = this;
return self__.meta34373;
});

index.t34372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34374,meta34373__$1){
var self__ = this;
var _34374__$1 = this;
return (new index.t34372(self__.owner,self__.state,self__.enable_signin,meta34373__$1));
});

index.t34372.cljs$lang$type = true;

index.t34372.cljs$lang$ctorStr = "index/t34372";

index.t34372.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t34372");
});

index.__GT_t34372 = (function __GT_t34372(owner__$1,state__$1,enable_signin__$1,meta34373){
return (new index.t34372(owner__$1,state__$1,enable_signin__$1,meta34373));
});

}

return (new index.t34372(owner,state,enable_signin,null));
}),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.enable_signout = (function enable_signout(){
return om.core.root.call(null,(function (state,owner){
if(typeof index.t34378 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t34378 = (function (owner,state,enable_signout,meta34379){
this.owner = owner;
this.state = state;
this.enable_signout = enable_signout;
this.meta34379 = meta34379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t34378.prototype.om$core$IRender$ = true;

index.t34378.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return React.DOM.div({"onClick": index.logoutClickHandler},"logout");
});

index.t34378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34380){
var self__ = this;
var _34380__$1 = this;
return self__.meta34379;
});

index.t34378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34380,meta34379__$1){
var self__ = this;
var _34380__$1 = this;
return (new index.t34378(self__.owner,self__.state,self__.enable_signout,meta34379__$1));
});

index.t34378.cljs$lang$type = true;

index.t34378.cljs$lang$ctorStr = "index/t34378";

index.t34378.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t34378");
});

index.__GT_t34378 = (function __GT_t34378(owner__$1,state__$1,enable_signout__$1,meta34379){
return (new index.t34378(owner__$1,state__$1,enable_signout__$1,meta34379));
});

}

return (new index.t34378(owner,state,enable_signout,null));
}),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.show_listings = (function() {
var show_listings = null;
var show_listings__0 = (function (){
return show_listings.call(null,"app-container");
});
var show_listings__1 = (function (element_container){
om.core.root.call(null,(function (state,owner){
if(typeof index.t34391 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t34391 = (function (owner,state,element_container,show_listings,meta34392){
this.owner = owner;
this.state = state;
this.element_container = element_container;
this.show_listings = show_listings;
this.meta34392 = meta34392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t34391.prototype.om$core$IRender$ = true;

index.t34391.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
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
return (function (p1__34381_SHARP_){
return cljs.core.re_find.call(null,/\w/,p1__34381_SHARP_);
});})(this__7159__auto____$1))
,clojure.string.split.call(null,$("#availability-tags").val(),/\s/)))], null);
var group_name = "codepair";
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

index.t34391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34393){
var self__ = this;
var _34393__$1 = this;
return self__.meta34392;
});

index.t34391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34393,meta34392__$1){
var self__ = this;
var _34393__$1 = this;
return (new index.t34391(self__.owner,self__.state,self__.element_container,self__.show_listings,meta34392__$1));
});

index.t34391.cljs$lang$type = true;

index.t34391.cljs$lang$ctorStr = "index/t34391";

index.t34391.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t34391");
});

index.__GT_t34391 = (function __GT_t34391(owner__$1,state__$1,element_container__$1,show_listings__$1,meta34392){
return (new index.t34391(owner__$1,state__$1,element_container__$1,show_listings__$1,meta34392));
});

}

return (new index.t34391(owner,state,element_container,show_listings,null));
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

secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__5899__auto___34417 = ((function (listings_container){
return (function (params__5900__auto__){
if(cljs.core.map_QMARK_.call(null,params__5900__auto__)){
var map__34409 = params__5900__auto__;
var map__34409__$1 = ((cljs.core.seq_QMARK_.call(null,map__34409))?cljs.core.apply.call(null,cljs.core.hash_map,map__34409):map__34409);
var params = map__34409__$1;
return view.switch_tab.call(null,"#tab-listings-link","/#");
} else {
if(cljs.core.vector_QMARK_.call(null,params__5900__auto__)){
var map__34410 = params__5900__auto__;
var map__34410__$1 = ((cljs.core.seq_QMARK_.call(null,map__34410))?cljs.core.apply.call(null,cljs.core.hash_map,map__34410):map__34410);
var params = map__34410__$1;
return view.switch_tab.call(null,"#tab-listings-link","/#");
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/listings",action__5899__auto___34417);


var action__5899__auto___34418 = ((function (listings_container){
return (function (params__5900__auto__){
if(cljs.core.map_QMARK_.call(null,params__5900__auto__)){
var map__34411 = params__5900__auto__;
var map__34411__$1 = ((cljs.core.seq_QMARK_.call(null,map__34411))?cljs.core.apply.call(null,cljs.core.hash_map,map__34411):map__34411);
var params = map__34411__$1;
return view.switch_tab.call(null,"#tab-availabilities-link","/#availabilities");
} else {
if(cljs.core.vector_QMARK_.call(null,params__5900__auto__)){
var map__34412 = params__5900__auto__;
var map__34412__$1 = ((cljs.core.seq_QMARK_.call(null,map__34412))?cljs.core.apply.call(null,cljs.core.hash_map,map__34412):map__34412);
var params = map__34412__$1;
return view.switch_tab.call(null,"#tab-availabilities-link","/#availabilities");
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/availabilities",action__5899__auto___34418);


var action__5899__auto___34419 = ((function (listings_container){
return (function (params__5900__auto__){
if(cljs.core.map_QMARK_.call(null,params__5900__auto__)){
var map__34413 = params__5900__auto__;
var map__34413__$1 = ((cljs.core.seq_QMARK_.call(null,map__34413))?cljs.core.apply.call(null,cljs.core.hash_map,map__34413):map__34413);
var params = map__34413__$1;
return view.switch_tab.call(null,"#tab-session-link","/#session");
} else {
if(cljs.core.vector_QMARK_.call(null,params__5900__auto__)){
var map__34414 = params__5900__auto__;
var map__34414__$1 = ((cljs.core.seq_QMARK_.call(null,map__34414))?cljs.core.apply.call(null,cljs.core.hash_map,map__34414):map__34414);
var params = map__34414__$1;
return view.switch_tab.call(null,"#tab-session-link","/#session");
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/session",action__5899__auto___34419);


var action__5899__auto__ = ((function (listings_container){
return (function (params__5900__auto__){
if(cljs.core.map_QMARK_.call(null,params__5900__auto__)){
var map__34415 = params__5900__auto__;
var map__34415__$1 = ((cljs.core.seq_QMARK_.call(null,map__34415))?cljs.core.apply.call(null,cljs.core.hash_map,map__34415):map__34415);
var params = map__34415__$1;
return view.switch_tab.call(null,"#tab-account-link","/#account");
} else {
if(cljs.core.vector_QMARK_.call(null,params__5900__auto__)){
var map__34416 = params__5900__auto__;
var map__34416__$1 = ((cljs.core.seq_QMARK_.call(null,map__34416))?cljs.core.apply.call(null,cljs.core.hash_map,map__34416):map__34416);
var params = map__34416__$1;
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
var G__34420__delegate = function (args__5898__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/account",args__5898__auto__);
};
var G__34420 = function (var_args){
var args__5898__auto__ = null;
if (arguments.length > 0) {
  args__5898__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__34420__delegate.call(this,args__5898__auto__);};
G__34420.cljs$lang$maxFixedArity = 0;
G__34420.cljs$lang$applyTo = (function (arglist__34421){
var args__5898__auto__ = cljs.core.seq(arglist__34421);
return G__34420__delegate(args__5898__auto__);
});
G__34420.cljs$core$IFn$_invoke$arity$variadic = G__34420__delegate;
return G__34420;
})()
;
;})(action__5899__auto__,listings_container))
});
index.route = (function route(loc){
return secretary.core.dispatch_BANG_.call(null,loc);
});
goog.exportSymbol('index.route', index.route);
index.session_check = (function session_check(){
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