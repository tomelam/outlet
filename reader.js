var util = require("util");var type = (function(obj){
if(arguments.length < 1) {
throw Error("type: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("type: too many arguments");
}
return (function() {if(number_p_(obj)) {return ((function() {return "\uFDD1number"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return (function() {if(boolean_p_(obj)) {return ((function() {return "\uFDD1boolean"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return (function() {if(string_p_(obj)) {return ((function() {return "\uFDD1string"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return (function() {if(null_p_(obj)) {return ((function() {return "\uFDD1null"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return (function() {if(list_p_(obj)) {return ((function() {return "\uFDD1list"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return (function() {if(vector_p_(obj)) {return ((function() {return "\uFDD1vector"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return (function() {if(dict_p_(obj)) {return ((function() {return "\uFDD1dict"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 6 Column 2
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var number_p_ = (function(obj){
if(arguments.length < 1) {
throw Error("number?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("number?: too many arguments");
}
return _eq__eq_(typeof obj,"number"); // Line 16 Column 3
});
var string_p_ = (function(obj){
if(arguments.length < 1) {
throw Error("string?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("string?: too many arguments");
}
return (_eq__eq_(typeof obj,"string") && not(_eq__eq_(obj[0],"\uFDD0")) && not(_eq__eq_(obj[0],"\uFDD1"))); // Line <unknown undefined> Column <unknown undefined>
});
var symbol_p_ = (function(obj){
if(arguments.length < 1) {
throw Error("symbol?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("symbol?: too many arguments");
}
return ((_eq__eq_(typeof obj,"string") && _eq__eq_(obj[0],"\uFDD1"))); // Line <unknown undefined> Column <unknown undefined>
});
var key_p_ = (function(obj){
if(arguments.length < 1) {
throw Error("key?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("key?: too many arguments");
}
return (_eq__eq_(typeof obj,"string") && _eq__eq_(obj[0],"\uFDD0")); // Line <unknown undefined> Column <unknown undefined>
});
var boolean_p_ = (function(obj){
if(arguments.length < 1) {
throw Error("boolean?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("boolean?: too many arguments");
}
return (eq_p_(obj,true) || eq_p_(obj,false)); // Line <unknown undefined> Column <unknown undefined>
});
var null_p_ = (function(obj){
if(arguments.length < 1) {
throw Error("null?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("null?: too many arguments");
}
return (!!obj && not(eq_p_(obj["length"],undefined)) && eq_p_(obj["length"],1) && eq_p_(vector_dash_ref(obj,0),null)); // Line <unknown undefined> Column <unknown undefined>
});
var list_p_ = (function(obj){
if(arguments.length < 1) {
throw Error("list?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("list?: too many arguments");
}
return (!!obj && not(eq_p_(obj["length"],undefined)) && not(eq_p_(obj["list"],undefined))); // Line <unknown undefined> Column <unknown undefined>
});
var vector_p_ = (function(obj){
if(arguments.length < 1) {
throw Error("vector?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("vector?: too many arguments");
}
return (not(list_p_(obj)) && not(null_p_(obj)) && !!obj && eq_p_(typeof obj,"object") && not(eq_p_(obj["length"],undefined))); // Line <unknown undefined> Column <unknown undefined>
});
var dict_p_ = (function(obj){
if(arguments.length < 1) {
throw Error("dict?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("dict?: too many arguments");
}
return (not(symbol_p_(obj)) && !!obj && eq_p_(typeof obj,"object") && eq_p_(obj["length"],undefined)); // Line <unknown undefined> Column <unknown undefined>
});
var function_p_ = (function(obj){
if(arguments.length < 1) {
throw Error("function?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("function?: too many arguments");
}
return eq_p_(typeof obj,"function"); // Line 60 Column 3
});
var literal_p_ = (function(x){
if(arguments.length < 1) {
throw Error("literal?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("literal?: too many arguments");
}
return (key_p_(x) || number_p_(x) || string_p_(x) || boolean_p_(x) || null_p_(x)); // Line <unknown undefined> Column <unknown undefined>
});
var str = (function() {
var args = vector_dash__gt_list(Array.prototype.slice.call(arguments));
return fold((function(el,acc){
if(arguments.length < 2) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("lambda: too many arguments");
}
return (acc + (function() {if(string_p_(el)) {return el; // Line <unknown undefined> Column <unknown undefined>
} else {return inspect(el); // Line 75 Column 36
}})()
); // Line <unknown undefined> Column <unknown undefined>
}),"",args); // Line 73 Column 5
});
var symbol_dash__gt_key = (function(sym){
if(arguments.length < 1) {
throw Error("symbol->key: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("symbol->key: too many arguments");
}
return ("\uFDD0" + sym["substring"](1)); // Line <unknown undefined> Column <unknown undefined>
});
var key_dash__gt_symbol = (function(sym){
if(arguments.length < 1) {
throw Error("key->symbol: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("key->symbol: too many arguments");
}
return ("\uFDD1" + sym["substring"](1)); // Line <unknown undefined> Column <unknown undefined>
});
var string_dash__gt_key = (function(str){
if(arguments.length < 1) {
throw Error("string->key: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("string->key: too many arguments");
}
return ("\uFDD0" + str); // Line <unknown undefined> Column <unknown undefined>
});
var key_dash__gt_string = (function(key){
if(arguments.length < 1) {
throw Error("key->string: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("key->string: too many arguments");
}
return key["substring"](1); // Line 89 Column 3
});
var string_dash__gt_symbol = (function(str){
if(arguments.length < 1) {
throw Error("string->symbol: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("string->symbol: too many arguments");
}
return ("\uFDD1" + str); // Line <unknown undefined> Column <unknown undefined>
});
var symbol_dash__gt_string = (function(sym){
if(arguments.length < 1) {
throw Error("symbol->string: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("symbol->string: too many arguments");
}
return sym["substring"](1); // Line 95 Column 3
});
var _emptylst = [null];
var list = (function() {
var args = vector_dash__gt_list(Array.prototype.slice.call(arguments));
return args; // Line <unknown undefined> Column <unknown undefined>
});
var cons = (function(obj,lst){
if(arguments.length < 2) {
throw Error("cons: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("cons: too many arguments");
}
return ((function() {var o8634010 = (function(res){
if(arguments.length < 1) {
throw Error("o8634010: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o8634010: too many arguments");
}
res.list = true;return res; // Line <unknown undefined> Column <unknown undefined>
});
var o4185710 = [obj, lst];
return o8634010(o4185710); // Line 106 Column 2
}))(); // Line 106 Column 2
});
var car = (function(lst){
if(arguments.length < 1) {
throw Error("car: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("car: too many arguments");
}
return lst[0]});
var cdr = (function(lst){
if(arguments.length < 1) {
throw Error("cdr: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("cdr: too many arguments");
}
return lst[1]});
var cadr = (function(lst){
if(arguments.length < 1) {
throw Error("cadr: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("cadr: too many arguments");
}
return car(cdr(lst)); // Line 116 Column 20
});
var cddr = (function(lst){
if(arguments.length < 1) {
throw Error("cddr: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("cddr: too many arguments");
}
return cdr(cdr(lst)); // Line 117 Column 20
});
var cdar = (function(lst){
if(arguments.length < 1) {
throw Error("cdar: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("cdar: too many arguments");
}
return cdr(car(lst)); // Line 118 Column 20
});
var caddr = (function(lst){
if(arguments.length < 1) {
throw Error("caddr: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("caddr: too many arguments");
}
return car(cdr(cdr(lst))); // Line 119 Column 21
});
var cdddr = (function(lst){
if(arguments.length < 1) {
throw Error("cdddr: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("cdddr: too many arguments");
}
return cdr(cdr(cdr(lst))); // Line 120 Column 21
});
var cadar = (function(lst){
if(arguments.length < 1) {
throw Error("cadar: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("cadar: too many arguments");
}
return car(cdr(car(lst))); // Line 121 Column 21
});
var cddar = (function(lst){
if(arguments.length < 1) {
throw Error("cddar: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("cddar: too many arguments");
}
return cdr(cdr(car(lst))); // Line 122 Column 21
});
var caadr = (function(lst){
if(arguments.length < 1) {
throw Error("caadr: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("caadr: too many arguments");
}
return car(car(cdr(lst))); // Line 123 Column 21
});
var cdadr = (function(lst){
if(arguments.length < 1) {
throw Error("cdadr: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("cdadr: too many arguments");
}
return cdr(car(cdr(lst))); // Line 124 Column 21
});
var list_dash_ref = (function(lst,i){
if(arguments.length < 2) {
throw Error("list-ref: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("list-ref: too many arguments");
}
return ((function() {var loop = (function(lst,i){
if(arguments.length < 2) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("loop: too many arguments");
}
return (function() {if(null_p_(lst)) {return ((function() {return false; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 127 Column 2
} else {return (function() {if(eq_p_(i,0)) {return ((function() {return car(lst); // Line 127 Column 2
}))(); // Line 127 Column 2
} else {return ((function() {return loop(cdr(lst),(i - 1)); // Line 127 Column 2
}))(); // Line 127 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o8501755 = lst;
var o5255882 = i;
return loop(o8501755,o5255882); // Line 127 Column 2
}))(); // Line 127 Column 2
});
var length = (function(lst){
if(arguments.length < 1) {
throw Error("length: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("length: too many arguments");
}
return fold((function(el,acc){
if(arguments.length < 2) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("lambda: too many arguments");
}
return (acc + 1); // Line <unknown undefined> Column <unknown undefined>
}),0,lst); // Line 135 Column 3
});
var list_dash_append = (function(){
if(arguments.length < 0) {
throw Error("list-append: not enough arguments")
}
var lsts = vector_dash__gt_list(Array.prototype.slice.call(arguments, 0));
var l_star_ = (function() {if(null_p_(lsts)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return lsts; // Line <unknown undefined> Column <unknown undefined>
}})()
;
return (function() {if(null_p_(l_star_)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return (function() {if(null_p_(cdr(l_star_))) {return car(l_star_); // Line 144 Column 11
} else {return _list_dash_append(car(l_star_),apply(list_dash_append,cdr(l_star_))); // Line 145 Column 11
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var _list_dash_append = (function(lst1,lst2){
if(arguments.length < 2) {
throw Error("_list-append: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("_list-append: too many arguments");
}
return ((function() {var loop = (function(lst){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if(null_p_(lst)) {return lst2; // Line <unknown undefined> Column <unknown undefined>
} else {return cons(car(lst),loop(cdr(lst))); // Line 149 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o5458424 = lst1;
return loop(o5458424); // Line 149 Column 2
}))(); // Line 149 Column 2
});
var list_dash_find = (function(lst,val){
if(arguments.length < 2) {
throw Error("list-find: not enough arguments")
}
var rst = vector_dash__gt_list(Array.prototype.slice.call(arguments, 2));
return ((function() {var o3848969 = (function(access){
if(arguments.length < 1) {
throw Error("o3848969: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o3848969: too many arguments");
}
return ((function() {var loop = (function(lst){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if(null_p_(lst)) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return (function() {if(_eq__eq_(access(car(lst)),val)) {return lst; // Line <unknown undefined> Column <unknown undefined>
} else {return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 156 Column 2
})); // Line 156 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o1434060 = lst;
return trampoline(loop(o1434060)); // Line 156 Column 2
}))(); // Line 156 Column 2
});
var o4671376 = (function() {if(null_p_(rst)) {return (function(x){
if(arguments.length < 1) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("lambda: too many arguments");
}
return x; // Line <unknown undefined> Column <unknown undefined>
}); // Line <unknown undefined> Column <unknown undefined>
} else {return car(rst); // Line 156 Column 2
}})()
;
return o3848969(o4671376); // Line 156 Column 2
}))(); // Line 156 Column 2
});
var map = (function(func,lst){
if(arguments.length < 2) {
throw Error("map: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("map: too many arguments");
}
return (function() {if(null_p_(lst)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return cons(func(car(lst)),map(func,cdr(lst))); // Line 167 Column 7
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var for_dash_each = (function(func,lst){
if(arguments.length < 2) {
throw Error("for-each: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("for-each: too many arguments");
}
return ((function() {var loop = (function(lst){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if(not(null_p_(lst))) {return ((function() {func(car(lst)); // Line 171 Column 2
return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 171 Column 2
})); // Line 171 Column 2
}))(); // Line 171 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o9591666 = lst;
return trampoline(loop(o9591666)); // Line 171 Column 2
}))(); // Line 171 Column 2
});
var fold = (function(func,acc,lst){
if(arguments.length < 3) {
throw Error("fold: not enough arguments")
}
else if(arguments.length > 3) {
throw Error("fold: too many arguments");
}
return (function() {if(null_p_(lst)) {return acc; // Line <unknown undefined> Column <unknown undefined>
} else {return fold(func,func(car(lst),acc),cdr(lst)); // Line 180 Column 7
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var reverse = (function(lst){
if(arguments.length < 1) {
throw Error("reverse: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("reverse: too many arguments");
}
return (function() {if(null_p_(lst)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return list_dash_append(reverse(cdr(lst)),list(car(lst))); // Line 187 Column 7
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var vector_dash__gt_list = (function(vec){
if(arguments.length < 1) {
throw Error("vector->list: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("vector->list: too many arguments");
}
return ((function() {var loop = (function(i){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if((i < vec.length)) {return cons(vector_dash_ref(vec,i),loop((i + 1))); // Line 193 Column 2
} else {return _emptylst}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o9482611 = 0;
return loop(o9482611); // Line 193 Column 2
}))(); // Line 193 Column 2
});
var make_dash_vector = (function(count){
if(arguments.length < 1) {
throw Error("make-vector: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("make-vector: too many arguments");
}
var val = arguments[1] || false;
return ((function() {var o2590411 = (function(v){
if(arguments.length < 1) {
throw Error("o2590411: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o2590411: too many arguments");
}
return (function() {if(val) {return ((function() {var loop = (function(i){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if((i < count)) {return ((function() {vector_dash_put_excl_(v,i,val); // Line 202 Column 2
return vector("__tco_call",(function() {return loop((i + 1)); // Line 202 Column 2
})); // Line 202 Column 2
}))(); // Line 202 Column 2
} else {return v; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o7588124 = 0;
return trampoline(loop(o7588124)); // Line 202 Column 2
}))(); // Line 202 Column 2
} else {return v; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o2128333 = new Array(count);
return o2590411(o2128333); // Line 202 Column 2
}))(); // Line 202 Column 2
});
var vector = (function() {return Array.prototype.slice.call(arguments)});
var vector_dash_ref = (function(vec,i){
if(arguments.length < 2) {
throw Error("vector-ref: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("vector-ref: too many arguments");
}
return vec[i]});
var vector_dash_put_excl_ = (function(vec,i,obj){
if(arguments.length < 3) {
throw Error("vector-put!: not enough arguments")
}
else if(arguments.length > 3) {
throw Error("vector-put!: too many arguments");
}
return vec[i] = obj});
var vector_dash_concat = (function(){
if(arguments.length < 0) {
throw Error("vector-concat: not enough arguments")
}
var vecs = vector_dash__gt_list(Array.prototype.slice.call(arguments, 0));
return ((function() {var loop = (function(lst,res){
if(arguments.length < 2) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("loop: too many arguments");
}
return (function() {if(null_p_(lst)) {return res; // Line <unknown undefined> Column <unknown undefined>
} else {return vector("__tco_call",(function() {return loop(cdr(lst),res["concat"](car(lst))); // Line 222 Column 2
})); // Line 222 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o3830985 = cdr(vecs);
var o2767814 = car(vecs);
return trampoline(loop(o3830985,o2767814)); // Line 222 Column 2
}))(); // Line 222 Column 2
});
var vector_dash_slice = (function(vec,start){
if(arguments.length < 2) {
throw Error("vector-slice: not enough arguments")
}
else if(arguments.length > 3) {
throw Error("vector-slice: too many arguments");
}
var end = arguments[2] || false;
return vec.slice(start, end || undefined)});
var vector_dash_push_excl_ = (function(vec,obj){
if(arguments.length < 2) {
throw Error("vector-push!: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("vector-push!: too many arguments");
}
return vec.push(obj)});
var vector_dash_find = (function(vec,val){
if(arguments.length < 2) {
throw Error("vector-find: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("vector-find: too many arguments");
}
return ((function() {var loop = (function(i){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if((i < vec.length)) {return (function() {if(eq_p_(vector_dash_ref(vec,i),val)) {return i; // Line <unknown undefined> Column <unknown undefined>
} else {return vector("__tco_call",(function() {return loop((i + 1)); // Line 236 Column 2
})); // Line 236 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o5365054 = 0;
return trampoline(loop(o5365054)); // Line 236 Column 2
}))(); // Line 236 Column 2
});
var vector_dash_length = (function(vec){
if(arguments.length < 1) {
throw Error("vector-length: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("vector-length: too many arguments");
}
return vec["length"]; // Line <unknown undefined> Column <unknown undefined>
});
var list_dash__gt_vector = (function(lst){
if(arguments.length < 1) {
throw Error("list->vector: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("list->vector: too many arguments");
}
var res = [];
for_dash_each((function(el){
if(arguments.length < 1) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("lambda: too many arguments");
}
return res["push"](el); // Line 248 Column 15
}),lst); // Line 247 Column 3
return res; // Line <unknown undefined> Column <unknown undefined>
});
var vector_dash_map = (function(func,vec){
if(arguments.length < 2) {
throw Error("vector-map: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("vector-map: too many arguments");
}
var res = [];
((function() {var loop = (function(i){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if((i < vec["length"])) {return ((function() {res["push"](func(vector_dash_ref(vec,i))); // Line 254 Column 2
return vector("__tco_call",(function() {return loop((i + 1)); // Line 254 Column 2
})); // Line 254 Column 2
}))(); // Line 254 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o7450151 = 0;
return trampoline(loop(o7450151)); // Line 254 Column 2
}))(); // Line 254 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var vector_dash_for_dash_each = (function(func,vec){
if(arguments.length < 2) {
throw Error("vector-for-each: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("vector-for-each: too many arguments");
}
return ((function() {var loop = (function(i){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if((i < vec["length"])) {return ((function() {func(vector_dash_ref(vec,i)); // Line 262 Column 2
return vector("__tco_call",(function() {return loop((i + 1)); // Line 262 Column 2
})); // Line 262 Column 2
}))(); // Line 262 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o7362510 = 0;
return trampoline(loop(o7362510)); // Line 262 Column 2
}))(); // Line 262 Column 2
});
var vector_dash_fold = (function(func,acc,vec){
if(arguments.length < 3) {
throw Error("vector-fold: not enough arguments")
}
else if(arguments.length > 3) {
throw Error("vector-fold: too many arguments");
}
return ((function() {var loop = (function(i,acc){
if(arguments.length < 2) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("loop: too many arguments");
}
return (function() {if((i < vector_dash_length(vec))) {return vector("__tco_call",(function() {return loop((i + 1),func(vector_dash_ref(vec,i),acc)); // Line 269 Column 2
})); // Line 269 Column 2
} else {return acc; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o8888976 = 0;
var o1297207 = acc;
return trampoline(loop(o8888976,o1297207)); // Line 269 Column 2
}))(); // Line 269 Column 2
});
var dict = (function() {
var args = vector_dash__gt_list(Array.prototype.slice.call(arguments));
var res = {};
((function() {var loop = (function(lst){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if(not(null_p_(lst))) {return ((function() {var o6552772 = (function(key,val){
if(arguments.length < 2) {
throw Error("o6552772: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("o6552772: too many arguments");
}
dict_dash_put_excl_(res,key,val); // Line 281 Column 4
return vector("__tco_call",(function() {return loop(cddr(lst)); // Line 281 Column 4
})); // Line 281 Column 4
});
var o1448147 = car(lst);
var o119873 = cadr(lst);
return o6552772(o1448147,o119873); // Line 281 Column 4
}))(); // Line 281 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o9020810 = args;
return trampoline(loop(o9020810)); // Line 281 Column 4
}))(); // Line 281 Column 4
return res; // Line <unknown undefined> Column <unknown undefined>
});
var dict_dash_put_excl_ = (function(dct,k,v){
if(arguments.length < 3) {
throw Error("dict-put!: not enough arguments")
}
else if(arguments.length > 3) {
throw Error("dict-put!: too many arguments");
}
return dct[k.substring(1)] = v});
var dict_dash_ref = (function(dct,k){
if(arguments.length < 2) {
throw Error("dict-ref: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("dict-ref: too many arguments");
}
return dct[k.substring(1)]});
var dict_dash_map = (function(func,dct){
if(arguments.length < 2) {
throw Error("dict-map: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("dict-map: too many arguments");
}
var res = dict();
((function() {var loop = (function(lst){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if(not(null_p_(lst))) {return ((function() {var o2697718 = (function(k){
if(arguments.length < 1) {
throw Error("o2697718: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o2697718: too many arguments");
}
dict_dash_put_excl_(res,k,func(dict_dash_ref(dct,k))); // Line 297 Column 2
return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 297 Column 2
})); // Line 297 Column 2
});
var o879719 = car(lst);
return o2697718(o879719); // Line 297 Column 2
}))(); // Line 297 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o2897896 = keys(dct);
return trampoline(loop(o2897896)); // Line 297 Column 2
}))(); // Line 297 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var dict_dash_merge = (function(){
if(arguments.length < 0) {
throw Error("dict-merge: not enough arguments")
}
var dcts = vector_dash__gt_list(Array.prototype.slice.call(arguments, 0));
return ((function() {var o4947276 = (function(res){
if(arguments.length < 1) {
throw Error("o4947276: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o4947276: too many arguments");
}
for_dash_each((function(dct){
if(arguments.length < 1) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("lambda: too many arguments");
}
return for_dash_each((function(k){
if(arguments.length < 1) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("lambda: too many arguments");
}
return dict_dash_put_excl_(res,k,dict_dash_ref(dct,k)); // Line 306 Column 2
}),keys(dct)); // Line 306 Column 2
}),dcts); // Line 306 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var o8711829 = dict();
return o4947276(o8711829); // Line 306 Column 2
}))(); // Line 306 Column 2
});
var dict_dash__gt_vector = (function(dct){
if(arguments.length < 1) {
throw Error("dict->vector: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("dict->vector: too many arguments");
}
var res = vector();
((function() {var loop = (function(lst){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if(not(null_p_(lst))) {return ((function() {vector_dash_push_excl_(res,car(lst)); // Line 316 Column 2
vector_dash_push_excl_(res,dict_dash_ref(dct,car(lst))); // Line 316 Column 2
return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 316 Column 2
})); // Line 316 Column 2
}))(); // Line 316 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o3479103 = keys(dct);
return trampoline(loop(o3479103)); // Line 316 Column 2
}))(); // Line 316 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var dict_dash__gt_list = (function(dct){
if(arguments.length < 1) {
throw Error("dict->list: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("dict->list: too many arguments");
}
return vector_dash__gt_list(dict_dash__gt_vector(dct)); // Line 325 Column 3
});
var keys = (function(dct){
if(arguments.length < 1) {
throw Error("keys: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("keys: too many arguments");
}
return ((function() {var o2009072 = (function(res){
if(arguments.length < 1) {
throw Error("o2009072: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o2009072: too many arguments");
}
for(var k in dct) {
       res = cons(string_dash__gt_key(k), res);
    }return res; // Line <unknown undefined> Column <unknown undefined>
});
var o3251151 = _emptylst;
return o2009072(o3251151); // Line 328 Column 2
}))(); // Line 328 Column 2
});
var vals = (function(dct){
if(arguments.length < 1) {
throw Error("vals: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("vals: too many arguments");
}
return map((function(k){
if(arguments.length < 1) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("lambda: too many arguments");
}
return dict_dash_ref(dct,k); // Line 335 Column 20
}),keys(dct)); // Line 335 Column 3
});
var zip = (function(keys,vals){
if(arguments.length < 2) {
throw Error("zip: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("zip: too many arguments");
}
var res = dict();
((function() {var loop = (function(ks,vs){
if(arguments.length < 2) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("loop: too many arguments");
}
return (function() {if(not(null_p_(ks))) {return ((function() {dict_dash_put_excl_(res,car(ks),car(vs)); // Line 340 Column 2
return vector("__tco_call",(function() {return loop(cdr(ks),cdr(vs)); // Line 340 Column 2
})); // Line 340 Column 2
}))(); // Line 340 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o7299865 = keys;
var o8267366 = vals;
return trampoline(loop(o7299865,o8267366)); // Line 340 Column 2
}))(); // Line 340 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var not = (function(obj){
if(arguments.length < 1) {
throw Error("not: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("not: too many arguments");
}
return (typeof obj !== 'number' && !obj); // Line <unknown undefined> Column <unknown undefined>
});
var _eq__eq_ = (function(obj1,obj2){
if(arguments.length < 2) {
throw Error("==: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("==: too many arguments");
}
return obj1 === obj2});
var _eq_ = (function(obj1,obj2){
if(arguments.length < 2) {
throw Error("=: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("=: too many arguments");
}
return (function() {if((list_p_(obj1) && list_p_(obj2))) {return ((function() {return ((function() {var loop = (function(lst1,lst2){
if(arguments.length < 2) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("loop: too many arguments");
}
var n1 = null_p_(lst1);
var n2 = null_p_(lst2);
return (function() {if((n1 && n2)) {return ((function() {return true; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 360 Column 2
} else {return (function() {if((n1 || n2)) {return ((function() {return false; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 360 Column 2
} else {return ((function() {return (function() {if(equal_p_(car(lst1),car(lst2))) {return loop(cdr(lst1),cdr(lst2)); // Line 360 Column 2
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 360 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o2237128 = obj1;
var o3002681 = obj2;
return loop(o2237128,o3002681); // Line 360 Column 2
}))(); // Line 360 Column 2
}))(); // Line 360 Column 2
} else {return (function() {if((vector_p_(obj1) && vector_p_(obj2))) {return ((function() {return (function() {if(not(_eq_(obj1["length"],obj2["length"]))) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return ((function() {var loop = (function(i){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if((i < obj1["length"])) {return (function() {if(_eq_(vector_dash_ref(obj1,i),vector_dash_ref(obj2,i))) {return vector("__tco_call",(function() {return loop((i + 1)); // Line 360 Column 2
})); // Line 360 Column 2
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
} else {return true; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o9504941 = 0;
return trampoline(loop(o9504941)); // Line 360 Column 2
}))(); // Line 360 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 360 Column 2
} else {return (function() {if((dict_p_(obj1) && dict_p_(obj2))) {return ((function() {return ((function() {var o5503660 = (function(keys1,keys2){
if(arguments.length < 2) {
throw Error("o5503660: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("o5503660: too many arguments");
}
return (eq_p_(length(keys1),length(keys2)) && ((function() {var loop = (function(lst){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if(null_p_(lst)) {return true; // Line <unknown undefined> Column <unknown undefined>
} else {return (function() {if(equal_p_(dict_dash_ref(obj1,car(lst)),dict_dash_ref(obj2,car(lst)))) {return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 360 Column 2
})); // Line 360 Column 2
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o4425679 = keys1;
return trampoline(loop(o4425679)); // Line 360 Column 2
}))()); // Line <unknown undefined> Column <unknown undefined>
});
var o3381950 = keys(obj1);
var o6400636 = keys(obj2);
return o5503660(o3381950,o6400636); // Line 360 Column 2
}))(); // Line 360 Column 2
}))(); // Line 360 Column 2
} else {return ((function() {return eq_p_(obj1,obj2); // Line 360 Column 2
}))(); // Line 360 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var eq_p_ = _eq__eq_;
var equal_p_ = _eq_;
var print = (function(msg){
if(arguments.length < 1) {
throw Error("print: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("print: too many arguments");
}
return util["print"](msg); // Line 408 Column 3
});
var println = (function(msg){
if(arguments.length < 1) {
throw Error("println: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("println: too many arguments");
}
return util["puts"](msg); // Line 411 Column 3
});
var pp = (function(obj){
if(arguments.length < 1) {
throw Error("pp: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("pp: too many arguments");
}
return println(inspect(obj)); // Line 414 Column 3
});
var _per_inspect_dash_non_dash_sequence = (function(obj){
if(arguments.length < 1) {
throw Error("%inspect-non-sequence: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("%inspect-non-sequence: too many arguments");
}
return (function() {if(number_p_(obj)) {return ((function() {return ("" + obj); // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 418 Column 2
} else {return (function() {if(string_p_(obj)) {return ((function() {obj = obj["replace"](RegExp("\\\\","g"),"\\\\");
obj = obj["replace"](RegExp("\n","g"),"\\n");
obj = obj["replace"](RegExp("\r","g"),"\\r");
obj = obj["replace"](RegExp("\t","g"),"\\t");
obj = obj["replace"](RegExp("\"","g"),"\\\"");
return ("\"" + obj + "\""); // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 418 Column 2
} else {return (function() {if(key_p_(obj)) {return ((function() {return (":" + symbol_dash__gt_string(obj)); // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 418 Column 2
} else {return (function() {if(symbol_p_(obj)) {return ((function() {return symbol_dash__gt_string(obj); // Line 418 Column 2
}))(); // Line 418 Column 2
} else {return (function() {if(boolean_p_(obj)) {return ((function() {return (function() {if(obj) {return "#t"; // Line <unknown undefined> Column <unknown undefined>
} else {return "#f"; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 418 Column 2
} else {return (function() {if(null_p_(obj)) {return ((function() {return "()"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 418 Column 2
} else {return (function() {if(function_p_(obj)) {return ((function() {return "<function>"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 418 Column 2
} else {return ((function() {return ("<unknown " + obj + ">"); // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 418 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var _per_recur_dash_protect = (function(obj,arg,func,halt){
if(arguments.length < 4) {
throw Error("%recur-protect: not enough arguments")
}
var rest = vector_dash__gt_list(Array.prototype.slice.call(arguments, 4));
return ((function() {var o3081190 = (function(parents){
if(arguments.length < 1) {
throw Error("o3081190: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o3081190: too many arguments");
}
return (function() {if(list_dash_find(parents,obj)) {return halt; // Line <unknown undefined> Column <unknown undefined>
} else {return func(obj,arg,(function(el,arg){
if(arguments.length < 2) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("lambda: too many arguments");
}
return _per_recur_dash_protect(el,arg,func,halt,cons(obj,parents)); // Line 435 Column 2
})); // Line 435 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o9543810 = (function() {if(null_p_(rest)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return car(rest); // Line 435 Column 2
}})()
;
return o3081190(o9543810); // Line 435 Column 2
}))(); // Line 435 Column 2
});
var _per_space = (function(obj){
if(arguments.length < 1) {
throw Error("%space: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("%space: too many arguments");
}
return _per_recur_dash_protect(obj,false,(function(obj,arg,recur){
if(arguments.length < 3) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 3) {
throw Error("lambda: too many arguments");
}
return (function() {if(list_p_(obj)) {return ((function() {return (length(obj) + 1 + fold((function(el,acc){
if(arguments.length < 2) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("lambda: too many arguments");
}
return (acc + recur(el,false)); // Line <unknown undefined> Column <unknown undefined>
}),0,obj)); // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 448 Column 5
} else {return (function() {if(dict_p_(obj)) {return ((function() {return recur(dict_dash__gt_list(obj),false); // Line 448 Column 5
}))(); // Line 448 Column 5
} else {return (function() {if(vector_p_(obj)) {return ((function() {return recur(vector_dash__gt_list(obj),false); // Line 448 Column 5
}))(); // Line 448 Column 5
} else {return ((function() {return vector_dash_length(_per_inspect_dash_non_dash_sequence(obj)); // Line 448 Column 5
}))(); // Line 448 Column 5
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}),vector_dash_length("<circular>")); // Line 444 Column 3
});
var inspect = (function(obj){
if(arguments.length < 1) {
throw Error("inspect: not enough arguments")
}
var rest = vector_dash__gt_list(Array.prototype.slice.call(arguments, 1));
return ((function() {var o6767545 = (function(no_dash_newlines){
if(arguments.length < 1) {
throw Error("o6767545: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o6767545: too many arguments");
}
return _per_recur_dash_protect(obj,1,(function(obj,i,recur){
if(arguments.length < 3) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 3) {
throw Error("lambda: too many arguments");
}
var buffer = "";
var get_dash_buffer = (function() {return buffer; // Line <unknown undefined> Column <unknown undefined>
});
var disp = (function(s){
if(arguments.length < 1) {
throw Error("disp: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("disp: too many arguments");
}
buffer = (buffer + s);
});
var pad = (function(n){
if(arguments.length < 1) {
throw Error("pad: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("pad: too many arguments");
}
return vector_dash_for_dash_each((function(_){
if(arguments.length < 1) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("lambda: too many arguments");
}
return disp(" "); // Line 468 Column 2
}),make_dash_vector(n)); // Line 468 Column 2
});
return (function() {if(list_p_(obj)) {return ((function() {return ((function() {var o5835072 = (function(sp,first){
if(arguments.length < 2) {
throw Error("o5835072: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("o5835072: too many arguments");
}
disp("("); // Line 468 Column 2
for_dash_each((function(el){
if(arguments.length < 1) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("lambda: too many arguments");
}
(function() {if(not(first)) {return (function() {if((sp && not(no_dash_newlines))) {return ((function() {disp("\n"); // Line 468 Column 2
return pad(i); // Line 468 Column 2
}))(); // Line 468 Column 2
} else {return disp(" "); // Line 468 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
disp(recur(el,(i + 1))); // Line 468 Column 2
first = false;
}),obj); // Line 468 Column 2
disp(")"); // Line 468 Column 2
return get_dash_buffer(); // Line 468 Column 2
});
var o4387955 = (_per_space(obj) > 30);
var o4229010 = true;
return o5835072(o4387955,o4229010); // Line 468 Column 2
}))(); // Line 468 Column 2
}))(); // Line 468 Column 2
} else {return (function() {if(vector_p_(obj)) {return ((function() {return ((function() {var o7087018 = (function(sp,first){
if(arguments.length < 2) {
throw Error("o7087018: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("o7087018: too many arguments");
}
disp("["); // Line 468 Column 2
vector_dash_for_dash_each((function(el){
if(arguments.length < 1) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("lambda: too many arguments");
}
(function() {if(not(first)) {return (function() {if((sp && not(no_dash_newlines))) {return ((function() {disp("\n"); // Line 468 Column 2
return pad(i); // Line 468 Column 2
}))(); // Line 468 Column 2
} else {return disp(" "); // Line 468 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
disp(recur(el,(i + 1))); // Line 468 Column 2
first = false;
}),obj); // Line 468 Column 2
disp("]"); // Line 468 Column 2
return get_dash_buffer(); // Line 468 Column 2
});
var o6158937 = (_per_space(obj) > 30);
var o9586128 = true;
return o7087018(o6158937,o9586128); // Line 468 Column 2
}))(); // Line 468 Column 2
}))(); // Line 468 Column 2
} else {return (function() {if(dict_p_(obj)) {return ((function() {return ((function() {var o2058374 = (function(sp,first){
if(arguments.length < 2) {
throw Error("o2058374: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("o2058374: too many arguments");
}
disp("{"); // Line 468 Column 2
for_dash_each((function(k){
if(arguments.length < 1) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("lambda: too many arguments");
}
(function() {if(not(first)) {return (function() {if((sp && not(no_dash_newlines))) {return ((function() {disp("\n"); // Line 468 Column 2
return pad(i); // Line 468 Column 2
}))(); // Line 468 Column 2
} else {return disp(" "); // Line 468 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
disp(recur(k,i)); // Line 468 Column 2
disp(" "); // Line 468 Column 2
disp(recur(dict_dash_ref(obj,k),(i + 3 + vector_dash_length(symbol_dash__gt_string(k))))); // Line 468 Column 2
first = false;
}),keys(obj)); // Line 468 Column 2
disp("}"); // Line 468 Column 2
return get_dash_buffer(); // Line 468 Column 2
});
var o2525106 = (_per_space(obj) > 30);
var o9239235 = true;
return o2058374(o2525106,o9239235); // Line 468 Column 2
}))(); // Line 468 Column 2
}))(); // Line 468 Column 2
} else {return ((function() {return _per_inspect_dash_non_dash_sequence(obj); // Line 468 Column 2
}))(); // Line 468 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}),"<circular>"); // Line 468 Column 2
});
var o9766079 = (function() {if(null_p_(rest)) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return car(rest); // Line 468 Column 2
}})()
;
return o6767545(o9766079); // Line 468 Column 2
}))(); // Line 468 Column 2
});
var apply = (function(func,args){
if(arguments.length < 2) {
throw Error("apply: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("apply: too many arguments");
}
return func.apply(null,list_dash__gt_vector(args)); // Line 542 Column 3
});
var trampoline_dash_result_p_ = (function(value){
if(arguments.length < 1) {
throw Error("trampoline-result?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("trampoline-result?: too many arguments");
}
return (vector_p_(value) && _eq_(vector_dash_ref(value,0),"__tco_call")); // Line <unknown undefined> Column <unknown undefined>
});
var trampoline = (function(value){
if(arguments.length < 1) {
throw Error("trampoline: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("trampoline: too many arguments");
}
while(trampoline_dash_result_p_(value)) { value = value[1](); }return value; // Line <unknown undefined> Column <unknown undefined>
});
var gensym = (function() {return string_dash__gt_symbol(("o" + Math["floor"]((Math["random"]() * 10000000)))); // Line 556 Column 3
});


var fs = require("fs");var ast = require("./ast");var chars_dash_whitespace = " \n\t\r";
var chars_dash_special = "(){}[],@'`:";
var chars_dash_delim = str(chars_dash_whitespace,chars_dash_special,";");
var _in_ = (function(str,char){
if(arguments.length < 2) {
throw Error("in: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("in: too many arguments");
}
return number_p_(vector_dash_find(str,char)); // Line 9 Column 3
});
var vec_dash_getter = (function(i){
if(arguments.length < 1) {
throw Error("vec-getter: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("vec-getter: too many arguments");
}
return (function(vec){
if(arguments.length < 1) {
throw Error("lambda: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("lambda: too many arguments");
}
return vector_dash_ref(vec,i); // Line 13 Column 5
}); // Line <unknown undefined> Column <unknown undefined>
});
var read = (function(src){
if(arguments.length < 1) {
throw Error("read: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("read: too many arguments");
}
var index = 0;
var len = vector_dash_length(src);
var lineno = 0;
var colno = 0;
var current = (function() {return (function() {if(finished()) {return ""; // Line <unknown undefined> Column <unknown undefined>
} else {return vector_dash_ref(src,index); // Line 24 Column 9
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var previous = (function() {return vector_dash_ref(src,(index - 1)); // Line 27 Column 5
});
var forward = (function() {index = (index + 1);
return (function() {if(_eq__eq_(previous(),"\n")) {return ((function() {lineno = (lineno + 1);
colno = 0;
}))(); // Line 33 Column 8
} else {colno = (colno + 1);
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var back = (function() {index = (index - 1);
return (function() {if(_eq__eq_(current(),"\n")) {lineno = (lineno - 1);
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var finished = (function() {return (index >= len); // Line <unknown undefined> Column <unknown undefined>
});
var skip_dash_whitespace = (function() {return ((function() {var loop = (function() {return (function() {if(_in_(chars_dash_whitespace,current())) {return ((function() {forward(); // Line 48 Column 4
return vector("__tco_call",(function() {return loop(); // Line 48 Column 4
})); // Line 48 Column 4
}))(); // Line 48 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
return trampoline(loop()); // Line 48 Column 4
}))(); // Line 48 Column 4
});
var parse_dash_string = (function(lineno,colno){
if(arguments.length < 2) {
throw Error("parse-string: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("parse-string: too many arguments");
}
return ((function() {var loop = (function(s){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
forward(); // Line 55 Column 4
return (function() {if(_eq__eq_(current(),"\\")) {return ((function() {forward(); // Line 55 Column 4
return loop(str(s,((function() {var o8054716 = (function(c){
if(arguments.length < 1) {
throw Error("o8054716: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o8054716: too many arguments");
}
return (function() {if(_eq__eq_(c,"n")) {return ((function() {return "\n"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 55 Column 4
} else {return (function() {if(_eq__eq_(c,"t")) {return ((function() {return "\t"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 55 Column 4
} else {return (function() {if(_eq__eq_(c,"r")) {return ((function() {return "\r"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 55 Column 4
} else {return ((function() {return c; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 55 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o1702951 = current();
return o8054716(o1702951); // Line 55 Column 4
}))())); // Line 55 Column 4
}))(); // Line 55 Column 4
} else {return (function() {if(_eq__eq_(current(),"\"")) {return ((function() {return make_dash_token("\uFDD1STRING",s,lineno,colno); // Line 55 Column 4
}))(); // Line 55 Column 4
} else {return ((function() {return loop(str(s,current())); // Line 55 Column 4
}))(); // Line 55 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o4788226 = "";
return loop(o4788226); // Line 55 Column 4
}))(); // Line 55 Column 4
});
var parse_dash_token = (function(s,lineno,colno){
if(arguments.length < 3) {
throw Error("parse-token: not enough arguments")
}
else if(arguments.length > 3) {
throw Error("parse-token: too many arguments");
}
return (function() {if(s["match"](RegExp("^[-+]?[0-9]+$"))) {return ((function() {return make_dash_token("\uFDD1INTEGER",s,lineno,colno); // Line 71 Column 4
}))(); // Line 71 Column 4
} else {return (function() {if(s["match"](RegExp("^[-+]?[0-9]+\\.[0-9]*$"))) {return ((function() {return make_dash_token("\uFDD1FLOAT",s,lineno,colno); // Line 71 Column 4
}))(); // Line 71 Column 4
} else {return (function() {if(s["match"](RegExp("^[-+]?0x"))) {return ((function() {return ((function() {var o2017196 = (function(m,prefix){
if(arguments.length < 2) {
throw Error("o2017196: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("o2017196: too many arguments");
}
return (function() {if(m) {return make_dash_token("\uFDD1HEX",str(prefix,vector_dash_ref(m,1)),lineno,colno); // Line 71 Column 4
} else {throw(str("invalid hex value: ",s)); // Line 71 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o8896866 = s["match"](RegExp("0x([0-9a-fA-F]+)$"));
var o4795235 = (function() {if(_eq__eq_(vector_dash_ref(s,0),"-")) {return "-"; // Line <unknown undefined> Column <unknown undefined>
} else {return ""; // Line <unknown undefined> Column <unknown undefined>
}})()
;
return o2017196(o8896866,o4795235); // Line 71 Column 4
}))(); // Line 71 Column 4
}))(); // Line 71 Column 4
} else {return (function() {if((_eq__eq_(s,"#f") || _eq__eq_(s,"#t"))) {return ((function() {return make_dash_token("\uFDD1BOOLEAN",s,lineno,colno); // Line 71 Column 4
}))(); // Line 71 Column 4
} else {return ((function() {return make_dash_token("\uFDD1SYMBOL",s,lineno,colno); // Line 71 Column 4
}))(); // Line 71 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var parse_dash_comment = (function(lineno,colno){
if(arguments.length < 2) {
throw Error("parse-comment: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("parse-comment: too many arguments");
}
return ((function() {var loop = (function(s){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
forward(); // Line 84 Column 4
return (function() {if((finished() || _eq__eq_(current(),"\n"))) {return make_dash_token("\uFDD1COMMENT",s,lineno,colno); // Line 84 Column 4
} else {return vector("__tco_call",(function() {return loop(str(s,current())); // Line 84 Column 4
})); // Line 84 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o5496894 = "";
return trampoline(loop(o5496894)); // Line 84 Column 4
}))(); // Line 84 Column 4
});
var unique_dash_obj = list(true);
var make_dash_token = (function(type,data,lineno,colno){
if(arguments.length < 4) {
throw Error("make-token: not enough arguments")
}
else if(arguments.length > 4) {
throw Error("make-token: too many arguments");
}
return vector(unique_dash_obj,type,data,lineno,colno); // Line 98 Column 4
});
var token_dash_type = vec_dash_getter(1);
var token_dash_data = vec_dash_getter(2);
var token_dash_lineno = vec_dash_getter(3);
var token_dash_colno = vec_dash_getter(4);
var token_p_ = (function(tok){
if(arguments.length < 1) {
throw Error("token?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("token?: too many arguments");
}
return (vector_p_(tok) && _eq__eq_(vector_dash_ref(tok,0),unique_dash_obj)); // Line <unknown undefined> Column <unknown undefined>
});
var get_dash_token = (function() {skip_dash_whitespace(); // Line 110 Column 5
return ((function() {var o9842119 = (function(c,lineno,colno){
if(arguments.length < 3) {
throw Error("o9842119: not enough arguments")
}
else if(arguments.length > 3) {
throw Error("o9842119: too many arguments");
}
return (function() {if(_in_(chars_dash_special,c)) {return ((function() {forward(); // Line 111 Column 4
return make_dash_token("\uFDD1SPECIAL",c,lineno,colno); // Line 111 Column 4
}))(); // Line 111 Column 4
} else {return (function() {if(_eq__eq_(c,"\"")) {return ((function() {return ((function() {var o2960522 = (function(s){
if(arguments.length < 1) {
throw Error("o2960522: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o2960522: too many arguments");
}
forward(); // Line 111 Column 4
return s; // Line <unknown undefined> Column <unknown undefined>
});
var o6668103 = parse_dash_string(lineno,colno);
return o2960522(o6668103); // Line 111 Column 4
}))(); // Line 111 Column 4
}))(); // Line 111 Column 4
} else {return (function() {if(_eq__eq_(c,";")) {return ((function() {return parse_dash_comment(lineno,colno); // Line 111 Column 4
}))(); // Line 111 Column 4
} else {return (function() {if(_eq__eq_(c,"")) {return ((function() {return false; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 111 Column 4
} else {return (function() {if(finished()) {return ((function() {return false; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 111 Column 4
} else {return ((function() {return ((function() {var loop = (function(s){
if(arguments.length < 1) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("loop: too many arguments");
}
return (function() {if((_in_(chars_dash_delim,current()) || finished())) {return parse_dash_token(s,lineno,colno); // Line 111 Column 4
} else {return ((function() {forward(); // Line 111 Column 4
return vector("__tco_call",(function() {return loop(str(s,previous())); // Line 111 Column 4
})); // Line 111 Column 4
}))(); // Line 111 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o3484540 = "";
return trampoline(loop(o3484540)); // Line 111 Column 4
}))(); // Line 111 Column 4
}))(); // Line 111 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o7749916 = current();
var o6393893 = lineno;
var o2961364 = colno;
return o9842119(o7749916,o6393893,o2961364); // Line 111 Column 4
}))(); // Line 111 Column 4
});
var token_dash__gt_exp = (function(token){
if(arguments.length < 1) {
throw Error("token->exp: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("token->exp: too many arguments");
}
return ((function() {var o3906417 = (function(type,data){
if(arguments.length < 2) {
throw Error("o3906417: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("o3906417: too many arguments");
}
return (function() {if(_eq__eq_(type,"\uFDD1STRING")) {return ((function() {return data; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 138 Column 4
} else {return (function() {if(_eq__eq_(type,"\uFDD1SYMBOL")) {return ((function() {return string_dash__gt_symbol(data); // Line 138 Column 4
}))(); // Line 138 Column 4
} else {return (function() {if(_eq__eq_(type,"\uFDD1BOOLEAN")) {return ((function() {return (function() {if(_eq__eq_(data,"#f")) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return true; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 138 Column 4
} else {return (function() {if(_eq__eq_(type,"\uFDD1INTEGER")) {return ((function() {return parseInt(data); // Line 138 Column 4
}))(); // Line 138 Column 4
} else {return (function() {if(_eq__eq_(type,"\uFDD1FLOAT")) {return ((function() {return parseFloat(data); // Line 138 Column 4
}))(); // Line 138 Column 4
} else {return (function() {if(_eq__eq_(type,"\uFDD1HEX")) {return ((function() {return parseInt(data,16); // Line 138 Column 4
}))(); // Line 138 Column 4
} else {return ((function() {throw(str("cannot convert token to exp: ",token)); // Line 138 Column 4
}))(); // Line 138 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o9469183 = token_dash_type(token);
var o7731237 = token_dash_data(token);
return o3906417(o9469183,o7731237); // Line 138 Column 4
}))(); // Line 138 Column 4
});
var special_p_ = (function(t,chars){
if(arguments.length < 2) {
throw Error("special?: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("special?: too many arguments");
}
return (token_p_(t) && _eq__eq_(token_dash_type(t),"\uFDD1SPECIAL") && _in_(chars,token_dash_data(t))); // Line <unknown undefined> Column <unknown undefined>
});
var compound_dash_start_p_ = (function(t){
if(arguments.length < 1) {
throw Error("compound-start?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("compound-start?: too many arguments");
}
return (special_p_(t,"(") || special_p_(t,"[") || special_p_(t,"{")); // Line <unknown undefined> Column <unknown undefined>
});
var compound_dash_end_p_ = (function(t){
if(arguments.length < 1) {
throw Error("compound-end?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("compound-end?: too many arguments");
}
return (special_p_(t,")") || special_p_(t,"]") || special_p_(t,"}")); // Line <unknown undefined> Column <unknown undefined>
});
var end_p_ = (function(t){
if(arguments.length < 1) {
throw Error("end?: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("end?: too many arguments");
}
return (token_p_(t) && _eq__eq_(token_dash_type(t),"\uFDD1END")); // Line <unknown undefined> Column <unknown undefined>
});
var read_dash_exp = (function() {return ((function() {var o9154243 = (function(token){
if(arguments.length < 1) {
throw Error("o9154243: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o9154243: too many arguments");
}
return (function() {if(not(token)) {return ((function() {return make_dash_token("\uFDD1END",false,false,false); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if(compound_dash_end_p_(token)) {return ((function() {return token; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 170 Column 4
} else {return (function() {if(compound_dash_start_p_(token)) {return ((function() {return ((function() {var loop = (function(lst,exp){
if(arguments.length < 2) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("loop: too many arguments");
}
return (function() {if((end_p_(exp) || compound_dash_end_p_(exp))) {return ((function() {var in_dash_list_p_ = special_p_(token,"(");
var in_dash_vector_p_ = special_p_(token,"[");
var in_dash_dict_p_ = special_p_(token,"{");
return (function() {if((in_dash_list_p_ && special_p_(exp,")"))) {return ((function() {return ast["make-node"]("\uFDD1LIST",reverse(lst),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if((in_dash_vector_p_ && special_p_(exp,"]"))) {return ((function() {return ast["make-node"]("\uFDD1VECTOR",reverse(lst),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if((in_dash_dict_p_ && special_p_(exp,"}"))) {return ((function() {return ast["make-node"]("\uFDD1DICT",reverse(lst),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return ((function() {throw(str("unterminated ",(function() {if(list_p_) {return ((function() {return "list"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 170 Column 4
} else {return (function() {if(vector_p_) {return ((function() {return "vector"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 170 Column 4
} else {return (function() {if(dict_p_) {return ((function() {return "dict"; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 170 Column 4
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
)); // Line 170 Column 4
}))(); // Line 170 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 170 Column 4
} else {return ((function() {return vector("__tco_call",(function() {return loop(cons(exp,lst),read_dash_exp()); // Line 170 Column 4
})); // Line 170 Column 4
}))(); // Line 170 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o655112 = _emptylst;
var o3240186 = read_dash_exp();
return trampoline(loop(o655112,o3240186)); // Line 170 Column 4
}))(); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if(special_p_(token,"'")) {return ((function() {return ast["make-node"]("\uFDD1LIST",list(ast["make-node"]("\uFDD1ATOM","\uFDD1quote",token_dash_lineno(token),token_dash_colno(token)),read_dash_exp()),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if(special_p_(token,":")) {return ((function() {return ((function() {var o8957172 = (function(e){
if(arguments.length < 1) {
throw Error("o8957172: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o8957172: too many arguments");
}
(function() {if((not(ast["atom?"](e)) || not(symbol_p_(ast["node-data"](e))))) {throw(str("invalid key expression: ",ast["node-data"](e))); // Line 170 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
return ast["make-node"]("\uFDD1ATOM",symbol_dash__gt_key(ast["node-data"](e)),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
});
var o4399003 = read_dash_exp();
return o8957172(o4399003); // Line 170 Column 4
}))(); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if(special_p_(token,"`")) {return ((function() {return ast["make-node"]("\uFDD1LIST",list(ast["make-node"]("\uFDD1ATOM","\uFDD1quasiquote",token_dash_lineno(token),token_dash_colno(token)),read_dash_exp()),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return (function() {if(special_p_(token,",")) {return ((function() {return ((function() {var o8640840 = (function(next){
if(arguments.length < 1) {
throw Error("o8640840: not enough arguments")
}
else if(arguments.length > 1) {
throw Error("o8640840: too many arguments");
}
return (function() {if(_eq__eq_(next,"@")) {return ((function() {forward(); // Line 170 Column 4
return ast["make-node"]("\uFDD1LIST",list(ast["make-node"]("\uFDD1ATOM","\uFDD1unquote-splicing",token_dash_lineno(token),token_dash_colno(token)),read_dash_exp()),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return ((function() {return ast["make-node"]("\uFDD1LIST",list(ast["make-node"]("\uFDD1ATOM","\uFDD1unquote",token_dash_lineno(token),token_dash_colno(token)),read_dash_exp()),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}))(); // Line 170 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o1915832 = current();
return o8640840(o1915832); // Line 170 Column 4
}))(); // Line 170 Column 4
}))(); // Line 170 Column 4
} else {return ((function() {return (function() {if(_eq__eq_(token_dash_type(token),"\uFDD1COMMENT")) {return read_dash_exp(); // Line 170 Column 4
} else {return ast["make-node"]("\uFDD1ATOM",token_dash__gt_exp(token),token_dash_lineno(token),token_dash_colno(token)); // Line 170 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 170 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o1084988 = get_dash_token();
return o9154243(o1084988); // Line 170 Column 4
}))(); // Line 170 Column 4
});
return ((function() {var loop = (function(e_star_,e){
if(arguments.length < 2) {
throw Error("loop: not enough arguments")
}
else if(arguments.length > 2) {
throw Error("loop: too many arguments");
}
return (function() {if(end_p_(e)) {return (function() {if(_eq__eq_(length(e_star_),1)) {return car(e_star_); // Line 272 Column 2
} else {return ast["make-node"]("\uFDD1LIST",cons(ast["make-node"]("\uFDD1ATOM","\uFDD1begin",0,1),reverse(e_star_)),0,0); // Line 272 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
} else {return vector("__tco_call",(function() {return loop(cons(e,e_star_),read_dash_exp()); // Line 272 Column 2
})); // Line 272 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o9682368 = _emptylst;
var o3739166 = read_dash_exp();
return trampoline(loop(o9682368,o3739166)); // Line 272 Column 2
}))(); // Line 272 Column 2
});
module["exports"] = dict("\uFDD0read",read);

