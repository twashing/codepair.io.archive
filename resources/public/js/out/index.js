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
if(typeof index.t12836 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t12836 = (function (owner,state,enable_signin,meta12837){
this.owner = owner;
this.state = state;
this.enable_signin = enable_signin;
this.meta12837 = meta12837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t12836.prototype.om$core$IRender$ = true;

index.t12836.prototype.om$core$IRender$render$arity$1 = (function (this__5894__auto__){
var self__ = this;
var this__5894__auto____$1 = this;
return React.DOM.div({"onClick": index.loginClickHandler},"login");
});

index.t12836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12838){
var self__ = this;
var _12838__$1 = this;
return self__.meta12837;
});

index.t12836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12838,meta12837__$1){
var self__ = this;
var _12838__$1 = this;
return (new index.t12836(self__.owner,self__.state,self__.enable_signin,meta12837__$1));
});

index.t12836.cljs$lang$type = true;

index.t12836.cljs$lang$ctorStr = "index/t12836";

index.t12836.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t12836");
});

index.__GT_t12836 = (function __GT_t12836(owner__$1,state__$1,enable_signin__$1,meta12837){
return (new index.t12836(owner__$1,state__$1,enable_signin__$1,meta12837));
});

}

return (new index.t12836(owner,state,enable_signin,null));
}),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.enable_signout = (function enable_signout(){
return om.core.root.call(null,(function (state,owner){
if(typeof index.t12842 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t12842 = (function (owner,state,enable_signout,meta12843){
this.owner = owner;
this.state = state;
this.enable_signout = enable_signout;
this.meta12843 = meta12843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t12842.prototype.om$core$IRender$ = true;

index.t12842.prototype.om$core$IRender$render$arity$1 = (function (this__5894__auto__){
var self__ = this;
var this__5894__auto____$1 = this;
return React.DOM.div({"onClick": index.logoutClickHandler},"logout");
});

index.t12842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12844){
var self__ = this;
var _12844__$1 = this;
return self__.meta12843;
});

index.t12842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12844,meta12843__$1){
var self__ = this;
var _12844__$1 = this;
return (new index.t12842(self__.owner,self__.state,self__.enable_signout,meta12843__$1));
});

index.t12842.cljs$lang$type = true;

index.t12842.cljs$lang$ctorStr = "index/t12842";

index.t12842.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t12842");
});

index.__GT_t12842 = (function __GT_t12842(owner__$1,state__$1,enable_signout__$1,meta12843){
return (new index.t12842(owner__$1,state__$1,enable_signout__$1,meta12843));
});

}

return (new index.t12842(owner,state,enable_signout,null));
}),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("aauth")], null));
});
index.show_listings = (function() {
var show_listings = null;
var show_listings__0 = (function (){
return show_listings.call(null,"app-container");
});
var show_listings__1 = (function (element_container){
om.core.root.call(null,(function (state,owner){
if(typeof index.t12856 !== 'undefined'){
} else {

/**
* @constructor
*/
index.t12856 = (function (owner,state,element_container,show_listings,meta12857){
this.owner = owner;
this.state = state;
this.element_container = element_container;
this.show_listings = show_listings;
this.meta12857 = meta12857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
index.t12856.prototype.om$core$IRender$ = true;

index.t12856.prototype.om$core$IRender$render$arity$1 = (function (this__5894__auto__){
var self__ = this;
var this__5894__auto____$1 = this;
return React.DOM.div(null,React.DOM.nav({"className": "top-bar", "data-topbar": true, "role": "navigation"},React.DOM.ul({"className": "left", "id": "listing-search-field"},React.DOM.li({"className": "has-form"},React.DOM.div({"className": "row collapse"},React.DOM.div({"className": "large-8 small-9 columns"},sablono.interpreter.input.call(null,{"type": "text", "id": "search-field", "placeholder": "Find Availabilities"})),React.DOM.div({"className": "large-4 small-3 columns"},React.DOM.a({"className": "alert button expand", "href": "#", "onClick": ((function (this__5894__auto____$1){
return (function (e){
return common.search_availabilities.call(null,common.availabilities_handler,$("#search-field").val());
});})(this__5894__auto____$1))
},"Search"))))),((common.user_logged_in_QMARK_.call(null))?React.DOM.ul({"className": "right", "id": "listing-create-button"},React.DOM.li({"className": "has-form show-for-large-up"},React.DOM.a({"className": "button", "href": "http://foundation.zurb.com/docs"},"Create"))):null)),React.DOM.div({"id": "tags"}),React.DOM.div({"id": "availabilities"}));
});

index.t12856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12858){
var self__ = this;
var _12858__$1 = this;
return self__.meta12857;
});

index.t12856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12858,meta12857__$1){
var self__ = this;
var _12858__$1 = this;
return (new index.t12856(self__.owner,self__.state,self__.element_container,self__.show_listings,meta12857__$1));
});

index.t12856.cljs$lang$type = true;

index.t12856.cljs$lang$ctorStr = "index/t12856";

index.t12856.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"index/t12856");
});

index.__GT_t12856 = (function __GT_t12856(owner__$1,state__$1,element_container__$1,show_listings__$1,meta12857){
return (new index.t12856(owner__$1,state__$1,element_container__$1,show_listings__$1,meta12857));
});

}

return (new index.t12856(owner,state,element_container,show_listings,null));
}),cljs.core.deref.call(null,common.app_state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(element_container)], null));

