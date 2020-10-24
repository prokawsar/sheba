var K_ENV="prod",K_ENV_DEV="dev",K_ENV_TEST="test",K_ENV_PROD="prod";import{a as append,b as assign,d as createElement,f as createText,g as detachNode,i as init,j as insert,l as proto,C as setStyle}from"./chunk-5d88ab61.js";function pwd(e){var a={overall:!1,min_length:!1,special:!1,uppercase:!1,lowercase:!1,digit:!1};Object.entries({min_length:8,special:"[^A-Za-z0-9]",uppercase:"[A-Z]",lowercase:"[a-z]",digit:"[0-9]"}).forEach(s=>{"min_length"==s[0]?e&&e.length>=s[1]&&(a[s[0]]=!0):new RegExp(s[1]).test(e)&&(a[s[0]]=!0)});var s=0,t=Object.values(a);return t.forEach(e=>{e&&s++}),s==t.length-1&&(a.overall=!0),a}function result({new_pass:e}){return pwd(e)}function valid({result:e}){return e.overall}function data(){return{new_pass:"",valid:!1}}function create_main_fragment(e,a){var s,t,r,l,n,c,i,d,p,u,m,o,g,_,h,v,f,N,w,E,x,T,b,V,y;function S(e){return e.new_pass&&!e.result.overall?create_if_block:e.new_pass&&e.result.overall?create_if_block_1:void 0}var P=S(a),k=P&&P(e,a);return{c(){s=createElement("div"),t=createElement("div"),r=createElement("div"),k&&k.c(),l=createText("\r\n  "),n=createElement("div"),c=createElement("span"),i=createElement("span"),d=createText("8+"),u=createText("\r\n      "),m=createElement("span"),o=createText("a-z"),_=createText("\r\n      "),h=createElement("span"),v=createText("A-Z"),N=createText("\r\n      "),w=createElement("span"),E=createText("0-9"),T=createText("\r\n      "),b=createElement("span"),V=createText("!#@"),r.className="level-item",setStyle(r,"max-width","100%"),t.className="level-left",setStyle(t,"max-width","60%"),i.className=p="tag is-small is-"+(a.result.min_length?"success":"danger"),m.className=g="tag is-small is-"+(a.result.lowercase?"success":"danger"),h.className=f="tag is-small is-"+(a.result.uppercase?"success":"danger"),w.className=x="tag is-small is-"+(a.result.digit?"success":"danger"),b.className=y="tag is-small is-"+(a.result.special?"success":"danger"),c.className="tags",n.className="level-right",s.className="level is-mobile",setStyle(s,"margin","0"),setStyle(s,"max-width","100%")},m(e,a){insert(e,s,a),append(s,t),append(t,r),k&&k.m(r,null),append(s,l),append(s,n),append(n,c),append(c,i),append(i,d),append(c,u),append(c,m),append(m,o),append(c,_),append(c,h),append(h,v),append(c,N),append(c,w),append(w,E),append(c,T),append(c,b),append(b,V)},p(a,s){P!==(P=S(s))&&(k&&k.d(1),(k=P&&P(e,s))&&k.c(),k&&k.m(r,null)),a.result&&p!==(p="tag is-small is-"+(s.result.min_length?"success":"danger"))&&(i.className=p),a.result&&g!==(g="tag is-small is-"+(s.result.lowercase?"success":"danger"))&&(m.className=g),a.result&&f!==(f="tag is-small is-"+(s.result.uppercase?"success":"danger"))&&(h.className=f),a.result&&x!==(x="tag is-small is-"+(s.result.digit?"success":"danger"))&&(w.className=x),a.result&&y!==(y="tag is-small is-"+(s.result.special?"success":"danger"))&&(b.className=y)},d(e){e&&detachNode(s),k&&k.d()}}}function create_if_block_1(e,a){var s;return{c(){(s=createElement("p")).textContent="Password is strong.",s.className="help has-text-success"},m(e,a){insert(e,s,a)},d(e){e&&detachNode(s)}}}function create_if_block(e,a){var s;return{c(){(s=createElement("p")).textContent="Should be at least 8 characters in length and include at least one lower-case letter, one upper-case letter, one number, and one special character.",s.className="help has-text-danger"},m(e,a){insert(e,s,a)},d(e){e&&detachNode(s)}}}function PasswordValidator(e){init(this,e),this._state=assign(data(),e.data),this._recompute({new_pass:1,result:1},this._state),this._intro=!0,this._fragment=create_main_fragment(this,this._state),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor))}assign(PasswordValidator.prototype,proto),PasswordValidator.prototype._recompute=function(e,a){e.new_pass&&this._differs(a.result,a.result=result(a))&&(e.result=!0),e.result&&this._differs(a.valid,a.valid=valid(a))&&(e.valid=!0)};export{PasswordValidator as a};
//# sourceMappingURL=chunk-6c4a6fb2.js.map
