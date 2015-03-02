// Compiled by ClojureScript 0.0-2505
goog.provide('view');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('secretary.core');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('goog.string');
goog.require('util');
goog.require('clojure.string');
goog.require('om.core');
goog.require('common');
goog.require('cljs.reader');
view.tag_filter_handler = (function tag_filter_handler(e){
return common.search_availabilities_bytag.call(null,common.availabilities_handler,view.tag_name);
});
view.availabilities_handler = (function availabilities_handler(e,xhr,data){
cljs.core.swap_BANG_.call(null,common.app_state,(function (e__$1){
return cljs.core.update_in.call(null,e__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availabilities","availabilities",-9113555)], null),(function (f){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,data);
}));
}));

return om.core.root.call(null,view.availabilities_view,common.get_app_state.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("availabilities")], null));
});
view.tags_view = (function tags_view(state,owner){
if(typeof view.t26427 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t26427 = (function (owner,state,tags_view,meta26428){
this.owner = owner;
this.state = state;
this.tags_view = tags_view;
this.meta26428 = meta26428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t26427.prototype.om$core$IRender$ = true;

view.t26427.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return React.DOM.div({"id": "tags-pane"},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__7159__auto____$1){
return (function iter__26430(s__26431){
return (new cljs.core.LazySeq(null,((function (this__7159__auto____$1){
return (function (){
var s__26431__$1 = s__26431;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26431__$1);
if(temp__4126__auto__){
var s__26431__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26431__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26431__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26433 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26432 = (0);
while(true){
if((i__26432 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__26432);
cljs.core.chunk_append.call(null,b__26433,React.DOM.div({"className": "tag-item", "onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))));

var G__26434 = (i__26432 + (1));
i__26432 = G__26434;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26433),iter__26430.call(null,cljs.core.chunk_rest.call(null,s__26431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26433),null);
}
} else {
var ech = cljs.core.first.call(null,s__26431__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "tag-item", "onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))),iter__26430.call(null,cljs.core.rest.call(null,s__26431__$2)));
}
} else {
return null;
}
break;
}
});})(this__7159__auto____$1))
,null,null));
});})(this__7159__auto____$1))
;
return iter__4378__auto__.call(null,cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"*all*"], null)], null),cljs.core.deref.call(null,self__.state)));
})()));
});

view.t26427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26429){
var self__ = this;
var _26429__$1 = this;
return self__.meta26428;
});

view.t26427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26429,meta26428__$1){
var self__ = this;
var _26429__$1 = this;
return (new view.t26427(self__.owner,self__.state,self__.tags_view,meta26428__$1));
});

view.t26427.cljs$lang$type = true;

view.t26427.cljs$lang$ctorStr = "view/t26427";

view.t26427.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t26427");
});

view.__GT_t26427 = (function __GT_t26427(owner__$1,state__$1,tags_view__$1,meta26428){
return (new view.t26427(owner__$1,state__$1,tags_view__$1,meta26428));
});

}

return (new view.t26427(owner,state,tags_view,null));
});
view.availability_view_nominal = (function availability_view_nominal(state,owner){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"availability-pane"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Title",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"availability-title",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(state))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Description",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"availability-description",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(state))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Tags",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"availability-tags",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"space delimited tags, should all be lower case, with no dashes or spaces",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(state))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"availability-save",new cljs.core.Keyword(null,"class","class",-2030961996),"button tiny right",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return util.console_log.call(null,e);
})], null),"save"], null)], null)], null);
});
view.availability_view = (function availability_view(state,owner){
if(typeof view.t26438 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t26438 = (function (owner,state,availability_view,meta26439){
this.owner = owner;
this.state = state;
this.availability_view = availability_view;
this.meta26439 = meta26439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t26438.prototype.om$core$IRender$ = true;

view.t26438.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return sablono.interpreter.interpret.call(null,view.availability_view_nominal.call(null,self__.state,self__.owner));
});

view.t26438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26440){
var self__ = this;
var _26440__$1 = this;
return self__.meta26439;
});

view.t26438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26440,meta26439__$1){
var self__ = this;
var _26440__$1 = this;
return (new view.t26438(self__.owner,self__.state,self__.availability_view,meta26439__$1));
});

