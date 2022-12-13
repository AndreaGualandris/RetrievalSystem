//EJS Compiled Views - This file was automatically generated on Tue Dec 13 2022 11:37:29 GMT+0100 (Ora standard dell’Europa centrale)
 ejs.views_include = function(locals) {
     
     return function(path, d) {
         console.log("ejs.views_include",path,d);
         return ejs["views_"+path.replace(/\//g,"_").replace(/-/g,"_")]({...d,...locals}, null, ejs.views_include(locals));
     }
 };
 ejs.views_filters = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<!-- include html for range price filter -->\n<div class=\"range-slider\">\n    <input type=\"range\" class=\"range-slider__range\" value=\"0\" min=\"0\" max=\"100\">\n    <span class=\"range-slider__value\">0</span>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- include html for range price filter -->\n<div class=\"range-slider\">\n    <input type=\"range\" class=\"range-slider__range\" value=\"0\" min=\"0\" max=\"100\">\n    <span class=\"range-slider__value\">0</span>\n</div>")
    ; __line = 5
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
  , __lines = "\n<% query_results.forEach((result) => { %>\n    <a id=\"<%= result.relevance %>\" class=\"search_result\" onclick=\"href = '<%= result.urlHouse %>'\" target=\"_blank\">\n        <img class=\"search_result_image\" src=\"<%= result.urlImage %>\" alt=\"image\">\n\n        <section class=\"search_result_title\">\n            <h4><span><%= result.title %></span></h4>\n        </section>\n\n        <section class=\"label\">\n            <p><span>Address:</span></p> \n            <p><span>Price:</span></p> \n            <p><span>Price:</span></p> \n            <p><span>Beds:</span></p> \n        </section>\n        <section class=\"values\">\n            <p><span><%= result.address %></span></p>\n            <p><span><%= result.price %></span></p>\n            <p><span><%= result.price %></span></p>\n            <p><span><%= result.beds %></span></p>\n        </section>\n\n        <!-- <p class=\"search_result_city\"><span><%= result.city %></span></p> -->\n\n        <!-- <p class=\"search_result_rating\"></p>\n        <p class=\"search_result_reviews\"></p>\n        <p class=\"search_result_link\"></p> -->\n        </a>\n<% }); %> \n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n")
    ; __line = 2
    ;  query_results.forEach((result) => { 
    ; __append("\n    <a id=\"")
    ; __line = 3
    ; __append(escapeFn( result.relevance ))
    ; __append("\" class=\"search_result\" onclick=\"href = '")
    ; __append(escapeFn( result.urlHouse ))
    ; __append("'\" target=\"_blank\">\n        <img class=\"search_result_image\" src=\"")
    ; __line = 4
    ; __append(escapeFn( result.urlImage ))
    ; __append("\" alt=\"image\">\n\n        <section class=\"search_result_title\">\n            <h4><span>")
    ; __line = 7
    ; __append(escapeFn( result.title ))
    ; __append("</span></h4>\n        </section>\n\n        <section class=\"label\">\n            <p><span>Address:</span></p> \n            <p><span>Price:</span></p> \n            <p><span>Price:</span></p> \n            <p><span>Beds:</span></p> \n        </section>\n        <section class=\"values\">\n            <p><span>")
    ; __line = 17
    ; __append(escapeFn( result.address ))
    ; __append("</span></p>\n            <p><span>")
    ; __line = 18
    ; __append(escapeFn( result.price ))
    ; __append("</span></p>\n            <p><span>")
    ; __line = 19
    ; __append(escapeFn( result.price ))
    ; __append("</span></p>\n            <p><span>")
    ; __line = 20
    ; __append(escapeFn( result.beds ))
    ; __append("</span></p>\n        </section>\n\n        <!-- <p class=\"search_result_city\"><span>")
    ; __line = 23
    ; __append(escapeFn( result.city ))
    ; __append("</span></p> -->\n\n        <!-- <p class=\"search_result_rating\"></p>\n        <p class=\"search_result_reviews\"></p>\n        <p class=\"search_result_link\"></p> -->\n        </a>\n")
    ; __line = 29
    ;  }); 
    ; __append(" \n\n")
    ; __line = 31
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_filters = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<!-- include html for range price filter -->\n<div class=\"range-slider\">\n    <input type=\"range\" class=\"range-slider__range\" value=\"0\" min=\"0\" max=\"100\">\n    <span class=\"range-slider__value\">0</span>\n</div>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!-- include html for range price filter -->\n<div class=\"range-slider\">\n    <input type=\"range\" class=\"range-slider__range\" value=\"0\" min=\"0\" max=\"100\">\n    <span class=\"range-slider__value\">0</span>\n</div>")
    ; __line = 5
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
  , __lines = "\n<% query_results.forEach((result) => { %>\n    <a id=\"<%= result.relevance %>\" class=\"search_result\" onclick=\"href = '<%= result.urlHouse %>'\" target=\"_blank\">\n        <img class=\"search_result_image\" src=\"<%= result.urlImage %>\" alt=\"image\">\n\n        <section class=\"search_result_title\">\n            <h4><span><%= result.title %></span></h4>\n        </section>\n\n        <section class=\"label\">\n            <p><span>Address:</span></p> \n            <p><span>Price:</span></p> \n            <p><span>Price:</span></p> \n            <p><span>Beds:</span></p> \n        </section>\n        <section class=\"values\">\n            <p><span><%= result.address %></span></p>\n            <p><span><%= result.price %></span></p>\n            <p><span><%= result.price %></span></p>\n            <p><span><%= result.beds %></span></p>\n        </section>\n\n        <!-- <p class=\"search_result_city\"><span><%= result.city %></span></p> -->\n\n        <!-- <p class=\"search_result_rating\"></p>\n        <p class=\"search_result_reviews\"></p>\n        <p class=\"search_result_link\"></p> -->\n        </a>\n<% }); %> \n\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n")
    ; __line = 2
    ;  query_results.forEach((result) => { 
    ; __append("\n    <a id=\"")
    ; __line = 3
    ; __append(escapeFn( result.relevance ))
    ; __append("\" class=\"search_result\" onclick=\"href = '")
    ; __append(escapeFn( result.urlHouse ))
    ; __append("'\" target=\"_blank\">\n        <img class=\"search_result_image\" src=\"")
    ; __line = 4
    ; __append(escapeFn( result.urlImage ))
    ; __append("\" alt=\"image\">\n\n        <section class=\"search_result_title\">\n            <h4><span>")
    ; __line = 7
    ; __append(escapeFn( result.title ))
    ; __append("</span></h4>\n        </section>\n\n        <section class=\"label\">\n            <p><span>Address:</span></p> \n            <p><span>Price:</span></p> \n            <p><span>Price:</span></p> \n            <p><span>Beds:</span></p> \n        </section>\n        <section class=\"values\">\n            <p><span>")
    ; __line = 17
    ; __append(escapeFn( result.address ))
    ; __append("</span></p>\n            <p><span>")
    ; __line = 18
    ; __append(escapeFn( result.price ))
    ; __append("</span></p>\n            <p><span>")
    ; __line = 19
    ; __append(escapeFn( result.price ))
    ; __append("</span></p>\n            <p><span>")
    ; __line = 20
    ; __append(escapeFn( result.beds ))
    ; __append("</span></p>\n        </section>\n\n        <!-- <p class=\"search_result_city\"><span>")
    ; __line = 23
    ; __append(escapeFn( result.city ))
    ; __append("</span></p> -->\n\n        <!-- <p class=\"search_result_rating\"></p>\n        <p class=\"search_result_reviews\"></p>\n        <p class=\"search_result_link\"></p> -->\n        </a>\n")
    ; __line = 29
    ;  }); 
    ; __append(" \n\n")
    ; __line = 31
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}