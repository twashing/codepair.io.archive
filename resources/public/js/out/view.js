// Compiled by ClojureScript 0.0-2505
goog.provide('view');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('goog.string');
goog.require('util');
goog.require('om.core');
goog.require('common');
goog.require('cljs.reader');
view.tag_filter_handler = (function tag_filter_handler(e){
var tag_name = e.target.textContent;
var filtered_availabilities = ((cljs.core._EQ_.call(null,"*all*",tag_name))?new cljs.core.Keyword(null,"availabilities","availabilities",-9113555).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state)):cljs.core.filterv.call(null,((function (tag_name){
return (function (x){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([tag_name], true),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(x))));
});})(tag_name))
,new cljs.core.Keyword(null,"availabilities","availabilities",-9113555).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,common.app_state))));
return om.core.root.call(null,view.availabilities_view,filtered_availabilities,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("availabilities")], null));
});
view.tags_view = (function tags_view(state,owner){
if(typeof view.t10475 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t10475 = (function (owner,state,tags_view,meta10476){
this.owner = owner;
this.state = state;
this.tags_view = tags_view;
this.meta10476 = meta10476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t10475.prototype.om$core$IRender$ = true;

view.t10475.prototype.om$core$IRender$render$arity$1 = (function (this__5894__auto__){
var self__ = this;
var this__5894__auto____$1 = this;
return React.DOM.div({"id": "tags-pane"},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__5894__auto____$1){
return (function iter__10478(s__10479){
return (new cljs.core.LazySeq(null,((function (this__5894__auto____$1){
return (function (){
var s__10479__$1 = s__10479;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10479__$1);
if(temp__4126__auto__){
var s__10479__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10479__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10479__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10481 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10480 = (0);
while(true){
if((i__10480 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__10480);
cljs.core.chunk_append.call(null,b__10481,React.DOM.div({"className": "tag-item", "onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))));

var G__10482 = (i__10480 + (1));
i__10480 = G__10482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10481),iter__10478.call(null,cljs.core.chunk_rest.call(null,s__10479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10481),null);
}
} else {
var ech = cljs.core.first.call(null,s__10479__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "tag-item", "onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))),iter__10478.call(null,cljs.core.rest.call(null,s__10479__$2)));
}
} else {
return null;
}
break;
}
});})(this__5894__auto____$1))
,null,null));
});})(this__5894__auto____$1))
;
return iter__4378__auto__.call(null,cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"*all*"], null)], null),cljs.core.deref.call(null,self__.state)));
})()));
});

view.t10475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10477){
var self__ = this;
var _10477__$1 = this;
return self__.meta10476;
});

view.t10475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10477,meta10476__$1){
var self__ = this;
var _10477__$1 = this;
return (new view.t10475(self__.owner,self__.state,self__.tags_view,meta10476__$1));
});

view.t10475.cljs$lang$type = true;

view.t10475.cljs$lang$ctorStr = "view/t10475";

view.t10475.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t10475");
});

view.__GT_t10475 = (function __GT_t10475(owner__$1,state__$1,tags_view__$1,meta10476){
return (new view.t10475(owner__$1,state__$1,tags_view__$1,meta10476));
});

}

