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
return common.search_availabilities_bytag.call(null,view.availabilities_handler,e.target.textContent);
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
if(typeof view.t40222 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t40222 = (function (owner,state,tags_view,meta40223){
this.owner = owner;
this.state = state;
this.tags_view = tags_view;
this.meta40223 = meta40223;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t40222.prototype.om$core$IRender$ = true;

view.t40222.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return React.DOM.div({"id": "tags-pane"},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__7159__auto____$1){
return (function iter__40225(s__40226){
return (new cljs.core.LazySeq(null,((function (this__7159__auto____$1){
return (function (){
var s__40226__$1 = s__40226;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40226__$1);
if(temp__4126__auto__){
var s__40226__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40226__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__40226__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__40228 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__40227 = (0);
while(true){
if((i__40227 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__40227);
cljs.core.chunk_append.call(null,b__40228,React.DOM.div({"className": "tag-item", "onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))));

var G__40229 = (i__40227 + (1));
i__40227 = G__40229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40228),iter__40225.call(null,cljs.core.chunk_rest.call(null,s__40226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40228),null);
}
} else {
var ech = cljs.core.first.call(null,s__40226__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "tag-item", "onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))),iter__40225.call(null,cljs.core.rest.call(null,s__40226__$2)));
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

view.t40222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40224){
var self__ = this;
var _40224__$1 = this;
return self__.meta40223;
});

view.t40222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40224,meta40223__$1){
var self__ = this;
var _40224__$1 = this;
return (new view.t40222(self__.owner,self__.state,self__.tags_view,meta40223__$1));
});

view.t40222.cljs$lang$type = true;

view.t40222.cljs$lang$ctorStr = "view/t40222";

view.t40222.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t40222");
});

view.__GT_t40222 = (function __GT_t40222(owner__$1,state__$1,tags_view__$1,meta40223){
return (new view.t40222(owner__$1,state__$1,tags_view__$1,meta40223));
});

}

return (new view.t40222(owner,state,tags_view,null));
});
view.availability_view_nominal = (function availability_view_nominal(state,owner){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"availability-pane"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Title",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"availability-title",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(state))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Description",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"availability-description",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(state))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Tags",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"availability-tags",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"space delimited tags, lower case, no dashes or spaces",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(state))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"availability-save",new cljs.core.Keyword(null,"class","class",-2030961996),"button right"], null),"Save"], null)], null)], null);
});
view.availability_view = (function availability_view(state,owner){
if(typeof view.t40233 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t40233 = (function (owner,state,availability_view,meta40234){
this.owner = owner;
this.state = state;
this.availability_view = availability_view;
this.meta40234 = meta40234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t40233.prototype.om$core$IRender$ = true;

view.t40233.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return sablono.interpreter.interpret.call(null,view.availability_view_nominal.call(null,self__.state,self__.owner));
});

view.t40233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40235){
var self__ = this;
var _40235__$1 = this;
return self__.meta40234;
});

view.t40233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40235,meta40234__$1){
var self__ = this;
var _40235__$1 = this;
return (new view.t40233(self__.owner,self__.state,self__.availability_view,meta40234__$1));
});

view.t40233.cljs$lang$type = true;

view.t40233.cljs$lang$ctorStr = "view/t40233";

view.t40233.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t40233");
});

view.__GT_t40233 = (function __GT_t40233(owner__$1,state__$1,availability_view__$1,meta40234){
return (new view.t40233(owner__$1,state__$1,availability_view__$1,meta40234));
});

}

return (new view.t40233(owner,state,availability_view,null));
});
view.availabilities_view = (function availabilities_view(state,owner){
if(typeof view.t40262 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t40262 = (function (owner,state,availabilities_view,meta40263){
this.owner = owner;
this.state = state;
this.availabilities_view = availabilities_view;
this.meta40263 = meta40263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t40262.prototype.om$core$IRender$ = true;

view.t40262.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return React.DOM.div({"id": "availabilities-pane"},React.DOM.table({"className": "availabilities-table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Title"),React.DOM.th(null,"Description"),React.DOM.th(null,"Tags"),React.DOM.th(null,"User"))),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__7159__auto____$1){
return (function iter__40267(s__40268){
return (new cljs.core.LazySeq(null,((function (this__7159__auto____$1){
return (function (){
var s__40268__$1 = s__40268;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40268__$1);
if(temp__4126__auto__){
var s__40268__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40268__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__40268__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__40270 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__40269 = (0);
while(true){
if((i__40269 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__40269);
cljs.core.chunk_append.call(null,b__40270,sablono.interpreter.interpret.call(null,(function (){var availabilityUser = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)))))));
var currentUser = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(common.get_app_state.call(null)));
var currentGroup = new cljs.core.Keyword(null,"groupname","groupname",-493355733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(common.get_app_state.call(null)));
var updateHandler = ((function (i__40269,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (e){
var syncfn = ((function (i__40269,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (){
var availability = new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner));
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
var group_name = currentGroup;
return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/update-availability?groupname="),cljs.core.str(group_name),cljs.core.str("&title="),cljs.core.str(title)].join(''),new cljs.core.Keyword(null,"data","data",-232669377),availability,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),common.localCommonHandler.call(null,((function (i__40269,availability,title,group_name,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (e__$1,xhr,data){
return util.console_log.call(null,[cljs.core.str("SUCCESS: "),cljs.core.str(data)].join(''));
});})(i__40269,availability,title,group_name,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
)], null));
});})(i__40269,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
;
var updatefn = ((function (i__40269,syncfn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (){
var title = $("#availability-title").val();
var description = $("#availability-description").val();
var tags = cljs.core.mapv.call(null,((function (i__40269,title,description,syncfn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (e__$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.replace.call(null,clojure.string.lower_case.call(null,e__$1),/\-/,"")], null);
});})(i__40269,title,description,syncfn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
,cljs.core.filter.call(null,((function (i__40269,title,description,syncfn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (p1__40236_SHARP_){
return cljs.core.re_find.call(null,/\w/,p1__40236_SHARP_);
});})(i__40269,title,description,syncfn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
,clojure.string.split.call(null,$("#availability-tags").val(),/\s/)));
om.core.transact_BANG_.call(null,ech,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"title","title",636505583)], null),((function (i__40269,title,description,tags,syncfn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (_){
return title;
});})(i__40269,title,description,tags,syncfn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
);

om.core.transact_BANG_.call(null,ech,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"description","description",-1428560544)], null),((function (i__40269,title,description,tags,syncfn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (_){
return description;
});})(i__40269,title,description,tags,syncfn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
);

om.core.transact_BANG_.call(null,ech,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),((function (i__40269,title,description,tags,syncfn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (_){
return tags;
});})(i__40269,title,description,tags,syncfn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"title","title",636505583)], null),title);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"description","description",-1428560544)], null),description);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),tags);

