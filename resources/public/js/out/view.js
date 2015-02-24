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
if(typeof view.t11721 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t11721 = (function (owner,state,tags_view,meta11722){
this.owner = owner;
this.state = state;
this.tags_view = tags_view;
this.meta11722 = meta11722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t11721.prototype.om$core$IRender$ = true;

view.t11721.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"id": "tags-pane"},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__5875__auto____$1){
return (function iter__11724(s__11725){
return (new cljs.core.LazySeq(null,((function (this__5875__auto____$1){
return (function (){
var s__11725__$1 = s__11725;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11725__$1);
if(temp__4126__auto__){
var s__11725__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11725__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__11725__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__11727 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__11726 = (0);
while(true){
if((i__11726 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__11726);
cljs.core.chunk_append.call(null,b__11727,React.DOM.div({"onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))));

var G__11728 = (i__11726 + (1));
i__11726 = G__11728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11727),iter__11724.call(null,cljs.core.chunk_rest.call(null,s__11725__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11727),null);
}
} else {
var ech = cljs.core.first.call(null,s__11725__$2);
return cljs.core.cons.call(null,React.DOM.div({"onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))),iter__11724.call(null,cljs.core.rest.call(null,s__11725__$2)));
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

view.t11721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11723){
var self__ = this;
var _11723__$1 = this;
return self__.meta11722;
});

view.t11721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11723,meta11722__$1){
var self__ = this;
var _11723__$1 = this;
return (new view.t11721(self__.owner,self__.state,self__.tags_view,meta11722__$1));
});

view.t11721.cljs$lang$type = true;

view.t11721.cljs$lang$ctorStr = "view/t11721";

view.t11721.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t11721");
});

view.__GT_t11721 = (function __GT_t11721(owner__$1,state__$1,tags_view__$1,meta11722){
return (new view.t11721(owner__$1,state__$1,tags_view__$1,meta11722));
});

}

return (new view.t11721(owner,state,tags_view,null));
});
view.availabilities_view = (function availabilities_view(state,owner){
if(typeof view.t11738 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t11738 = (function (owner,state,availabilities_view,meta11739){
this.owner = owner;
this.state = state;
this.availabilities_view = availabilities_view;
this.meta11739 = meta11739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t11738.prototype.om$core$IRender$ = true;

view.t11738.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"id": "availabilities-pane"},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__5875__auto____$1){
return (function iter__11743(s__11744){
return (new cljs.core.LazySeq(null,((function (this__5875__auto____$1){
return (function (){
var s__11744__$1 = s__11744;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11744__$1);
if(temp__4126__auto__){
var s__11744__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11744__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__11744__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__11746 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__11745 = (0);
while(true){
if((i__11745 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__11745);
cljs.core.chunk_append.call(null,b__11746,React.DOM.div(null,(function (){var attrs11741 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11741))?sablono.interpreter.attributes.call(null,attrs11741):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11741))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11741)], null))));
})(),(function (){var attrs11742 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11742))?sablono.interpreter.attributes.call(null,attrs11742):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11742))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11742)], null))));
})()));

var G__11747 = (i__11745 + (1));
i__11745 = G__11747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11746),iter__11743.call(null,cljs.core.chunk_rest.call(null,s__11744__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11746),null);
}
} else {
var ech = cljs.core.first.call(null,s__11744__$2);
return cljs.core.cons.call(null,React.DOM.div(null,(function (){var attrs11741 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11741))?sablono.interpreter.attributes.call(null,attrs11741):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11741))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11741)], null))));
})(),(function (){var attrs11742 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs11742))?sablono.interpreter.attributes.call(null,attrs11742):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs11742))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs11742)], null))));
})()),iter__11743.call(null,cljs.core.rest.call(null,s__11744__$2)));
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

view.t11738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11740){
var self__ = this;
var _11740__$1 = this;
return self__.meta11739;
});

view.t11738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11740,meta11739__$1){
var self__ = this;
var _11740__$1 = this;
return (new view.t11738(self__.owner,self__.state,self__.availabilities_view,meta11739__$1));
});

view.t11738.cljs$lang$type = true;

view.t11738.cljs$lang$ctorStr = "view/t11738";

view.t11738.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t11738");
});

view.__GT_t11738 = (function __GT_t11738(owner__$1,state__$1,availabilities_view__$1,meta11739){
return (new view.t11738(owner__$1,state__$1,availabilities_view__$1,meta11739));
});

}

return (new view.t11738(owner,state,availabilities_view,null));
});

//# sourceMappingURL=view.js.map