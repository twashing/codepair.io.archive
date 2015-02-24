// Compiled by ClojureScript 0.0-2505
goog.provide('view');
goog.require('cljs.core');
goog.require('om_material_ui.core');
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
if(typeof view.t9100 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t9100 = (function (owner,state,tags_view,meta9101){
this.owner = owner;
this.state = state;
this.tags_view = tags_view;
this.meta9101 = meta9101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t9100.prototype.om$core$IRender$ = true;

view.t9100.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"id": "tags-pane"},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__5875__auto____$1){
return (function iter__9103(s__9104){
return (new cljs.core.LazySeq(null,((function (this__5875__auto____$1){
return (function (){
var s__9104__$1 = s__9104;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9104__$1);
if(temp__4126__auto__){
var s__9104__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9104__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__9104__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__9106 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__9105 = (0);
while(true){
if((i__9105 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__9105);
cljs.core.chunk_append.call(null,b__9106,React.DOM.div({"onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))));

var G__9107 = (i__9105 + (1));
i__9105 = G__9107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9106),iter__9103.call(null,cljs.core.chunk_rest.call(null,s__9104__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9106),null);
}
} else {
var ech = cljs.core.first.call(null,s__9104__$2);
return cljs.core.cons.call(null,React.DOM.div({"onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))),iter__9103.call(null,cljs.core.rest.call(null,s__9104__$2)));
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

view.t9100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9102){
var self__ = this;
var _9102__$1 = this;
return self__.meta9101;
});

view.t9100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9102,meta9101__$1){
var self__ = this;
var _9102__$1 = this;
return (new view.t9100(self__.owner,self__.state,self__.tags_view,meta9101__$1));
});

view.t9100.cljs$lang$type = true;

view.t9100.cljs$lang$ctorStr = "view/t9100";

view.t9100.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t9100");
});

view.__GT_t9100 = (function __GT_t9100(owner__$1,state__$1,tags_view__$1,meta9101){
return (new view.t9100(owner__$1,state__$1,tags_view__$1,meta9101));
});

}

return (new view.t9100(owner,state,tags_view,null));
});
view.availabilities_view = (function availabilities_view(state,owner){
if(typeof view.t9117 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t9117 = (function (owner,state,availabilities_view,meta9118){
this.owner = owner;
this.state = state;
this.availabilities_view = availabilities_view;
this.meta9118 = meta9118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t9117.prototype.om$core$IRender$ = true;

view.t9117.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"id": "availabilities-pane"},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__5875__auto____$1){
return (function iter__9122(s__9123){
return (new cljs.core.LazySeq(null,((function (this__5875__auto____$1){
return (function (){
var s__9123__$1 = s__9123;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9123__$1);
if(temp__4126__auto__){
var s__9123__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9123__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__9123__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__9125 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__9124 = (0);
while(true){
if((i__9124 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__9124);
cljs.core.chunk_append.call(null,b__9125,React.DOM.div(null,(function (){var attrs9120 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs9120))?sablono.interpreter.attributes.call(null,attrs9120):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs9120))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs9120)], null))));
})(),(function (){var attrs9121 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs9121))?sablono.interpreter.attributes.call(null,attrs9121):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs9121))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs9121)], null))));
})()));

var G__9126 = (i__9124 + (1));
i__9124 = G__9126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9125),iter__9122.call(null,cljs.core.chunk_rest.call(null,s__9123__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9125),null);
}
} else {
var ech = cljs.core.first.call(null,s__9123__$2);
return cljs.core.cons.call(null,React.DOM.div(null,(function (){var attrs9120 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs9120))?sablono.interpreter.attributes.call(null,attrs9120):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs9120))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs9120)], null))));
})(),(function (){var attrs9121 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs9121))?sablono.interpreter.attributes.call(null,attrs9121):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs9121))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs9121)], null))));
})()),iter__9122.call(null,cljs.core.rest.call(null,s__9123__$2)));
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

view.t9117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9119){
var self__ = this;
var _9119__$1 = this;
return self__.meta9118;
});

view.t9117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9119,meta9118__$1){
var self__ = this;
var _9119__$1 = this;
return (new view.t9117(self__.owner,self__.state,self__.availabilities_view,meta9118__$1));
});

view.t9117.cljs$lang$type = true;

view.t9117.cljs$lang$ctorStr = "view/t9117";

view.t9117.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t9117");
});

view.__GT_t9117 = (function __GT_t9117(owner__$1,state__$1,availabilities_view__$1,meta9118){
return (new view.t9117(owner__$1,state__$1,availabilities_view__$1,meta9118));
});

}

return (new view.t9117(owner,state,availabilities_view,null));
});

//# sourceMappingURL=view.js.map