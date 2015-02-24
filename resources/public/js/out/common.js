// Compiled by ClojureScript 0.0-2505
goog.provide('common');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('util');
goog.require('goog.events');
goog.require('codepair');
goog.require('cljs.reader');
common.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"availabilities","availabilities",-9113555),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY], null));
common.localCommonHandler = (function localCommonHandler(response_handler){
return cljs.core.partial.call(null,codepair.basicHandler,(function (e,xhr){
var data = xhr.getResponseText();
var responseF = cljs.reader.read_string.call(null,data);
return response_handler.call(null,e,xhr,responseF);
}));
});
common.load_tags = (function load_tags(response_handler){
return codepair.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/list-tags",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),common.localCommonHandler.call(null,response_handler)], null));
});
common.load_availabilities = (function load_availabilities(response_handler){
return codepair.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/list-availabilities",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),common.localCommonHandler.call(null,response_handler)], null));
});
common.load_user_data = (function load_user_data(response_handler){
return codepair.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/user-data",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),common.localCommonHandler.call(null,response_handler)], null));
});
common.printAppState = (function printAppState(){
return util.console_log.call(null,[cljs.core.str(cljs.core.deref.call(null,common.app_state))].join(''));
});
goog.exportSymbol('common.printAppState', common.printAppState);

//# sourceMappingURL=common.js.map