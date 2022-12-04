//EJS Compiled Views - This file was automatically generated on Sun Dec 04 2022 21:09:51 GMT+0100 (Central European Standard Time)
 ejs.views_include = function(locals) {
     
     return function(path, d) {
         console.log("ejs.views_include",path,d);
         return ejs["views_"+path.replace(/\//g,"_").replace(/-/g,"_")]({...d,...locals}, null, ejs.views_include(locals));
     }
 };
 ejs.views_includes_footer = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<p> No Home? No Problem. all rights reserved </p>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<p> No Home? No Problem. all rights reserved </p>")
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_search_result = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n<% query_results.forEach((result) => { %>\n    <section id=\"<%= result.relevance %>\" class=\"search_result\">\n        <h4 class=\"search_result_title\"><span><%= result.title %></span></h4>\n        <p class=\"search_result_description\"><span><%= result.description %></span></p>\n        <p class=\"search_result_price\"><span><%= result.price %></span></p>\n        <p class=\"search_result_location\"><span><%= result.location %></span></p>\n        <p class=\"search_result_rating\"></p>\n        <p class=\"search_result_reviews\"></p>\n        <p class=\"search_result_link\"></p>\n    </section>\n<% }); %> \n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n")
    ; __line = 2
    ;  query_results.forEach((result) => { 
    ; __append("\n    <section id=\"")
    ; __line = 3
    ; __append(escapeFn( result.relevance ))
    ; __append("\" class=\"search_result\">\n        <h4 class=\"search_result_title\"><span>")
    ; __line = 4
    ; __append(escapeFn( result.title ))
    ; __append("</span></h4>\n        <p class=\"search_result_description\"><span>")
    ; __line = 5
    ; __append(escapeFn( result.description ))
    ; __append("</span></p>\n        <p class=\"search_result_price\"><span>")
    ; __line = 6
    ; __append(escapeFn( result.price ))
    ; __append("</span></p>\n        <p class=\"search_result_location\"><span>")
    ; __line = 7
    ; __append(escapeFn( result.location ))
    ; __append("</span></p>\n        <p class=\"search_result_rating\"></p>\n        <p class=\"search_result_reviews\"></p>\n        <p class=\"search_result_link\"></p>\n    </section>\n")
    ; __line = 12
    ;  }); 
    ; __append(" \n\n")
    ; __line = 14
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_includes_footer = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<p> No Home? No Problem. all rights reserved </p>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<p> No Home? No Problem. all rights reserved </p>")
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_search_result = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n<% query_results.forEach((result) => { %>\n    <section id=\"<%= result.relevance %>\" class=\"search_result\">\n        <h4 class=\"search_result_title\"><span><%= result.title %></span></h4>\n        <p class=\"search_result_description\"><span><%= result.description %></span></p>\n        <p class=\"search_result_price\"><span><%= result.price %></span></p>\n        <p class=\"search_result_location\"><span><%= result.location %></span></p>\n        <p class=\"search_result_rating\"></p>\n        <p class=\"search_result_reviews\"></p>\n        <p class=\"search_result_link\"></p>\n    </section>\n<% }); %> \n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n")
    ; __line = 2
    ;  query_results.forEach((result) => { 
    ; __append("\n    <section id=\"")
    ; __line = 3
    ; __append(escapeFn( result.relevance ))
    ; __append("\" class=\"search_result\">\n        <h4 class=\"search_result_title\"><span>")
    ; __line = 4
    ; __append(escapeFn( result.title ))
    ; __append("</span></h4>\n        <p class=\"search_result_description\"><span>")
    ; __line = 5
    ; __append(escapeFn( result.description ))
    ; __append("</span></p>\n        <p class=\"search_result_price\"><span>")
    ; __line = 6
    ; __append(escapeFn( result.price ))
    ; __append("</span></p>\n        <p class=\"search_result_location\"><span>")
    ; __line = 7
    ; __append(escapeFn( result.location ))
    ; __append("</span></p>\n        <p class=\"search_result_rating\"></p>\n        <p class=\"search_result_reviews\"></p>\n        <p class=\"search_result_link\"></p>\n    </section>\n")
    ; __line = 12
    ;  }); 
    ; __append(" \n\n")
    ; __line = 14
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}