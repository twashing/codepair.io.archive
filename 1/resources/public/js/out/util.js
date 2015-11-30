// Compiled by ClojureScript 0.0-2505
goog.provide('util');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
util.console_log = (function console_log(message){
return console.log(message);
});
util.ready = (function ready(handlerfn){
if(!(cljs.core._EQ_.call(null,"loading",document.readeyState))){
return handlerfn.call(null);
} else {
return document.addEventListener("DOMContentLoaded",handlerfn);
}
});

//# sourceMappingURL=util.js.map