var K_ENV="prod",K_ENV_DEV="dev",K_ENV_TEST="test",K_ENV_PROD="prod";import{s as baseModel,w as addListener,a as append,b as assign,c as assignTrue,z as createComment,d as createElement,e as createFragment,f as createText,A as destroyEach,g as detachNode,h as flush,i as init,j as insert,k as noop,l as proto,x as removeListener,y as setAttribute,B as setData,o as Message,E as Notification,D as Panel,n as Icon,q as ViewScaffold,r as PageTitle}from"./chunk-5d88ab61.js";import{b as SubmitButton}from"./chunk-c5026b61.js";import{a as PageTabBar}from"./chunk-92dc7f50.js";var Model=new class extends baseModel{constructor(){super(),this.apiEndpoint="/settings"}};function data(){return{is_loading:!0,is_error:!1,error_message:"",data:[],page:{title:"Settings",icon:"cog",subtitle:"Modify application and user specific settings"},tracker:{saving:!1,saved:!1,error:!1}}}var methods={load(){var e=this;e.set({is_loading:!0,is_error:!1}),e.model.getAll({limit:1e3}).then(function(t){e.set({is_loading:!1,meta:t._meta,data:t.response})}).catch(function(t){var a="";void 0!==t&&void 0!==t.response&&void 0!==t.response.records&&(a=t.response.records.userMessage),e.set({is_error:!0,is_loading:!1,error_message:a})})}};function oncreate(){this.model=Model,this.load()}function get_each_context(e,t,a){const r=Object.create(e);return r.setting=t[a],r.each_value=t,r.setting_index=a,r}function create_main_fragment(e,t){var a,r,s,n,o,i,c,l,d,p=new Icon({root:e.root,store:e.store,data:{size:"small",icon:"cogs"}}),_=new PageTabBar({root:e.root,store:e.store,slots:{default:createFragment()}}),m={page:t.page},g=new PageTitle({root:e.root,store:e.store,slots:{default:createFragment()},data:m}),u=t.tracker.error&&create_if_block_1(e,t);function f(e){return e.data.length?create_else_block:create_if_block}var h=f(t),v=h(e,t),b=new Panel({root:e.root,store:e.store,slots:{default:createFragment()},data:{title:"Update Settings"}});function k(t){e.save(t)}var y={is_loading:t.is_loading,is_error:t.is_error,error_message:t.error_message},E=new ViewScaffold({root:e.root,store:e.store,slots:{default:createFragment()},data:y});return{c(){a=createElement("div"),r=createElement("li"),s=createElement("a"),p._fragment.c(),n=createText("\r\n          "),(o=createElement("span")).textContent="Settings",_._fragment.c(),g._fragment.c(),i=createText("\r\n\r\n  "),u&&u.c(),c=createText("\r\n\r\n    "),l=createElement("form"),v.c(),d=createComment(),b._fragment.c(),E._fragment.c(),s.href="#settings",r.className="is-active",addListener(l,"submit",k),a.className="page-content"},m(e,t){insert(e,a,t),append(_._slotted.default,r),append(r,s),p._mount(s,null),append(s,n),append(s,o),_._mount(g._slotted.default,null),g._mount(a,null),append(a,i),u&&u.m(E._slotted.default,null),append(E._slotted.default,c),append(E._slotted.default,l),v.m(b._slotted.default,null),append(b._slotted.default,d),b._mount(l,null),E._mount(a,null)},p(t,a){var r={};t.page&&(r.page=a.page),g._set(r),a.tracker.error?u||((u=create_if_block_1(e,a)).c(),u.m(c.parentNode,c)):u&&(u.d(1),u=null),h===(h=f(a))&&v?v.p(t,a):(v.d(1),(v=h(e,a)).c(),v.m(d.parentNode,d));var s={};t.is_loading&&(s.is_loading=a.is_loading),t.is_error&&(s.is_error=a.is_error),t.error_message&&(s.error_message=a.error_message),E._set(s)},d(e){e&&detachNode(a),p.destroy(),_.destroy(),g.destroy(),u&&u.d(),v.d(),b.destroy(),removeListener(l,"submit",k),E.destroy()}}}function create_if_block_1(e,t){var a,r=new Notification({root:e.root,store:e.store,slots:{default:createFragment()},data:{type:"danger"}});return{c(){a=createText("There was an error updating settings"),r._fragment.c()},m(e,t){append(r._slotted.default,a),r._mount(e,t)},d(e){r.destroy(e)}}}function create_else_block(e,t){for(var a,r,s,n,o,i,c,l={},d=t.displayed_settings,p=[],_=0;_<d.length;_+=1)p[_]=create_each_block(e,get_each_context(t,d,_));var m={icon_size:"small",classes:"is-primary is-pulled-right"};void 0!==t.tracker&&(m.tracker=t.tracker,l.tracker=!0);var g=new SubmitButton({root:e.root,store:e.store,data:m,_bind(t,a){var r={};!l.tracker&&t.tracker&&(r.tracker=a.tracker),e._set(r),l={}}});return e.root._beforecreate.push(()=>{g._bind({tracker:1},g.get())}),{c(){a=createElement("div");for(var e=0;e<p.length;e+=1)p[e].c();r=createText("\r\n\r\n\r\n          "),s=createElement("div"),n=createElement("div"),(o=createElement("label")).textContent=" ",i=createText("\r\n              "),c=createElement("p"),g._fragment.c(),o.className="label",c.className="control",n.className="field",s.className="column",a.className="columns is-multiline"},m(e,t){insert(e,a,t);for(var l=0;l<p.length;l+=1)p[l].m(a,null);append(a,r),append(a,s),append(s,n),append(n,o),append(n,i),append(n,c),g._mount(c,null)},p(s,n){if(t=n,s.displayed_settings){d=t.displayed_settings;for(var o=0;o<d.length;o+=1){const n=get_each_context(t,d,o);p[o]?p[o].p(s,n):(p[o]=create_each_block(e,n),p[o].c(),p[o].m(a,r))}for(;o<p.length;o+=1)p[o].d(1);p.length=d.length}var i={};!l.tracker&&s.tracker&&(i.tracker=t.tracker,l.tracker=void 0!==t.tracker),g._set(i),l={}},d(e){e&&detachNode(a),destroyEach(p,e),g.destroy()}}}function create_if_block(e,t){var a;return{c(){(a=createElement("div")).innerHTML='<div class="message-body">\n\t\t\t            No settings to modify.\n\t\t\t          </div>',a.className="message is-primary"},m(e,t){insert(e,a,t)},p:noop,d(e){e&&detachNode(a)}}}function create_each_block(e,t){var a,r,s,n,o,i,c,l,d,p,_=t.setting.display_name,m=!1,g=t.setting.description;function u(){m=!0,t.each_value[t.setting_index].value=c.value,e.set({displayed_settings:t.displayed_settings}),m=!1}return{c(){a=createElement("div"),r=createElement("div"),s=createElement("label"),n=createText(_),o=createText("\r\n                "),i=createElement("p"),c=createElement("input"),l=createText("\r\n                "),d=createElement("p"),p=createText(g),s.className="label",addListener(c,"input",u),c.className="input",setAttribute(c,"type","text"),i.className="control",d.className="help",r.className="field",a.className="column is-6"},m(e,_){insert(e,a,_),append(a,r),append(r,s),append(s,n),append(r,o),append(r,i),append(i,c),c.value=t.setting.value,append(r,l),append(r,d),append(d,p)},p(e,a){t=a,e.displayed_settings&&_!==(_=t.setting.display_name)&&setData(n,_),!m&&e.displayed_settings&&(c.value=t.setting.value),e.displayed_settings&&g!==(g=t.setting.description)&&setData(p,g)},d(e){e&&detachNode(a),removeListener(c,"input",u)}}}function Settings(e){init(this,e),this._state=assign(data(),e.data),this._intro=!0,this._fragment=create_main_fragment(this,this._state),this.root._oncreate.push(()=>{oncreate.call(this),this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}assign(Settings.prototype,proto),assign(Settings.prototype,methods);export default Settings;
//# sourceMappingURL=Settings.js.map
