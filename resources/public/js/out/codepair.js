// Compiled by ClojureScript 0.0-2505
goog.provide('codepair');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('cljs.reader');
codepair.console_log = (function console_log(message){
return console.log(message);
});
codepair.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
codepair.edn_xhr = (function edn_xhr(p__5148){
var map__5150 = p__5148;
var map__5150__$1 = ((cljs.core.seq_QMARK_.call(null,map__5150))?cljs.core.apply.call(null,cljs.core.hash_map,map__5150):map__5150);
var on_complete = cljs.core.get.call(null,map__5150__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var data = cljs.core.get.call(null,map__5150__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var url = cljs.core.get.call(null,map__5150__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.call(null,map__5150__$1,new cljs.core.Keyword(null,"method","method",55703592));
var xhr = (new goog.net.XhrIo());
goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__5150,map__5150__$1,on_complete,data,url,method){
return (function (e){
return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
});})(xhr,map__5150,map__5150__$1,on_complete,data,url,method))
);

return xhr.send(url,codepair.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn"});
});
codepair.basicHandler = (function basicHandler(res){
if(cljs.core._EQ_.call(null,(200),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(res))){
codepair.console_log.call(null,[cljs.core.str("XMLHttpRequest SUCCESS: "),cljs.core.str(res)].join(''));

return window.location.reload();
} else {
codepair.console_log.call(null,[cljs.core.str("XMLHttpRequest ERROR: "),cljs.core.str(res)].join(''));

return navigator.id.logout();
}
});
codepair.verifyAssertion = (function verifyAssertion(assertion){
codepair.console_log.call(null,[cljs.core.str("verifyAssertion CALLED / assertion: "),cljs.core.str(assertion)].join(''));

return codepair.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/verify-assertion",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"assertion","assertion",-1645134882),assertion], null),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),codepair.basicHandler], null));
});
codepair.signoutUser = (function signoutUser(){
codepair.console_log.call(null,"signoutUser CALLED");

return codepair.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/signout",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),codepair.basicHandler], null));
});
codepair.a = (function a(){
return codepair.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/a",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),codepair.basicHandler], null));
});
goog.exportSymbol('codepair.a', codepair.a);
codepair.b = (function b(){
return codepair.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/b",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),codepair.basicHandler], null));
});
goog.exportSymbol('codepair.b', codepair.b);
codepair.c = (function c(){
return codepair.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/c",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),codepair.basicHandler], null));
});
goog.exportSymbol('codepair.c', codepair.c);
codepair.d = (function d(){
return codepair.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/d",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),codepair.basicHandler], null));
});
goog.exportSymbol('codepair.d', codepair.d);

//# sourceMappingURL=codepair.js.map