secretary.core.dispatch_BANG_.call(null,"/listings");

return syncfn.call(null);
});})(i__40269,syncfn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
;
$("#availability-title").val(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech)));

$("#availability-description").val(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech)));

$("#availability-tags").val(clojure.string.trim.call(null,cljs.core.reduce.call(null,((function (i__40269,syncfn,updatefn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (x,y){
return [cljs.core.str(x),cljs.core.str("  "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(y))].join('');
});})(i__40269,syncfn,updatefn,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
,"",new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech)))));

$("#availability-save").off("click");

$("#availability-save").click(updatefn);

return secretary.core.dispatch_BANG_.call(null,"/availabilities");
});})(i__40269,availabilityUser,currentUser,currentGroup,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,currentUser,availabilityUser))?"availability-row":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.call(null,currentUser,availabilityUser))?updateHandler:cljs.core.constantly.call(null,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var iter__4378__auto__ = ((function (i__40269,availabilityUser,currentUser,currentGroup,updateHandler,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function iter__40279(s__40280){
return (new cljs.core.LazySeq(null,((function (i__40269,availabilityUser,currentUser,currentGroup,updateHandler,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (){
var s__40280__$1 = s__40280;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__40280__$1);
if(temp__4126__auto____$1){
var s__40280__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40280__$2)){
var c__4376__auto____$1 = cljs.core.chunk_first.call(null,s__40280__$2);
var size__4377__auto____$1 = cljs.core.count.call(null,c__4376__auto____$1);
var b__40282 = cljs.core.chunk_buffer.call(null,size__4377__auto____$1);
if((function (){var i__40281 = (0);
while(true){
if((i__40281 < size__4377__auto____$1)){
var tg = cljs.core._nth.call(null,c__4376__auto____$1,i__40281);
cljs.core.chunk_append.call(null,b__40282,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tg)], null));

var G__40287 = (i__40281 + (1));
i__40281 = G__40287;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40282),iter__40279.call(null,cljs.core.chunk_rest.call(null,s__40280__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40282),null);
}
} else {
var tg = cljs.core.first.call(null,s__40280__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tg)], null),iter__40279.call(null,cljs.core.rest.call(null,s__40280__$2)));
}
} else {
return null;
}
break;
}
});})(i__40269,availabilityUser,currentUser,currentGroup,updateHandler,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
,null,null));
});})(i__40269,availabilityUser,currentUser,currentGroup,updateHandler,ech,c__4376__auto__,size__4377__auto__,b__40270,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech))));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)))))))], null)], null);
})()));