view.t26438.cljs$lang$type = true;

view.t26438.cljs$lang$ctorStr = "view/t26438";

view.t26438.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t26438");
});

view.__GT_t26438 = (function __GT_t26438(owner__$1,state__$1,availability_view__$1,meta26439){
return (new view.t26438(owner__$1,state__$1,availability_view__$1,meta26439));
});

}

return (new view.t26438(owner,state,availability_view,null));
});
view.availabilities_view = (function availabilities_view(state,owner){
if(typeof view.t26469 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t26469 = (function (owner,state,availabilities_view,meta26470){
this.owner = owner;
this.state = state;
this.availabilities_view = availabilities_view;
this.meta26470 = meta26470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t26469.prototype.om$core$IRender$ = true;

view.t26469.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return React.DOM.div({"id": "availabilities-pane"},React.DOM.table({"className": "availabilities-table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Title"),React.DOM.th(null,"Description"),React.DOM.th(null,"tags"))),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__7159__auto____$1){
return (function iter__26477(s__26478){
return (new cljs.core.LazySeq(null,((function (this__7159__auto____$1){
return (function (){
var s__26478__$1 = s__26478;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26478__$1);
if(temp__4126__auto__){
var s__26478__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26478__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26478__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26480 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26479 = (0);
while(true){
if((i__26479 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__26479);
cljs.core.chunk_append.call(null,b__26480,React.DOM.tr({"onClick": ((function (i__26479,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (e){
var updatefn = ((function (i__26479,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (){
util.console_log.call(null,[cljs.core.str("save clicked")].join(''));

var title = $("#availability-title").val();
var description = $("#availability-description").val();
om.core.transact_BANG_.call(null,ech,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"title","title",636505583)], null),((function (i__26479,title,description,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (_){
return title;
});})(i__26479,title,description,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
);

om.core.transact_BANG_.call(null,ech,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"title","title",636505583)], null),((function (i__26479,title,description,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (_){
return description;
});})(i__26479,title,description,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"title","title",636505583)], null),title);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"description","description",-1428560544)], null),description);

return secretary.core.dispatch_BANG_.call(null,"/listings");
});})(i__26479,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
;
$("#availability-title").val(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech)));

$("#availability-description").val(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech)));

$("#availability-tags").val(clojure.string.trim.call(null,cljs.core.reduce.call(null,((function (i__26479,updatefn,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (x,y){
return [cljs.core.str(x),cljs.core.str("  "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(y))].join('');
});})(i__26479,updatefn,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
,"",new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech)))));

$("#availability-save").click(updatefn);

return secretary.core.dispatch_BANG_.call(null,"/availabilities");
});})(i__26479,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
},(function (){var attrs26474 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)));
return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs26474))?sablono.interpreter.attributes.call(null,attrs26474):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26474))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26474)], null))));
})(),(function (){var attrs26475 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)));
return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs26475))?sablono.interpreter.attributes.call(null,attrs26475):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26475))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26475)], null))));
})(),React.DOM.td(null,cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (i__26479,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function iter__26489(s__26490){
return (new cljs.core.LazySeq(null,((function (i__26479,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (){
var s__26490__$1 = s__26490;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__26490__$1);
if(temp__4126__auto____$1){
var s__26490__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26490__$2)){
var c__4376__auto____$1 = cljs.core.chunk_first.call(null,s__26490__$2);
var size__4377__auto____$1 = cljs.core.count.call(null,c__4376__auto____$1);
var b__26492 = cljs.core.chunk_buffer.call(null,size__4377__auto____$1);
if((function (){var i__26491 = (0);
while(true){
if((i__26491 < size__4377__auto____$1)){
var tg = cljs.core._nth.call(null,c__4376__auto____$1,i__26491);
cljs.core.chunk_append.call(null,b__26492,(function (){var attrs26476 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tg);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs26476))?sablono.interpreter.attributes.call(null,attrs26476):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26476))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26476)], null))));
})());

var G__26497 = (i__26491 + (1));
i__26491 = G__26497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26492),iter__26489.call(null,cljs.core.chunk_rest.call(null,s__26490__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26492),null);
}
} else {
var tg = cljs.core.first.call(null,s__26490__$2);
return cljs.core.cons.call(null,(function (){var attrs26476 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tg);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs26476))?sablono.interpreter.attributes.call(null,attrs26476):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26476))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26476)], null))));
})(),iter__26489.call(null,cljs.core.rest.call(null,s__26490__$2)));
}
} else {
return null;
}
break;
}
});})(i__26479,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
,null,null));
});})(i__26479,ech,c__4376__auto__,size__4377__auto__,b__26480,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech))));
})()))));

