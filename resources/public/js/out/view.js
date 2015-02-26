// Compiled by ClojureScript 0.0-2505
goog.provide('view');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('util');
goog.require('om.core');
goog.require('common');
view.tag_filter_handler = (function tag_filter_handler(e){
var tag_name = e.target.textContent;
var filtered_availabilities = cljs.core.filterv.call(null,((function (tag_name){
return (function (x){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tag_name], true),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(x))));
});})(tag_name))
,new cljs.core.Keyword(null,"availabilities","availabilities",-9113555).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)));
return om.core.root.call(null,view.availabilities_view,filtered_availabilities,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("availabilities")], null));
});
view.tags_view = (function tags_view(state,owner){
if(typeof view.t7002 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t7002 = (function (owner,state,tags_view,meta7003){
this.owner = owner;
this.state = state;
this.tags_view = tags_view;
this.meta7003 = meta7003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t7002.prototype.om$core$IRender$ = true;

view.t7002.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"id": "tags-pane"},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__5875__auto____$1){
return (function iter__7005(s__7006){
return (new cljs.core.LazySeq(null,((function (this__5875__auto____$1){
return (function (){
var s__7006__$1 = s__7006;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7006__$1);
if(temp__4126__auto__){
var s__7006__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7006__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__7006__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__7008 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__7007 = (0);
while(true){
if((i__7007 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__7007);
cljs.core.chunk_append.call(null,b__7008,React.DOM.div({"onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))));

var G__7009 = (i__7007 + (1));
i__7007 = G__7009;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7008),iter__7005.call(null,cljs.core.chunk_rest.call(null,s__7006__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7008),null);
}
} else {
var ech = cljs.core.first.call(null,s__7006__$2);
return cljs.core.cons.call(null,React.DOM.div({"onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))),iter__7005.call(null,cljs.core.rest.call(null,s__7006__$2)));
}
} else {
return null;
}
break;
}
});})(this__5875__auto____$1))
,null,null));
});})(this__5875__auto____$1))
;
return iter__4378__auto__.call(null,cljs.core.deref.call(null,self__.state));
})()));
});

view.t7002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7004){
var self__ = this;
var _7004__$1 = this;
return self__.meta7003;
});

view.t7002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7004,meta7003__$1){
var self__ = this;
var _7004__$1 = this;
return (new view.t7002(self__.owner,self__.state,self__.tags_view,meta7003__$1));
});

view.t7002.cljs$lang$type = true;

view.t7002.cljs$lang$ctorStr = "view/t7002";

view.t7002.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t7002");
});

view.__GT_t7002 = (function __GT_t7002(owner__$1,state__$1,tags_view__$1,meta7003){
return (new view.t7002(owner__$1,state__$1,tags_view__$1,meta7003));
});

}

return (new view.t7002(owner,state,tags_view,null));
});
view.availabilities_view = (function availabilities_view(state,owner){
if(typeof view.t7019 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t7019 = (function (owner,state,availabilities_view,meta7020){
this.owner = owner;
this.state = state;
this.availabilities_view = availabilities_view;
this.meta7020 = meta7020;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t7019.prototype.om$core$IRender$ = true;

view.t7019.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"id": "availabilities-pane"},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__5875__auto____$1){
return (function iter__7024(s__7025){
return (new cljs.core.LazySeq(null,((function (this__5875__auto____$1){
return (function (){
var s__7025__$1 = s__7025;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7025__$1);
if(temp__4126__auto__){
var s__7025__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7025__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__7025__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__7027 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__7026 = (0);
while(true){
if((i__7026 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__7026);
cljs.core.chunk_append.call(null,b__7027,React.DOM.div(null,(function (){var attrs7022 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs7022))?sablono.interpreter.attributes.call(null,attrs7022):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs7022))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs7022)], null))));
})(),(function (){var attrs7023 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs7023))?sablono.interpreter.attributes.call(null,attrs7023):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs7023))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs7023)], null))));
})()));

var G__7028 = (i__7026 + (1));
i__7026 = G__7028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7027),iter__7024.call(null,cljs.core.chunk_rest.call(null,s__7025__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7027),null);
}
} else {
var ech = cljs.core.first.call(null,s__7025__$2);
return cljs.core.cons.call(null,React.DOM.div(null,(function (){var attrs7022 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs7022))?sablono.interpreter.attributes.call(null,attrs7022):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs7022))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs7022)], null))));
})(),(function (){var attrs7023 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs7023))?sablono.interpreter.attributes.call(null,attrs7023):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs7023))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs7023)], null))));
})()),iter__7024.call(null,cljs.core.rest.call(null,s__7025__$2)));
}
} else {
return null;
}
break;
}
});})(this__5875__auto____$1))
,null,null));
});})(this__5875__auto____$1))
;
return iter__4378__auto__.call(null,cljs.core.deref.call(null,self__.state));
})()));
});

view.t7019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7021){
var self__ = this;
var _7021__$1 = this;
return self__.meta7020;
});

view.t7019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7021,meta7020__$1){
var self__ = this;
var _7021__$1 = this;
return (new view.t7019(self__.owner,self__.state,self__.availabilities_view,meta7020__$1));
});

view.t7019.cljs$lang$type = true;

view.t7019.cljs$lang$ctorStr = "view/t7019";

view.t7019.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t7019");
});

view.__GT_t7019 = (function __GT_t7019(owner__$1,state__$1,availabilities_view__$1,meta7020){
return (new view.t7019(owner__$1,state__$1,availabilities_view__$1,meta7020));
});

}

return (new view.t7019(owner,state,availabilities_view,null));
});

//# sourceMappingURL=view.js.map