var G__40288 = (i__40269 + (1));
i__40269 = G__40288;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40270),iter__40267.call(null,cljs.core.chunk_rest.call(null,s__40268__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40270),null);
}
} else {
var ech = cljs.core.first.call(null,s__40268__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(function (){var availabilityUser = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)))))));
var currentUser = new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(common.get_app_state.call(null)));
var currentGroup = new cljs.core.Keyword(null,"groupname","groupname",-493355733).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(common.get_app_state.call(null)));
var updateHandler = ((function (availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (e){
var syncfn = ((function (availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (){
var availability = new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner));
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
var group_name = currentGroup;
return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/update-availability?groupname="),cljs.core.str(group_name),cljs.core.str("&title="),cljs.core.str(title)].join(''),new cljs.core.Keyword(null,"data","data",-232669377),availability,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),common.localCommonHandler.call(null,((function (availability,title,group_name,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (e__$1,xhr,data){
return util.console_log.call(null,[cljs.core.str("SUCCESS: "),cljs.core.str(data)].join(''));
});})(availability,title,group_name,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
)], null));
});})(availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
;
var updatefn = ((function (syncfn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (){
var title = $("#availability-title").val();
var description = $("#availability-description").val();
var tags = cljs.core.mapv.call(null,((function (title,description,syncfn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (e__$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),clojure.string.replace.call(null,clojure.string.lower_case.call(null,e__$1),/\-/,"")], null);
});})(title,description,syncfn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
,cljs.core.filter.call(null,((function (title,description,syncfn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (p1__40236_SHARP_){
return cljs.core.re_find.call(null,/\w/,p1__40236_SHARP_);
});})(title,description,syncfn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
,clojure.string.split.call(null,$("#availability-tags").val(),/\s/)));
om.core.transact_BANG_.call(null,ech,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"title","title",636505583)], null),((function (title,description,tags,syncfn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (_){
return title;
});})(title,description,tags,syncfn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
);

om.core.transact_BANG_.call(null,ech,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"description","description",-1428560544)], null),((function (title,description,tags,syncfn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (_){
return description;
});})(title,description,tags,syncfn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
);

om.core.transact_BANG_.call(null,ech,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),((function (title,description,tags,syncfn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (_){
return tags;
});})(title,description,tags,syncfn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"title","title",636505583)], null),title);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"description","description",-1428560544)], null),description);

om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"availability","availability",-1399524862),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),tags);