var G__26498 = (i__26479 + (1));
i__26479 = G__26498;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26480),iter__26477.call(null,cljs.core.chunk_rest.call(null,s__26478__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26480),null);
}
} else {
var ech = cljs.core.first.call(null,s__26478__$2);
return cljs.core.cons.call(null,React.DOM.tr({"onClick": ((function (ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (e){
var updatefn = ((function (ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (){
util.console_log.call(null,[cljs.core.str("save clicked")].join(''));

var title = $("#availability-title").val();
var description = $("#availability-description").val();
om.core.transact_BANG_.call(null,ech,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"title","title",636505583)], null),((function (title,description,ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (_){
return title;
});})(title,description,ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
);

om.core.transact_BANG_.call(null,ech,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"title","title",636505583)], null),((function (title,description,ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (_){
return description;
});})(title,description,ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"title","title",636505583)], null),title);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"description","description",-1428560544)], null),description);

return secretary.core.dispatch_BANG_.call(null,"/listings");
});})(ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
;
$("#availability-title").val(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech)));

$("#availability-description").val(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech)));

$("#availability-tags").val(clojure.string.trim.call(null,cljs.core.reduce.call(null,((function (updatefn,ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (x,y){
return [cljs.core.str(x),cljs.core.str("  "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(y))].join('');
});})(updatefn,ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
,"",new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech)))));

$("#availability-save").click(updatefn);

return secretary.core.dispatch_BANG_.call(null,"/availabilities");
});})(ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
},(function (){var attrs26474 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)));
return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs26474))?sablono.interpreter.attributes.call(null,attrs26474):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26474))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26474)], null))));
})(),(function (){var attrs26475 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)));
return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs26475))?sablono.interpreter.attributes.call(null,attrs26475):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26475))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26475)], null))));
})(),React.DOM.td(null,cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function iter__26493(s__26494){
return (new cljs.core.LazySeq(null,((function (ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (){
var s__26494__$1 = s__26494;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__26494__$1);
if(temp__4126__auto____$1){
var s__26494__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26494__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__26494__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__26496 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__26495 = (0);
while(true){
if((i__26495 < size__4377__auto__)){
var tg = cljs.core._nth.call(null,c__4376__auto__,i__26495);
cljs.core.chunk_append.call(null,b__26496,(function (){var attrs26476 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tg);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs26476))?sablono.interpreter.attributes.call(null,attrs26476):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26476))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26476)], null))));
})());

