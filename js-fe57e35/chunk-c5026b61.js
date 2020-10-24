var K_ENV="prod",K_ENV_DEV="dev",K_ENV_TEST="test",K_ENV_PROD="prod";import{a as append,b as assign,d as createElement,f as createText,g as detachNode,i as init,j as insert,l as proto,c as assignTrue,h as flush,O as reinsertChildren,B as setData,w as addListener,z as createComment,P as reinsertAfter,x as removeListener,k as noop,Q as reinsertBetween,R as exclude,S as getSpreadUpdate}from"./chunk-5d88ab61.js";function data(){return{color:"transparent",size:"medium",type:"",style:"",large_loader:!1}}function create_main_fragment(e,t){var s,a,n,i,r;return{c(){s=createElement("div"),a=createElement("div"),n=createText(" "),a.className="hero-body",a.style.cssText=i="inline"==t.type?"padding:1rem":"",s.className=r="kws-loader hero is-"+t.color+" is-"+t.size+" "+(t.large_loader?"is-large-loader":""),s.style.cssText=t.style},m(e,t){insert(e,s,t),append(s,a),append(a,n)},p(e,t){e.type&&i!==(i="inline"==t.type?"padding:1rem":"")&&(a.style.cssText=i),(e.color||e.size||e.large_loader)&&r!==(r="kws-loader hero is-"+t.color+" is-"+t.size+" "+(t.large_loader?"is-large-loader":""))&&(s.className=r),e.style&&(s.style.cssText=t.style)},d(e){e&&detachNode(s)}}}function Loader(e){init(this,e),this._state=assign(data(),e.data),this._intro=!0,this._fragment=create_main_fragment(this,this._state),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor))}function data$1(){return{size:"",color:"info",style:"",inner_style:"",classes:"",header_classes:"",inner_classes:"",title:null,has_title:!1}}function onstate({changed:e,current:t,previous:s}){e.type&&this.set({color:t.type})}function create_main_fragment$1(e,t){var s,a,n,i,r,c=e._slotted.default,o=(t.title||t.has_title)&&create_if_block(e,t);return{c(){s=createElement("div"),o&&o.c(),a=createText("\r\n  "),(n=createElement("div")).className=i="message-body "+t.inner_classes,n.style.cssText=t.inner_style,s.className=r="message is-"+t.color+" is-"+t.size+" "+t.classes,s.style.cssText=t.style},m(e,t){insert(e,s,t),o&&o.m(s,null),append(s,a),append(s,n),c&&append(n,c)},p(t,c){c.title||c.has_title?o?o.p(t,c):((o=create_if_block(e,c)).c(),o.m(s,a)):o&&(o.d(1),o=null),t.inner_classes&&i!==(i="message-body "+c.inner_classes)&&(n.className=i),t.inner_style&&(n.style.cssText=c.inner_style),(t.color||t.size||t.classes)&&r!==(r="message is-"+c.color+" is-"+c.size+" "+c.classes)&&(s.className=r),t.style&&(s.style.cssText=c.style)},d(e){e&&detachNode(s),o&&o.d(),c&&reinsertChildren(n,c)}}}function create_if_block(e,t){var s,a,n,i,r=e._slotted.title;return{c(){s=createElement("div"),r||(a=createElement("p"),n=createText(t.title)),s.className=i="message-header "+t.header_classes},m(e,t){insert(e,s,t),r?append(s,r):(append(s,a),append(a,n))},p(e,t){r||e.title&&setData(n,t.title),e.header_classes&&i!==(i="message-header "+t.header_classes)&&(s.className=i)},d(e){e&&detachNode(s),r&&reinsertChildren(s,r)}}}function Message(e){init(this,e),this._state=assign(data$1(),e.data),this._intro=!0,this._handlers.state=[onstate],this._slotted=e.slots||{},onstate.call(this,{changed:assignTrue({},this._state),current:this._state}),this._fragment=create_main_fragment$1(this,this._state),this.root._oncreate.push(()=>{this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}function data$2(){return{color:"info",style:"",dismissable:!1}}assign(Loader.prototype,proto),assign(Message.prototype,proto);var methods={dismiss(){this.destroy()}};function onstate$1({changed:e,current:t,previous:s}){e.type&&this.set({color:t.type})}function create_main_fragment$2(e,t){var s,a,n,i,r=e._slotted.default,c=t.dismissable&&create_if_block$1(e,t);return{c(){s=createElement("div"),c&&c.c(),a=createText("\r\n  "),s.className=i="notification is-"+t.color,s.style.cssText=t.style},m(e,t){insert(e,s,t),c&&c.m(s,null),append(s,a),r&&(append(s,n||(n=createComment())),append(s,r))},p(t,n){n.dismissable?c||((c=create_if_block$1(e,n)).c(),c.m(s,a)):c&&(c.d(1),c=null),t.color&&i!==(i="notification is-"+n.color)&&(s.className=i),t.style&&(s.style.cssText=n.style)},d(e){e&&detachNode(s),c&&c.d(),r&&reinsertAfter(n,r)}}}function create_if_block$1(e,t){var s;function a(t){e.dismiss()}return{c(){s=createElement("button"),addListener(s,"click",a),s.className="delete"},m(e,t){insert(e,s,t)},d(e){e&&detachNode(s),removeListener(s,"click",a)}}}function Notification(e){init(this,e),this._state=assign(data$2(),e.data),this._intro=!0,this._handlers.state=[onstate$1],this._slotted=e.slots||{},onstate$1.call(this,{changed:assignTrue({},this._state),current:this._state}),this._fragment=create_main_fragment$2(this,this._state),this.root._oncreate.push(()=>{this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}function _used_inner_class({inner_class:e,fa_class:t}){return e||t||""}function _used_inner_style({inner_style:e,fa_style:t}){return e||t||""}function familyClass({usedFamily:e}){switch(e){case"gg":return"gg gg-";case"unicons":return"uil uil-";default:return"fa fa-"}}function usedFamily({_system_settings:e,family:t}){if(t)return t;return e&&void 0!==e.icon_family&&e.icon_family?e.icon_family:"fa"}function internal_size({size:e}){switch(e){case"small":return"";case"medium":return"fa-2x";case"large":return"fa-3x";default:return"fa-lg"}}function data$3(){return{size:null,color:null,icon:"",icon_class:"",icon_style:"",fa_class:null,fa_style:null,inner_class:null,inner_style:null,family:null,_system_settings:null}}function oncreate(){if(this.store){let{system_settings:e}=this.store.get();setTimeout(()=>{this.set({_system_settings:e})},100)}else;}function create_main_fragment$3(e,t){var s,a,n,i;return{c(){s=createElement("span"),(a=createElement("i")).className=n="icon-i "+t.familyClass+t.icon+" "+t.internal_size+" "+t._used_inner_class+" svelte-1xagj2n",a.style.cssText=t._used_inner_style,s.className=i="icon "+(t.size?"is-"+t.size:"")+" "+(t.color?"has-text-"+t.color:"")+" "+t.icon_class+" svelte-1xagj2n",s.style.cssText=t.icon_style},m(e,t){insert(e,s,t),append(s,a)},p(e,t){(e.familyClass||e.icon||e.internal_size||e._used_inner_class)&&n!==(n="icon-i "+t.familyClass+t.icon+" "+t.internal_size+" "+t._used_inner_class+" svelte-1xagj2n")&&(a.className=n),e._used_inner_style&&(a.style.cssText=t._used_inner_style),(e.size||e.color||e.icon_class)&&i!==(i="icon "+(t.size?"is-"+t.size:"")+" "+(t.color?"has-text-"+t.color:"")+" "+t.icon_class+" svelte-1xagj2n")&&(s.className=i),e.icon_style&&(s.style.cssText=t.icon_style)},d(e){e&&detachNode(s)}}}function Icon(e){init(this,e),this._state=assign(data$3(),e.data),this._recompute({inner_class:1,fa_class:1,inner_style:1,fa_style:1,_system_settings:1,family:1,usedFamily:1,size:1},this._state),this._intro=!0,this._fragment=create_main_fragment$3(this,this._state),this.root._oncreate.push(()=>{oncreate.call(this),this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}function data$4(){return{title:"",subtitle:"",style:"",inner_style:"",cy:"",collapse_icon:"caret-right",collapsible:!1,collapsed:!1,relative:!1,has_toolbar:!0,has_center:!0}}assign(Notification.prototype,proto),assign(Notification.prototype,methods),assign(Icon.prototype,proto),Icon.prototype._recompute=function(e,t){(e.inner_class||e.fa_class)&&this._differs(t._used_inner_class,t._used_inner_class=_used_inner_class(t))&&(e._used_inner_class=!0),(e.inner_style||e.fa_style)&&this._differs(t._used_inner_style,t._used_inner_style=_used_inner_style(t))&&(e._used_inner_style=!0),(e._system_settings||e.family)&&this._differs(t.usedFamily,t.usedFamily=usedFamily(t))&&(e.usedFamily=!0),e.usedFamily&&this._differs(t.familyClass,t.familyClass=familyClass(t))&&(e.familyClass=!0),e.size&&this._differs(t.internal_size,t.internal_size=internal_size(t))&&(e.internal_size=!0)};var methods$1={toggle(){let{collapsible:e,collapsed:t}=this.get();e&&(t=!t,this.set({collapsed:t}))}};function create_main_fragment$4(e,t){var s,a,n,i,r,c,o=e._slotted.default,l=""!=t.title&&create_if_block$2(e,t);return{c(){s=createElement("div"),l&&l.c(),a=createText("\r\n  "),n=createElement("div"),(i=createElement("div")).className="panel-block is-clearfix",i.style.cssText=r=t.inner_style+" "+(t.relative?"position:relative":""),n.className="panel-content-outer",s.className=c="panel "+(t.collapsible?"collapsible":"")+" "+(t.collapsed?"collapsed":""),s.style.cssText=t.style,s.dataset.cy=t.cy},m(e,t){insert(e,s,t),l&&l.m(s,null),append(s,a),append(s,n),append(n,i),o&&append(i,o)},p(t,n){""!=n.title?l?l.p(t,n):((l=create_if_block$2(e,n)).c(),l.m(s,a)):l&&(l.d(1),l=null),(t.inner_style||t.relative)&&r!==(r=n.inner_style+" "+(n.relative?"position:relative":""))&&(i.style.cssText=r),(t.collapsible||t.collapsed)&&c!==(c="panel "+(n.collapsible?"collapsible":"")+" "+(n.collapsed?"collapsed":""))&&(s.className=c),t.style&&(s.style.cssText=n.style),t.cy&&(s.dataset.cy=n.cy)},d(e){e&&detachNode(s),l&&l.d(),o&&reinsertChildren(i,o)}}}function create_if_block$2(e,t){var s,a,n,i,r,c,o,l,_,d,m,u,h,f,p=t.has_center&&create_if_block_2(e,t),g=t.has_toolbar&&create_if_block_1(e,t),y={icon:t.collapse_icon},v=new Icon({root:e.root,store:e.store,data:y});function b(t){e.toggle()}return{c(){s=createElement("div"),a=createElement("div"),n=createElement("div"),i=createElement("div"),r=createElement("h2"),c=createText("\r\n      "),o=createElement("div"),p&&p.c(),l=createText("\r\n      "),_=createElement("div"),g&&g.c(),d=createText("\r\n        "),m=createElement("div"),u=createElement("h2"),h=createText("\r\n        "),f=createElement("span"),v._fragment.c(),r.className="subtitle",i.className="level-item",n.className="level-left",o.className="level-item",u.className="subtitle is-6",m.className="level-item",f.className="collapsor level-item",_.className="level-right",a.className="level is-mobile",addListener(s,"click",b),s.className="panel-heading"},m(e,y){insert(e,s,y),append(s,a),append(a,n),append(n,i),append(i,r),r.innerHTML=t.title,append(a,c),append(a,o),p&&p.m(o,null),append(a,l),append(a,_),g&&g.m(_,null),append(_,d),append(_,m),append(m,u),u.innerHTML=t.subtitle,append(_,h),append(_,f),v._mount(f,null)},p(t,s){t.title&&(r.innerHTML=s.title),s.has_center?p||((p=create_if_block_2(e,s)).c(),p.m(o,null)):p&&(p.d(1),p=null),s.has_toolbar?g||((g=create_if_block_1(e,s)).c(),g.m(_,d)):g&&(g.d(1),g=null),t.subtitle&&(u.innerHTML=s.subtitle);var a={};t.collapse_icon&&(a.icon=s.collapse_icon),v._set(a)},d(e){e&&detachNode(s),p&&p.d(),g&&g.d(),v.destroy(),removeListener(s,"click",b)}}}function create_if_block_2(e,t){var s,a,n=e._slotted.center;return{c:noop,m(e,t){n&&(insert(e,s||(s=createComment()),t),insert(e,n,t),insert(e,a||(a=createComment()),t))},d(e){n&&(reinsertBetween(s,a,n),detachNode(s),detachNode(a))}}}function create_if_block_1(e,t){var s,a=e._slotted.toolbar;return{c(){(s=createElement("div")).className="level-item"},m(e,t){insert(e,s,t),a&&append(s,a)},d(e){e&&detachNode(s),a&&reinsertChildren(s,a)}}}function Panel$$1(e){init(this,e),this._state=assign(data$4(),e.data),this._intro=!0,this._slotted=e.slots||{},this._fragment=create_main_fragment$4(this,this._state),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}function data$5(){return{size:"",is_active:!1,closable:!0,close_on_click_outside:!1,style:"",inner_style:"",class:"",inner_class:"",cy:""}}assign(Panel$$1.prototype,proto),assign(Panel$$1.prototype,methods$1);var methods$2={close(){this.set({is_active:!1})},open(){this.set({is_active:!0})}};function oncreate$1(){this.on("close",()=>{this.close()}),this.on("clickOutside",()=>{let{close_on_click_outside:e,closable:t}=this.get();e&&t&&this.fire("close")})}function create_main_fragment$5(e,t){var s,a,n,i,r,c,o,l,_=e._slotted.default;function d(t){e.fire("clickOutside")}var m=t.closable&&create_if_block$3(e,t);return{c(){s=createElement("div"),a=createElement("div"),n=createText("\r\n  "),i=createElement("div"),r=createElement("div"),o=createText("\r\n  "),m&&m.c(),addListener(a,"click",d),a.className="modal-background",r.className="box",i.className=c="modal-content is-"+t.size+" "+t.inner_class,i.style.cssText=t.inner_style,s.className=l="modal "+t.class+" "+(t.is_active?"is-active":""),s.style.cssText=t.style,s.dataset.cy=t.cy},m(e,t){insert(e,s,t),append(s,a),append(s,n),append(s,i),append(i,r),_&&append(r,_),append(s,o),m&&m.m(s,null)},p(t,a){(t.size||t.inner_class)&&c!==(c="modal-content is-"+a.size+" "+a.inner_class)&&(i.className=c),t.inner_style&&(i.style.cssText=a.inner_style),a.closable?m||((m=create_if_block$3(e,a)).c(),m.m(s,null)):m&&(m.d(1),m=null),(t.class||t.is_active)&&l!==(l="modal "+a.class+" "+(a.is_active?"is-active":""))&&(s.className=l),t.style&&(s.style.cssText=a.style),t.cy&&(s.dataset.cy=a.cy)},d(e){e&&detachNode(s),removeListener(a,"click",d),_&&reinsertChildren(r,_),m&&m.d()}}}function create_if_block$3(e,t){var s;function a(t){e.fire("close")}return{c(){s=createElement("button"),addListener(s,"click",a),s.className="modal-close is-large",s.type="button"},m(e,t){insert(e,s,t)},d(e){e&&detachNode(s),removeListener(s,"click",a)}}}function Modal(e){init(this,e),this._state=assign(data$5(),e.data),this._intro=!0,this._slotted=e.slots||{},this._fragment=create_main_fragment$5(this,this._state),this.root._oncreate.push(()=>{oncreate$1.call(this),this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}function data$6(){return{title:"",size:"",is_active:!1,closable:!0,close_on_click_outside:!1,has_footer:!0,style:"",inner_style:"",class:"",inner_class:"",cy:""}}assign(Modal.prototype,proto),assign(Modal.prototype,methods$2);var methods$3={close(){this.set({is_active:!1})},open(){this.set({is_active:!0})}};function oncreate$2(){this.on("close",()=>{this.close()}),this.on("clickOutside",()=>{let{close_on_click_outside:e,closable:t}=this.get();e&&t&&this.fire("close")})}function create_main_fragment$6(e,t){var s,a,n,i,r,c,o,l,_,d,m,u,h,f=e._slotted.title,p=e._slotted.default;function g(t){e.fire("clickOutside")}var y=t.closable&&create_if_block_1$1(e,t),v=t.has_footer&&create_if_block$4(e,t);return{c(){s=createElement("div"),a=createElement("div"),n=createText("\r\n  "),i=createElement("div"),r=createElement("div"),c=createElement("div"),f||(o=createText(t.title)),l=createText("\r\n      "),y&&y.c(),_=createText("\r\n    "),d=createElement("div"),m=createText("\r\n    "),v&&v.c(),addListener(a,"click",g),a.className="modal-background",c.className="modal-card-title",r.className="modal-card-head",d.className="modal-card-body",i.className=u="modal-card is-"+t.size+" "+t.inner_class,i.style.cssText=t.inner_style,s.className=h="modal "+t.class+" "+(t.is_active?"is-active":""),s.style.cssText=t.style,s.dataset.cy=t.cy},m(e,t){insert(e,s,t),append(s,a),append(s,n),append(s,i),append(i,r),append(r,c),append(c,f||o),append(r,l),y&&y.m(r,null),append(i,_),append(i,d),p&&append(d,p),append(i,m),v&&v.m(i,null)},p(t,a){f||t.title&&setData(o,a.title),a.closable?y||((y=create_if_block_1$1(e,a)).c(),y.m(r,null)):y&&(y.d(1),y=null),a.has_footer?v||((v=create_if_block$4(e,a)).c(),v.m(i,null)):v&&(v.d(1),v=null),(t.size||t.inner_class)&&u!==(u="modal-card is-"+a.size+" "+a.inner_class)&&(i.className=u),t.inner_style&&(i.style.cssText=a.inner_style),(t.class||t.is_active)&&h!==(h="modal "+a.class+" "+(a.is_active?"is-active":""))&&(s.className=h),t.style&&(s.style.cssText=a.style),t.cy&&(s.dataset.cy=a.cy)},d(e){e&&detachNode(s),removeListener(a,"click",g),f&&reinsertChildren(c,f),y&&y.d(),p&&reinsertChildren(d,p),v&&v.d()}}}function create_if_block_1$1(e,t){var s;function a(t){e.fire("close")}return{c(){s=createElement("button"),addListener(s,"click",a),s.className="delete",s.type="button"},m(e,t){insert(e,s,t)},d(e){e&&detachNode(s),removeListener(s,"click",a)}}}function create_if_block$4(e,t){var s,a=e._slotted.footer;return{c(){(s=createElement("div")).className="modal-card-foot"},m(e,t){insert(e,s,t),a&&append(s,a)},d(e){e&&detachNode(s),a&&reinsertChildren(s,a)}}}function CardModal(e){init(this,e),this._state=assign(data$6(),e.data),this._intro=!0,this._slotted=e.slots||{},this._fragment=create_main_fragment$6(this,this._state),this.root._oncreate.push(()=>{oncreate$2.call(this),this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}function main_color({color:e}){return"is-"+e}function icon_size({size:e}){switch(e){case"large":return"";default:return"small"}}function data$7(){return{classes:"",button_class:"",text:"",size:"",icon:"check",color:"info",cy:"",doing_icon:"hourglass",doing_text:"Please Wait...",done_icon:"check",done_text:"Done",confirm:!1,doing:!1,done:!1,error:!1,context:null,icon_only:!1,disabled:!1}}assign(CardModal.prototype,proto),assign(CardModal.prototype,methods$3);var methods$4={cancel:function(e){e&&e.preventDefault(),e&&e.stopPropagation(),this.set({confirm:!1})},doit:function(e){e&&e.preventDefault(),e&&e.stopPropagation();var t=this.get().confirm;t?t&&this.fire("do",this):this.set({confirm:!0})},doing:function(){this.set({confirm:!1,doing:!0,done:!1,error:!1})},done:function(){var e=this;e.set({doing:!1,done:!0,error:!1}),setTimeout(function(){e.set({done:!1}),e.fire("done")},1500)},error:function(){var e=this;e.set({done:!1,doing:!1,error:!0}),setTimeout(function(){e.set({error:!1}),e.fire("error")},1500)}};function onstate$2({changed:e,current:t,previous:s}){e.type&&this.set({color:t.type})}function create_main_fragment$7(e,t){var s,a,n,i,r,c,o,l,_=t.confirm&&create_if_block_9(e,t);function d(e){return e.done?create_if_block$5:e.doing?create_if_block_2$1:e.confirm?create_if_block_4:e.error?create_if_block_6:e.confirm||e.doing||e.done||e.error?void 0:create_if_block_7}var m=d(t),u=m&&m(e,t);function h(t){e.doit(t)}return{c(){s=createElement("div"),a=createElement("p"),_&&_.c(),n=createText("\r\n  "),i=createElement("p"),r=createElement("button"),u&&u.c(),a.className="control",addListener(r,"click",h),r.className=c="button is-"+t.size+" "+(t.doing?t.main_color+" is-loading":t.error?"is-danger is-shaking":t.done?t.main_color:t.confirm?"is-outlined "+t.main_color:t.main_color)+" "+t.button_class,r.type="button",r.disabled=o=t.done||t.doing||t.error||t.disabled,i.className="control is-expanded",s.className=l="field "+(t.confirm?"has-addons":"")+" "+t.classes,s.dataset.cy=t.cy},m(e,t){insert(e,s,t),append(s,a),_&&_.m(a,null),append(s,n),append(s,i),append(i,r),u&&u.m(r,null)},p(t,n){n.confirm?_?_.p(t,n):((_=create_if_block_9(e,n)).c(),_.m(a,null)):_&&(_.d(1),_=null),m===(m=d(n))&&u?u.p(t,n):(u&&u.d(1),(u=m&&m(e,n))&&u.c(),u&&u.m(r,null)),(t.size||t.doing||t.main_color||t.error||t.done||t.confirm||t.button_class)&&c!==(c="button is-"+n.size+" "+(n.doing?n.main_color+" is-loading":n.error?"is-danger is-shaking":n.done?n.main_color:n.confirm?"is-outlined "+n.main_color:n.main_color)+" "+n.button_class)&&(r.className=c),(t.done||t.doing||t.error||t.disabled)&&o!==(o=n.done||n.doing||n.error||n.disabled)&&(r.disabled=o),(t.confirm||t.classes)&&l!==(l="field "+(n.confirm?"has-addons":"")+" "+n.classes)&&(s.className=l),t.cy&&(s.dataset.cy=n.cy)},d(e){e&&detachNode(s),_&&_.d(),u&&u.d(),removeListener(r,"click",h)}}}function create_if_block_9(e,t){var s,a,n;function i(t){e.cancel(t)}return{c(){s=createElement("button"),a=createText("Cancel"),addListener(s,"click",i),s.className=n="button is-success is-outlined is-shadowless is-"+t.size+" "+t.button_class,s.type="button"},m(e,t){insert(e,s,t),append(s,a)},p(e,t){(e.size||e.button_class)&&n!==(n="button is-success is-outlined is-shadowless is-"+t.size+" "+t.button_class)&&(s.className=n)},d(e){e&&detachNode(s),removeListener(s,"click",i)}}}function create_if_block_7(e,t){var s,a={size:t.icon_size,icon:t.icon},n=new Icon({root:e.root,store:e.store,data:a}),i=!t.icon_only&&create_if_block_8(e,t);return{c(){n._fragment.c(),i&&i.c(),s=createComment()},m(e,t){n._mount(e,t),i&&i.m(e,t),insert(e,s,t)},p(t,a){var r={};t.icon_size&&(r.size=a.icon_size),t.icon&&(r.icon=a.icon),n._set(r),a.icon_only?i&&(i.d(1),i=null):i?i.p(t,a):((i=create_if_block_8(e,a)).c(),i.m(s.parentNode,s))},d(e){n.destroy(e),i&&i.d(e),e&&detachNode(s)}}}function create_if_block_6(e,t){var s,a,n={size:t.icon_size,icon:"exclamation"},i=new Icon({root:e.root,store:e.store,data:n});return{c(){i._fragment.c(),s=createText(" "),(a=createElement("span")).textContent="Failed"},m(e,t){i._mount(e,t),insert(e,s,t),insert(e,a,t)},p(e,t){var s={};e.icon_size&&(s.size=t.icon_size),i._set(s)},d(e){i.destroy(e),e&&(detachNode(s),detachNode(a))}}}function create_if_block_4(e,t){var s,a;function n(e){return e.icon_only?create_else_block:create_if_block_5}var i=n(t),r=i(e,t),c={size:t.icon_size,icon:"question"},o=new Icon({root:e.root,store:e.store,data:c});return{c(){s=createElement("span"),r.c(),a=createText(" "),o._fragment.c()},m(e,t){insert(e,s,t),r.m(s,null),insert(e,a,t),o._mount(e,t)},p(t,a){i!==(i=n(a))&&(r.d(1),(r=i(e,a)).c(),r.m(s,null));var c={};t.icon_size&&(c.size=a.icon_size),o._set(c)},d(e){e&&detachNode(s),r.d(),e&&detachNode(a),o.destroy(e)}}}function create_if_block_2$1(e,t){var s,a={size:t.icon_size,icon:t.doing_icon},n=new Icon({root:e.root,store:e.store,data:a}),i=!t.icon_only&&create_if_block_3(e,t);return{c(){n._fragment.c(),i&&i.c(),s=createComment()},m(e,t){n._mount(e,t),i&&i.m(e,t),insert(e,s,t)},p(t,a){var r={};t.icon_size&&(r.size=a.icon_size),t.doing_icon&&(r.icon=a.doing_icon),n._set(r),a.icon_only?i&&(i.d(1),i=null):i?i.p(t,a):((i=create_if_block_3(e,a)).c(),i.m(s.parentNode,s))},d(e){n.destroy(e),i&&i.d(e),e&&detachNode(s)}}}function create_if_block$5(e,t){var s,a={size:t.icon_size,icon:t.done_icon},n=new Icon({root:e.root,store:e.store,data:a}),i=!t.icon_only&&create_if_block_1$2(e,t);return{c(){n._fragment.c(),i&&i.c(),s=createComment()},m(e,t){n._mount(e,t),i&&i.m(e,t),insert(e,s,t)},p(t,a){var r={};t.icon_size&&(r.size=a.icon_size),t.done_icon&&(r.icon=a.done_icon),n._set(r),a.icon_only?i&&(i.d(1),i=null):i?i.p(t,a):((i=create_if_block_1$2(e,a)).c(),i.m(s.parentNode,s))},d(e){n.destroy(e),i&&i.d(e),e&&detachNode(s)}}}function create_if_block_8(e,t){var s,a;return{c(){s=createElement("span"),a=createText(t.text)},m(e,t){insert(e,s,t),append(s,a)},p(e,t){e.text&&setData(a,t.text)},d(e){e&&detachNode(s)}}}function create_else_block(e,t){var s;return{c(){s=createText("Sure")},m(e,t){insert(e,s,t)},d(e){e&&detachNode(s)}}}function create_if_block_5(e,t){var s;return{c(){s=createText("Are you sure")},m(e,t){insert(e,s,t)},d(e){e&&detachNode(s)}}}function create_if_block_3(e,t){var s,a;return{c(){s=createElement("span"),a=createText(t.doing_text)},m(e,t){insert(e,s,t),append(s,a)},p(e,t){e.doing_text&&setData(a,t.doing_text)},d(e){e&&detachNode(s)}}}function create_if_block_1$2(e,t){var s,a;return{c(){s=createElement("span"),a=createText(t.done_text)},m(e,t){insert(e,s,t),append(s,a)},p(e,t){e.done_text&&setData(a,t.done_text)},d(e){e&&detachNode(s)}}}function ConfirmButton(e){init(this,e),this._state=assign(data$7(),e.data),this._recompute({color:1,size:1},this._state),this._intro=!0,this._handlers.state=[onstate$2],onstate$2.call(this,{changed:assignTrue({},this._state),current:this._state}),this._fragment=create_main_fragment$7(this,this._state),this.root._oncreate.push(()=>{this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}function properties(e){return e}function data$8(){return{classes:"",button_class:"",text:"Delete",size:"",icon:"minus-circle",color:"danger",cy:"",doing_icon:"hourglass",doing_text:"Deleting...",done_icon:"check",done_text:"Deleted",context:null,icon_only:!1,disabled:!1}}function onstate$3({changed:e,current:t,previous:s}){e.type&&this.set({color:t.type})}function create_main_fragment$8(e,t){for(var s=[t.properties],a={},n=0;n<s.length;n+=1)a=assign(a,s[n]);var i=new ConfirmButton({root:e.root,store:e.store,data:a});return i.on("error",function(t){e.fire("error",t)}),i.on("do",function(t){e.fire("erase",t)}),i.on("done",function(t){e.fire("erased",t)}),{c(){i._fragment.c()},m(e,t){i._mount(e,t)},p(e,t){var a=e.properties?getSpreadUpdate(s,[t.properties]):{};i._set(a)},d(e){i.destroy(e)}}}function DeleteButton(e){init(this,e),this._state=assign(data$8(),e.data),this._recompute({},this._state),this._intro=!0,this._handlers.state=[onstate$3],onstate$3.call(this,{changed:assignTrue({},this._state),current:this._state}),this._fragment=create_main_fragment$8(this,this._state),this.root._oncreate.push(()=>{this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}function err_text({text:e,error_text:t}){return""==t?e:t}function icon_size$1({size:e}){switch(e){case"large":return"";default:return"small"}}function data$9(){return{classes:"",size:"",color:"primary",text:"Save Changes",saved_text:"Saved",error_text:"Failed to Save",icon:"save",cy:"submit",tracker:{saving:!1,saved:!1,error:!1},icon_only:!1,disabled:!1}}function create_main_fragment$9(e,t){var s,a;function n(e){return e.tracker.saved?create_if_block$6:e.tracker.error?create_if_block_2$2:create_else_block$1}var i=n(t),r=i(e,t);return{c(){s=createElement("button"),r.c(),s.className=a="button "+t.classes+" is-"+t.size+" "+(t.tracker.saving?"is-loading is-"+t.color:t.tracker.error?"is-danger":t.tracker.saved?"is-success":"is-"+t.color),s.type="submit",s.disabled=t.disabled,s.dataset.cy=t.cy},m(e,t){insert(e,s,t),r.m(s,null)},p(t,c){i===(i=n(c))&&r?r.p(t,c):(r.d(1),(r=i(e,c)).c(),r.m(s,null)),(t.classes||t.size||t.tracker||t.color)&&a!==(a="button "+c.classes+" is-"+c.size+" "+(c.tracker.saving?"is-loading is-"+c.color:c.tracker.error?"is-danger":c.tracker.saved?"is-success":"is-"+c.color))&&(s.className=a),t.disabled&&(s.disabled=c.disabled),t.cy&&(s.dataset.cy=c.cy)},d(e){e&&detachNode(s),r.d()}}}function create_else_block$1(e,t){var s,a,n={icon:t.icon,size:t.icon_size},i=new Icon({root:e.root,store:e.store,data:n}),r=!t.icon_only&&create_if_block_4$1(e,t);return{c(){i._fragment.c(),s=createText(" "),r&&r.c(),a=createComment()},m(e,t){i._mount(e,t),insert(e,s,t),r&&r.m(e,t),insert(e,a,t)},p(t,s){var n={};t.icon&&(n.icon=s.icon),t.icon_size&&(n.size=s.icon_size),i._set(n),s.icon_only?r&&(r.d(1),r=null):r?r.p(t,s):((r=create_if_block_4$1(e,s)).c(),r.m(a.parentNode,a))},d(e){i.destroy(e),e&&detachNode(s),r&&r.d(e),e&&detachNode(a)}}}function create_if_block_2$2(e,t){var s,a,n={icon:"exclamation",size:t.icon_size},i=new Icon({root:e.root,store:e.store,data:n}),r=!t.icon_only&&create_if_block_3$1(e,t);return{c(){i._fragment.c(),s=createText(" "),r&&r.c(),a=createComment()},m(e,t){i._mount(e,t),insert(e,s,t),r&&r.m(e,t),insert(e,a,t)},p(t,s){var n={};t.icon_size&&(n.size=s.icon_size),i._set(n),s.icon_only?r&&(r.d(1),r=null):r?r.p(t,s):((r=create_if_block_3$1(e,s)).c(),r.m(a.parentNode,a))},d(e){i.destroy(e),e&&detachNode(s),r&&r.d(e),e&&detachNode(a)}}}function create_if_block$6(e,t){var s,a,n={icon:"check",size:t.icon_size},i=new Icon({root:e.root,store:e.store,data:n}),r=!t.icon_only&&create_if_block_1$3(e,t);return{c(){i._fragment.c(),s=createText(" "),r&&r.c(),a=createComment()},m(e,t){i._mount(e,t),insert(e,s,t),r&&r.m(e,t),insert(e,a,t)},p(t,s){var n={};t.icon_size&&(n.size=s.icon_size),i._set(n),s.icon_only?r&&(r.d(1),r=null):r?r.p(t,s):((r=create_if_block_1$3(e,s)).c(),r.m(a.parentNode,a))},d(e){i.destroy(e),e&&detachNode(s),r&&r.d(e),e&&detachNode(a)}}}function create_if_block_4$1(e,t){var s,a;return{c(){s=createElement("span"),a=createText(t.text)},m(e,t){insert(e,s,t),append(s,a)},p(e,t){e.text&&setData(a,t.text)},d(e){e&&detachNode(s)}}}function create_if_block_3$1(e,t){var s,a;return{c(){s=createElement("span"),a=createText(t.err_text)},m(e,t){insert(e,s,t),append(s,a)},p(e,t){e.err_text&&setData(a,t.err_text)},d(e){e&&detachNode(s)}}}function create_if_block_1$3(e,t){var s,a;return{c(){s=createElement("span"),a=createText(t.saved_text)},m(e,t){insert(e,s,t),append(s,a)},p(e,t){e.saved_text&&setData(a,t.saved_text)},d(e){e&&detachNode(s)}}}function SubmitButton(e){init(this,e),this._state=assign(data$9(),e.data),this._recompute({text:1,error_text:1,size:1},this._state),this._intro=!0,this._fragment=create_main_fragment$9(this,this._state),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}assign(ConfirmButton.prototype,proto),assign(ConfirmButton.prototype,methods$4),ConfirmButton.prototype._recompute=function(e,t){e.color&&this._differs(t.main_color,t.main_color=main_color(t))&&(e.main_color=!0),e.size&&this._differs(t.icon_size,t.icon_size=icon_size(t))&&(e.icon_size=!0)},assign(DeleteButton.prototype,proto),DeleteButton.prototype._recompute=function(e,t){this._differs(t.properties,t.properties=properties(exclude(t,"properties")))&&(e.properties=!0)},assign(SubmitButton.prototype,proto),SubmitButton.prototype._recompute=function(e,t){(e.text||e.error_text)&&this._differs(t.err_text,t.err_text=err_text(t))&&(e.err_text=!0),e.size&&this._differs(t.icon_size,t.icon_size=icon_size$1(t))&&(e.icon_size=!0)};export{ConfirmButton as a,SubmitButton as b,DeleteButton as c};
//# sourceMappingURL=chunk-c5026b61.js.map
