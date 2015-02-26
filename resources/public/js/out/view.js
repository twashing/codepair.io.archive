// Compiled by ClojureScript 0.0-2505
goog.provide('view');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('goog.string');
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
if(typeof view.t17707 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t17707 = (function (owner,state,tags_view,meta17708){
this.owner = owner;
this.state = state;
this.tags_view = tags_view;
this.meta17708 = meta17708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t17707.prototype.om$core$IRender$ = true;

view.t17707.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"id": "tags-pane"},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__5875__auto____$1){
return (function iter__17710(s__17711){
return (new cljs.core.LazySeq(null,((function (this__5875__auto____$1){
return (function (){
var s__17711__$1 = s__17711;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17711__$1);
if(temp__4126__auto__){
var s__17711__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17711__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__17711__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__17713 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__17712 = (0);
while(true){
if((i__17712 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__17712);
cljs.core.chunk_append.call(null,b__17713,React.DOM.div({"onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))));

var G__17714 = (i__17712 + (1));
i__17712 = G__17714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17713),iter__17710.call(null,cljs.core.chunk_rest.call(null,s__17711__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17713),null);
}
} else {
var ech = cljs.core.first.call(null,s__17711__$2);
return cljs.core.cons.call(null,React.DOM.div({"onClick": view.tag_filter_handler},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ech)))),iter__17710.call(null,cljs.core.rest.call(null,s__17711__$2)));
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

view.t17707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17709){
var self__ = this;
var _17709__$1 = this;
return self__.meta17708;
});

view.t17707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17709,meta17708__$1){
var self__ = this;
var _17709__$1 = this;
return (new view.t17707(self__.owner,self__.state,self__.tags_view,meta17708__$1));
});

view.t17707.cljs$lang$type = true;

view.t17707.cljs$lang$ctorStr = "view/t17707";

view.t17707.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t17707");
});

view.__GT_t17707 = (function __GT_t17707(owner__$1,state__$1,tags_view__$1,meta17708){
return (new view.t17707(owner__$1,state__$1,tags_view__$1,meta17708));
});

}

return (new view.t17707(owner,state,tags_view,null));
});
view.availabilities_view = (function availabilities_view(state,owner){
if(typeof view.t17724 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t17724 = (function (owner,state,availabilities_view,meta17725){
this.owner = owner;
this.state = state;
this.availabilities_view = availabilities_view;
this.meta17725 = meta17725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t17724.prototype.om$core$IRender$ = true;

view.t17724.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"id": "availabilities-pane"},cljs.core.into_array.call(null,(function (){var iter__4378__auto__ = ((function (this__5875__auto____$1){
return (function iter__17729(s__17730){
return (new cljs.core.LazySeq(null,((function (this__5875__auto____$1){
return (function (){
var s__17730__$1 = s__17730;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17730__$1);
if(temp__4126__auto__){
var s__17730__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17730__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__17730__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__17732 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__17731 = (0);
while(true){
if((i__17731 < size__4377__auto__)){
var ech = cljs.core._nth.call(null,c__4376__auto__,i__17731);
cljs.core.chunk_append.call(null,b__17732,React.DOM.div(null,(function (){var attrs17727 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17727))?sablono.interpreter.attributes.call(null,attrs17727):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17727))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17727)], null))));
})(),(function (){var attrs17728 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17728))?sablono.interpreter.attributes.call(null,attrs17728):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17728))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17728)], null))));
})()));

var G__17733 = (i__17731 + (1));
i__17731 = G__17733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17732),iter__17729.call(null,cljs.core.chunk_rest.call(null,s__17730__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17732),null);
}
} else {
var ech = cljs.core.first.call(null,s__17730__$2);
return cljs.core.cons.call(null,React.DOM.div(null,(function (){var attrs17727 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17727))?sablono.interpreter.attributes.call(null,attrs17727):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17727))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17727)], null))));
})(),(function (){var attrs17728 = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"availability","availability",-1399524862).cljs$core$IFn$_invoke$arity$1(ech));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17728))?sablono.interpreter.attributes.call(null,attrs17728):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17728))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17728)], null))));
})()),iter__17729.call(null,cljs.core.rest.call(null,s__17730__$2)));
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

