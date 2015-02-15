goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../cljs/reader.js", ['cljs.reader'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../codepair.js", ['codepair'], ['goog.dom', 'goog.net.XhrIo', 'cljs.core', 'goog.events.EventType', 'cljs.reader', 'goog.events']);
goog.addDependency("../index.js", ['index'], ['goog.dom', 'goog.net.XhrIo', 'cljs.core', 'goog.events.EventType', 'cljs.reader', 'goog.events', 'codepair']);