var G__26499 = (i__26495 + (1));
i__26495 = G__26499;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26496),iter__26493.call(null,cljs.core.chunk_rest.call(null,s__26494__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26496),null);
}
} else {
var tg = cljs.core.first.call(null,s__26494__$2);
return cljs.core.cons.call(null,(function (){var attrs26476 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tg);
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs26476))?sablono.interpreter.attributes.call(null,attrs26476):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26476))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26476)], null))));
})(),iter__26493.call(null,cljs.core.rest.call(null,s__26494__$2)));
}
} else {
return null;
}
break;
}
});})(ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
,null,null));
});})(ech,s__26478__$2,temp__4126__auto__,this__7159__auto____$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech))));
})()))),iter__26477.call(null,cljs.core.rest.call(null,s__26478__$2)));
}
} else {
return null;
}
break;
}
});})(this__7159__auto____$1))
,null,null));
});})(this__7159__auto____$1))
;
return iter__4378__auto__.call(null,om.core.ref_cursor.call(null,new cljs.core.Keyword(null,"availabilities","availabilities",-9113555).cljs$core$IFn$_invoke$arity$1(self__.state)));
})()))));
});

view.t26469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26471){
var self__ = this;
var _26471__$1 = this;
return self__.meta26470;
});

view.t26469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26471,meta26470__$1){
var self__ = this;
var _26471__$1 = this;
return (new view.t26469(self__.owner,self__.state,self__.availabilities_view,meta26470__$1));
});

view.t26469.cljs$lang$type = true;

view.t26469.cljs$lang$ctorStr = "view/t26469";

view.t26469.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t26469");
});

view.__GT_t26469 = (function __GT_t26469(owner__$1,state__$1,availabilities_view__$1,meta26470){
return (new view.t26469(owner__$1,state__$1,availabilities_view__$1,meta26470));
});

}

