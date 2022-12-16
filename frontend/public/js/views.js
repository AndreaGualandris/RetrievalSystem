//EJS Compiled Views - This file was automatically generated on Fri Dec 16 2022 23:30:01 GMT+0100 (Ora standard dell’Europa centrale)
 ejs.views_include = function(locals) {
     
     return function(path, d) {
         console.log("ejs.views_include",path,d);
         return ejs["views_"+path.replace(/\//g,"_").replace(/-/g,"_")]({...d,...locals}, null, ejs.views_include(locals));
     }
 };
 ejs.views_clusters = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<select id=\"search\" name=\"cluster\" class=\"cluster\" placeholder=\"\">\n    <option value=\"title\">title</option>\n    <option value=\"address\">address</option>\n    <option value=\"price\">price</option>\n    <option value=\"beds\">beds</option>\n</select>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<select id=\"search\" name=\"cluster\" class=\"cluster\" placeholder=\"\">\n    <option value=\"title\">title</option>\n    <option value=\"address\">address</option>\n    <option value=\"price\">price</option>\n    <option value=\"beds\">beds</option>\n</select>")
    ; __line = 6
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
  , __lines = "\n<form id='filter_form' action=\"/filter\">\n\n    <div class=\"range-slider\">\n        <label for=\"range-slider__range\"> Price </label><br>\n        <input id='range_price' type=\"string\" name=\"range-slider__range\" step=\"10\" min=\"0\" max=\"10000\" value=\"\">\n    </div>\n\n    <section id='checklist'>\n        <div>\n            <input class=\"checkoption\"  onclick=\"checkedOnClick(this);\" type=\"checkbox\" id=\"IL\" name=\"IL\" value=\"IL\">\n            <label for=\"IL\"> IL</label>\n        </div>\n\n        <div>\n            <input class=\"checkoption\"  onclick=\"checkedOnClick(this);\" type=\"checkbox\" id=\"IN\" name=\"IN\" value=\"IN\">\n            <label for=\"IN\"> IN</label>\n        </div>\n\n        <div>\n            <input class=\"checkoption\"  onclick=\"checkedOnClick(this);\" type=\"checkbox\" id=\"MI\" name=\"MI\" value=\"MI\">\n            <label for=\"MI\"> MI</label>\n        </div>\n    </section>\n    <section id=\"quantity\">\n        <label for=\"quantity\"> Beds</label><br>\n        <input id='beds_quantity' type=\"string\" name=\"quantity\" min=\"1\" max=\"10\" value=\":\">\n    </section>\n\n    <section id=\"cities_select\">\n        <label for=\"cities\">Choose city</label>\n        <select name=\"cities\" id=\"cities\">\n\n            <option value=\":\" selected></option>\n            <% for (var i = 0; i < f_city.length-1; i=i+2) { %>\n                <option value=\"<%= f_city[i] %>\"><%= f_city[i] %> (<%= f_city[i+1] %>)</option>\n            <% } %>\n        </select>\n    </section>\n\n    <button id=\"filter_button\" class=\"searchButt\" data-action=\"search\" type=\"submit\">Filter</button>\n</form>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n<form id='filter_form' action=\"/filter\">\n\n    <div class=\"range-slider\">\n        <label for=\"range-slider__range\"> Price </label><br>\n        <input id='range_price' type=\"string\" name=\"range-slider__range\" step=\"10\" min=\"0\" max=\"10000\" value=\"\">\n    </div>\n\n    <section id='checklist'>\n        <div>\n            <input class=\"checkoption\"  onclick=\"checkedOnClick(this);\" type=\"checkbox\" id=\"IL\" name=\"IL\" value=\"IL\">\n            <label for=\"IL\"> IL</label>\n        </div>\n\n        <div>\n            <input class=\"checkoption\"  onclick=\"checkedOnClick(this);\" type=\"checkbox\" id=\"IN\" name=\"IN\" value=\"IN\">\n            <label for=\"IN\"> IN</label>\n        </div>\n\n        <div>\n            <input class=\"checkoption\"  onclick=\"checkedOnClick(this);\" type=\"checkbox\" id=\"MI\" name=\"MI\" value=\"MI\">\n            <label for=\"MI\"> MI</label>\n        </div>\n    </section>\n    <section id=\"quantity\">\n        <label for=\"quantity\"> Beds</label><br>\n        <input id='beds_quantity' type=\"string\" name=\"quantity\" min=\"1\" max=\"10\" value=\":\">\n    </section>\n\n    <section id=\"cities_select\">\n        <label for=\"cities\">Choose city</label>\n        <select name=\"cities\" id=\"cities\">\n\n            <option value=\":\" selected></option>\n            ")
    ; __line = 35
    ;  for (var i = 0; i < f_city.length-1; i=i+2) { 
    ; __append("\n                <option value=\"")
    ; __line = 36
    ; __append(escapeFn( f_city[i] ))
    ; __append("\">")
    ; __append(escapeFn( f_city[i] ))
    ; __append(" (")
    ; __append(escapeFn( f_city[i+1] ))
    ; __append(")</option>\n            ")
    ; __line = 37
    ;  } 
    ; __append("\n        </select>\n    </section>\n\n    <button id=\"filter_button\" class=\"searchButt\" data-action=\"search\" type=\"submit\">Filter</button>\n</form>")
    ; __line = 42
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
ejs.views_search_result_grid = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "\n<% query_results.forEach((result) => { %>\n    <section id=\"<%= result.id %>\" data-id=\"<%= result.id %>\" class=\"search_result_grid\" >\n        <a class=\"search_result_image\" onclick=\"href = '<%= result.urlHouse %>'\" target=\"_blank\">\n            <img src=\"<%= result.urlImage %>\" alt=\"image\">\n        </a>\n\n        <section class=\"search_result_title\">\n            <div class=\"title_container\"><span><%= result.title %></span></div>\n            <div class=\"address_container\"><span class=\"search_result_address\"><%= result.address %></span></div>\n        </section>\n\n        \n\n        <section class=\"main_info\">\n            <section class=\"label\">\n                <p><span>City:</span></p> \n                <p><span>State:</span></p> \n                <p><span>Price:</span></p> \n                <p><span>Beds:</span></p> \n            </section>\n            <section class=\"values\">\n                <p><span> <%= result.city %></span></p>\n                <p><span><%= result.state %></span></p>\n                <p><span> <%= result.price %></span></p>\n                <p><span> <%= result.beds %></span></p>\n            </section>\n\n        </section>\n\n        <span class=\"similar_butt\"><a href=\"#\"></a></span>\n\n        </section>\n<% }); %> \n\n"
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
    ; __append(escapeFn( result.id ))
    ; __append("\" data-id=\"")
    ; __append(escapeFn( result.id ))
    ; __append("\" class=\"search_result_grid\" >\n        <a class=\"search_result_image\" onclick=\"href = '")
    ; __line = 4
    ; __append(escapeFn( result.urlHouse ))
    ; __append("'\" target=\"_blank\">\n            <img src=\"")
    ; __line = 5
    ; __append(escapeFn( result.urlImage ))
    ; __append("\" alt=\"image\">\n        </a>\n\n        <section class=\"search_result_title\">\n            <div class=\"title_container\"><span>")
    ; __line = 9
    ; __append(escapeFn( result.title ))
    ; __append("</span></div>\n            <div class=\"address_container\"><span class=\"search_result_address\">")
    ; __line = 10
    ; __append(escapeFn( result.address ))
    ; __append("</span></div>\n        </section>\n\n        \n\n        <section class=\"main_info\">\n            <section class=\"label\">\n                <p><span>City:</span></p> \n                <p><span>State:</span></p> \n                <p><span>Price:</span></p> \n                <p><span>Beds:</span></p> \n            </section>\n            <section class=\"values\">\n                <p><span> ")
    ; __line = 23
    ; __append(escapeFn( result.city ))
    ; __append("</span></p>\n                <p><span>")
    ; __line = 24
    ; __append(escapeFn( result.state ))
    ; __append("</span></p>\n                <p><span> ")
    ; __line = 25
    ; __append(escapeFn( result.price ))
    ; __append("</span></p>\n                <p><span> ")
    ; __line = 26
    ; __append(escapeFn( result.beds ))
    ; __append("</span></p>\n            </section>\n\n        </section>\n\n        <span class=\"similar_butt\"><a href=\"#\"></a></span>\n\n        </section>\n")
    ; __line = 34
    ;  }); 
    ; __append(" \n\n")
    ; __line = 36
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
  , __lines = "\n<% query_results.forEach((result) => { %>\n    <section id=\"<%= result.id %>\" data-id=\"<%= result.id %>\" class=\"search_result\" >\n        <a class=\"search_result_image\" onclick=\"href = '<%= result.urlHouse %>'\" target=\"_blank\">\n            <img src=\"<%= result.urlImage %>\" alt=\"image\">\n        </a>\n\n        <section class=\"search_result_title\">\n            <h4><span><%= result.title %></span></h4>\n        </section>\n\n        <section class=\"main_info\">\n            <p id=\"search_result_state\"><span>City: <%= result.city %></span></p>\n            <p id=\"search_result_city\"><span>State: <%= result.state %></span></p>\n        </section>\n\n        <section class=\"label\">\n            <p><span>Address:</span></p> \n            <p><span>Price:</span></p> \n            <p><span>Beds:</span></p> \n        </section>\n        <section class=\"values\">\n            <p><span><%= result.address %></span></p>\n            <p><span><%= result.price %></span></p>\n            <p><span><%= result.beds %></span></p>\n        </section>\n        <!-- <button class=\"similar\" onclick=\"href = '#'\">Similar Houses</button> -->\n\n        <span class=\"similar_butt\"><a href=\"#\"></a></span>\n\n    </section>\n<% }); %> \n\n"
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
    ; __append(escapeFn( result.id ))
    ; __append("\" data-id=\"")
    ; __append(escapeFn( result.id ))
    ; __append("\" class=\"search_result\" >\n        <a class=\"search_result_image\" onclick=\"href = '")
    ; __line = 4
    ; __append(escapeFn( result.urlHouse ))
    ; __append("'\" target=\"_blank\">\n            <img src=\"")
    ; __line = 5
    ; __append(escapeFn( result.urlImage ))
    ; __append("\" alt=\"image\">\n        </a>\n\n        <section class=\"search_result_title\">\n            <h4><span>")
    ; __line = 9
    ; __append(escapeFn( result.title ))
    ; __append("</span></h4>\n        </section>\n\n        <section class=\"main_info\">\n            <p id=\"search_result_state\"><span>City: ")
    ; __line = 13
    ; __append(escapeFn( result.city ))
    ; __append("</span></p>\n            <p id=\"search_result_city\"><span>State: ")
    ; __line = 14
    ; __append(escapeFn( result.state ))
    ; __append("</span></p>\n        </section>\n\n        <section class=\"label\">\n            <p><span>Address:</span></p> \n            <p><span>Price:</span></p> \n            <p><span>Beds:</span></p> \n        </section>\n        <section class=\"values\">\n            <p><span>")
    ; __line = 23
    ; __append(escapeFn( result.address ))
    ; __append("</span></p>\n            <p><span>")
    ; __line = 24
    ; __append(escapeFn( result.price ))
    ; __append("</span></p>\n            <p><span>")
    ; __line = 25
    ; __append(escapeFn( result.beds ))
    ; __append("</span></p>\n        </section>\n        <!-- <button class=\"similar\" onclick=\"href = '#'\">Similar Houses</button> -->\n\n        <span class=\"similar_butt\"><a href=\"#\"></a></span>\n\n    </section>\n")
    ; __line = 32
    ;  }); 
    ; __append(" \n\n")
    ; __line = 34
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}
ejs.views_clusters = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "<select id=\"search\" name=\"cluster\" class=\"cluster\" placeholder=\"\">\n    <option value=\"title\">title</option>\n    <option value=\"address\">address</option>\n    <option value=\"price\">price</option>\n    <option value=\"beds\">beds</option>\n</select>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<select id=\"search\" name=\"cluster\" class=\"cluster\" placeholder=\"\">\n    <option value=\"title\">title</option>\n    <option value=\"address\">address</option>\n    <option value=\"price\">price</option>\n    <option value=\"beds\">beds</option>\n</select>")
    ; __line = 6
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
  , __lines = "\n<form id='filter_form' action=\"/filter\">\n\n    <div class=\"range-slider\">\n        <label for=\"range-slider__range\"> Price </label><br>\n        <input id='range_price' type=\"string\" name=\"range-slider__range\" step=\"10\" min=\"0\" max=\"10000\" value=\"\">\n    </div>\n\n    <section id='checklist'>\n        <div>\n            <input class=\"checkoption\"  onclick=\"checkedOnClick(this);\" type=\"checkbox\" id=\"IL\" name=\"IL\" value=\"IL\">\n            <label for=\"IL\"> IL</label>\n        </div>\n\n        <div>\n            <input class=\"checkoption\"  onclick=\"checkedOnClick(this);\" type=\"checkbox\" id=\"IN\" name=\"IN\" value=\"IN\">\n            <label for=\"IN\"> IN</label>\n        </div>\n\n        <div>\n            <input class=\"checkoption\"  onclick=\"checkedOnClick(this);\" type=\"checkbox\" id=\"MI\" name=\"MI\" value=\"MI\">\n            <label for=\"MI\"> MI</label>\n        </div>\n    </section>\n    <section id=\"quantity\">\n        <label for=\"quantity\"> Beds</label><br>\n        <input id='beds_quantity' type=\"string\" name=\"quantity\" min=\"1\" max=\"10\" value=\":\">\n    </section>\n\n    <section id=\"cities_select\">\n        <label for=\"cities\">Choose city</label>\n        <select name=\"cities\" id=\"cities\">\n\n            <option value=\":\" selected></option>\n            <% for (var i = 0; i < f_city.length-1; i=i+2) { %>\n                <option value=\"<%= f_city[i] %>\"><%= f_city[i] %> (<%= f_city[i+1] %>)</option>\n            <% } %>\n        </select>\n    </section>\n\n    <button id=\"filter_button\" class=\"searchButt\" data-action=\"search\" type=\"submit\">Filter</button>\n</form>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n<form id='filter_form' action=\"/filter\">\n\n    <div class=\"range-slider\">\n        <label for=\"range-slider__range\"> Price </label><br>\n        <input id='range_price' type=\"string\" name=\"range-slider__range\" step=\"10\" min=\"0\" max=\"10000\" value=\"\">\n    </div>\n\n    <section id='checklist'>\n        <div>\n            <input class=\"checkoption\"  onclick=\"checkedOnClick(this);\" type=\"checkbox\" id=\"IL\" name=\"IL\" value=\"IL\">\n            <label for=\"IL\"> IL</label>\n        </div>\n\n        <div>\n            <input class=\"checkoption\"  onclick=\"checkedOnClick(this);\" type=\"checkbox\" id=\"IN\" name=\"IN\" value=\"IN\">\n            <label for=\"IN\"> IN</label>\n        </div>\n\n        <div>\n            <input class=\"checkoption\"  onclick=\"checkedOnClick(this);\" type=\"checkbox\" id=\"MI\" name=\"MI\" value=\"MI\">\n            <label for=\"MI\"> MI</label>\n        </div>\n    </section>\n    <section id=\"quantity\">\n        <label for=\"quantity\"> Beds</label><br>\n        <input id='beds_quantity' type=\"string\" name=\"quantity\" min=\"1\" max=\"10\" value=\":\">\n    </section>\n\n    <section id=\"cities_select\">\n        <label for=\"cities\">Choose city</label>\n        <select name=\"cities\" id=\"cities\">\n\n            <option value=\":\" selected></option>\n            ")
    ; __line = 35
    ;  for (var i = 0; i < f_city.length-1; i=i+2) { 
    ; __append("\n                <option value=\"")
    ; __line = 36
    ; __append(escapeFn( f_city[i] ))
    ; __append("\">")
    ; __append(escapeFn( f_city[i] ))
    ; __append(" (")
    ; __append(escapeFn( f_city[i+1] ))
    ; __append(")</option>\n            ")
    ; __line = 37
    ;  } 
    ; __append("\n        </select>\n    </section>\n\n    <button id=\"filter_button\" class=\"searchButt\" data-action=\"search\" type=\"submit\">Filter</button>\n</form>")
    ; __line = 42
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
ejs.views_search_result_grid = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
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
  , __lines = "\n<% query_results.forEach((result) => { %>\n    <section id=\"<%= result.id %>\" data-id=\"<%= result.id %>\" class=\"search_result_grid\" >\n        <a class=\"search_result_image\" onclick=\"href = '<%= result.urlHouse %>'\" target=\"_blank\">\n            <img src=\"<%= result.urlImage %>\" alt=\"image\">\n        </a>\n\n        <section class=\"search_result_title\">\n            <div class=\"title_container\"><span><%= result.title %></span></div>\n            <div class=\"address_container\"><span class=\"search_result_address\"><%= result.address %></span></div>\n        </section>\n\n        \n\n        <section class=\"main_info\">\n            <section class=\"label\">\n                <p><span>City:</span></p> \n                <p><span>State:</span></p> \n                <p><span>Price:</span></p> \n                <p><span>Beds:</span></p> \n            </section>\n            <section class=\"values\">\n                <p><span> <%= result.city %></span></p>\n                <p><span><%= result.state %></span></p>\n                <p><span> <%= result.price %></span></p>\n                <p><span> <%= result.beds %></span></p>\n            </section>\n\n        </section>\n\n        <span class=\"similar_butt\"><a href=\"#\"></a></span>\n\n        </section>\n<% }); %> \n\n"
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
    ; __append(escapeFn( result.id ))
    ; __append("\" data-id=\"")
    ; __append(escapeFn( result.id ))
    ; __append("\" class=\"search_result_grid\" >\n        <a class=\"search_result_image\" onclick=\"href = '")
    ; __line = 4
    ; __append(escapeFn( result.urlHouse ))
    ; __append("'\" target=\"_blank\">\n            <img src=\"")
    ; __line = 5
    ; __append(escapeFn( result.urlImage ))
    ; __append("\" alt=\"image\">\n        </a>\n\n        <section class=\"search_result_title\">\n            <div class=\"title_container\"><span>")
    ; __line = 9
    ; __append(escapeFn( result.title ))
    ; __append("</span></div>\n            <div class=\"address_container\"><span class=\"search_result_address\">")
    ; __line = 10
    ; __append(escapeFn( result.address ))
    ; __append("</span></div>\n        </section>\n\n        \n\n        <section class=\"main_info\">\n            <section class=\"label\">\n                <p><span>City:</span></p> \n                <p><span>State:</span></p> \n                <p><span>Price:</span></p> \n                <p><span>Beds:</span></p> \n            </section>\n            <section class=\"values\">\n                <p><span> ")
    ; __line = 23
    ; __append(escapeFn( result.city ))
    ; __append("</span></p>\n                <p><span>")
    ; __line = 24
    ; __append(escapeFn( result.state ))
    ; __append("</span></p>\n                <p><span> ")
    ; __line = 25
    ; __append(escapeFn( result.price ))
    ; __append("</span></p>\n                <p><span> ")
    ; __line = 26
    ; __append(escapeFn( result.beds ))
    ; __append("</span></p>\n            </section>\n\n        </section>\n\n        <span class=\"similar_butt\"><a href=\"#\"></a></span>\n\n        </section>\n")
    ; __line = 34
    ;  }); 
    ; __append(" \n\n")
    ; __line = 36
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
  , __lines = "\n<% query_results.forEach((result) => { %>\n    <section id=\"<%= result.id %>\" data-id=\"<%= result.id %>\" class=\"search_result\" >\n        <a class=\"search_result_image\" onclick=\"href = '<%= result.urlHouse %>'\" target=\"_blank\">\n            <img src=\"<%= result.urlImage %>\" alt=\"image\">\n        </a>\n\n        <section class=\"search_result_title\">\n            <h4><span><%= result.title %></span></h4>\n        </section>\n\n        <section class=\"main_info\">\n            <p id=\"search_result_state\"><span>City: <%= result.city %></span></p>\n            <p id=\"search_result_city\"><span>State: <%= result.state %></span></p>\n        </section>\n\n        <section class=\"label\">\n            <p><span>Address:</span></p> \n            <p><span>Price:</span></p> \n            <p><span>Beds:</span></p> \n        </section>\n        <section class=\"values\">\n            <p><span><%= result.address %></span></p>\n            <p><span><%= result.price %></span></p>\n            <p><span><%= result.beds %></span></p>\n        </section>\n        <!-- <button class=\"similar\" onclick=\"href = '#'\">Similar Houses</button> -->\n\n        <span class=\"similar_butt\"><a href=\"#\"></a></span>\n\n    </section>\n<% }); %> \n\n"
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
    ; __append(escapeFn( result.id ))
    ; __append("\" data-id=\"")
    ; __append(escapeFn( result.id ))
    ; __append("\" class=\"search_result\" >\n        <a class=\"search_result_image\" onclick=\"href = '")
    ; __line = 4
    ; __append(escapeFn( result.urlHouse ))
    ; __append("'\" target=\"_blank\">\n            <img src=\"")
    ; __line = 5
    ; __append(escapeFn( result.urlImage ))
    ; __append("\" alt=\"image\">\n        </a>\n\n        <section class=\"search_result_title\">\n            <h4><span>")
    ; __line = 9
    ; __append(escapeFn( result.title ))
    ; __append("</span></h4>\n        </section>\n\n        <section class=\"main_info\">\n            <p id=\"search_result_state\"><span>City: ")
    ; __line = 13
    ; __append(escapeFn( result.city ))
    ; __append("</span></p>\n            <p id=\"search_result_city\"><span>State: ")
    ; __line = 14
    ; __append(escapeFn( result.state ))
    ; __append("</span></p>\n        </section>\n\n        <section class=\"label\">\n            <p><span>Address:</span></p> \n            <p><span>Price:</span></p> \n            <p><span>Beds:</span></p> \n        </section>\n        <section class=\"values\">\n            <p><span>")
    ; __line = 23
    ; __append(escapeFn( result.address ))
    ; __append("</span></p>\n            <p><span>")
    ; __line = 24
    ; __append(escapeFn( result.price ))
    ; __append("</span></p>\n            <p><span>")
    ; __line = 25
    ; __append(escapeFn( result.beds ))
    ; __append("</span></p>\n        </section>\n        <!-- <button class=\"similar\" onclick=\"href = '#'\">Similar Houses</button> -->\n\n        <span class=\"similar_butt\"><a href=\"#\"></a></span>\n\n    </section>\n")
    ; __line = 32
    ;  }); 
    ; __append(" \n\n")
    ; __line = 34
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}