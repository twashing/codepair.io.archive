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
var G__8383__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__8382 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__8382,(0),null);
var body = cljs.core.nthnext.call(null,vec__8382,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__8383 = function (var_args){
var args = null;
if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8383__delegate.call(this,args);};
G__8383.cljs$lang$maxFixedArity = 0;
G__8383.cljs$lang$applyTo = (function (arglist__8384){
var args = cljs.core.seq(arglist__8384);
return G__8383__delegate(args);
});
G__8383.cljs$core$IFn$_invoke$arity$variadic = G__8383__delegate;
return G__8383;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4378__auto__ = (function iter__8389(s__8390){
return (new cljs.core.LazySeq(null,(function (){
var s__8390__$1 = s__8390;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8390__$1);
if(temp__4126__auto__){
var s__8390__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8390__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__8390__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__8392 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__8391 = (0);
while(true){
if((i__8391 < size__4377__auto__)){
var args = cljs.core._nth.call(null,c__4376__auto__,i__8391);
cljs.core.chunk_append.call(null,b__8392,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__8393 = (i__8391 + (1));
i__8391 = G__8393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8392),iter__8389.call(null,cljs.core.chunk_rest.call(null,s__8390__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8392),null);
}
} else {
var args = cljs.core.first.call(null,s__8390__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__8389.call(null,cljs.core.rest.call(null,s__8390__$2)));
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
var iter__4378__auto__ = (function iter__8398(s__8399){
return (new cljs.core.LazySeq(null,(function (){
var s__8399__$1 = s__8399;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8399__$1);
if(temp__4126__auto__){
var s__8399__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8399__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__8399__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__8401 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__8400 = (0);
while(true){
if((i__8400 < size__4377__auto__)){
var style = cljs.core._nth.call(null,c__4376__auto__,i__8400);
cljs.core.chunk_append.call(null,b__8401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__8402 = (i__8400 + (1));
i__8400 = G__8402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8401),iter__8398.call(null,cljs.core.chunk_rest.call(null,s__8399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8401),null);
}
} else {
var style = cljs.core.first.call(null,s__8399__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__8398.call(null,cljs.core.rest.call(null,s__8399__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__8403){
var styles = cljs.core.seq(arglist__8403);
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
sablono.core.link_to8404 = (function() { 
var link_to8404__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to8404 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return link_to8404__delegate.call(this,url,content);};
link_to8404.cljs$lang$maxFixedArity = 1;
link_to8404.cljs$lang$applyTo = (function (arglist__8405){
var url = cljs.core.first(arglist__8405);
var content = cljs.core.rest(arglist__8405);
return link_to8404__delegate(url,content);
});
link_to8404.cljs$core$IFn$_invoke$arity$variadic = link_to8404__delegate;
return link_to8404;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to8404);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to8406 = (function() { 
var mail_to8406__delegate = function (e_mail,p__8407){
var vec__8409 = p__8407;
var content = cljs.core.nth.call(null,vec__8409,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3622__auto__ = content;
if(cljs.core.truth_(or__3622__auto__)){
return or__3622__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to8406 = function (e_mail,var_args){
var p__8407 = null;
if (arguments.length > 1) {
  p__8407 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return mail_to8406__delegate.call(this,e_mail,p__8407);};
mail_to8406.cljs$lang$maxFixedArity = 1;
mail_to8406.cljs$lang$applyTo = (function (arglist__8410){
var e_mail = cljs.core.first(arglist__8410);
var p__8407 = cljs.core.rest(arglist__8410);
return mail_to8406__delegate(e_mail,p__8407);
});
mail_to8406.cljs$core$IFn$_invoke$arity$variadic = mail_to8406__delegate;
return mail_to8406;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to8406);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list8411 = (function unordered_list8411(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4378__auto__ = (function iter__8416(s__8417){
return (new cljs.core.LazySeq(null,(function (){
var s__8417__$1 = s__8417;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8417__$1);
if(temp__4126__auto__){
var s__8417__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8417__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__8417__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__8419 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__8418 = (0);
while(true){
if((i__8418 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__8418);
cljs.core.chunk_append.call(null,b__8419,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__8420 = (i__8418 + (1));
i__8418 = G__8420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8419),iter__8416.call(null,cljs.core.chunk_rest.call(null,s__8417__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8419),null);
}
} else {
var x = cljs.core.first.call(null,s__8417__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__8416.call(null,cljs.core.rest.call(null,s__8417__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list8411);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list8421 = (function ordered_list8421(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4378__auto__ = (function iter__8426(s__8427){
return (new cljs.core.LazySeq(null,(function (){
var s__8427__$1 = s__8427;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8427__$1);
if(temp__4126__auto__){
var s__8427__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8427__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__8427__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__8429 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__8428 = (0);
while(true){
if((i__8428 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__8428);
cljs.core.chunk_append.call(null,b__8429,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__8430 = (i__8428 + (1));
i__8428 = G__8430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8429),iter__8426.call(null,cljs.core.chunk_rest.call(null,s__8427__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8429),null);
}
} else {
var x = cljs.core.first.call(null,s__8427__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__8426.call(null,cljs.core.rest.call(null,s__8427__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list8421);
/**
* Create an image element.
*/
sablono.core.image8431 = (function() {
var image8431 = null;
var image8431__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image8431__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image8431 = function(src,alt){
switch(arguments.length){
case 1:
return image8431__1.call(this,src);
case 2:
return image8431__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image8431.cljs$core$IFn$_invoke$arity$1 = image8431__1;
image8431.cljs$core$IFn$_invoke$arity$2 = image8431__2;
return image8431;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image8431);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__8432_SHARP_,p2__8433_SHARP_){
return [cljs.core.str(p1__8432_SHARP_),cljs.core.str("["),cljs.core.str(p2__8433_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__8434_SHARP_,p2__8435_SHARP_){
return [cljs.core.str(p1__8434_SHARP_),cljs.core.str("-"),cljs.core.str(p2__8435_SHARP_)].join('');
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
sablono.core.color_field8436 = (function() {
var color_field8436 = null;
var color_field8436__1 = (function (name__5151__auto__){
return color_field8436.call(null,name__5151__auto__,null);
});
var color_field8436__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__5151__auto__,value__5152__auto__);
});
color_field8436 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return color_field8436__1.call(this,name__5151__auto__);
case 2:
return color_field8436__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field8436.cljs$core$IFn$_invoke$arity$1 = color_field8436__1;
color_field8436.cljs$core$IFn$_invoke$arity$2 = color_field8436__2;
return color_field8436;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field8436);

/**
* Creates a date input field.
*/
sablono.core.date_field8437 = (function() {
var date_field8437 = null;
var date_field8437__1 = (function (name__5151__auto__){
return date_field8437.call(null,name__5151__auto__,null);
});
var date_field8437__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__5151__auto__,value__5152__auto__);
});
date_field8437 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return date_field8437__1.call(this,name__5151__auto__);
case 2:
return date_field8437__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field8437.cljs$core$IFn$_invoke$arity$1 = date_field8437__1;
date_field8437.cljs$core$IFn$_invoke$arity$2 = date_field8437__2;
return date_field8437;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field8437);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field8438 = (function() {
var datetime_field8438 = null;
var datetime_field8438__1 = (function (name__5151__auto__){
return datetime_field8438.call(null,name__5151__auto__,null);
});
var datetime_field8438__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__5151__auto__,value__5152__auto__);
});
datetime_field8438 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return datetime_field8438__1.call(this,name__5151__auto__);
case 2:
return datetime_field8438__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field8438.cljs$core$IFn$_invoke$arity$1 = datetime_field8438__1;
datetime_field8438.cljs$core$IFn$_invoke$arity$2 = datetime_field8438__2;
return datetime_field8438;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field8438);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field8439 = (function() {
var datetime_local_field8439 = null;
var datetime_local_field8439__1 = (function (name__5151__auto__){
return datetime_local_field8439.call(null,name__5151__auto__,null);
});
var datetime_local_field8439__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__5151__auto__,value__5152__auto__);
});
datetime_local_field8439 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return datetime_local_field8439__1.call(this,name__5151__auto__);
case 2:
return datetime_local_field8439__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field8439.cljs$core$IFn$_invoke$arity$1 = datetime_local_field8439__1;
datetime_local_field8439.cljs$core$IFn$_invoke$arity$2 = datetime_local_field8439__2;
return datetime_local_field8439;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field8439);

/**
* Creates a email input field.
*/
sablono.core.email_field8440 = (function() {
var email_field8440 = null;
var email_field8440__1 = (function (name__5151__auto__){
return email_field8440.call(null,name__5151__auto__,null);
});
var email_field8440__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__5151__auto__,value__5152__auto__);
});
email_field8440 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return email_field8440__1.call(this,name__5151__auto__);
case 2:
return email_field8440__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field8440.cljs$core$IFn$_invoke$arity$1 = email_field8440__1;
email_field8440.cljs$core$IFn$_invoke$arity$2 = email_field8440__2;
return email_field8440;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field8440);

/**
* Creates a file input field.
*/
sablono.core.file_field8441 = (function() {
var file_field8441 = null;
var file_field8441__1 = (function (name__5151__auto__){
return file_field8441.call(null,name__5151__auto__,null);
});
var file_field8441__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__5151__auto__,value__5152__auto__);
});
file_field8441 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return file_field8441__1.call(this,name__5151__auto__);
case 2:
return file_field8441__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field8441.cljs$core$IFn$_invoke$arity$1 = file_field8441__1;
file_field8441.cljs$core$IFn$_invoke$arity$2 = file_field8441__2;
return file_field8441;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field8441);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field8442 = (function() {
var hidden_field8442 = null;
var hidden_field8442__1 = (function (name__5151__auto__){
return hidden_field8442.call(null,name__5151__auto__,null);
});
var hidden_field8442__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__5151__auto__,value__5152__auto__);
});
hidden_field8442 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return hidden_field8442__1.call(this,name__5151__auto__);
case 2:
return hidden_field8442__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field8442.cljs$core$IFn$_invoke$arity$1 = hidden_field8442__1;
hidden_field8442.cljs$core$IFn$_invoke$arity$2 = hidden_field8442__2;
return hidden_field8442;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field8442);

/**
* Creates a month input field.
*/
sablono.core.month_field8443 = (function() {
var month_field8443 = null;
var month_field8443__1 = (function (name__5151__auto__){
return month_field8443.call(null,name__5151__auto__,null);
});
var month_field8443__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__5151__auto__,value__5152__auto__);
});
month_field8443 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return month_field8443__1.call(this,name__5151__auto__);
case 2:
return month_field8443__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field8443.cljs$core$IFn$_invoke$arity$1 = month_field8443__1;
month_field8443.cljs$core$IFn$_invoke$arity$2 = month_field8443__2;
return month_field8443;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field8443);

/**
* Creates a number input field.
*/
sablono.core.number_field8444 = (function() {
var number_field8444 = null;
var number_field8444__1 = (function (name__5151__auto__){
return number_field8444.call(null,name__5151__auto__,null);
});
var number_field8444__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__5151__auto__,value__5152__auto__);
});
number_field8444 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return number_field8444__1.call(this,name__5151__auto__);
case 2:
return number_field8444__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field8444.cljs$core$IFn$_invoke$arity$1 = number_field8444__1;
number_field8444.cljs$core$IFn$_invoke$arity$2 = number_field8444__2;
return number_field8444;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field8444);

/**
* Creates a password input field.
*/
sablono.core.password_field8445 = (function() {
var password_field8445 = null;
var password_field8445__1 = (function (name__5151__auto__){
return password_field8445.call(null,name__5151__auto__,null);
});
var password_field8445__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__5151__auto__,value__5152__auto__);
});
password_field8445 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return password_field8445__1.call(this,name__5151__auto__);
case 2:
return password_field8445__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field8445.cljs$core$IFn$_invoke$arity$1 = password_field8445__1;
password_field8445.cljs$core$IFn$_invoke$arity$2 = password_field8445__2;
return password_field8445;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field8445);

/**
* Creates a range input field.
*/
sablono.core.range_field8446 = (function() {
var range_field8446 = null;
var range_field8446__1 = (function (name__5151__auto__){
return range_field8446.call(null,name__5151__auto__,null);
});
var range_field8446__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__5151__auto__,value__5152__auto__);
});
range_field8446 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return range_field8446__1.call(this,name__5151__auto__);
case 2:
return range_field8446__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field8446.cljs$core$IFn$_invoke$arity$1 = range_field8446__1;
range_field8446.cljs$core$IFn$_invoke$arity$2 = range_field8446__2;
return range_field8446;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field8446);

/**
* Creates a search input field.
*/
sablono.core.search_field8447 = (function() {
var search_field8447 = null;
var search_field8447__1 = (function (name__5151__auto__){
return search_field8447.call(null,name__5151__auto__,null);
});
var search_field8447__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__5151__auto__,value__5152__auto__);
});
search_field8447 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return search_field8447__1.call(this,name__5151__auto__);
case 2:
return search_field8447__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field8447.cljs$core$IFn$_invoke$arity$1 = search_field8447__1;
search_field8447.cljs$core$IFn$_invoke$arity$2 = search_field8447__2;
return search_field8447;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field8447);

/**
* Creates a tel input field.
*/
sablono.core.tel_field8448 = (function() {
var tel_field8448 = null;
var tel_field8448__1 = (function (name__5151__auto__){
return tel_field8448.call(null,name__5151__auto__,null);
});
var tel_field8448__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__5151__auto__,value__5152__auto__);
});
tel_field8448 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return tel_field8448__1.call(this,name__5151__auto__);
case 2:
return tel_field8448__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field8448.cljs$core$IFn$_invoke$arity$1 = tel_field8448__1;
tel_field8448.cljs$core$IFn$_invoke$arity$2 = tel_field8448__2;
return tel_field8448;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field8448);

/**
* Creates a text input field.
*/
sablono.core.text_field8449 = (function() {
var text_field8449 = null;
var text_field8449__1 = (function (name__5151__auto__){
return text_field8449.call(null,name__5151__auto__,null);
});
var text_field8449__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__5151__auto__,value__5152__auto__);
});
text_field8449 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return text_field8449__1.call(this,name__5151__auto__);
case 2:
return text_field8449__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field8449.cljs$core$IFn$_invoke$arity$1 = text_field8449__1;
text_field8449.cljs$core$IFn$_invoke$arity$2 = text_field8449__2;
return text_field8449;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field8449);

/**
* Creates a time input field.
*/
sablono.core.time_field8450 = (function() {
var time_field8450 = null;
var time_field8450__1 = (function (name__5151__auto__){
return time_field8450.call(null,name__5151__auto__,null);
});
var time_field8450__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__5151__auto__,value__5152__auto__);
});
time_field8450 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return time_field8450__1.call(this,name__5151__auto__);
case 2:
return time_field8450__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field8450.cljs$core$IFn$_invoke$arity$1 = time_field8450__1;
time_field8450.cljs$core$IFn$_invoke$arity$2 = time_field8450__2;
return time_field8450;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field8450);

/**
* Creates a url input field.
*/
sablono.core.url_field8451 = (function() {
var url_field8451 = null;
var url_field8451__1 = (function (name__5151__auto__){
return url_field8451.call(null,name__5151__auto__,null);
});
var url_field8451__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__5151__auto__,value__5152__auto__);
});
url_field8451 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return url_field8451__1.call(this,name__5151__auto__);
case 2:
return url_field8451__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field8451.cljs$core$IFn$_invoke$arity$1 = url_field8451__1;
url_field8451.cljs$core$IFn$_invoke$arity$2 = url_field8451__2;
return url_field8451;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field8451);

/**
* Creates a week input field.
*/
sablono.core.week_field8452 = (function() {
var week_field8452 = null;
var week_field8452__1 = (function (name__5151__auto__){
return week_field8452.call(null,name__5151__auto__,null);
});
var week_field8452__2 = (function (name__5151__auto__,value__5152__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__5151__auto__,value__5152__auto__);
});
week_field8452 = function(name__5151__auto__,value__5152__auto__){
switch(arguments.length){
case 1:
return week_field8452__1.call(this,name__5151__auto__);
case 2:
return week_field8452__2.call(this,name__5151__auto__,value__5152__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field8452.cljs$core$IFn$_invoke$arity$1 = week_field8452__1;
week_field8452.cljs$core$IFn$_invoke$arity$2 = week_field8452__2;
return week_field8452;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field8452);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box8453 = (function() {
var check_box8453 = null;
var check_box8453__1 = (function (name){
return check_box8453.call(null,name,null);
});
var check_box8453__2 = (function (name,checked_QMARK_){
return check_box8453.call(null,name,checked_QMARK_,"true");
});
var check_box8453__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box8453 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box8453__1.call(this,name);
case 2:
return check_box8453__2.call(this,name,checked_QMARK_);
case 3:
return check_box8453__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box8453.cljs$core$IFn$_invoke$arity$1 = check_box8453__1;
check_box8453.cljs$core$IFn$_invoke$arity$2 = check_box8453__2;
check_box8453.cljs$core$IFn$_invoke$arity$3 = check_box8453__3;
return check_box8453;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box8453);
/**
* Creates a radio button.
*/
sablono.core.radio_button8454 = (function() {
var radio_button8454 = null;
var radio_button8454__1 = (function (group){
return radio_button8454.call(null,group,null);
});
var radio_button8454__2 = (function (group,checked_QMARK_){
return radio_button8454.call(null,group,checked_QMARK_,"true");
});
var radio_button8454__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button8454 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button8454__1.call(this,group);
case 2:
return radio_button8454__2.call(this,group,checked_QMARK_);
case 3:
return radio_button8454__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button8454.cljs$core$IFn$_invoke$arity$1 = radio_button8454__1;
radio_button8454.cljs$core$IFn$_invoke$arity$2 = radio_button8454__2;
radio_button8454.cljs$core$IFn$_invoke$arity$3 = radio_button8454__3;
return radio_button8454;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button8454);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options8455 = (function() {
var select_options8455 = null;
var select_options8455__1 = (function (coll){
return select_options8455.call(null,coll,null);
});
var select_options8455__2 = (function (coll,selected){
var iter__4378__auto__ = (function iter__8464(s__8465){
return (new cljs.core.LazySeq(null,(function (){
var s__8465__$1 = s__8465;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8465__$1);
if(temp__4126__auto__){
var s__8465__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8465__$2)){
var c__4376__auto__ = cljs.core.chunk_first.call(null,s__8465__$2);
var size__4377__auto__ = cljs.core.count.call(null,c__4376__auto__);
var b__8467 = cljs.core.chunk_buffer.call(null,size__4377__auto__);
if((function (){var i__8466 = (0);
while(true){
if((i__8466 < size__4377__auto__)){
var x = cljs.core._nth.call(null,c__4376__auto__,i__8466);
cljs.core.chunk_append.call(null,b__8467,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8470 = x;
var text = cljs.core.nth.call(null,vec__8470,(0),null);
var val = cljs.core.nth.call(null,vec__8470,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__8470,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options8455.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__8472 = (i__8466 + (1));
i__8466 = G__8472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8467),iter__8464.call(null,cljs.core.chunk_rest.call(null,s__8465__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8467),null);
}
} else {
var x = cljs.core.first.call(null,s__8465__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8471 = x;
var text = cljs.core.nth.call(null,vec__8471,(0),null);
var val = cljs.core.nth.call(null,vec__8471,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__8471,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options8455.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__8464.call(null,cljs.core.rest.call(null,s__8465__$2)));
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
select_options8455 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options8455__1.call(this,coll);
case 2:
return select_options8455__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options8455.cljs$core$IFn$_invoke$arity$1 = select_options8455__1;
select_options8455.cljs$core$IFn$_invoke$arity$2 = select_options8455__2;
return select_options8455;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options8455);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down8473 = (function() {
var drop_down8473 = null;
var drop_down8473__2 = (function (name,options){
return drop_down8473.call(null,name,options,null);
});
var drop_down8473__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down8473 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down8473__2.call(this,name,options);
case 3:
return drop_down8473__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down8473.cljs$core$IFn$_invoke$arity$2 = drop_down8473__2;
drop_down8473.cljs$core$IFn$_invoke$arity$3 = drop_down8473__3;
return drop_down8473;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down8473);
/**
* Creates a text area element.
*/
sablono.core.text_area8474 = (function() {
var text_area8474 = null;
var text_area8474__1 = (function (name){
return text_area8474.call(null,name,null);
});
var text_area8474__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area8474 = function(name,value){
switch(arguments.length){
case 1:
return text_area8474__1.call(this,name);
case 2:
return text_area8474__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area8474.cljs$core$IFn$_invoke$arity$1 = text_area8474__1;
text_area8474.cljs$core$IFn$_invoke$arity$2 = text_area8474__2;
return text_area8474;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area8474);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label8475 = (function label8475(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label8475);
/**
* Creates a submit button.
*/
sablono.core.submit_button8476 = (function submit_button8476(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button8476);
/**
* Creates a form reset button.
*/
sablono.core.reset_button8477 = (function reset_button8477(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button8477);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to8478 = (function() { 
var form_to8478__delegate = function (p__8479,body){
var vec__8481 = p__8479;
var method = cljs.core.nth.call(null,vec__8481,(0),null);
var action = cljs.core.nth.call(null,vec__8481,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to8478 = function (p__8479,var_args){
var body = null;
if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return form_to8478__delegate.call(this,p__8479,body);};
form_to8478.cljs$lang$maxFixedArity = 1;
form_to8478.cljs$lang$applyTo = (function (arglist__8482){
var p__8479 = cljs.core.first(arglist__8482);
var body = cljs.core.rest(arglist__8482);
return form_to8478__delegate(p__8479,body);
});
form_to8478.cljs$core$IFn$_invoke$arity$variadic = form_to8478__delegate;
return form_to8478;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to8478);

//# sourceMappingURL=core.js.map