return (new view.t26469(owner,state,availabilities_view,null));
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
if(typeof view.t26521 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t26521 = (function (listings_container,landing_view,meta26522){
this.listings_container = listings_container;
this.landing_view = landing_view;
this.meta26522 = meta26522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t26521.prototype.om$core$IRender$ = true;

view.t26521.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return React.DOM.div({"id": "landing-container"},React.DOM.ul({"className": "tabs", "data-tab": true},React.DOM.li({"className": "tab-title active"},React.DOM.a({"id": "tab-listings-link", "href": "#tab-listings", "onClick": ((function (this__7159__auto____$1){
return (function (_){
return secretary.core.dispatch_BANG_.call(null,"/listings");
});})(this__7159__auto____$1))
},"Listings")),React.DOM.li({"className": "tab-title"},React.DOM.a({"id": "tab-availabilities-link", "href": "#tab-availabilities", "onClick": ((function (this__7159__auto____$1){
return (function (_){
return secretary.core.dispatch_BANG_.call(null,"/availabilities");
});})(this__7159__auto____$1))
},"Availabilities")),React.DOM.li({"className": "tab-title"},React.DOM.a({"id": "tab-session-link", "href": "#tab-session", "onClick": ((function (this__7159__auto____$1){
return (function (_){
return secretary.core.dispatch_BANG_.call(null,"/session");
});})(this__7159__auto____$1))
},"Session")),React.DOM.li({"className": "tab-title"},React.DOM.a({"id": "tab-account-link", "href": "#tab-account", "onClick": ((function (this__7159__auto____$1){
return (function (_){
return secretary.core.dispatch_BANG_.call(null,"/account");
});})(this__7159__auto____$1))
},"Account"))),React.DOM.div({"className": "tabs-content"},React.DOM.div({"className": "content active", "id": "tab-listings"},React.DOM.div({"id": self__.listings_container})),React.DOM.div({"className": "content", "id": "tab-availabilities"},React.DOM.div({"id": "availability-container"},sablono.interpreter.interpret.call(null,view.availability_view_nominal.call(null,cljs.core.constantly.call(null,null,null,null))))),React.DOM.div({"className": "content", "id": "tab-session"},React.DOM.p(null,"Session")),React.DOM.div({"className": "content", "id": "tab-account"},React.DOM.ul({"className": "small-block-grid-3"},React.DOM.li(null,React.DOM.ul({"className": "pricing-table"},React.DOM.li({"className": view.account_selected_title.call(null,new cljs.core.Keyword(null,"free","free",801364328),"title")},"Free"),React.DOM.li({"className": "price"},"$0"),React.DOM.li({"className": view.account_selected_description.call(null,new cljs.core.Keyword(null,"free","free",801364328),"description")},sablono.interpreter.interpret.call(null,view.account_selected_text.call(null,new cljs.core.Keyword(null,"free","free",801364328),"Sign up and start using the service gratis"))),React.DOM.li({"className": "bullet-item"},"Can only connect to others' availability"),React.DOM.li({"className": "bullet-item"},"A Professional Plan lets you host your own availabilities"),React.DOM.li({"className": "cta-button"},React.DOM.a({"className": view.account_selected_button.call(null,new cljs.core.Keyword(null,"free","free",801364328),"button")},"Subscribe")))),React.DOM.li(null,React.DOM.ul({"className": "pricing-table"},React.DOM.li({"className": view.account_selected_title.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"title")},"Professional"),React.DOM.li({"className": "price"},"$9"),React.DOM.li({"className": view.account_selected_description.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"description")},sablono.interpreter.interpret.call(null,view.account_selected_text.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"Sign up and start using the service"))),React.DOM.li({"className": "bullet-item"},"Host your own availabilities"),React.DOM.li({"className": "bullet-item"},"Full Audio, Video, Text Messages and Screen Sharing"),React.DOM.li({"className": "cta-button"},React.DOM.a({"className": view.account_selected_button.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"button"), "onClick": ((function (this__7159__auto____$1){
return (function (e){
view.pay_with_stripe.call(null,"professional","Professional Plan","900");

return e.preventDefault();
});})(this__7159__auto____$1))
},"Subscribe")))),React.DOM.li(null,React.DOM.ul({"className": "pricing-table"},React.DOM.li({"className": view.account_selected_title.call(null,new cljs.core.Keyword(null,"enterprise","enterprise",835383004),"title")},"Enterprise"),React.DOM.li({"className": "price"},"$24"),React.DOM.li({"className": view.account_selected_description.call(null,new cljs.core.Keyword(null,"enterprise","enterprise",835383004),"description")},sablono.interpreter.interpret.call(null,view.account_selected_text.call(null,new cljs.core.Keyword(null,"enterprise","enterprise",835383004),"Sign up your organization and enable enterprise wide problem solving"))),React.DOM.li({"className": "bullet-item"},"Connect to any availabilitles. Host your own. Run group sessions."),React.DOM.li({"className": "bullet-item"},sablono.interpreter.interpret.call(null,goog.string.unescapeEntities("&nbsp;"))),React.DOM.li({"className": "cta-button"},React.DOM.a({"className": view.account_selected_button.call(null,new cljs.core.Keyword(null,"enterprise","enterprise",835383004),"button"), "onClick": ((function (this__7159__auto____$1){
return (function (e){
view.pay_with_stripe.call(null,"enterprise","Enterprise Plan","2400");

return e.preventDefault();
});})(this__7159__auto____$1))
},"Subscribe"))))))));
});

view.t26521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26523){
var self__ = this;
var _26523__$1 = this;
return self__.meta26522;
});

view.t26521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26523,meta26522__$1){
var self__ = this;
var _26523__$1 = this;
return (new view.t26521(self__.listings_container,self__.landing_view,meta26522__$1));
});

view.t26521.cljs$lang$type = true;

view.t26521.cljs$lang$ctorStr = "view/t26521";

view.t26521.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t26521");
});

view.__GT_t26521 = (function __GT_t26521(listings_container__$1,landing_view__$1,meta26522){
return (new view.t26521(listings_container__$1,landing_view__$1,meta26522));
});

}

return (new view.t26521(listings_container,landing_view,null));
});

//# sourceMappingURL=view.js.map