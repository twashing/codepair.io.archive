// Compiled by ClojureScript 0.0-2505
goog.provide('common');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('view');
goog.require('goog.events.EventType');
goog.require('util');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('om.core');
goog.require('cljs.reader');
common.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"availabilities","availabilities",-9113555),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY], null));
common.user_logged_in_QMARK_ = (function user_logged_in_QMARK_(){
return !((new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)) == null));
});
common.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
common.edn_xhr = (function edn_xhr(p__12901){
var map__12903 = p__12901;
var map__12903__$1 = ((cljs.core.seq_QMARK_.call(null,map__12903))?cljs.core.apply.call(null,cljs.core.hash_map,map__12903):map__12903);
var on_complete = cljs.core.get.call(null,map__12903__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var data = cljs.core.get.call(null,map__12903__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var url = cljs.core.get.call(null,map__12903__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.call(null,map__12903__$1,new cljs.core.Keyword(null,"method","method",55703592));
var xhr = (new goog.net.XhrIo());
goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__12903,map__12903__$1,on_complete,data,url,method){
return (function (e){
return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()),xhr);
});})(xhr,map__12903,map__12903__$1,on_complete,data,url,method))
);

return xhr.send(url,common.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});
common.basicHandler = (function basicHandler(handlefn,e,xhr){
var res = xhr.getResponseText();
var status = xhr.getStatus();
if(cljs.core._EQ_.call(null,(200),status)){
return handlefn.call(null,e,xhr);
} else {
return navigator.id.logout();
}
});
common.signoutUser = (function signoutUser(){
util.console_log.call(null,"signoutUser CALLED");

return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/signout",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),cljs.core.partial.call(null,common.basicHandler,(function (e,xhr){
util.console_log.call(null,[cljs.core.str("signoutUser completed")].join(''));

return window.location = "/";
}))], null));
});
common.user_handler = (function user_handler(e,xhr,data){
return cljs.core.swap_BANG_.call(null,common.app_state,(function (e__$1){
return cljs.core.update_in.call(null,e__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null),(function (f){
return data;
}));
}));
});
common.availabilities_handler = (function availabilities_handler(e,xhr,data){
cljs.core.swap_BANG_.call(null,common.app_state,(function (e__$1){
return cljs.core.update_in.call(null,e__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availabilities","availabilities",-9113555)], null),(function (f){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,data);
}));
}));

return om.core.root.call(null,view.availabilities_view,new cljs.core.Keyword(null,"availabilities","availabilities",-9113555).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("availabilities")], null));
});
common.localCommonHandler = (function localCommonHandler(response_handler){
return cljs.core.partial.call(null,common.basicHandler,(function (e,xhr){
var data = xhr.getResponseText();
var responseF = cljs.reader.read_string.call(null,data);
return response_handler.call(null,e,xhr,responseF);
}));
});
common.load_tags = (function load_tags(response_handler){
return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/list-tags",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),common.localCommonHandler.call(null,response_handler)], null));
});
common.load_availabilities = (function load_availabilities(response_handler){
return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/list-availabilities",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),common.localCommonHandler.call(null,response_handler)], null));
});
common.search_availabilities = (function search_availabilities(response_handler,search_term){
return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/search-availabilities?searchterm="),cljs.core.str(search_term)].join(''),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"searchterm","searchterm",-719160813),search_term], null),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),common.localCommonHandler.call(null,response_handler)], null));
});
common.search_availabilities_bytag = (function search_availabilities_bytag(response_handler,search_term){
return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/search-availabilities-bytag?searchterm="),cljs.core.str(search_term)].join(''),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"searchterm","searchterm",-719160813),search_term], null),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),common.localCommonHandler.call(null,response_handler)], null));
});
common.load_user_data = (function load_user_data(response_handler){
return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/user-data",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),common.localCommonHandler.call(null,response_handler)], null));
});
common.get_app_state = (function get_app_state(){
return cljs.core.deref.call(null,common.app_state);
});
common.get_account_level = (function get_account_level(){
return new cljs.core.Keyword(null,"accountlevel","accountlevel",1562723208).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(common.get_app_state.call(null)));
});
common.printAppState = (function printAppState(){
return util.console_log.call(null,[cljs.core.str(cljs.core.deref.call(null,common.app_state))].join(''));
});
goog.exportSymbol('common.printAppState', common.printAppState);

//# sourceMappingURL=common.js.map