return (new view.t10475(owner,state,tags_view,null));
});
view.availabilities_view = (function availabilities_view(state,owner){
if(typeof view.t10511 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t10511 = (function (owner,state,availabilities_view,meta10512){
this.owner = owner;
this.state = state;
this.availabilities_view = availabilities_view;
this.meta10512 = meta10512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t10511.prototype.om$core$IRender$ = true;

view.t10511.prototype.om$core$IRender$render$arity$1 = (function (this__5894__auto__){
var self__ = this;
var this__5894__auto____$1 = this;
return React.DOM.div({"id": "availabilities-pane"},React.DOM.table({"className": "availabilities-table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Title"),React.DOM.th(null,"Description"),React.DOM.th(null,"tags"))),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__5894__auto____$1){
return (function iter__10519(s__10520){
return (new cljs.core.LazySeq(null,((function (this__5894__auto____$1){
return (function (){
var s__10520__$1 = s__10520;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10520__$1);
if(temp__4126__auto__){
var s__10520__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10520__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10520__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10522 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10521 = (0);
while(true){
if((i__10521 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__10521);
cljs.core.chunk_append.call(null,b__10522,React.DOM.tr({"onClick": ((function (i__10521,ech,c__4376__auto__,size__4377__auto__,b__10522,s__10520__$2,temp__4126__auto__,this__5894__auto____$1){
return (function (e){
return om.core.transact_BANG_.call(null,ech,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"title","title",636505583)], null),((function (i__10521,ech,c__4376__auto__,size__4377__auto__,b__10522,s__10520__$2,temp__4126__auto__,this__5894__auto____$1){
return (function (f){
util.console_log.call(null,[cljs.core.str(f)].join(''));

return "thing";
});})(i__10521,ech,c__4376__auto__,size__4377__auto__,b__10522,s__10520__$2,temp__4126__auto__,this__5894__auto____$1))
);
});})(i__10521,ech,c__4376__auto__,size__4377__auto__,b__10522,s__10520__$2,temp__4126__auto__,this__5894__auto____$1))
},(function (){var attrs10516 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)));
return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs10516))?sablono.interpreter.attributes.call(null,attrs10516):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10516))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10516)], null))));
})(),(function (){var attrs10517 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)));
return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs10517))?sablono.interpreter.attributes.call(null,attrs10517):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10517))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10517)], null))));
})(),React.DOM.td(null,cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (i__10521,ech,c__4376__auto__,size__4377__auto__,b__10522,s__10520__$2,temp__4126__auto__,this__5894__auto____$1){
return (function iter__10531(s__10532){
return (new cljs.core.LazySeq(null,((function (i__10521,ech,c__4376__auto__,size__4377__auto__,b__10522,s__10520__$2,temp__4126__auto__,this__5894__auto____$1){
return (function (){
var s__10532__$1 = s__10532;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10532__$1);
if(temp__4126__auto____$1){
var s__10532__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10532__$2)){
var c__4376__auto____$1 = cljs.core.chunk_first.call(null,s__10532__$2);
var size__4377__auto____$1 = cljs.core.count.call(null,c__4376__auto____$1);
var b__10534 = cljs.core.chunk_buffer.call(null,size__4377__auto____$1);
if((function (){var i__10533 = (0);
while(true){
if((i__10533 < size__4377__auto____$1)){
var tg = cljs.core._nth.call(null,c__4376__auto____$1,i__10533);
cljs.core.chunk_append.call(null,b__10534,(function (){var attrs10518 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tg);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs10518))?sablono.interpreter.attributes.call(null,attrs10518):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10518))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10518)], null))));
})());

var G__10539 = (i__10533 + (1));
i__10533 = G__10539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10534),iter__10531.call(null,cljs.core.chunk_rest.call(null,s__10532__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10534),null);
}
} else {
var tg = cljs.core.first.call(null,s__10532__$2);
return cljs.core.cons.call(null,(function (){var attrs10518 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tg);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs10518))?sablono.interpreter.attributes.call(null,attrs10518):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10518))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10518)], null))));
})(),iter__10531.call(null,cljs.core.rest.call(null,s__10532__$2)));
}
} else {
return null;
}
break;
}
});})(i__10521,ech,c__4376__auto__,size__4377__auto__,b__10522,s__10520__$2,temp__4126__auto__,this__5894__auto____$1))
,null,null));
});})(i__10521,ech,c__4376__auto__,size__4377__auto__,b__10522,s__10520__$2,temp__4126__auto__,this__5894__auto____$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech))));
})()))));

