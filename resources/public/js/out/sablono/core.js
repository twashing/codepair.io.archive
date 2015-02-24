// Compiled by ClojureScript 0.0-2505
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__10469__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__10468 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__10468,(0),null);
var body = cljs.core.nthnext.call(null,vec__10468,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__10469 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10469__delegate.call(this,args);};
G__10469.cljs$lang$maxFixedArity = 0;
G__10469.cljs$lang$applyTo = (function (arglist__10470){
var args = cljs.core.seq(arglist__10470);
return G__10469__delegate(args);
});
G__10469.cljs$core$IFn$_invoke$arity$variadic = G__10469__delegate;
return G__10469;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__10475(s__10476){
return (new cljs.core.LazySeq(null,(function (){
var s__10476__$1 = s__10476;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10476__$1);
if(temp__4126__auto__){
var s__10476__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10476__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10476__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10478 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10477 = (0);
while(true){
if((i__10477 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__10477);
cljs.core.chunk_append.call(null,b__10478,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__10479 = (i__10477 + (1));
i__10477 = G__10479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10478),iter__10475.call(null,cljs.core.chunk_rest.call(null,s__10476__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10478),null);
}
} else {
var args = cljs.core.first.call(null,s__10476__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__10475.call(null,cljs.core.rest.call(null,s__10476__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4378__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){
return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4378__auto__ = (function iter__10484(s__10485){
return (new cljs.core.LazySeq(null,(function (){
var s__10485__$1 = s__10485;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10485__$1);
if(temp__4126__auto__){
var s__10485__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10485__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10485__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10487 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10486 = (0);
while(true){
if((i__10486 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__10486);
cljs.core.chunk_append.call(null,b__10487,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__10488 = (i__10486 + (1));
i__10486 = G__10488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10487),iter__10484.call(null,cljs.core.chunk_rest.call(null,s__10485__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10487),null);
}
} else {
var style = cljs.core.first.call(null,s__10485__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__10484.call(null,cljs.core.rest.call(null,s__10485__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4378__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__10489){
var styles = cljs.core.seq(arglist__10489);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to10490 = (function() { 
var link_to10490__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to10490 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to10490__delegate.call(this,url,content);};
link_to10490.cljs$lang$maxFixedArity = 1;
link_to10490.cljs$lang$applyTo = (function (arglist__10491){
var url = cljs.core.first(arglist__10491);
var content = cljs.core.rest(arglist__10491);
return link_to10490__delegate(url,content);
});
link_to10490.cljs$core$IFn$_invoke$arity$variadic = link_to10490__delegate;
return link_to10490;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to10490);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to10492 = (function() { 
var mail_to10492__delegate = function (e_mail,p__10493){
var vec__10495 = p__10493;
var content = cljs.core.nth.call(null,vec__10495,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to10492 = function (e_mail,var_args){
var p__10493 = null;
if (arguments.length > 1) {
  p__10493 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to10492__delegate.call(this,e_mail,p__10493);};
mail_to10492.cljs$lang$maxFixedArity = 1;
mail_to10492.cljs$lang$applyTo = (function (arglist__10496){
var e_mail = cljs.core.first(arglist__10496);
var p__10493 = cljs.core.rest(arglist__10496);
return mail_to10492__delegate(e_mail,p__10493);
});
mail_to10492.cljs$core$IFn$_invoke$arity$variadic = mail_to10492__delegate;
return mail_to10492;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to10492);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list10497 = (function unordered_list10497(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__10502(s__10503){
return (new cljs.core.LazySeq(null,(function (){
var s__10503__$1 = s__10503;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10503__$1);
if(temp__4126__auto__){
var s__10503__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10503__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10503__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10505 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10504 = (0);
while(true){
if((i__10504 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__10504);
cljs.core.chunk_append.call(null,b__10505,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10506 = (i__10504 + (1));
i__10504 = G__10506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10505),iter__10502.call(null,cljs.core.chunk_rest.call(null,s__10503__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10505),null);
}
} else {
var x = cljs.core.first.call(null,s__10503__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__10502.call(null,cljs.core.rest.call(null,s__10503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4378__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list10497);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list10507 = (function ordered_list10507(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__10512(s__10513){
return (new cljs.core.LazySeq(null,(function (){
var s__10513__$1 = s__10513;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10513__$1);
if(temp__4126__auto__){
var s__10513__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10513__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10513__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10515 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10514 = (0);
while(true){
if((i__10514 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__10514);
cljs.core.chunk_append.call(null,b__10515,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__10516 = (i__10514 + (1));
i__10514 = G__10516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10515),iter__10512.call(null,cljs.core.chunk_rest.call(null,s__10513__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10515),null);
}
} else {
var x = cljs.core.first.call(null,s__10513__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__10512.call(null,cljs.core.rest.call(null,s__10513__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4378__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list10507);
/**
* Create an image element.
*/
sablono.core.image10517 = (function() {
var image10517 = null;
var image10517__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image10517__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image10517 = function(src,alt){
switch(arguments.length){
case 1:
return image10517__1.call(this,src);
case 2:
return image10517__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image10517.cljs$core$IFn$_invoke$arity$1 = image10517__1;
image10517.cljs$core$IFn$_invoke$arity$2 = image10517__2;
return image10517;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image10517);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__10518_SHARP_,p2__10519_SHARP_){
return [cljs.core.str(p1__10518_SHARP_),cljs.core.str("["),cljs.core.str(p2__10519_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__10520_SHARP_,p2__10521_SHARP_){
return [cljs.core.str(p1__10520_SHARP_),cljs.core.str("-"),cljs.core.str(p2__10521_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field10522 = (function() {
var color_field10522 = null;
var color_field10522__1 = (function (name__5151__auto__){
return color_field10522.call(null,name__5151__auto__,null);
});
var color_field10522__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5151__auto__,value__5152__auto__);
});
color_field10522 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return color_field10522__1.call(this,name__5151__auto__);
case 2:
return color_field10522__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field10522.cljs$core$IFn$_invoke$arity$1 = color_field10522__1;
color_field10522.cljs$core$IFn$_invoke$arity$2 = color_field10522__2;
return color_field10522;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field10522);

/**
* Creates a date input field.
*/
sablono.core.date_field10523 = (function() {
var date_field10523 = null;
var date_field10523__1 = (function (name__5151__auto__){
return date_field10523.call(null,name__5151__auto__,null);
});
var date_field10523__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5151__auto__,value__5152__auto__);
});
date_field10523 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return date_field10523__1.call(this,name__5151__auto__);
case 2:
return date_field10523__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field10523.cljs$core$IFn$_invoke$arity$1 = date_field10523__1;
date_field10523.cljs$core$IFn$_invoke$arity$2 = date_field10523__2;
return date_field10523;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field10523);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field10524 = (function() {
var datetime_field10524 = null;
var datetime_field10524__1 = (function (name__5151__auto__){
return datetime_field10524.call(null,name__5151__auto__,null);
});
var datetime_field10524__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5151__auto__,value__5152__auto__);
});
datetime_field10524 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return datetime_field10524__1.call(this,name__5151__auto__);
case 2:
return datetime_field10524__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field10524.cljs$core$IFn$_invoke$arity$1 = datetime_field10524__1;
datetime_field10524.cljs$core$IFn$_invoke$arity$2 = datetime_field10524__2;
return datetime_field10524;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field10524);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field10525 = (function() {
var datetime_local_field10525 = null;
var datetime_local_field10525__1 = (function (name__5151__auto__){
return datetime_local_field10525.call(null,name__5151__auto__,null);
});
var datetime_local_field10525__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5151__auto__,value__5152__auto__);
});
datetime_local_field10525 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return datetime_local_field10525__1.call(this,name__5151__auto__);
case 2:
return datetime_local_field10525__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field10525.cljs$core$IFn$_invoke$arity$1 = datetime_local_field10525__1;
datetime_local_field10525.cljs$core$IFn$_invoke$arity$2 = datetime_local_field10525__2;
return datetime_local_field10525;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field10525);

/**
* Creates a email input field.
*/
sablono.core.email_field10526 = (function() {
var email_field10526 = null;
var email_field10526__1 = (function (name__5151__auto__){
return email_field10526.call(null,name__5151__auto__,null);
});
var email_field10526__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5151__auto__,value__5152__auto__);
});
email_field10526 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return email_field10526__1.call(this,name__5151__auto__);
case 2:
return email_field10526__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field10526.cljs$core$IFn$_invoke$arity$1 = email_field10526__1;
email_field10526.cljs$core$IFn$_invoke$arity$2 = email_field10526__2;
return email_field10526;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field10526);

/**
* Creates a file input field.
*/
sablono.core.file_field10527 = (function() {
var file_field10527 = null;
var file_field10527__1 = (function (name__5151__auto__){
return file_field10527.call(null,name__5151__auto__,null);
});
var file_field10527__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5151__auto__,value__5152__auto__);
});
file_field10527 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return file_field10527__1.call(this,name__5151__auto__);
case 2:
return file_field10527__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field10527.cljs$core$IFn$_invoke$arity$1 = file_field10527__1;
file_field10527.cljs$core$IFn$_invoke$arity$2 = file_field10527__2;
return file_field10527;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field10527);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field10528 = (function() {
var hidden_field10528 = null;
var hidden_field10528__1 = (function (name__5151__auto__){
return hidden_field10528.call(null,name__5151__auto__,null);
});
var hidden_field10528__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5151__auto__,value__5152__auto__);
});
hidden_field10528 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return hidden_field10528__1.call(this,name__5151__auto__);
case 2:
return hidden_field10528__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field10528.cljs$core$IFn$_invoke$arity$1 = hidden_field10528__1;
hidden_field10528.cljs$core$IFn$_invoke$arity$2 = hidden_field10528__2;
return hidden_field10528;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field10528);

/**
* Creates a month input field.
*/
sablono.core.month_field10529 = (function() {
var month_field10529 = null;
var month_field10529__1 = (function (name__5151__auto__){
return month_field10529.call(null,name__5151__auto__,null);
});
var month_field10529__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5151__auto__,value__5152__auto__);
});
month_field10529 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return month_field10529__1.call(this,name__5151__auto__);
case 2:
return month_field10529__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field10529.cljs$core$IFn$_invoke$arity$1 = month_field10529__1;
month_field10529.cljs$core$IFn$_invoke$arity$2 = month_field10529__2;
return month_field10529;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field10529);

/**
* Creates a number input field.
*/
sablono.core.number_field10530 = (function() {
var number_field10530 = null;
var number_field10530__1 = (function (name__5151__auto__){
return number_field10530.call(null,name__5151__auto__,null);
});
var number_field10530__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5151__auto__,value__5152__auto__);
});
number_field10530 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return number_field10530__1.call(this,name__5151__auto__);
case 2:
return number_field10530__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field10530.cljs$core$IFn$_invoke$arity$1 = number_field10530__1;
number_field10530.cljs$core$IFn$_invoke$arity$2 = number_field10530__2;
return number_field10530;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field10530);

/**
* Creates a password input field.
*/
sablono.core.password_field10531 = (function() {
var password_field10531 = null;
var password_field10531__1 = (function (name__5151__auto__){
return password_field10531.call(null,name__5151__auto__,null);
});
var password_field10531__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5151__auto__,value__5152__auto__);
});
password_field10531 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return password_field10531__1.call(this,name__5151__auto__);
case 2:
return password_field10531__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field10531.cljs$core$IFn$_invoke$arity$1 = password_field10531__1;
password_field10531.cljs$core$IFn$_invoke$arity$2 = password_field10531__2;
return password_field10531;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field10531);

/**
* Creates a range input field.
*/
sablono.core.range_field10532 = (function() {
var range_field10532 = null;
var range_field10532__1 = (function (name__5151__auto__){
return range_field10532.call(null,name__5151__auto__,null);
});
var range_field10532__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5151__auto__,value__5152__auto__);
});
range_field10532 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return range_field10532__1.call(this,name__5151__auto__);
case 2:
return range_field10532__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field10532.cljs$core$IFn$_invoke$arity$1 = range_field10532__1;
range_field10532.cljs$core$IFn$_invoke$arity$2 = range_field10532__2;
return range_field10532;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field10532);

/**
* Creates a search input field.
*/
sablono.core.search_field10533 = (function() {
var search_field10533 = null;
var search_field10533__1 = (function (name__5151__auto__){
return search_field10533.call(null,name__5151__auto__,null);
});
var search_field10533__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5151__auto__,value__5152__auto__);
});
search_field10533 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return search_field10533__1.call(this,name__5151__auto__);
case 2:
return search_field10533__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field10533.cljs$core$IFn$_invoke$arity$1 = search_field10533__1;
search_field10533.cljs$core$IFn$_invoke$arity$2 = search_field10533__2;
return search_field10533;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field10533);

/**
* Creates a tel input field.
*/
sablono.core.tel_field10534 = (function() {
var tel_field10534 = null;
var tel_field10534__1 = (function (name__5151__auto__){
return tel_field10534.call(null,name__5151__auto__,null);
});
var tel_field10534__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5151__auto__,value__5152__auto__);
});
tel_field10534 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return tel_field10534__1.call(this,name__5151__auto__);
case 2:
return tel_field10534__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field10534.cljs$core$IFn$_invoke$arity$1 = tel_field10534__1;
tel_field10534.cljs$core$IFn$_invoke$arity$2 = tel_field10534__2;
return tel_field10534;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field10534);

/**
* Creates a text input field.
*/
sablono.core.text_field10535 = (function() {
var text_field10535 = null;
var text_field10535__1 = (function (name__5151__auto__){
return text_field10535.call(null,name__5151__auto__,null);
});
var text_field10535__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5151__auto__,value__5152__auto__);
});
text_field10535 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return text_field10535__1.call(this,name__5151__auto__);
case 2:
return text_field10535__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field10535.cljs$core$IFn$_invoke$arity$1 = text_field10535__1;
text_field10535.cljs$core$IFn$_invoke$arity$2 = text_field10535__2;
return text_field10535;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field10535);

/**
* Creates a time input field.
*/
sablono.core.time_field10536 = (function() {
var time_field10536 = null;
var time_field10536__1 = (function (name__5151__auto__){
return time_field10536.call(null,name__5151__auto__,null);
});
var time_field10536__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5151__auto__,value__5152__auto__);
});
time_field10536 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return time_field10536__1.call(this,name__5151__auto__);
case 2:
return time_field10536__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field10536.cljs$core$IFn$_invoke$arity$1 = time_field10536__1;
time_field10536.cljs$core$IFn$_invoke$arity$2 = time_field10536__2;
return time_field10536;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field10536);

/**
* Creates a url input field.
*/
sablono.core.url_field10537 = (function() {
var url_field10537 = null;
var url_field10537__1 = (function (name__5151__auto__){
return url_field10537.call(null,name__5151__auto__,null);
});
var url_field10537__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5151__auto__,value__5152__auto__);
});
url_field10537 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return url_field10537__1.call(this,name__5151__auto__);
case 2:
return url_field10537__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field10537.cljs$core$IFn$_invoke$arity$1 = url_field10537__1;
url_field10537.cljs$core$IFn$_invoke$arity$2 = url_field10537__2;
return url_field10537;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field10537);

/**
* Creates a week input field.
*/
sablono.core.week_field10538 = (function() {
var week_field10538 = null;
var week_field10538__1 = (function (name__5151__auto__){
return week_field10538.call(null,name__5151__auto__,null);
});
var week_field10538__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5151__auto__,value__5152__auto__);
});
week_field10538 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return week_field10538__1.call(this,name__5151__auto__);
case 2:
return week_field10538__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field10538.cljs$core$IFn$_invoke$arity$1 = week_field10538__1;
week_field10538.cljs$core$IFn$_invoke$arity$2 = week_field10538__2;
return week_field10538;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field10538);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box10539 = (function() {
var check_box10539 = null;
var check_box10539__1 = (function (name){
return check_box10539.call(null,name,null);
});
var check_box10539__2 = (function (name,checked_QMARK_){
return check_box10539.call(null,name,checked_QMARK_,"true");
});
var check_box10539__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box10539 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box10539__1.call(this,name);
case 2:
return check_box10539__2.call(this,name,checked_QMARK_);
case 3:
return check_box10539__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box10539.cljs$core$IFn$_invoke$arity$1 = check_box10539__1;
check_box10539.cljs$core$IFn$_invoke$arity$2 = check_box10539__2;
check_box10539.cljs$core$IFn$_invoke$arity$3 = check_box10539__3;
return check_box10539;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box10539);
/**
* Creates a radio button.
*/
sablono.core.radio_button10540 = (function() {
var radio_button10540 = null;
var radio_button10540__1 = (function (group){
return radio_button10540.call(null,group,null);
});
var radio_button10540__2 = (function (group,checked_QMARK_){
return radio_button10540.call(null,group,checked_QMARK_,"true");
});
var radio_button10540__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button10540 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button10540__1.call(this,group);
case 2:
return radio_button10540__2.call(this,group,checked_QMARK_);
case 3:
return radio_button10540__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button10540.cljs$core$IFn$_invoke$arity$1 = radio_button10540__1;
radio_button10540.cljs$core$IFn$_invoke$arity$2 = radio_button10540__2;
radio_button10540.cljs$core$IFn$_invoke$arity$3 = radio_button10540__3;
return radio_button10540;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button10540);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options10541 = (function() {
var select_options10541 = null;
var select_options10541__1 = (function (coll){
return select_options10541.call(null,coll,null);
});
var select_options10541__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__10550(s__10551){
return (new cljs.core.LazySeq(null,(function (){
var s__10551__$1 = s__10551;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10551__$1);
if(temp__4126__auto__){
var s__10551__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10551__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__10551__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__10553 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__10552 = (0);
while(true){
if((i__10552 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__10552);
cljs.core.chunk_append.call(null,b__10553,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10556 = x;
var text = cljs.core.nth.call(null,vec__10556,(0),null);
var val = cljs.core.nth.call(null,vec__10556,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10556,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options10541.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__10558 = (i__10552 + (1));
i__10552 = G__10558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10553),iter__10550.call(null,cljs.core.chunk_rest.call(null,s__10551__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10553),null);
}
} else {
var x = cljs.core.first.call(null,s__10551__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10557 = x;
var text = cljs.core.nth.call(null,vec__10557,(0),null);
var val = cljs.core.nth.call(null,vec__10557,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__10557,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options10541.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__10550.call(null,cljs.core.rest.call(null,s__10551__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4378__auto__.call(null,coll);
});
select_options10541 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options10541__1.call(this,coll);
case 2:
return select_options10541__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options10541.cljs$core$IFn$_invoke$arity$1 = select_options10541__1;
select_options10541.cljs$core$IFn$_invoke$arity$2 = select_options10541__2;
return select_options10541;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options10541);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down10559 = (function() {
var drop_down10559 = null;
var drop_down10559__2 = (function (name,options){
return drop_down10559.call(null,name,options,null);
});
var drop_down10559__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down10559 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down10559__2.call(this,name,options);
case 3:
return drop_down10559__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down10559.cljs$core$IFn$_invoke$arity$2 = drop_down10559__2;
drop_down10559.cljs$core$IFn$_invoke$arity$3 = drop_down10559__3;
return drop_down10559;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down10559);
/**
* Creates a text area element.
*/
sablono.core.text_area10560 = (function() {
var text_area10560 = null;
var text_area10560__1 = (function (name){
return text_area10560.call(null,name,null);
});
var text_area10560__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area10560 = function(name,value){
switch(arguments.length){
case 1:
return text_area10560__1.call(this,name);
case 2:
return text_area10560__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area10560.cljs$core$IFn$_invoke$arity$1 = text_area10560__1;
text_area10560.cljs$core$IFn$_invoke$arity$2 = text_area10560__2;
return text_area10560;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area10560);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label10561 = (function label10561(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label10561);
/**
* Creates a submit button.
*/
sablono.core.submit_button10562 = (function submit_button10562(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button10562);
/**
* Creates a form reset button.
*/
sablono.core.reset_button10563 = (function reset_button10563(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button10563);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to10564 = (function() { 
var form_to10564__delegate = function (p__10565,body){
var vec__10567 = p__10565;
var method = cljs.core.nth.call(null,vec__10567,(0),null);
var action = cljs.core.nth.call(null,vec__10567,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to10564 = function (p__10565,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to10564__delegate.call(this,p__10565,body);};
form_to10564.cljs$lang$maxFixedArity = 1;
form_to10564.cljs$lang$applyTo = (function (arglist__10568){
var p__10565 = cljs.core.first(arglist__10568);
var body = cljs.core.rest(arglist__10568);
return form_to10564__delegate(p__10565,body);
});
form_to10564.cljs$core$IFn$_invoke$arity$variadic = form_to10564__delegate;
return form_to10564;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to10564);

//# sourceMappingURL=core.js.map