secretary.core.dispatch_BANG_.call(null,"/listings");

return syncfn.call(null);
});})(syncfn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
;
$("#availability-title").val(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech)));

$("#availability-description").val(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech)));

$("#availability-tags").val(clojure.string.trim.call(null,cljs.core.reduce.call(null,((function (syncfn,updatefn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (x,y){
return [cljs.core.str(x),cljs.core.str("  "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(y))].join('');
});})(syncfn,updatefn,availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
,"",new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech)))));

$("#availability-save").off("click");

$("#availability-save").click(updatefn);

return secretary.core.dispatch_BANG_.call(null,"/availabilities");
});})(availabilityUser,currentUser,currentGroup,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
;
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,currentUser,availabilityUser))?"availability-row":""),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core._EQ_.call(null,currentUser,availabilityUser))?updateHandler:cljs.core.constantly.call(null,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var iter__4378__auto__ = ((function (availabilityUser,currentUser,currentGroup,updateHandler,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function iter__40283(s__40284){
return (new cljs.core.LazySeq(null,((function (availabilityUser,currentUser,currentGroup,updateHandler,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1){
return (function (){
var s__40284__$1 = s__40284;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__40284__$1);
if(temp__4126__auto____$1){
var s__40284__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40284__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__40284__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__40286 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__40285 = (0);
while(true){
if((i__40285 < size__4377__auto__)){
var tg = cljs.core._nth.call(null,c__4376__auto__,i__40285);
cljs.core.chunk_append.call(null,b__40286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tg)], null));

var G__40289 = (i__40285 + (1));
i__40285 = G__40289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40286),iter__40283.call(null,cljs.core.chunk_rest.call(null,s__40284__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40286),null);
}
} else {
var tg = cljs.core.first.call(null,s__40284__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(tg)], null),iter__40283.call(null,cljs.core.rest.call(null,s__40284__$2)));
}
} else {
return null;
}
break;
}
});})(availabilityUser,currentUser,currentGroup,updateHandler,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
,null,null));
});})(availabilityUser,currentUser,currentGroup,updateHandler,ech,s__40268__$2,temp__4126__auto__,this__7159__auto____$1))
;
return iter__4378__auto__.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech))));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ech)))))))], null)], null);
})()),iter__40267.call(null,cljs.core.rest.call(null,s__40268__$2)));
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

view.t40262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40264){
var self__ = this;
var _40264__$1 = this;
return self__.meta40263;
});

view.t40262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40264,meta40263__$1){
var self__ = this;
var _40264__$1 = this;
return (new view.t40262(self__.owner,self__.state,self__.availabilities_view,meta40263__$1));
});

view.t40262.cljs$lang$type = true;

view.t40262.cljs$lang$ctorStr = "view/t40262";

view.t40262.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t40262");
});

view.__GT_t40262 = (function __GT_t40262(owner__$1,state__$1,availabilities_view__$1,meta40263){
return (new view.t40262(owner__$1,state__$1,availabilities_view__$1,meta40263));
});

}

return (new view.t40262(owner,state,availabilities_view,null));
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
view.session_view_nominal = (function session_view_nominal(state,owner){
return React.DOM.div({"id": "session-pane"},React.DOM.video({"autoplay": true}));
});
view.session_view = (function session_view(state,owner){
if(typeof view.t40297 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t40297 = (function (owner,state,session_view,meta40298){
this.owner = owner;
this.state = state;
this.session_view = session_view;
this.meta40298 = meta40298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t40297.prototype.om$core$IRender$ = true;

view.t40297.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
var self__ = this;
var this__7159__auto____$1 = this;
return view.session_view_nominal.call(null,self__.state,self__.owner);
});

view.t40297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40299){
var self__ = this;
var _40299__$1 = this;
return self__.meta40298;
});

view.t40297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40299,meta40298__$1){
var self__ = this;
var _40299__$1 = this;
return (new view.t40297(self__.owner,self__.state,self__.session_view,meta40298__$1));
});

