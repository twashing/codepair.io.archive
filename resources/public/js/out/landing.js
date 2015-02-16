// Compiled by ClojureScript 0.0-2505
goog.provide('landing');
goog.require('cljs.core');
goog.require('util');
landing.user_state = cljs.core.atom.call(null,null);
landing.printUserState = (function printUserState(){
return util.console_log.call(null,[cljs.core.str(cljs.core.deref.call(null,landing.user_state))].join(''));
});
goog.exportSymbol('landing.printUserState', landing.printUserState);

//# sourceMappingURL=landing.js.map