view.t17724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17726){
var self__ = this;
var _17726__$1 = this;
return self__.meta17725;
});

view.t17724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17726,meta17725__$1){
var self__ = this;
var _17726__$1 = this;
return (new view.t17724(self__.owner,self__.state,self__.availabilities_view,meta17725__$1));
});

view.t17724.cljs$lang$type = true;

view.t17724.cljs$lang$ctorStr = "view/t17724";

view.t17724.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t17724");
});

view.__GT_t17724 = (function __GT_t17724(owner__$1,state__$1,availabilities_view__$1,meta17725){
return (new view.t17724(owner__$1,state__$1,availabilities_view__$1,meta17725));
});

}

return (new view.t17724(owner,state,availabilities_view,null));
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

return common.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/charge",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stripeToken","stripeToken",-1136091323),token.id,new cljs.core.Keyword(null,"stripeEmail","stripeEmail",-543513955),token.email,new cljs.core.Keyword(null,"accountlevel","accountlevel",1562723208),[cljs.core.str(":"),cljs.core.str(planId)].join('')], null),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),cljs.core.partial.call(null,common.basicHandler,(function (e,xhr){
var data = xhr.getResponseText();
var responseF = reader.read_string.call(null,data);
((1) + (2));

return ((3) + (4));
}))], null));
})], null));
var handler = StripeCheckout.configure(stripe_config);
handler.open(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Stripe.com",new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"amount","amount",364489504),amount], null)));

return $(window).on("popstate",((function (stripe_config,handler){
return (function (){
return handler.close();
});})(stripe_config,handler))
);
});
view.landing_view = (function landing_view(listings_container){
if(typeof view.t17759 !== 'undefined'){
} else {

/**
* @constructor
*/
view.t17759 = (function (listings_container,landing_view,meta17760){
this.listings_container = listings_container;
this.landing_view = landing_view;
this.meta17760 = meta17760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
view.t17759.prototype.om$core$IRender$ = true;

view.t17759.prototype.om$core$IRender$render$arity$1 = (function (this__5875__auto__){
var self__ = this;
var this__5875__auto____$1 = this;
return React.DOM.div({"id": "landing-container"},React.DOM.ul({"className": "tabs", "data-tab": true},React.DOM.li({"className": "tab-title active"},React.DOM.a({"href": "#tab-listings"},"Listings")),React.DOM.li({"className": "tab-title"},React.DOM.a({"href": "#tab-availabilities"},"Availabilities")),React.DOM.li({"className": "tab-title"},React.DOM.a({"href": "#tab-session"},"Session")),React.DOM.li({"className": "tab-title"},React.DOM.a({"href": "#tab-account"},"Account"))),React.DOM.div({"className": "tabs-content"},React.DOM.div({"className": "content active", "id": "tab-listings"},React.DOM.div({"id": self__.listings_container})),React.DOM.div({"className": "content", "id": "tab-availabilities"},React.DOM.p(null,"Availabilities"),React.DOM.a({"className": "button tiny"},"thing"),React.DOM.div({"className": "small-4 columns"},React.DOM.label(null,"Input Label",sablono.interpreter.input.call(null,{"type": "text", "placeholder": "small-4 columns"})))),React.DOM.div({"className": "content", "id": "tab-session"},React.DOM.p(null,"Session")),React.DOM.div({"className": "content", "id": "tab-account"},React.DOM.ul({"className": "small-block-grid-3"},React.DOM.li(null,React.DOM.ul({"className": "pricing-table"},React.DOM.li({"className": view.account_selected_title.call(null,new cljs.core.Keyword(null,"free","free",801364328),"title")},"Free"),React.DOM.li({"className": "price"},"$0"),React.DOM.li({"className": view.account_selected_description.call(null,new cljs.core.Keyword(null,"free","free",801364328),"description")},sablono.interpreter.interpret.call(null,view.account_selected_text.call(null,new cljs.core.Keyword(null,"free","free",801364328),"Sign up and start using the service gratis"))),React.DOM.li({"className": "bullet-item"},"Can only connect to others' availability"),React.DOM.li({"className": "bullet-item"},"A Professional Plan lets you host your own availabilities"),React.DOM.li({"className": "cta-button"},React.DOM.a({"className": view.account_selected_button.call(null,new cljs.core.Keyword(null,"free","free",801364328),"button")},"Subscribe")))),React.DOM.li(null,React.DOM.ul({"className": "pricing-table"},React.DOM.li({"className": view.account_selected_title.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"title")},"Professional"),React.DOM.li({"className": "price"},"$9"),React.DOM.li({"className": view.account_selected_description.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"description")},sablono.interpreter.interpret.call(null,view.account_selected_text.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"Sign up and start using the service"))),React.DOM.li({"className": "bullet-item"},"Host your own availabilities"),React.DOM.li({"className": "bullet-item"},"Full Audio, Video, Text Messages and Screen Sharing"),React.DOM.li({"className": "cta-button"},React.DOM.a({"className": view.account_selected_button.call(null,new cljs.core.Keyword(null,"professional","professional",-551516037),"button"), "onClick": ((function (this__5875__auto____$1){
return (function (e){
view.pay_with_stripe.call(null,"professional","Professional Plan","900");

return e.preventDefault();
});})(this__5875__auto____$1))
},"Subscribe")))),React.DOM.li(null,React.DOM.ul({"className": "pricing-table"},React.DOM.li({"className": view.account_selected_title.call(null,new cljs.core.Keyword(null,"enterprise","enterprise",835383004),"title")},"Enterprise"),React.DOM.li({"className": "price"},"$24"),React.DOM.li({"className": view.account_selected_description.call(null,new cljs.core.Keyword(null,"enterprise","enterprise",835383004),"description")},sablono.interpreter.interpret.call(null,view.account_selected_text.call(null,new cljs.core.Keyword(null,"enterprise","enterprise",835383004),"Sign up your organization and enable enterprise wide problem solving"))),React.DOM.li({"className": "bullet-item"},"Connect to any availabilitles. Host your own. Run group sessions."),React.DOM.li({"className": "bullet-item"},sablono.interpreter.interpret.call(null,goog.string.unescapeEntities("&nbsp;"))),React.DOM.li({"className": "cta-button"},React.DOM.a({"className": view.account_selected_button.call(null,new cljs.core.Keyword(null,"enterprise","enterprise",835383004),"button"), "onClick": ((function (this__5875__auto____$1){
return (function (e){
view.pay_with_stripe.call(null,"enterprise","Enterprise Plan","2400");

return e.preventDefault();
});})(this__5875__auto____$1))
},"Subscribe"))))))));
});

view.t17759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17761){
var self__ = this;
var _17761__$1 = this;
return self__.meta17760;
});

view.t17759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17761,meta17760__$1){
var self__ = this;
var _17761__$1 = this;
return (new view.t17759(self__.listings_container,self__.landing_view,meta17760__$1));
});

view.t17759.cljs$lang$type = true;

view.t17759.cljs$lang$ctorStr = "view/t17759";

view.t17759.cljs$lang$ctorPrWriter = (function (this__4209__auto__,writer__4210__auto__,opt__4211__auto__){
return cljs.core._write.call(null,writer__4210__auto__,"view/t17759");
});

view.__GT_t17759 = (function __GT_t17759(listings_container__$1,landing_view__$1,meta17760){
return (new view.t17759(listings_container__$1,landing_view__$1,meta17760));
});

}

return (new view.t17759(listings_container,landing_view,null));
});

//# sourceMappingURL=view.js.map