view.t40297.cljs$lang$type = true;

view.t40297.cljs$lang$ctorStr = "view/t40297";

view.t40297.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t40297");
});

view.__GT_t40297 = (function __GT_t40297(owner__$1,state__$1,session_view__$1,meta40298){
return (new view.t40297(owner__$1,state__$1,session_view__$1,meta40298));
});

}

return (new view.t40297(owner,state,session_view,null));
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
if(typeof view.t40319 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t40319 = (function (listings_container,landing_view,meta40320){
this.listings_container = listings_container;
this.landing_view = landing_view;
this.meta40320 = meta40320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t40319.prototype.om$core$IRender$ = true;

view.t40319.prototype.om$core$IRender$render$arity$1 = (function (this__7159__auto__){
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
},"Account"))),React.DOM.div({"className": "tabs-content"},React.DOM.div({"className": "content active", "id": "tab-listings"},React.DOM.div({"id": self__.listings_container})),React.DOM.div({"className": "content", "id": "tab-availabilities"},React.DOM.div({"id": "availability-container"},sablono.interpreter.interpret.call(null,view.availability_view_nominal.call(null,cljs.core.constantly.call(null,null,null,null))))),React.DOM.div({"className": "content", "id": "tab-session"},sablono.interpreter.interpret.call(null,view.session_view_nominal.call(null,cljs.core.constantly.call(null,null,null)))),React.DOM.div({"className": "content", "id": "tab-account"},React.DOM.ul({"className": "small-block-grid-3"},React.DOM.li(null,React.DOM.ul({"className": "pricing-table"},React.DOM.li({"className": view.account_selected_title.call(null,new cljs.core.Keyword(null,"free","free",801364328),"title")},"Free"),React.DOM.li({"className": "price"},"$0"),React.DOM.li({"className": view.account_selected_description.call(null,new cljs.core.Keyword(null,"free","free",801364328),"description")},sablono.interpreter.interpret.call(null,view.account_selected_text.call(null,new cljs.core.Keyword(null,"free","free",801364328),"Sign up and start using the service gratis"))),React.DOM.li({"className": "bullet-item"},"Can only connect to others' availability"),React.DOM.li({"className": "bullet-item"},"A Professional Plan lets you host your own availabilities"),React.DOM.li({"className": "cta-button"},React.DOM.a({"className": view.account_selected_button.call(null,new cljs.core.Keyword(null,"free","free",801364328),"button")},"Subscribe")))),React.DOM.li(null,React.DOM.ul({"className": "pricing-table"},React.DOM.li({"className": view.account_selected_title.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"title")},"Professional"),React.DOM.li({"className": "price"},"$9"),React.DOM.li({"className": view.account_selected_description.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"description")},sablono.interpreter.interpret.call(null,view.account_selected_text.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"Sign up and start using the service"))),React.DOM.li({"className": "bullet-item"},"Host your own availabilities"),React.DOM.li({"className": "bullet-item"},"Full Audio, Video, Text Messages and Screen Sharing"),React.DOM.li({"className": "cta-button"},React.DOM.a({"className": view.account_selected_button.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"button"), "onClick": ((function (this__7159__auto____$1){
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

view.t40319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40321){
var self__ = this;
var _40321__$1 = this;
return self__.meta40320;
});

view.t40319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40321,meta40320__$1){
var self__ = this;
var _40321__$1 = this;
return (new view.t40319(self__.listings_container,self__.landing_view,meta40320__$1));
});

view.t40319.cljs$lang$type = true;

view.t40319.cljs$lang$ctorStr = "view/t40319";

view.t40319.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t40319");
});

view.__GT_t40319 = (function __GT_t40319(listings_container__$1,landing_view__$1,meta40320){
return (new view.t40319(listings_container__$1,landing_view__$1,meta40320));
});

}

return (new view.t40319(listings_container,landing_view,null));
});

//# sourceMappingURL=view.js.map