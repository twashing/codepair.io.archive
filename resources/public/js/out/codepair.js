// Compiled by ClojureScript 0.0-2505
goog.provide('codepair');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events.EventType');
goog.require('util');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('cljs.reader');
codepair.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
codepair.edn_xhr = (function edn_xhr(p__9127){
var map__9129 = p__9127;
var map__9129__$1 = ((cljs.core.seq_QMARK_.call(null,map__9129))?cljs.core.apply.call(null,cljs.core.hash_map,map__9129):map__9129);
var on_complete = cljs.core.get.call(null,map__9129__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var data = cljs.core.get.call(null,map__9129__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var url = cljs.core.get.call(null,map__9129__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.call(null,map__9129__$1,new cljs.core.Keyword(null,"method","method",55703592));
var xhr = (new goog.net.XhrIo());
goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__9129,map__9129__$1,on_complete,data,url,method){
return (function (e){
return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()),xhr);
});})(xhr,map__9129,map__9129__$1,on_complete,data,url,method))
);

return xhr.send(url,codepair.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});
codepair.basicHandler = (function basicHandler(handlefn,e,xhr){
var res = xhr.getResponseText();
var status = xhr.getStatus();
if(cljs.core._EQ_.call(null,(200),status)){
return handlefn.call(null,e,xhr);
} else {
return navigator.id.logout();
}
});
codepair.signoutUser = (function signoutUser(){
util.console_log.call(null,"signoutUser CALLED");

return codepair.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/signout",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),cljs.core.partial.call(null,codepair.basicHandler,(function (e,xhr){
return util.console_log.call(null,[cljs.core.str("signoutUser completed")].join(''));
}))], null));
});

//# sourceMappingURL=codepair.js.map