var G__10540 = (i__10521 + (1));
i__10521 = G__10540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10522),iter__10519.call(null,cljs.core.chunk_rest.call(null,s__10520__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10522),null);
}
} else {
var ech = cljs.core.first.call(null,s__10520__$2);
return cljs.core.cons.call(null,React.DOM.tr({"onClick": ((function (ech,s__10520__$2,temp__4126__auto__,this__5894__auto____$1){
return (function (e){
return om.core.transact_BANG_.call(null,ech,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"title","title",636505583)], null),((function (ech,s__10520__$2,temp__4126__auto__,this__5894__auto____$1){
return (function (f){
util.console_log.call(null,[cljs.core.str(f)].join(''));

return "thing";
});})(ech,s__10520__$2,temp__4126__auto__,this__5894__auto____$1))
);
});})(ech,s__10520__$2,temp__4126__auto__,this__5894__auto____$1))
},(function (){var attrs10516 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)));
return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs10516))?sablono.interpreter.attributes.call(null,attrs10516):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10516))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10516)], null))));
})(),(function (){var attrs10517 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)));
return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs10517))?sablono.interpreter.attributes.call(null,attrs10517):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10517))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10517)], null))));
})(),React.DOM.td(null,cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (ech,s__10520__$2,temp__4126__auto__,this__5894__auto____$1){
return (function iter__10535(s__10536){
return (new cljs.core.LazySeq(null,((function (ech,s__10520__$2,temp__4126__auto__,this__5894__auto____$1){
return (function (){
var s__10536__$1 = s__10536;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10536__$1);
if(temp__4126__auto____$1){
var s__10536__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10536__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10536__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10538 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10537 = (0);
while(true){
if((i__10537 < size__4377__auto__)){
var tg = cljs.core._nth.call(null,c__4376__auto__,i__10537);
cljs.core.chunk_append.call(null,b__10538,(function (){var attrs10518 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tg);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs10518))?sablono.interpreter.attributes.call(null,attrs10518):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10518))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10518)], null))));
})());

var G__10541 = (i__10537 + (1));
i__10537 = G__10541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10538),iter__10535.call(null,cljs.core.chunk_rest.call(null,s__10536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10538),null);
}
} else {
var tg = cljs.core.first.call(null,s__10536__$2);
return cljs.core.cons.call(null,(function (){var attrs10518 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tg);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs10518))?sablono.interpreter.attributes.call(null,attrs10518):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs10518))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs10518)], null))));
})(),iter__10535.call(null,cljs.core.rest.call(null,s__10536__$2)));
}
} else {
return null;
}
break;
}
});})(ech,s__10520__$2,temp__4126__auto__,this__5894__auto____$1))
,null,null));
});})(ech,s__10520__$2,temp__4126__auto__,this__5894__auto____$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech))));
})()))),iter__10519.call(null,cljs.core.rest.call(null,s__10520__$2)));
}
} else {
return null;
}
break;
}
});})(this__5894__auto____$1))
,null,null));
});})(this__5894__auto____$1))
;
return iter__4378__auto__.call(null,self__.state);
})()))));
});

view.t10511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10513){
var self__ = this;
var _10513__$1 = this;
return self__.meta10512;
});

view.t10511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10513,meta10512__$1){
var self__ = this;
var _10513__$1 = this;
return (new view.t10511(self__.owner,self__.state,self__.availabilities_view,meta10512__$1));
});

view.t10511.cljs$lang$type = true;

view.t10511.cljs$lang$ctorStr = "view/t10511";

view.t10511.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t10511");
});

view.__GT_t10511 = (function __GT_t10511(owner__$1,state__$1,availabilities_view__$1,meta10512){
return (new view.t10511(owner__$1,state__$1,availabilities_view__$1,meta10512));
});

}