common.load_tags.call(null,index.tags_handler);

return common.load_availabilities.call(null,common.availabilities_handler);
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

var action__4634__auto___12884 = ((function (listings_container){
return (function (params__4635__auto__){
if(cljs.core.map_QMARK_.call(null,params__4635__auto__)){
var map__12876 = params__4635__auto__;
var map__12876__$1 = ((cljs.core.seq_QMARK_.call(null,map__12876))?cljs.core.apply.call(null,cljs.core.hash_map,map__12876):map__12876);
var params = map__12876__$1;
return view.switch_tab.call(null,"#tab-listings-link","/#");
} else {
if(cljs.core.vector_QMARK_.call(null,params__4635__auto__)){
var map__12877 = params__4635__auto__;
var map__12877__$1 = ((cljs.core.seq_QMARK_.call(null,map__12877))?cljs.core.apply.call(null,cljs.core.hash_map,map__12877):map__12877);
var params = map__12877__$1;
return view.switch_tab.call(null,"#tab-listings-link","/#");
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/listings",action__4634__auto___12884);


var action__4634__auto___12885 = ((function (listings_container){
return (function (params__4635__auto__){
if(cljs.core.map_QMARK_.call(null,params__4635__auto__)){
var map__12878 = params__4635__auto__;
var map__12878__$1 = ((cljs.core.seq_QMARK_.call(null,map__12878))?cljs.core.apply.call(null,cljs.core.hash_map,map__12878):map__12878);
var params = map__12878__$1;
return view.switch_tab.call(null,"#tab-availabilities-link","/#availabilities");
} else {
if(cljs.core.vector_QMARK_.call(null,params__4635__auto__)){
var map__12879 = params__4635__auto__;
var map__12879__$1 = ((cljs.core.seq_QMARK_.call(null,map__12879))?cljs.core.apply.call(null,cljs.core.hash_map,map__12879):map__12879);
var params = map__12879__$1;
return view.switch_tab.call(null,"#tab-availabilities-link","/#availabilities");
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/availabilities",action__4634__auto___12885);


var action__4634__auto___12886 = ((function (listings_container){
return (function (params__4635__auto__){
if(cljs.core.map_QMARK_.call(null,params__4635__auto__)){
var map__12880 = params__4635__auto__;
var map__12880__$1 = ((cljs.core.seq_QMARK_.call(null,map__12880))?cljs.core.apply.call(null,cljs.core.hash_map,map__12880):map__12880);
var params = map__12880__$1;
return view.switch_tab.call(null,"#tab-session-link","/#session");
} else {
if(cljs.core.vector_QMARK_.call(null,params__4635__auto__)){
var map__12881 = params__4635__auto__;
var map__12881__$1 = ((cljs.core.seq_QMARK_.call(null,map__12881))?cljs.core.apply.call(null,cljs.core.hash_map,map__12881):map__12881);
var params = map__12881__$1;
return view.switch_tab.call(null,"#tab-session-link","/#session");
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/session",action__4634__auto___12886);


var action__4634__auto__ = ((function (listings_container){
return (function (params__4635__auto__){
if(cljs.core.map_QMARK_.call(null,params__4635__auto__)){
var map__12882 = params__4635__auto__;
var map__12882__$1 = ((cljs.core.seq_QMARK_.call(null,map__12882))?cljs.core.apply.call(null,cljs.core.hash_map,map__12882):map__12882);
var params = map__12882__$1;
return view.switch_tab.call(null,"#tab-account-link","/#account");
} else {
if(cljs.core.vector_QMARK_.call(null,params__4635__auto__)){
var map__12883 = params__4635__auto__;
var map__12883__$1 = ((cljs.core.seq_QMARK_.call(null,map__12883))?cljs.core.apply.call(null,cljs.core.hash_map,map__12883):map__12883);
var params = map__12883__$1;
return view.switch_tab.call(null,"#tab-account-link","/#account");
} else {
return null;
}
}
});})(listings_container))
;
secretary.core.add_route_BANG_.call(null,"/account",action__4634__auto__);

return ((function (action__4634__auto__,listings_container){
return (function() { 
var G__12887__delegate = function (args__4633__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/account",args__4633__auto__);
};
var G__12887 = function (var_args){
var args__4633__auto__ = null;
if (arguments.length > 0) {
  args__4633__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__12887__delegate.call(this,args__4633__auto__);};
G__12887.cljs$lang$maxFixedArity = 0;
G__12887.cljs$lang$applyTo = (function (arglist__12888){
var args__4633__auto__ = cljs.core.seq(arglist__12888);
return G__12887__delegate(args__4633__auto__);
});
G__12887.cljs$core$IFn$_invoke$arity$variadic = G__12887__delegate;
return G__12887;
})()
;
;})(action__4634__auto__,listings_container))
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