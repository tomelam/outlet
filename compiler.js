var util = require("util");var type = (function(obj){
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
return _eq__eq_(typeof obj,"number"); // Line 16 Column 3
});
var string_p_ = (function(obj){
return (_eq__eq_(typeof obj,"string") && not(_eq__eq_(obj[0],"\uFDD0")) && not(_eq__eq_(obj[0],"\uFDD1"))); // Line <unknown undefined> Column <unknown undefined>
});
var symbol_p_ = (function(obj){
return ((_eq__eq_(typeof obj,"string") && _eq__eq_(obj[0],"\uFDD1"))); // Line <unknown undefined> Column <unknown undefined>
});
var key_p_ = (function(obj){
return (_eq__eq_(typeof obj,"string") && _eq__eq_(obj[0],"\uFDD0")); // Line <unknown undefined> Column <unknown undefined>
});
var boolean_p_ = (function(obj){
return (eq_p_(obj,true) || eq_p_(obj,false)); // Line <unknown undefined> Column <unknown undefined>
});
var null_p_ = (function(obj){
return (!!obj && not(eq_p_(obj["length"],undefined)) && eq_p_(obj["length"],1) && eq_p_(vector_dash_ref(obj,0),null)); // Line <unknown undefined> Column <unknown undefined>
});
var list_p_ = (function(obj){
return (!!obj && not(eq_p_(obj["length"],undefined)) && not(eq_p_(obj["list"],undefined))); // Line <unknown undefined> Column <unknown undefined>
});
var vector_p_ = (function(obj){
return (not(list_p_(obj)) && not(null_p_(obj)) && !!obj && eq_p_(typeof obj,"object") && not(eq_p_(obj["length"],undefined))); // Line <unknown undefined> Column <unknown undefined>
});
var dict_p_ = (function(obj){
return (not(symbol_p_(obj)) && !!obj && eq_p_(typeof obj,"object") && eq_p_(obj["length"],undefined)); // Line <unknown undefined> Column <unknown undefined>
});
var function_p_ = (function(obj){
return eq_p_(typeof obj,"function"); // Line 60 Column 3
});
var literal_p_ = (function(x){
return (key_p_(x) || number_p_(x) || string_p_(x) || boolean_p_(x) || null_p_(x)); // Line <unknown undefined> Column <unknown undefined>
});
var str = (function() {
var args = vector_dash__gt_list(Array.prototype.slice.call(arguments));
return fold((function(el,acc){
return (acc + (function() {if(string_p_(el)) {return el; // Line <unknown undefined> Column <unknown undefined>
} else {return inspect(el); // Line 75 Column 36
}})()
); // Line <unknown undefined> Column <unknown undefined>
}),"",args); // Line 73 Column 5
});
var symbol_dash__gt_key = (function(sym){
return ("\uFDD0" + sym["substring"](1)); // Line <unknown undefined> Column <unknown undefined>
});
var key_dash__gt_symbol = (function(sym){
return ("\uFDD1" + sym["substring"](1)); // Line <unknown undefined> Column <unknown undefined>
});
var string_dash__gt_key = (function(str){
return ("\uFDD0" + str); // Line <unknown undefined> Column <unknown undefined>
});
var key_dash__gt_string = (function(key){
return key["substring"](1); // Line 89 Column 3
});
var string_dash__gt_symbol = (function(str){
return ("\uFDD1" + str); // Line <unknown undefined> Column <unknown undefined>
});
var symbol_dash__gt_string = (function(sym){
return sym["substring"](1); // Line 95 Column 3
});
var _emptylst = [null];
var list = (function() {
var args = vector_dash__gt_list(Array.prototype.slice.call(arguments));
return args; // Line <unknown undefined> Column <unknown undefined>
});
var cons = (function(obj,lst){
return ((function() {var o1 = (function(res){
res.list = true;return res; // Line <unknown undefined> Column <unknown undefined>
});
var o2 = [obj, lst];
return o1(o2); // Line 106 Column 2
}))(); // Line 106 Column 2
});
var car = (function(lst){
return lst[0]});
var cdr = (function(lst){
return lst[1]});
var cadr = (function(lst){
return car(cdr(lst)); // Line 116 Column 20
});
var cddr = (function(lst){
return cdr(cdr(lst)); // Line 117 Column 20
});
var cdar = (function(lst){
return cdr(car(lst)); // Line 118 Column 20
});
var caddr = (function(lst){
return car(cdr(cdr(lst))); // Line 119 Column 21
});
var cdddr = (function(lst){
return cdr(cdr(cdr(lst))); // Line 120 Column 21
});
var cadar = (function(lst){
return car(cdr(car(lst))); // Line 121 Column 21
});
var cddar = (function(lst){
return cdr(cdr(car(lst))); // Line 122 Column 21
});
var caadr = (function(lst){
return car(car(cdr(lst))); // Line 123 Column 21
});
var cdadr = (function(lst){
return cdr(car(cdr(lst))); // Line 124 Column 21
});
var list_dash_ref = (function(lst,i){
return ((function() {var loop = (function(lst,i){
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
var o3 = lst;
var o4 = i;
return loop(o3,o4); // Line 127 Column 2
}))(); // Line 127 Column 2
});
var length = (function(lst){
return fold((function(el,acc){
return (acc + 1); // Line <unknown undefined> Column <unknown undefined>
}),0,lst); // Line 135 Column 3
});
var list_dash_append = (function(){
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
return ((function() {var loop = (function(lst){
return (function() {if(null_p_(lst)) {return lst2; // Line <unknown undefined> Column <unknown undefined>
} else {return cons(car(lst),loop(cdr(lst))); // Line 149 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o5 = lst1;
return loop(o5); // Line 149 Column 2
}))(); // Line 149 Column 2
});
var list_dash_find = (function(lst,val){
var rst = vector_dash__gt_list(Array.prototype.slice.call(arguments, 2));
return ((function() {var o6 = (function(access){
return ((function() {var loop = (function(lst){
return (function() {if(null_p_(lst)) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return (function() {if(_eq__eq_(access(car(lst)),val)) {return lst; // Line <unknown undefined> Column <unknown undefined>
} else {return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 156 Column 2
})); // Line 156 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o8 = lst;
return trampoline(loop(o8)); // Line 156 Column 2
}))(); // Line 156 Column 2
});
var o7 = (function() {if(null_p_(rst)) {return (function(x){
return x; // Line <unknown undefined> Column <unknown undefined>
}); // Line <unknown undefined> Column <unknown undefined>
} else {return car(rst); // Line 156 Column 2
}})()
;
return o6(o7); // Line 156 Column 2
}))(); // Line 156 Column 2
});
var map = (function(func,lst){
return (function() {if(null_p_(lst)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return cons(func(car(lst)),map(func,cdr(lst))); // Line 167 Column 7
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var for_dash_each = (function(func,lst){
return ((function() {var loop = (function(lst){
return (function() {if(not(null_p_(lst))) {return ((function() {func(car(lst)); // Line 171 Column 2
return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 171 Column 2
})); // Line 171 Column 2
}))(); // Line 171 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o9 = lst;
return trampoline(loop(o9)); // Line 171 Column 2
}))(); // Line 171 Column 2
});
var fold = (function(func,acc,lst){
return (function() {if(null_p_(lst)) {return acc; // Line <unknown undefined> Column <unknown undefined>
} else {return fold(func,func(car(lst),acc),cdr(lst)); // Line 180 Column 7
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var reverse = (function(lst){
return (function() {if(null_p_(lst)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return list_dash_append(reverse(cdr(lst)),list(car(lst))); // Line 187 Column 7
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var vector_dash__gt_list = (function(vec){
return ((function() {var loop = (function(i){
return (function() {if((i < vec.length)) {return cons(vector_dash_ref(vec,i),loop((i + 1))); // Line 193 Column 2
} else {return _emptylst}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o10 = 0;
return loop(o10); // Line 193 Column 2
}))(); // Line 193 Column 2
});
var make_dash_vector = (function(count){
var val = arguments[1] || false;
return ((function() {var o11 = (function(v){
return (function() {if(val) {return ((function() {var loop = (function(i){
return (function() {if((i < count)) {return ((function() {vector_dash_put_excl_(v,i,val); // Line 202 Column 2
return vector("__tco_call",(function() {return loop((i + 1)); // Line 202 Column 2
})); // Line 202 Column 2
}))(); // Line 202 Column 2
} else {return v; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o13 = 0;
return trampoline(loop(o13)); // Line 202 Column 2
}))(); // Line 202 Column 2
} else {return v; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o12 = new Array(count);
return o11(o12); // Line 202 Column 2
}))(); // Line 202 Column 2
});
var vector = (function() {return Array.prototype.slice.call(arguments)});
var vector_dash_ref = (function(vec,i){
return vec[i]});
var vector_dash_put_excl_ = (function(vec,i,obj){
return vec[i] = obj});
var vector_dash_concat = (function(){
var vecs = vector_dash__gt_list(Array.prototype.slice.call(arguments, 0));
return ((function() {var loop = (function(lst,res){
return (function() {if(null_p_(lst)) {return res; // Line <unknown undefined> Column <unknown undefined>
} else {return vector("__tco_call",(function() {return loop(cdr(lst),res["concat"](car(lst))); // Line 222 Column 2
})); // Line 222 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o14 = cdr(vecs);
var o15 = car(vecs);
return trampoline(loop(o14,o15)); // Line 222 Column 2
}))(); // Line 222 Column 2
});
var vector_dash_slice = (function(vec,start){
var end = arguments[2] || false;
return vec.slice(start, end || undefined)});
var vector_dash_push_excl_ = (function(vec,obj){
return vec.push(obj)});
var vector_dash_find = (function(vec,val){
return ((function() {var loop = (function(i){
return (function() {if((i < vec.length)) {return (function() {if(eq_p_(vector_dash_ref(vec,i),val)) {return i; // Line <unknown undefined> Column <unknown undefined>
} else {return vector("__tco_call",(function() {return loop((i + 1)); // Line 236 Column 2
})); // Line 236 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o16 = 0;
return trampoline(loop(o16)); // Line 236 Column 2
}))(); // Line 236 Column 2
});
var vector_dash_length = (function(vec){
return vec["length"]; // Line <unknown undefined> Column <unknown undefined>
});
var list_dash__gt_vector = (function(lst){
var res = [];
for_dash_each((function(el){
return res["push"](el); // Line 248 Column 15
}),lst); // Line 247 Column 3
return res; // Line <unknown undefined> Column <unknown undefined>
});
var vector_dash_map = (function(func,vec){
var res = [];
((function() {var loop = (function(i){
return (function() {if((i < vec["length"])) {return ((function() {res["push"](func(vector_dash_ref(vec,i))); // Line 254 Column 2
return vector("__tco_call",(function() {return loop((i + 1)); // Line 254 Column 2
})); // Line 254 Column 2
}))(); // Line 254 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o17 = 0;
return trampoline(loop(o17)); // Line 254 Column 2
}))(); // Line 254 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var vector_dash_for_dash_each = (function(func,vec){
return ((function() {var loop = (function(i){
return (function() {if((i < vec["length"])) {return ((function() {func(vector_dash_ref(vec,i)); // Line 262 Column 2
return vector("__tco_call",(function() {return loop((i + 1)); // Line 262 Column 2
})); // Line 262 Column 2
}))(); // Line 262 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o18 = 0;
return trampoline(loop(o18)); // Line 262 Column 2
}))(); // Line 262 Column 2
});
var vector_dash_fold = (function(func,acc,vec){
return ((function() {var loop = (function(i,acc){
return (function() {if((i < vector_dash_length(vec))) {return vector("__tco_call",(function() {return loop((i + 1),func(vector_dash_ref(vec,i),acc)); // Line 269 Column 2
})); // Line 269 Column 2
} else {return acc; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o19 = 0;
var o20 = acc;
return trampoline(loop(o19,o20)); // Line 269 Column 2
}))(); // Line 269 Column 2
});
var dict = (function() {
var args = vector_dash__gt_list(Array.prototype.slice.call(arguments));
var res = {};
((function() {var loop = (function(lst){
return (function() {if(not(null_p_(lst))) {return ((function() {var o22 = (function(key,val){
dict_dash_put_excl_(res,key,val); // Line 281 Column 4
return vector("__tco_call",(function() {return loop(cddr(lst)); // Line 281 Column 4
})); // Line 281 Column 4
});
var o23 = car(lst);
var o24 = cadr(lst);
return o22(o23,o24); // Line 281 Column 4
}))(); // Line 281 Column 4
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o21 = args;
return trampoline(loop(o21)); // Line 281 Column 4
}))(); // Line 281 Column 4
return res; // Line <unknown undefined> Column <unknown undefined>
});
var dict_dash_put_excl_ = (function(dct,k,v){
return dct[k.substring(1)] = v});
var dict_dash_ref = (function(dct,k){
return dct[k.substring(1)]});
var dict_dash_map = (function(func,dct){
var res = dict();
((function() {var loop = (function(lst){
return (function() {if(not(null_p_(lst))) {return ((function() {var o26 = (function(k){
dict_dash_put_excl_(res,k,func(dict_dash_ref(dct,k))); // Line 297 Column 2
return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 297 Column 2
})); // Line 297 Column 2
});
var o27 = car(lst);
return o26(o27); // Line 297 Column 2
}))(); // Line 297 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o25 = keys(dct);
return trampoline(loop(o25)); // Line 297 Column 2
}))(); // Line 297 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var dict_dash_merge = (function(){
var dcts = vector_dash__gt_list(Array.prototype.slice.call(arguments, 0));
return ((function() {var o28 = (function(res){
for_dash_each((function(dct){
return for_dash_each((function(k){
return dict_dash_put_excl_(res,k,dict_dash_ref(dct,k)); // Line 306 Column 2
}),keys(dct)); // Line 306 Column 2
}),dcts); // Line 306 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var o29 = dict();
return o28(o29); // Line 306 Column 2
}))(); // Line 306 Column 2
});
var dict_dash__gt_vector = (function(dct){
var res = vector();
((function() {var loop = (function(lst){
return (function() {if(not(null_p_(lst))) {return ((function() {vector_dash_push_excl_(res,car(lst)); // Line 316 Column 2
vector_dash_push_excl_(res,dict_dash_ref(dct,car(lst))); // Line 316 Column 2
return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 316 Column 2
})); // Line 316 Column 2
}))(); // Line 316 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o30 = keys(dct);
return trampoline(loop(o30)); // Line 316 Column 2
}))(); // Line 316 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var dict_dash__gt_list = (function(dct){
return vector_dash__gt_list(dict_dash__gt_vector(dct)); // Line 325 Column 3
});
var keys = (function(dct){
return ((function() {var o31 = (function(res){
for(var k in dct) {
       res = cons(string_dash__gt_key(k), res);
    }return res; // Line <unknown undefined> Column <unknown undefined>
});
var o32 = _emptylst;
return o31(o32); // Line 328 Column 2
}))(); // Line 328 Column 2
});
var vals = (function(dct){
return map((function(k){
return dict_dash_ref(dct,k); // Line 335 Column 20
}),keys(dct)); // Line 335 Column 3
});
var zip = (function(keys,vals){
var res = dict();
((function() {var loop = (function(ks,vs){
return (function() {if(not(null_p_(ks))) {return ((function() {dict_dash_put_excl_(res,car(ks),car(vs)); // Line 340 Column 2
return vector("__tco_call",(function() {return loop(cdr(ks),cdr(vs)); // Line 340 Column 2
})); // Line 340 Column 2
}))(); // Line 340 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o33 = keys;
var o34 = vals;
return trampoline(loop(o33,o34)); // Line 340 Column 2
}))(); // Line 340 Column 2
return res; // Line <unknown undefined> Column <unknown undefined>
});
var not = (function(obj){
return (typeof obj !== 'number' && !obj); // Line <unknown undefined> Column <unknown undefined>
});
var _eq__eq_ = (function(obj1,obj2){
return obj1 === obj2});
var _eq_ = (function(obj1,obj2){
return (function() {if((list_p_(obj1) && list_p_(obj2))) {return ((function() {return ((function() {var loop = (function(lst1,lst2){
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
var o35 = obj1;
var o36 = obj2;
return loop(o35,o36); // Line 360 Column 2
}))(); // Line 360 Column 2
}))(); // Line 360 Column 2
} else {return (function() {if((vector_p_(obj1) && vector_p_(obj2))) {return ((function() {return (function() {if(not(_eq_(obj1["length"],obj2["length"]))) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return ((function() {var loop = (function(i){
return (function() {if((i < obj1["length"])) {return (function() {if(_eq_(vector_dash_ref(obj1,i),vector_dash_ref(obj2,i))) {return vector("__tco_call",(function() {return loop((i + 1)); // Line 360 Column 2
})); // Line 360 Column 2
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
} else {return true; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o37 = 0;
return trampoline(loop(o37)); // Line 360 Column 2
}))(); // Line 360 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 360 Column 2
} else {return (function() {if((dict_p_(obj1) && dict_p_(obj2))) {return ((function() {return ((function() {var o38 = (function(keys1,keys2){
return (eq_p_(length(keys1),length(keys2)) && ((function() {var loop = (function(lst){
return (function() {if(null_p_(lst)) {return true; // Line <unknown undefined> Column <unknown undefined>
} else {return (function() {if(equal_p_(dict_dash_ref(obj1,car(lst)),dict_dash_ref(obj2,car(lst)))) {return vector("__tco_call",(function() {return loop(cdr(lst)); // Line 360 Column 2
})); // Line 360 Column 2
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o41 = keys1;
return trampoline(loop(o41)); // Line 360 Column 2
}))()); // Line <unknown undefined> Column <unknown undefined>
});
var o39 = keys(obj1);
var o40 = keys(obj2);
return o38(o39,o40); // Line 360 Column 2
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
return util["print"](msg); // Line 408 Column 3
});
var println = (function(msg){
return util["puts"](msg); // Line 411 Column 3
});
var pp = (function(obj){
return println(inspect(obj)); // Line 414 Column 3
});
var _per_inspect_dash_non_dash_sequence = (function(obj){
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
var rest = vector_dash__gt_list(Array.prototype.slice.call(arguments, 4));
return ((function() {var o42 = (function(parents){
return (function() {if(list_dash_find(parents,obj)) {return halt; // Line <unknown undefined> Column <unknown undefined>
} else {return func(obj,arg,(function(el,arg){
return _per_recur_dash_protect(el,arg,func,halt,cons(obj,parents)); // Line 435 Column 2
})); // Line 435 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o43 = (function() {if(null_p_(rest)) {return _emptylst; // Line <unknown undefined> Column <unknown undefined>
} else {return car(rest); // Line 435 Column 2
}})()
;
return o42(o43); // Line 435 Column 2
}))(); // Line 435 Column 2
});
var _per_space = (function(obj){
return _per_recur_dash_protect(obj,false,(function(obj,arg,recur){
return (function() {if(list_p_(obj)) {return ((function() {return (length(obj) + 1 + fold((function(el,acc){
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
var rest = vector_dash__gt_list(Array.prototype.slice.call(arguments, 1));
return ((function() {var o44 = (function(no_dash_newlines){
return _per_recur_dash_protect(obj,1,(function(obj,i,recur){
var buffer = "";
var get_dash_buffer = (function() {return buffer; // Line <unknown undefined> Column <unknown undefined>
});
var disp = (function(s){
buffer = (buffer + s);
});
var pad = (function(n){
return vector_dash_for_dash_each((function(_){
return disp(" "); // Line 468 Column 2
}),make_dash_vector(n)); // Line 468 Column 2
});
return (function() {if(list_p_(obj)) {return ((function() {return ((function() {var o46 = (function(sp,first){
disp("("); // Line 468 Column 2
for_dash_each((function(el){
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
var o47 = (_per_space(obj) > 30);
var o48 = true;
return o46(o47,o48); // Line 468 Column 2
}))(); // Line 468 Column 2
}))(); // Line 468 Column 2
} else {return (function() {if(vector_p_(obj)) {return ((function() {return ((function() {var o49 = (function(sp,first){
disp("["); // Line 468 Column 2
vector_dash_for_dash_each((function(el){
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
var o50 = (_per_space(obj) > 30);
var o51 = true;
return o49(o50,o51); // Line 468 Column 2
}))(); // Line 468 Column 2
}))(); // Line 468 Column 2
} else {return (function() {if(dict_p_(obj)) {return ((function() {return ((function() {var o52 = (function(sp,first){
disp("{"); // Line 468 Column 2
for_dash_each((function(k){
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
var o53 = (_per_space(obj) > 30);
var o54 = true;
return o52(o53,o54); // Line 468 Column 2
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
var o45 = (function() {if(null_p_(rest)) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return car(rest); // Line 468 Column 2
}})()
;
return o44(o45); // Line 468 Column 2
}))(); // Line 468 Column 2
});
var apply = (function(func,args){
return func.apply(null,list_dash__gt_vector(args)); // Line 542 Column 3
});
var trampoline_dash_result_p_ = (function(value){
return (vector_p_(value) && _eq_(vector_dash_ref(value,0),"__tco_call")); // Line <unknown undefined> Column <unknown undefined>
});
var trampoline = (function(value){
while(trampoline_dash_result_p_(value)) { value = value[1](); }return value; // Line <unknown undefined> Column <unknown undefined>
});
var _per_gensym_dash_base = 0;
var gensym_dash_fresh = (function() {_per_gensym_dash_base = 10000;
});
var gensym = (function() {_per_gensym_dash_base = (_per_gensym_dash_base + 1);
return string_dash__gt_symbol(("o" + _per_gensym_dash_base)); // Line 563 Column 3
});


var reader = require("./reader");var ast = require("./ast");var js = require("./backends/js");var fs = require("fs");var self_dash_evaluating_p_ = (function(exp){
return (number_p_(exp) || string_p_(exp) || boolean_p_(exp) || null_p_(exp) || key_p_(exp)); // Line <unknown undefined> Column <unknown undefined>
});
var alternating_dash_map = (function(func,lst){
var former_p_ = vector_dash__gt_list(Array.prototype.slice.call(arguments, 2));
return ((function() {var loop = (function(lst,acc){
return (function() {if((null_p_(lst) || null_p_(cdr(lst)))) {return acc; // Line <unknown undefined> Column <unknown undefined>
} else {return vector("__tco_call",(function() {return loop(cddr(lst),cons((function() {if(not(null_p_(former_p_))) {return func(car(lst)); // Line 16 Column 2
} else {return car(lst); // Line 16 Column 2
}})()
,cons((function() {if(null_p_(former_p_)) {return func(cadr(lst)); // Line 16 Column 2
} else {return cadr(lst); // Line 16 Column 2
}})()
,acc))); // Line 16 Column 2
})); // Line 16 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o1 = lst;
var o2 = _emptylst;
return trampoline(loop(o1,o2)); // Line 16 Column 2
}))(); // Line 16 Column 2
});
var opt = (function(arg,def){
return (function() {if(null_p_(arg)) {return def; // Line <unknown undefined> Column <unknown undefined>
} else {return car(arg); // Line 31 Column 23
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var assert = (function(cnd,msg){
return (function() {if(not(cnd)) {throw(msg); // Line 35 Column 7
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var expand = (function(node){
return (function() {if(ast["atom?"](node)) {return ((function() {return node; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 40 Column 2
} else {return (function() {if(ast["vector?"](node)) {return ((function() {return ast["copy-node"](node,map((function(e){
return expand(e); // Line 40 Column 2
}),ast["node-data"](node))); // Line 40 Column 2
}))(); // Line 40 Column 2
} else {return (function() {if(ast["dict?"](node)) {return ((function() {return ast["copy-node"](node,map((function(e){
return expand(e); // Line 40 Column 2
}),ast["node-data"](node))); // Line 40 Column 2
}))(); // Line 40 Column 2
} else {return (function() {if((_eq__eq_(ast["first*"](node),"\uFDD1quote") || _eq__eq_(ast["first*"](node),"\uFDD1quasiquote"))) {return ((function() {return node; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 40 Column 2
} else {return (function() {if(_eq__eq_(ast["first*"](node),"\uFDD1lambda")) {return ((function() {return ast["copy-node"](node,cons(ast["first"](node),cons(cadr(ast["node-data"](node)),map((function(e){
return expand(e); // Line 40 Column 2
}),cddr(ast["node-data"](node)))))); // Line 40 Column 2
}))(); // Line 40 Column 2
} else {return (function() {if(macro_p_(ast["first*"](node))) {return ((function() {return ((function() {var o3 = (function(res){
return expand(sourcify(res,ast["node-lineno"](node),ast["node-colno"](node))); // Line 40 Column 2
});
var o4 = macro_dash_function(ast["first*"](node))(desourcify(node));
return o3(o4); // Line 40 Column 2
}))(); // Line 40 Column 2
}))(); // Line 40 Column 2
} else {return ((function() {return ast["copy-node"](node,map(expand,ast["node-data"](node))); // Line 40 Column 2
}))(); // Line 40 Column 2
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
var _per_macros = dict();
var macro_dash_function = (function(name){
return dict_dash_ref(_per_macros,name); // Line 72 Column 3
});
var install_dash_macro = (function(name,f){
return dict_dash_put_excl_(_per_macros,name,f); // Line 75 Column 3
});
var macro_p_ = (function(name){
return (symbol_p_(name) && dict_dash_ref(_per_macros,symbol_dash__gt_key(name)) && true); // Line <unknown undefined> Column <unknown undefined>
});
var macro_dash_generator = false;
var make_dash_macro = (function(pattern,body){
return ((function() {var o5 = (function(x){
return ((function() {var o7 = (function(s,p){
return eval(p); // Line 85 Column 2
});
var o8 = list("\uFDD1lambda",list(x),list("\uFDD1apply",list_dash_append(list("\uFDD1lambda",pattern),body),list("\uFDD1cdr",x)));
var o9 = compile_dash_program(o8,macro_dash_generator["make-fresh"]());
return o7(o8,o9); // Line 85 Column 2
}))(); // Line 85 Column 2
});
var o6 = gensym();
return o5(o6); // Line 85 Column 2
}))(); // Line 85 Column 2
});
var sourcify = (function(exp,lineno,colno){
return (function() {if((self_dash_evaluating_p_(exp) || symbol_p_(exp))) {return ((function() {return ast["make-node"]("\uFDD1ATOM",exp,lineno,colno); // Line 96 Column 2
}))(); // Line 96 Column 2
} else {return (function() {if(vector_p_(exp)) {return ((function() {return ast["make-node"]("\uFDD1VECTOR",map((function(e){
return sourcify(e,lineno,colno); // Line 96 Column 2
}),vector_dash__gt_list(exp)),lineno,colno); // Line 96 Column 2
}))(); // Line 96 Column 2
} else {return (function() {if(dict_p_(exp)) {return ((function() {return ast["make-node"]("\uFDD1DICT",map((function(e){
return sourcify(e,lineno,colno); // Line 96 Column 2
}),dict_dash__gt_list(exp)),lineno,colno); // Line 96 Column 2
}))(); // Line 96 Column 2
} else {return ((function() {return ast["make-node"]("\uFDD1LIST",map((function(e){
return sourcify(e,lineno,colno); // Line 96 Column 2
}),exp),lineno,colno); // Line 96 Column 2
}))(); // Line 96 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var desourcify = (function(node){
return (function() {if(ast["atom?"](node)) {return ((function() {return ast["node-data"](node); // Line 116 Column 2
}))(); // Line 116 Column 2
} else {return (function() {if(ast["vector?"](node)) {return ((function() {return list_dash__gt_vector(map(desourcify,ast["node-data"](node))); // Line 116 Column 2
}))(); // Line 116 Column 2
} else {return (function() {if(ast["dict?"](node)) {return ((function() {return apply(dict,map(desourcify,ast["node-data"](node))); // Line 116 Column 2
}))(); // Line 116 Column 2
} else {return (function() {if(ast["list?"](node)) {return ((function() {return map(desourcify,ast["node-data"](node)); // Line 116 Column 2
}))(); // Line 116 Column 2
} else {return ((function() {throw(str("unknown node type: ",node)); // Line 116 Column 2
}))(); // Line 116 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
install_dash_macro("\uFDD1define-macro",(function(form){
return ((function() {var o10 = (function(sig){
return ((function() {var o12 = (function(name,pattern,body){
install_dash_macro(name,make_dash_macro(pattern,body)); // Line 129 Column 3
return false; // Line <unknown undefined> Column <unknown undefined>
});
var o13 = car(sig);
var o14 = cdr(sig);
var o15 = cddr(form);
return o12(o13,o14,o15); // Line 129 Column 3
}))(); // Line 129 Column 3
});
var o11 = cadr(form);
return o10(o11); // Line 129 Column 3
}))(); // Line 129 Column 3
})); // Line 126 Column 1
install_dash_macro("\uFDD1begin",(function(form){
return list(list_dash_append(list("\uFDD1lambda",_emptylst),cdr(form))); // Line 140 Column 5
})); // Line 137 Column 1
install_dash_macro("\uFDD1cond",(function(form){
return (function() {if(null_p_(cdr(form))) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return ((function() {var o16 = (function(forms){
return ((function() {var o18 = (function(f){
return (function() {if(eq_p_(car(f),"\uFDD1else")) {return list_dash_append(list("\uFDD1begin"),cdr(f)); // Line 147 Column 7
} else {return list("\uFDD1if",car(f),list_dash_append(list("\uFDD1begin"),cdr(f)),list_dash_append(list("\uFDD1cond"),cdr(forms))); // Line 147 Column 7
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o19 = car(forms);
return o18(o19); // Line 147 Column 7
}))(); // Line 147 Column 7
});
var o17 = cdr(form);
return o16(o17); // Line 147 Column 7
}))(); // Line 147 Column 7
}})()
; // Line <unknown undefined> Column <unknown undefined>
})); // Line 142 Column 1
install_dash_macro("\uFDD1let",(function(form){
var replace = (function(expr,old,sym){
return (function() {if(symbol_p_(expr)) {return ((function() {return (function() {if(_eq__eq_(expr,old)) {return sym; // Line <unknown undefined> Column <unknown undefined>
} else {return expr; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 160 Column 5
} else {return (function() {if(literal_p_(expr)) {return ((function() {return expr; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 160 Column 5
} else {return (function() {if(dict_p_(expr)) {return ((function() {return dict_dash_map((function(e){
return replace(e,old,sym); // Line 160 Column 5
}),expr); // Line 160 Column 5
}))(); // Line 160 Column 5
} else {return (function() {if(vector_p_(expr)) {return ((function() {return vector_dash_map((function(e){
return replace(e,old,sym); // Line 160 Column 5
}),expr); // Line 160 Column 5
}))(); // Line 160 Column 5
} else {return (function() {if(list_p_(expr)) {return ((function() {return map((function(e){
return replace(e,old,sym); // Line 160 Column 5
}),expr); // Line 160 Column 5
}))(); // Line 160 Column 5
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
});
var generate_dash_defs = (function(syms,exprs){
return reverse(((function() {var loop = (function(lst,forms,vars,acc){
return (function() {if(null_p_(lst)) {return acc; // Line <unknown undefined> Column <unknown undefined>
} else {return ((function() {var o24 = (function(sym,name,code){
return vector("__tco_call",(function() {return loop(cdr(lst),cdr(forms),dict_dash_merge(vars,dict(name,sym)),cons(list("\uFDD1define",car(lst),fold((function(el,acc){
return replace(acc,key_dash__gt_symbol(el),dict_dash_ref(vars,el)); // Line 174 Column 6
}),code,keys(vars))),acc)); // Line 174 Column 6
})); // Line 174 Column 6
});
var o25 = car(lst);
var o26 = car(car(forms));
var o27 = cadar(forms);
return o24(o25,o26,o27); // Line 174 Column 6
}))(); // Line 174 Column 6
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o20 = syms;
var o21 = exprs;
var o22 = dict();
var o23 = _emptylst;
return trampoline(loop(o20,o21,o22,o23)); // Line 174 Column 6
}))()); // Line 173 Column 6
});
var tco = (function(exprs,exit){
var if_p_ = (function(expr){
return (list_p_(expr) && _eq__eq_(car(expr),"\uFDD1if")); // Line <unknown undefined> Column <unknown undefined>
});
var let_p_ = (function(expr){
return (list_p_(expr) && _eq__eq_(car(expr),"\uFDD1let")); // Line <unknown undefined> Column <unknown undefined>
});
var begin_p_ = (function(expr){
return (list_p_(expr) && _eq__eq_(car(expr),"\uFDD1begin")); // Line <unknown undefined> Column <unknown undefined>
});
var tco_p_ = (function(expr){
return (list_p_(expr) && _eq__eq_(car(expr),exit)); // Line <unknown undefined> Column <unknown undefined>
});
var process_dash_if = (function(expr,transform){
return (function() {if(null_p_(cdddr(expr))) {return list("\uFDD1if",cadr(expr),transform(caddr(expr))); // Line 212 Column 13
} else {return list("\uFDD1if",cadr(expr),transform(caddr(expr)),transform(car(cdddr(expr)))); // Line 214 Column 13
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
return ((function() {var o28 = (function(rexprs){
return ((function() {var o30 = (function(bottom){
return (function() {if(if_p_(bottom)) {return ((function() {return reverse(cons(process_dash_if(bottom,(function(expr){
return (function() {if(begin_p_(expr)) {return ((function() {return tco(expr,exit); // Line 218 Column 5
}))(); // Line 218 Column 5
} else {return (function() {if(let_p_(expr)) {return ((function() {return tco(expr,exit); // Line 218 Column 5
}))(); // Line 218 Column 5
} else {return ((function() {return car(tco(list(expr),exit)); // Line 218 Column 5
}))(); // Line 218 Column 5
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
})),cdr(rexprs))); // Line 218 Column 5
}))(); // Line 218 Column 5
} else {return (function() {if(let_p_(bottom)) {return ((function() {return reverse(cons(tco(bottom,exit),cdr(rexprs))); // Line 218 Column 5
}))(); // Line 218 Column 5
} else {return ((function() {return (function() {if(tco_p_(bottom)) {return reverse(cons(list("\uFDD1vector","__tco_call",list("\uFDD1lambda",_emptylst,bottom)),cdr(rexprs))); // Line 218 Column 5
} else {return exprs; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}))(); // Line 218 Column 5
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o31 = car(rexprs);
return o30(o31); // Line 218 Column 5
}))(); // Line 218 Column 5
});
var o29 = reverse(exprs);
return o28(o29); // Line 218 Column 5
}))(); // Line 218 Column 5
});
var tco_dash_call_p_ = (function(name,expr){
var _tco_p_ = (function(expr){
return (list_p_(expr) && _eq_(car(expr),"\uFDD1vector") && _eq_(cadr(expr),"__tco_call") && ((function() {var o32 = (function(lamb){
return ((function() {var o34 = (function(body){
return _eq_(car(body),name); // Line 247 Column 12
});
var o35 = caddr(lamb);
return o34(o35); // Line 247 Column 12
}))(); // Line 247 Column 12
});
var o33 = caddr(expr);
return o32(o33); // Line 247 Column 12
}))()); // Line <unknown undefined> Column <unknown undefined>
});
return (function() {if(list_p_(expr)) {return (_tco_p_(expr) || fold((function(el,acc){
return (acc || tco_dash_call_p_(name,el)); // Line <unknown undefined> Column <unknown undefined>
}),false,expr)); // Line <unknown undefined> Column <unknown undefined>
} else {return false; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
return ((function() {var o36 = (function(name,forms){
assert((null_p_(forms) || (list_p_(forms) && list_p_(car(forms)))),str("invalid let: ",form)); // Line 262 Column 3
return ((function() {var o39 = (function(syms,body){
return ((function() {var o42 = (function(tco_dash_ed){
return list(list_dash_append(list("\uFDD1lambda",_emptylst,list_dash_append(list("\uFDD1define",list_dash_append(list(name),map(car,forms))),tco_dash_ed)),list_dash_append(generate_dash_defs(syms,forms),(function() {if(tco_dash_call_p_(name,tco_dash_ed)) {return list(list("\uFDD1trampoline",list_dash_append(list(name),syms))); // Line 262 Column 3
} else {return list(list_dash_append(list(name),syms)); // Line 262 Column 3
}})()
))); // Line 262 Column 3
});
var o43 = tco(body,name);
return o42(o43); // Line 262 Column 3
}))(); // Line 262 Column 3
});
var o40 = map((function(el){
return gensym(); // Line 262 Column 3
}),forms);
var o41 = (function() {if(symbol_p_(cadr(form))) {return cdddr(form); // Line 262 Column 3
} else {return cddr(form); // Line 262 Column 3
}})()
;
return o39(o40,o41); // Line 262 Column 3
}))(); // Line 262 Column 3
});
var o37 = (function() {if(symbol_p_(cadr(form))) {return cadr(form); // Line 262 Column 3
} else {return gensym(); // Line 262 Column 3
}})()
;
var o38 = (function() {if(symbol_p_(cadr(form))) {return caddr(form); // Line 262 Column 3
} else {return cadr(form); // Line 262 Column 3
}})()
;
return o36(o37,o38); // Line 262 Column 3
}))(); // Line 262 Column 3
})); // Line 156 Column 1
install_dash_macro("\uFDD1eval",(function(form){
return list(list("\uFDD1%raw","eval"),list("\uFDD1__compiler.compile-program",cadr(form),list("\uFDD1__generator"))); // Line 295 Column 5
})); // Line 292 Column 1
var _natives_ = dict();
var native_dash_function = (function(name){
return dict_dash_ref(_natives_,name); // Line 311 Column 3
});
var install_dash_native = (function(name,func,validator){
return dict_dash_put_excl_(_natives_,name,(function(node,gen,expr_p_,compile_star_){
validator(node); // Line 317 Column 16
return dict_dash_ref(gen,func)(cdr(ast["node-data"](node)),expr_p_,compile_star_); // Line 318 Column 16
})); // Line 314 Column 3
});
var native_p_ = (function(name){
return (symbol_p_(name) && not(_eq__eq_(dict_dash_ref(_natives_,symbol_dash__gt_key(name)),undefined))); // Line <unknown undefined> Column <unknown undefined>
});
var verify_dash_not_dash_single = (function(node){
return assert((length(ast["node-data"](node)) > 1),str("form requires at least one operand:",inspect(desourcify(node)))); // Line 326 Column 3
});
install_dash_native("\uFDD0and","\uFDD1write-and",verify_dash_not_dash_single); // Line 330 Column 1
install_dash_native("\uFDD0or","\uFDD1write-or",verify_dash_not_dash_single); // Line 331 Column 1
install_dash_native("\uFDD0+","\uFDD1write-add",verify_dash_not_dash_single); // Line 332 Column 1
install_dash_native("\uFDD0-","\uFDD1write-subtract",verify_dash_not_dash_single); // Line 333 Column 1
install_dash_native("\uFDD0*","\uFDD1write-multiply",verify_dash_not_dash_single); // Line 334 Column 1
install_dash_native("\uFDD0/","\uFDD1write-divide",verify_dash_not_dash_single); // Line 335 Column 1
install_dash_native("\uFDD0>","\uFDD1write-gt",verify_dash_not_dash_single); // Line 336 Column 1
install_dash_native("\uFDD0<","\uFDD1write-lt",verify_dash_not_dash_single); // Line 337 Column 1
install_dash_native("\uFDD0<=","\uFDD1write-lteq",verify_dash_not_dash_single); // Line 338 Column 1
install_dash_native("\uFDD0>=","\uFDD1write-gteq",verify_dash_not_dash_single); // Line 339 Column 1
install_dash_native("\uFDD0>>","\uFDD1write-rshift",verify_dash_not_dash_single); // Line 340 Column 1
install_dash_native("\uFDD0<<","\uFDD1write-lshift",verify_dash_not_dash_single); // Line 341 Column 1
install_dash_native("\uFDD0bitwise-or","\uFDD1write-bitwise-or",verify_dash_not_dash_single); // Line 342 Column 1
install_dash_native("\uFDD0bitwise-and","\uFDD1write-bitwise-and",verify_dash_not_dash_single); // Line 343 Column 1
install_dash_native("\uFDD0%","\uFDD1write-mod",verify_dash_not_dash_single); // Line 344 Column 1
install_dash_native("\uFDD0require","\uFDD1write-require",(function(node){
verify_dash_not_dash_single(node); // Line 348 Column 19
return for_dash_each((function(el){
return assert((ast["list?"](el) && eq_p_(length(ast["node-data"](el)),2)),str("require needs a list of ","2 element lists: ",inspect(desourcify(el)))); // Line 351 Column 22
}),cdr(ast["node-data"](node))); // Line 349 Column 19
})); // Line 346 Column 1
var apply_dash_node = (function(func_dash_name,node){
var quoted_p_ = vector_dash__gt_list(Array.prototype.slice.call(arguments, 2));
return ((function() {var o44 = (function(quoted_p_){
return ast["prepend"](ast["make-atom"](func_dash_name,node),(function() {if(quoted_p_) {return ast["map-children"]((function(e){
return ast["make-list"](ast["make-atom"]("\uFDD1quote",node),e); // Line 363 Column 2
}),node); // Line 363 Column 2
} else {return node; // Line <unknown undefined> Column <unknown undefined>
}})()
); // Line 363 Column 2
});
var o45 = opt(quoted_p_,false);
return o44(o45); // Line 363 Column 2
}))(); // Line 363 Column 2
});
var apply_dash_w_slash_unquote = (function(func_dash_name,node){
return ast["prepend"](ast["make-atom"](func_dash_name,node),ast["map-children"]((function(e){
return (function() {if((ast["list?"](e) && _eq__eq_(ast["first*"](e),"\uFDD1unquote"))) {return cadr(ast["node-data"](e)); // Line 381 Column 11
} else {return (function() {if((ast["list?"](e) && _eq__eq_(ast["first*"](e),"\uFDD1key"))) {return ast["make-list"](ast["make-atom"]("\uFDD1quasiquote",node),cadr(ast["node-data"](e))); // Line 384 Column 15
} else {return ast["make-list"](ast["make-atom"]("\uFDD1quasiquote",node),e); // Line 386 Column 15
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}),node)); // Line 375 Column 3
});
var split_dash_splices = (function(lst,func_dash_name){
var make_dash_splice = (function(lst){
return (function() {if((self_dash_evaluating_p_(lst) || symbol_p_(lst))) {return apply_dash_w_slash_unquote(func_dash_name,ast["make-list*"](list(lst))); // Line 393 Column 9
} else {return apply_dash_w_slash_unquote(func_dash_name,ast["make-list*"](lst)); // Line 394 Column 9
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
return ((function() {var loop = (function(nodes,slices,acc){
return (function() {if(null_p_(nodes)) {return reverse((function() {if(null_p_(acc)) {return slices; // Line <unknown undefined> Column <unknown undefined>
} else {return cons(make_dash_splice(reverse(acc)),slices); // Line 396 Column 2
}})()
); // Line 396 Column 2
} else {return ((function() {var o49 = (function(node){
return (function() {if((ast["list?"](node) && _eq__eq_(ast["first*"](node),"\uFDD1unquote-splicing"))) {return ((function() {var o51 = (function(el){
return vector("__tco_call",(function() {return loop(cdr(nodes),cons(el,(function() {if(null_p_(acc)) {return slices; // Line <unknown undefined> Column <unknown undefined>
} else {return cons(make_dash_splice(reverse(acc)),slices); // Line 396 Column 2
}})()
),_emptylst); // Line 396 Column 2
})); // Line 396 Column 2
});
var o52 = cadr(ast["node-data"](node));
return o51(o52); // Line 396 Column 2
}))(); // Line 396 Column 2
} else {return vector("__tco_call",(function() {return loop(cdr(nodes),slices,cons(node,acc)); // Line 396 Column 2
})); // Line 396 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o50 = car(nodes);
return o49(o50); // Line 396 Column 2
}))(); // Line 396 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o46 = lst;
var o47 = _emptylst;
var o48 = _emptylst;
return trampoline(loop(o46,o47,o48)); // Line 396 Column 2
}))(); // Line 396 Column 2
});
var quasiquote_dash_split = (function(append_dash_name,func_dash_name,node){
return ((function() {var o53 = (function(slices){
return (function() {if(_eq__eq_(length(slices),1)) {return car(slices); // Line 421 Column 2
} else {return apply_dash_node(append_dash_name,ast["make-list*"](slices)); // Line 421 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o54 = split_dash_splices(ast["node-data"](node),func_dash_name);
return o53(o54); // Line 421 Column 2
}))(); // Line 421 Column 2
});
var compile_dash_object = (function(node,generator,quoted_p_,expr_p_){
return ((function() {var o55 = (function(exp){
return (function() {if(key_p_(exp)) {return ((function() {return generator["write-key"](exp,expr_p_); // Line 427 Column 2
}))(); // Line 427 Column 2
} else {return (function() {if(symbol_p_(exp)) {return ((function() {return generator["write-symbol"](exp,expr_p_); // Line 427 Column 2
}))(); // Line 427 Column 2
} else {return (function() {if(number_p_(exp)) {return ((function() {return generator["write-number"](exp,expr_p_); // Line 427 Column 2
}))(); // Line 427 Column 2
} else {return (function() {if(boolean_p_(exp)) {return ((function() {return generator["write-boolean"](exp,expr_p_); // Line 427 Column 2
}))(); // Line 427 Column 2
} else {return (function() {if(string_p_(exp)) {return ((function() {return generator["write-string"](exp,expr_p_); // Line 427 Column 2
}))(); // Line 427 Column 2
} else {return (function() {if(ast["dict?"](node)) {return ((function() {return compile(apply_dash_node("\uFDD1dict",node,quoted_p_),generator,expr_p_); // Line 427 Column 2
}))(); // Line 427 Column 2
} else {return (function() {if(ast["vector?"](node)) {return ((function() {return compile(apply_dash_node("\uFDD1vector",node,quoted_p_),generator,expr_p_); // Line 427 Column 2
}))(); // Line 427 Column 2
} else {return (function() {if(null_p_(exp)) {return ((function() {return generator["write-empty-list"](exp,expr_p_); // Line 427 Column 2
}))(); // Line 427 Column 2
} else {return (function() {if(ast["list?"](node)) {return ((function() {return compile(apply_dash_node("\uFDD1list",node,quoted_p_),generator,expr_p_); // Line 427 Column 2
}))(); // Line 427 Column 2
} else {return ((function() {throw(str("compile-object: unknown type: ",exp)); // Line 427 Column 2
}))(); // Line 427 Column 2
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
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o56 = ast["node-data"](node);
return o55(o56); // Line 427 Column 2
}))(); // Line 427 Column 2
});
var compile_dash_quasi = (function(node,generator,expr_p_){
return (function() {if(ast["list?"](node)) {return ((function() {return compile(quasiquote_dash_split("\uFDD1list-append","\uFDD1list",node),generator,expr_p_); // Line 446 Column 2
}))(); // Line 446 Column 2
} else {return (function() {if(ast["vector?"](node)) {return ((function() {return compile(quasiquote_dash_split("\uFDD1vector-concat","\uFDD1vector",node),generator,expr_p_); // Line 446 Column 2
}))(); // Line 446 Column 2
} else {return (function() {if(ast["dict?"](node)) {return ((function() {return compile(quasiquote_dash_split("\uFDD1dict-merge","\uFDD1dict",node),generator,expr_p_); // Line 446 Column 2
}))(); // Line 446 Column 2
} else {return ((function() {return compile_dash_object(node,generator,true,expr_p_); // Line 446 Column 2
}))(); // Line 446 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var compile_dash_reference = (function(node,generator){
var expr_p_ = vector_dash__gt_list(Array.prototype.slice.call(arguments, 2));
return generator["write-term"](node,opt(expr_p_,false)); // Line 457 Column 3
});
var compile_dash_if = (function(node,generator,expr_p_,compile_star_){
return ((function() {var o57 = (function(nodes,cnd,tru,alt){
return generator["write-if"](cnd,tru,alt,expr_p_,compile_star_); // Line 460 Column 2
});
var o58 = ast["node-data"](node);
var o59 = cadr(o58);
var o60 = caddr(o58);
var o61 = (function() {if(null_p_(cdddr(o58))) {return false; // Line <unknown undefined> Column <unknown undefined>
} else {return car(cdddr(o58)); // Line 460 Column 2
}})()
;
return o57(o58,o59,o60,o61); // Line 460 Column 2
}))(); // Line 460 Column 2
});
var compile_dash_lambda = (function(node,generator,expr_p_,compile_star_){
return generator["write-lambda"](node,expr_p_,compile_star_); // Line 469 Column 3
});
var compile_dash_set_excl_ = (function(node,generator,compile_star_){
return generator["write-set!"](cadr(ast["node-data"](node)),caddr(ast["node-data"](node)),compile_star_); // Line 472 Column 3
});
var compile_dash_define = (function(node,generator,compile_star_){
return ((function() {var o62 = (function(target){
return (function() {if(ast["list?"](target)) {return ((function() {var o64 = (function(name,args,body){
return generator["write-define"](name,ast["make-list*"](cons(ast["make-node-w/extra"]("\uFDD1ATOM","\uFDD1lambda",ast["node-data"](name),ast["node-lineno"](name),ast["node-colno"](name)),cons((function() {if(null_p_(args)) {return ast["make-empty-list"](name); // Line 477 Column 2
} else {return ast["make-list*"](args); // Line 477 Column 2
}})()
,body))),compile_star_); // Line 477 Column 2
});
var o65 = ast["first"](target);
var o66 = cdr(ast["node-data"](target));
var o67 = cddr(ast["node-data"](node));
return o64(o65,o66,o67); // Line 477 Column 2
}))(); // Line 477 Column 2
} else {return generator["write-define"](target,caddr(ast["node-data"](node)),compile_star_); // Line 477 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o63 = cadr(ast["node-data"](node));
return o62(o63); // Line 477 Column 2
}))(); // Line 477 Column 2
});
var compile = (function(node,generator){
var expr_p_ = vector_dash__gt_list(Array.prototype.slice.call(arguments, 2));
var compile_star_ = (function(node){
var expr_p_ = vector_dash__gt_list(Array.prototype.slice.call(arguments, 1));
return compile(node,generator,opt(expr_p_,false)); // Line 500 Column 5
});
return ((function() {var o68 = (function(expr_p_){
return (function() {if(self_dash_evaluating_p_(ast["node-data"](node))) {return ((function() {return compile_dash_object(node,generator,false,expr_p_); // Line 502 Column 2
}))(); // Line 502 Column 2
} else {return (function() {if(symbol_p_(ast["node-data"](node))) {return ((function() {return compile_dash_reference(node,generator,expr_p_); // Line 502 Column 2
}))(); // Line 502 Column 2
} else {return (function() {if(ast["vector?"](node)) {return ((function() {return compile_dash_object(node,generator,false,expr_p_); // Line 502 Column 2
}))(); // Line 502 Column 2
} else {return (function() {if(ast["dict?"](node)) {return ((function() {return compile_dash_object(node,generator,false,expr_p_); // Line 502 Column 2
}))(); // Line 502 Column 2
} else {return (function() {if(ast["list?"](node)) {return ((function() {return ((function() {var o70 = (function(sym){
return (function() {if(_eq__eq_(sym,"\uFDD1quote")) {return ((function() {return compile_dash_object(cadr(ast["node-data"](node)),generator,true,expr_p_); // Line 502 Column 2
}))(); // Line 502 Column 2
} else {return (function() {if(_eq__eq_(sym,"\uFDD1quasiquote")) {return ((function() {return compile_dash_quasi(cadr(ast["node-data"](node)),generator,expr_p_); // Line 502 Column 2
}))(); // Line 502 Column 2
} else {return (function() {if(_eq__eq_(sym,"\uFDD1if")) {return ((function() {return compile_dash_if(node,generator,expr_p_,compile_star_); // Line 502 Column 2
}))(); // Line 502 Column 2
} else {return (function() {if(_eq__eq_(sym,"\uFDD1lambda")) {return ((function() {return compile_dash_lambda(node,generator,expr_p_,compile_star_); // Line 502 Column 2
}))(); // Line 502 Column 2
} else {return (function() {if(_eq__eq_(sym,"\uFDD1set!")) {return ((function() {return compile_dash_set_excl_(node,generator,compile_star_); // Line 502 Column 2
}))(); // Line 502 Column 2
} else {return (function() {if(_eq__eq_(sym,"\uFDD1define")) {return ((function() {return compile_dash_define(node,generator,compile_star_); // Line 502 Column 2
}))(); // Line 502 Column 2
} else {return (function() {if(_eq__eq_(sym,"\uFDD1%raw")) {return ((function() {return generator["write-raw-code"](cadr(ast["node-data"](node))); // Line 502 Column 2
}))(); // Line 502 Column 2
} else {return (function() {if(native_p_(sym)) {return ((function() {return native_dash_function(sym)(node,generator,expr_p_,compile_star_); // Line 502 Column 2
}))(); // Line 502 Column 2
} else {return ((function() {(function() {if(not((symbol_p_(ast["first*"](node)) || list_p_(ast["first*"](node))))) {throw(str("operator is not a procedure: ",ast["first*"](node))); // Line 502 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
return generator["write-func-call"](ast["first"](node),cdr(ast["node-data"](node)),expr_p_,compile_star_); // Line 502 Column 2
}))(); // Line 502 Column 2
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
}})()
; // Line <unknown undefined> Column <unknown undefined>
});
var o71 = ast["first*"](node);
return o70(o71); // Line 502 Column 2
}))(); // Line 502 Column 2
}))(); // Line 502 Column 2
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
});
var o69 = opt(expr_p_,false);
return o68(o69); // Line 502 Column 2
}))(); // Line 502 Column 2
});
var _per_optimize_dash_mode = 0;
var compile_dash_program = (function(src,generator){
(function() {if(not(macro_dash_generator)) {macro_dash_generator = generator;
}})()
; // Line <unknown undefined> Column <unknown undefined>
return ((function() {var o72 = (function(exp){
(function() {if((ast["type?"](exp,"\uFDD1LIST") && _eq__eq_(ast["first*"](exp),"\uFDD1begin"))) {return for_dash_each((function(e){
return compile(expand(e),generator); // Line 542 Column 2
}),cdr(ast["node-data"](exp))); // Line 542 Column 2
} else {return compile(expand(exp),generator); // Line 542 Column 2
}})()
; // Line <unknown undefined> Column <unknown undefined>
return generator["get-code"](); // Line 542 Column 2
});
var o73 = (function() {if(string_p_(src)) {return reader["read"](src); // Line 542 Column 2
} else {return sourcify(src,0,0); // Line 542 Column 2
}})()
;
return o72(o73); // Line 542 Column 2
}))(); // Line 542 Column 2
});
module["exports"] = dict("\uFDD0read",(function(e){
return desourcify(reader["read"](e)); // Line 554 Column 41
}),"\uFDD0expand",expand,"\uFDD0compile",compile,"\uFDD0compile-program",compile_dash_program,"\uFDD0desourcify",desourcify,"\uFDD0sourcify",sourcify,"\uFDD0pp",pp,"\uFDD0set-macro-generator",(function(g){
return (function() {if(not(macro_dash_generator)) {macro_dash_generator = g;
}})()
; // Line <unknown undefined> Column <unknown undefined>
}),"\uFDD0set-optimizations",(function(n){
_per_optimize_dash_mode = n;
}));