return (new view.t10511(owner,state,availabilities_view,null));
});
view.account_selected_description = (function account_selected_description(account_level,existing_classes){
if(cljs.core._EQ_.call(null,common.get_account_level.call(null),account_level)){
return [cljs.core.str(existing_classes),cljs.core.str(" account-selected-text")].join('');
} else {
return existing_classes;
}
});
view.account_selected_button = (function account_selected_button(account_level,existing_classes){
if(cljs.core._EQ_.call(null,common.get_account_level.call(null),account_level)){
return [cljs.core.str(existing_classes),cljs.core.str(" disabled")].join('');
} else {
return existing_classes;
}
});
view.account_selected_title = (function account_selected_title(account_level,existing_classes){
if(cljs.core._EQ_.call(null,common.get_account_level.call(null),account_level)){
return [cljs.core.str(existing_classes),cljs.core.str(" account-selected-title")].join('');
} else {
return existing_classes;
}
});
view.account_selected_text = (function account_selected_text(account_level,existing_text){
if(cljs.core._EQ_.call(null,common.get_account_level.call(null),account_level)){
return [cljs.core.str("*"),cljs.core.str(existing_text)].join('');
} else {
return existing_text;
}
});
view.pay_with_stripe = (function pay_with_stripe(planId,description,amount){
var stripe_config = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"pk_test_CT5VaR5BAIH2ZneC0wGLTh9b",new cljs.core.Keyword(null,"token","token",-1211463215),(function (token){
util.console_log.call(null,[cljs.core.str("token recieved: "),cljs.core.str(token)].join(''));

return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/charge",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stripeToken","stripeToken",-1136091323),token.id,new cljs.core.Keyword(null,"stripeEmail","stripeEmail",-543513955),token.email,new cljs.core.Keyword(null,"accountlevel","accountlevel",1562723208),planId], null),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),cljs.core.partial.call(null,common.basicHandler,(function (e,xhr){
var data = xhr.getResponseText();
var responseF = cljs.reader.read_string.call(null,data);
return common.user_handler.call(null,e,xhr,responseF);
}))], null));
})], null));
var handler = StripeCheckout.configure(stripe_config);
handler.open(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Codepair.io",new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"amount","amount",364489504),amount], null)));

return $(window).on("popstate",((function (stripe_config,handler){
return (function (){
return handler.close();
});})(stripe_config,handler))
);
});
view.switch_tab = (function switch_tab(tab_link,loc){
$(tab_link).click();

return window.location = loc;
});
view.landing_view = (function landing_view(listings_container){
if(typeof view.t10565 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t10565 = (function (listings_container,landing_view,meta10566){
this.listings_container = listings_container;
this.landing_view = landing_view;
this.meta10566 = meta10566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t10565.prototype.om$core$IRender$ = true;

view.t10565.prototype.om$core$IRender$render$arity$1 = (function (this__5894__auto__){
var self__ = this;
var this__5894__auto____$1 = this;
return React.DOM.div({"id": "landing-container"},React.DOM.ul({"className": "tabs", "data-tab": true},React.DOM.li({"className": "tab-title active"},React.DOM.a({"id": "tab-listings-link", "href": "#tab-listings", "onClick": ((function (this__5894__auto____$1){
return (function (_){
return secretary.core.dispatch_BANG_.call(null,"/listings");
});})(this__5894__auto____$1))
},"Listings")),React.DOM.li({"className": "tab-title"},React.DOM.a({"id": "tab-availabilities-link", "href": "#tab-availabilities", "onClick": ((function (this__5894__auto____$1){
return (function (_){
return secretary.core.dispatch_BANG_.call(null,"/availabilities");
});})(this__5894__auto____$1))
},"Availabilities")),React.DOM.li({"className": "tab-title"},React.DOM.a({"id": "tab-session-link", "href": "#tab-session", "onClick": ((function (this__5894__auto____$1){
return (function (_){
return secretary.core.dispatch_BANG_.call(null,"/session");
});})(this__5894__auto____$1))
},"Session")),React.DOM.li({"className": "tab-title"},React.DOM.a({"id": "tab-account-link", "href": "#tab-account", "onClick": ((function (this__5894__auto____$1){
return (function (_){
return secretary.core.dispatch_BANG_.call(null,"/account");
});})(this__5894__auto____$1))
},"Account"))),React.DOM.div({"className": "tabs-content"},React.DOM.div({"className": "content active", "id": "tab-listings"},React.DOM.div({"id": self__.listings_container})),React.DOM.div({"className": "content", "id": "tab-availabilities"},React.DOM.p(null,"Availabilities"),React.DOM.a({"className": "button tiny"},"thing"),React.DOM.div({"className": "small-4 columns"},React.DOM.label(null,"Input Label",sablono.interpreter.input.call(null,{"type": "text", "placeholder": "small-4 columns"})))),React.DOM.div({"className": "content", "id": "tab-session"},React.DOM.p(null,"Session")),React.DOM.div({"className": "content", "id": "tab-account"},React.DOM.ul({"className": "small-block-grid-3"},React.DOM.li(null,React.DOM.ul({"className": "pricing-table"},React.DOM.li({"className": view.account_selected_title.call(null,new cljs.core.Keyword(null,"free","free",801364328),"title")},"Free"),React.DOM.li({"className": "price"},"$0"),React.DOM.li({"className": view.account_selected_description.call(null,new cljs.core.Keyword(null,"free","free",801364328),"description")},sablono.interpreter.interpret.call(null,view.account_selected_text.call(null,new cljs.core.Keyword(null,"free","free",801364328),"Sign up and start using the service gratis"))),React.DOM.li({"className": "bullet-item"},"Can only connect to others' availability"),React.DOM.li({"className": "bullet-item"},"A Professional Plan lets you host your own availabilities"),React.DOM.li({"className": "cta-button"},React.DOM.a({"className": view.account_selected_button.call(null,new cljs.core.Keyword(null,"free","free",801364328),"button")},"Subscribe")))),React.DOM.li(null,React.DOM.ul({"className": "pricing-table"},React.DOM.li({"className": view.account_selected_title.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"title")},"Professional"),React.DOM.li({"className": "price"},"$9"),React.DOM.li({"className": view.account_selected_description.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"description")},sablono.interpreter.interpret.call(null,view.account_selected_text.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"Sign up and start using the service"))),React.DOM.li({"className": "bullet-item"},"Host your own availabilities"),React.DOM.li({"className": "bullet-item"},"Full Audio, Video, Text Messages and Screen Sharing"),React.DOM.li({"className": "cta-button"},React.DOM.a({"className": view.account_selected_button.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"button"), "onClick": ((function (this__5894__auto____$1){
return (function (e){
view.pay_with_stripe.call(null,"professional","Professional Plan","900");

return e.preventDefault();
});})(this__5894__auto____$1))
},"Subscribe")))),React.DOM.li(null,React.DOM.ul({"className": "pricing-table"},React.DOM.li({"className": view.account_selected_title.call(null,new cljs.core.Keyword(null,"enterprise","enterprise",835383004),"title")},"Enterprise"),React.DOM.li({"className": "price"},"$24"),React.DOM.li({"className": view.account_selected_description.call(null,new cljs.core.Keyword(null,"enterprise","enterprise",835383004),"description")},sablono.interpreter.interpret.call(null,view.account_selected_text.call(null,new cljs.core.Keyword(null,"enterprise","enterprise",835383004),"Sign up your organization and enable enterprise wide problem solving"))),React.DOM.li({"className": "bullet-item"},"Connect to any availabilitles. Host your own. Run group sessions."),React.DOM.li({"className": "bullet-item"},sablono.interpreter.interpret.call(null,goog.string.unescapeEntities("&nbsp;"))),React.DOM.li({"className": "cta-button"},React.DOM.a({"className": view.account_selected_button.call(null,new cljs.core.Keyword(null,"enterprise","enterprise",835383004),"button"), "onClick": ((function (this__5894__auto____$1){
return (function (e){
view.pay_with_stripe.call(null,"enterprise","Enterprise Plan","2400");

return e.preventDefault();
});})(this__5894__auto____$1))
},"Subscribe"))))))));
});

view.t10565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10567){
var self__ = this;
var _10567__$1 = this;
return self__.meta10566;
});

view.t10565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10567,meta10566__$1){
var self__ = this;
var _10567__$1 = this;
return (new view.t10565(self__.listings_container,self__.landing_view,meta10566__$1));
});

view.t10565.cljs$lang$type = true;

view.t10565.cljs$lang$ctorStr = "view/t10565";

view.t10565.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t10565");
});

view.__GT_t10565 = (function __GT_t10565(listings_container__$1,landing_view__$1,meta10566){
return (new view.t10565(listings_container__$1,landing_view__$1,meta10566));
});

}

return (new view.t10565(listings_container,landing_view,null));
});

//# sourceMappingURL=view.js.map