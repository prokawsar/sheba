var K_ENV="prod",K_ENV_DEV="dev",K_ENV_TEST="test",K_ENV_PROD="prod";import{A as addListener,a as append,b as assign,c as assignTrue,u as createComment,d as createElement,e as createFragment,f as createText,v as destroyEach,g as detachNode,h as flush,i as init,j as insert,l as proto,m as removeFromStore,B as removeListener,Y as selectOption,Z as selectValue,w as setData,D as setStyle,n as Icon,y as Notification,x as Panel,o as Message,q as ViewScaffold,r as PageTitle}from"./chunk-b74ece54.js";import{a as Router}from"./chunk-186691d9.js";import{a as SubmitButton,c as ConfirmButton}from"./chunk-a0c19dba.js";import{a as SearchableSelect}from"./chunk-da8d06c7.js";import{a as Remedies}from"./chunk-3b9a27cc.js";import{a as Model}from"./chunk-107a8f39.js";import{a as PatientAdd,e as PatientSearch,b as Sections}from"./chunk-5c7d6046.js";import"./chunk-59e2ee62.js";import"./chunk-fd604495.js";import"./chunk-43f78b8a.js";function disabled({data:e,tracker:t}){return t.saving||t.saved||!Object.keys(e).length||!e.patient}function has_searched({remedy_found:e}){return Object.keys(e).length}function user_role({$user:e}){return e&&e.role}function filterFields({remedies:e,omitted_field:t,data:a}){let s=["built","constitution","diathesis","miasm","temperament","temperature_and_weather","thermal_sensitivity","sensation","tendency_take_cold","desires","aversions","birth_history_milestones","tissues","stages_and_states","attacks_and_side","ailments_from","affections","clinical","modalities","mental_state_and_disorders","appearance_and_behavior","attention_and_concentration","expression","consciousness","mood_and_affect","memory","speech","thoughts_and_ideas","perception","intelligence","judgment","fear_and_live_alone","boring","peaceful","anger","hobby","habit","addiction","nutrition","anaemia","cyanosis","dehydration","jaundice","pulse","breathing","peculiar_rare_symptoms"],r=[];if(e.length){for(let[a,d]of Object.entries(e[0]))s.includes(a)||t.includes(a)||r.push(a);return r.push(...s),r}}function loadSymptoms({remedies:e}){let t=[];for(let a in e){Object.entries(e[a]).forEach(([e,a])=>{t[e]=[]});break}for(let a in e){let s=e[a];Object.entries(s).forEach(([e,a])=>{a&&"string"==typeof a&&t[e].push(a.split(","))})}return t}function searchable_withkey({loadSymptoms:e}){let t=[],a=0;return Object.entries(e).forEach(([s,r])=>{let d=e[s];t[s]=[];for(let e in d)if(Array.isArray(d[e]))for(let r in d[e])t[s].push({id:a++,name:d[e][r]})}),t}function searchable_symp({loadSymptoms:e}){let t=[],a=0;for(let s in e){let r=e[s];for(let e in r)if(Array.isArray(r[e]))for(let s in r[e])t.push({id:a++,name:r[e][s]})}return t}function data(){return{is_loading:!1,is_error:!1,error_message:"",is_active_case_modal:!1,selected_section:"",selected_symp:"",selected_keyed_symp:"",result_symptoms:"",remedies:{},data:{},remedy_found:{},omitted_field:["id","name","created","modified","deleted","patient","treatments"],patient:{name:"",age:"",gender:"",phone:"",address:"",patient_type:"none"},tracker:{saving:!1,saved:!1,error:!1},page:{title:"Add Case History",icon:"vcard-o",icon_badge:"plus"},valid:!1}}var methods={loadRemedies(){Remedies.getAll({limit:1e3}).then(e=>{this.set({remedies:e.response})}).catch(e=>{console.log(e)})},reset(e){e&&e.doing(),this.set({data:{}}),this.set({remedy_found:{}}),e&&e.done()},showSymptoms(e){this.set({result_symptoms:e.symptoms,field_name:e.field})},saveHistory(){let{data:e}=this.get();this.set({tracker:{saving:!0,saved:!1,error:!1}}),Model.create(e).then(e=>{this.set({tracker:{saving:!1,saved:!0,error:!1}}),setTimeout(()=>{this.set({tracker:{saved:!1}}),this.reset(),Router.navigate("history")},1500)}).catch(e=>{"406"==e.response.records.errorCode?this.set({error_message:e.response.records.userMessage}):this.set({error_message:"There was an error adding history"}),this.set({tracker:{saving:!1,saved:!1,error:!0}}),setTimeout(()=>{this.set({tracker:{error:!1}})},3e3)})}};function oncreate(){this.on("state",({changed:e,current:t,previous:a})=>{let{data:s,selected_section:r}=this.get();t.selected_keyed_symp!=a.selected_keyed_symp&&(s[r]=s[r]?s[r]+", "+t.selected_keyed_symp:t.selected_keyed_symp,this.set({data:s}))}),this.on("addPatient",e=>{let{data:t}=this.get();t.patient=e,this.set({data:t})}),this.on("showSymptoms",e=>{this.showSymptoms(e)}),this.loadRemedies()}function get_each1_context(e,t,a){const s=Object.create(e);return s.key=t[a][0],s.value=t[a][1],s.i=a,s}function get_each0_context(e,t,a){const s=Object.create(e);return s.key=t[a][0],s.value=t[a][1],s.i=a,s}function create_main_fragment(e,t){var a,s,r,d,n,i,o,c,l={},_={page:t.page},m=new PageTitle({root:e.root,store:e.store,slots:{default:createFragment()},data:_}),p=t.tracker.error&&create_if_block_4(e,t),h={};void 0!==t.patient&&(h.patient=t.patient,l.patient=!0),void 0!==t.data&&(h.data=t.data,l.data=!0);var u=new PatientAdd({root:e.root,store:e.store,data:h,_bind(t,a){var s={};!l.patient&&t.patient&&(s.patient=a.patient),!l.data&&t.data&&(s.data=a.data),e._set(s),l={}}});e.root._beforecreate.push(()=>{u._bind({patient:1,data:1},u.get())}),u.on("addPatient",function(t){e.fire("addPatient",t)});var f=!t.has_searched&&create_if_block_1(e,t),y=!t.has_searched&&create_if_block(e,t),b={is_loading:t.is_loading,is_error:t.is_error,error_message:t.error_message},g=new ViewScaffold({root:e.root,store:e.store,slots:{default:createFragment()},data:b});return{c(){a=createElement("div"),m._fragment.c(),s=createText("\r\n\r\n  "),p&&p.c(),r=createText("\r\n\r\n    "),u._fragment.c(),d=createText("\r\n    "),n=createElement("br"),i=createText("\r\n  "),f&&f.c(),o=createText("\r\n\r\n\r\n\r\n  "),y&&y.c(),c=createComment(),g._fragment.c(),a.className="page-content"},m(e,t){insert(e,a,t),m._mount(a,null),append(a,s),p&&p.m(g._slotted.default,null),append(g._slotted.default,r),u._mount(g._slotted.default,null),append(g._slotted.default,d),append(g._slotted.default,n),append(g._slotted.default,i),f&&f.m(g._slotted.default,null),append(g._slotted.default,o),y&&y.m(g._slotted.default,null),append(g._slotted.default,c),g._mount(a,null)},p(a,s){t=s;var d={};a.page&&(d.page=t.page),m._set(d),t.tracker.error?p?p.p(a,t):((p=create_if_block_4(e,t)).c(),p.m(r.parentNode,r)):p&&(p.d(1),p=null);var n={};!l.patient&&a.patient&&(n.patient=t.patient,l.patient=void 0!==t.patient),!l.data&&a.data&&(n.data=t.data,l.data=void 0!==t.data),u._set(n),l={},t.has_searched?f&&(f.d(1),f=null):f?f.p(a,t):((f=create_if_block_1(e,t)).c(),f.m(o.parentNode,o)),t.has_searched?y&&(y.d(1),y=null):y?y.p(a,t):((y=create_if_block(e,t)).c(),y.m(c.parentNode,c));var i={};a.is_loading&&(i.is_loading=t.is_loading),a.is_error&&(i.is_error=t.is_error),a.error_message&&(i.error_message=t.error_message),g._set(i)},d(e){e&&detachNode(a),m.destroy(),p&&p.d(),u.destroy(),f&&f.d(),y&&y.d(),g.destroy()}}}function create_if_block_4(e,t){var a,s=new Notification({root:e.root,store:e.store,slots:{default:createFragment()},data:{type:"danger"}});return{c(){a=createText(t.error_message),s._fragment.c()},m(e,t){append(s._slotted.default,a),s._mount(e,t)},p(e,t){e.error_message&&setData(a,t.error_message)},d(e){s.destroy(e)}}}function create_if_block_1(e,t){for(var a,s,r,d,n,i,o,c,l,_,m,p,h,u,f,y,b,g,v,k,x,N,E,S,T,j,w,F,O,A,C,P,V,D,H,L,R,K,z=!1,M={},B={},$={},q=t.Object.entries(t.data),I=[],Y=0;Y<q.length;Y+=1)I[Y]=create_each_block_1(e,get_each0_context(t,q,Y));var Z=new Message({root:e.root,store:e.store,slots:{default:createFragment()},data:{title:"Records",color:"light"}}),G=t.Object.entries(t.data),J=[];for(Y=0;Y<G.length;Y+=1)J[Y]=create_each_block(e,get_each1_context(t,G,Y));function Q(){z=!0,e.set({selected_section:selectValue(l)}),z=!1}function U(e){return e.data[e.selected_section]?create_if_block_2:create_else_block}var W=U(t),X=W(e,t),ee={data:t.searchable_withkey[t.selected_section],placeholder:"Choose...",searchKey:"name",searchValue:"id"};void 0!==t.selected_keyed_symp&&(ee._name=t.selected_keyed_symp,M._name=!0);var te=new SearchableSelect({root:e.root,store:e.store,data:ee,_bind(t,a){var s={};!M._name&&t._name&&(s.selected_keyed_symp=a._name),e._set(s),M={}}});e.root._beforecreate.push(()=>{te._bind({_name:1},te.get())});var ae={data:t.searchable_symp,placeholder:"Choose...",searchKey:"name",searchValue:"id"};void 0!==t.selected_symp&&(ae._name=t.selected_symp,B._name=!0);var se=new SearchableSelect({root:e.root,store:e.store,data:ae,_bind(t,a){var s={};!B._name&&t._name&&(s.selected_symp=a._name),e._set(s),B={}}});e.root._beforecreate.push(()=>{se._bind({_name:1},se.get())});var re={classes:"is-primary is-medium is-pulled-right",icon:"save",icon_size:"small",text:"Save History"};void 0!==t.disabled&&(re.disabled=t.disabled,$.disabled=!0),void 0!==t.tracker&&(re.tracker=t.tracker,$.tracker=!0);var de=new SubmitButton({root:e.root,store:e.store,data:re,_bind(t,a){var s={};!$.disabled&&t.disabled&&(s.disabled=a.disabled),!$.tracker&&t.tracker&&(s.tracker=a.tracker),e._set(s),$={}}});e.root._beforecreate.push(()=>{de._bind({disabled:1,tracker:1},de.get())});var ne=new Panel({root:e.root,store:e.store,slots:{default:createFragment()},data:{title:"Patient Symptoms",has_toolbar:!0}});function ie(t){e.saveHistory(t)}return{c(){a=createElement("form"),s=createElement("div"),r=createElement("div");for(var z=0;z<I.length;z+=1)I[z].c();d=createComment(),Z._fragment.c(),n=createText("\r\n\r\n          "),i=createElement("div"),o=createElement("div"),c=createElement("span"),l=createElement("select"),(_=createElement("option")).textContent="Select Type";for(z=0;z<J.length;z+=1)J[z].c();m=createText("\r\n\r\n            "),p=createElement("div"),h=createElement("p"),u=createElement("label"),f=createText(t.selected_section),y=createText("\r\n                "),X.c(),b=createText("\r\n          "),g=createElement("div"),(v=createElement("p")).textContent="Suggestions",k=createText("\r\n\r\n            "),x=createElement("div"),N=createElement("p"),E=createElement("label"),S=createText(t.selected_section),T=createText(" Symptoms in the System"),j=createText("\r\n                  "),te._fragment.c(),w=createText("\r\n\r\n            "),F=createElement("div"),O=createElement("p"),(A=createElement("label")).textContent="All Symptoms in the System",C=createText("\r\n                  "),se._fragment.c(),P=createText("\r\n            "),V=createElement("div"),D=createElement("p"),(H=createElement("label")).textContent=" ",L=createText("\r\n                "),de._fragment.c(),ne._fragment.c(),R=createText("\r\n      "),K=createElement("br"),r.className="column",_.__value="",_.value=_.__value,addListener(l,"change",Q),"selected_section"in t||e.root._beforecreate.push(Q),l.className="input",c.className="select is-fullwidth",o.className="field",u.className="label",setStyle(u,"text-transform","capitalize"),h.className="control",p.className="field",i.className="column",v.className="title is-5",E.className="label",setStyle(E,"text-transform","capitalize"),N.className="control",x.className="field",A.className="label",setStyle(A,"text-transform","capitalize"),O.className="control",F.className="field",H.className="label",D.className="control",V.className="field",g.className="column",s.className="columns",addListener(a,"submit",ie)},m(e,z){insert(e,a,z),append(ne._slotted.default,s),append(s,r);for(var M=0;M<I.length;M+=1)I[M].m(Z._slotted.default,null);append(Z._slotted.default,d),Z._mount(r,null),append(s,n),append(s,i),append(i,o),append(o,c),append(c,l),append(l,_);for(M=0;M<J.length;M+=1)J[M].m(l,null);selectOption(l,t.selected_section),append(i,m),append(i,p),append(p,h),append(h,u),append(u,f),append(h,y),X.m(h,null),append(s,b),append(s,g),append(g,v),append(g,k),append(g,x),append(x,N),append(N,E),append(E,S),append(E,T),append(N,j),te._mount(N,null),append(g,w),append(g,F),append(F,O),append(O,A),append(O,C),se._mount(O,null),append(g,P),append(g,V),append(V,D),append(D,H),append(D,L),de._mount(D,null),ne._mount(a,null),insert(e,R,z),insert(e,K,z)},p(a,s){if(t=s,a.Object||a.data){q=t.Object.entries(t.data);for(var r=0;r<q.length;r+=1){const s=get_each0_context(t,q,r);I[r]?I[r].p(a,s):(I[r]=create_each_block_1(e,s),I[r].c(),I[r].m(d.parentNode,d))}for(;r<I.length;r+=1)I[r].d(1);I.length=q.length}if(a.omitted_field||a.Object||a.data){G=t.Object.entries(t.data);for(r=0;r<G.length;r+=1){const s=get_each1_context(t,G,r);J[r]?J[r].p(a,s):(J[r]=create_each_block(e,s),J[r].c(),J[r].m(l,null))}for(;r<J.length;r+=1)J[r].d(1);J.length=G.length}!z&&a.selected_section&&selectOption(l,t.selected_section),a.selected_section&&setData(f,t.selected_section),W===(W=U(t))&&X?X.p(a,t):(X.d(1),(X=W(e,t)).c(),X.m(h,null)),a.selected_section&&setData(S,t.selected_section);var n={};(a.searchable_withkey||a.selected_section)&&(n.data=t.searchable_withkey[t.selected_section]),!M._name&&a.selected_keyed_symp&&(n._name=t.selected_keyed_symp,M._name=void 0!==t.selected_keyed_symp),te._set(n),M={};var i={};a.searchable_symp&&(i.data=t.searchable_symp),!B._name&&a.selected_symp&&(i._name=t.selected_symp,B._name=void 0!==t.selected_symp),se._set(i),B={};var o={};!$.disabled&&a.disabled&&(o.disabled=t.disabled,$.disabled=void 0!==t.disabled),!$.tracker&&a.tracker&&(o.tracker=t.tracker,$.tracker=void 0!==t.tracker),de._set(o),$={}},d(e){e&&detachNode(a),destroyEach(I,e),Z.destroy(),destroyEach(J,e),removeListener(l,"change",Q),X.d(),te.destroy(),se.destroy(),de.destroy(),ne.destroy(),removeListener(a,"submit",ie),e&&(detachNode(R),detachNode(K))}}}function create_each_block_1(e,t){var a,s,r,d,n,i,o,c=t.key,l=t.value;return{c(){a=createElement("p"),s=createElement("span"),r=createText(c),d=createText(": "),n=createText(l),i=createText(" "),o=createElement("br"),s.className="has-text-weight-bold is-size-5"},m(e,t){insert(e,a,t),append(a,s),append(s,r),append(a,d),append(a,n),insert(e,i,t),insert(e,o,t)},p(e,t){(e.Object||e.data)&&c!==(c=t.key)&&setData(r,c),(e.Object||e.data)&&l!==(l=t.value)&&setData(n,l)},d(e){e&&(detachNode(a),detachNode(i),detachNode(o))}}}function create_if_block_3(e,t){var a,s,r,d=t.key;return{c(){a=createElement("option"),s=createText(d),a.__value=r=t.key,a.value=a.__value},m(e,t){insert(e,a,t),append(a,s)},p(e,t){(e.Object||e.data)&&d!==(d=t.key)&&setData(s,d),(e.Object||e.data)&&r!==(r=t.key)&&(a.__value=r),a.value=a.__value},d(e){e&&detachNode(a)}}}function create_each_block(e,t){var a,s=!t.omitted_field.includes(t.key)&&create_if_block_3(e,t);return{c(){s&&s.c(),a=createComment()},m(e,t){s&&s.m(e,t),insert(e,a,t)},p(t,r){r.omitted_field.includes(r.key)?s&&(s.d(1),s=null):s?s.p(t,r):((s=create_if_block_3(e,r)).c(),s.m(a.parentNode,a))},d(e){s&&s.d(e),e&&detachNode(a)}}}function create_else_block(e,t){var a,s;return{c(){(a=createElement("textarea")).className="textarea",a.readOnly=!0,a.placeholder=s=t.selected_section+"...",setStyle(a,"height","15rem")},m(e,t){insert(e,a,t)},p(e,t){e.selected_section&&s!==(s=t.selected_section+"...")&&(a.placeholder=s)},d(e){e&&detachNode(a)}}}function create_if_block_2(e,t){var a,s,r=!1;function d(){r=!0,t.data[t.selected_section]=a.value,e.set({data:t.data,selected_section:t.selected_section,Object:t.Object}),r=!1}return{c(){a=createElement("textarea"),addListener(a,"input",d),a.className="textarea",a.readOnly=!0,a.placeholder=s=t.selected_section+"...",setStyle(a,"height","15rem")},m(e,s){insert(e,a,s),a.value=t.data[t.selected_section]},p(e,d){t=d,r||!e.data&&!e.selected_section||(a.value=t.data[t.selected_section]),e.selected_section&&s!==(s=t.selected_section+"...")&&(a.placeholder=s)},d(e){e&&detachNode(a),removeListener(a,"input",d)}}}function create_if_block(e,t){var a={},s={};void 0!==t.data&&(s.data=t.data,a.data=!0),void 0!==t.remedies&&(s.remedies=t.remedies,a.remedies=!0),void 0!==t.filterFields&&(s.filterFields=t.filterFields,a.filterFields=!0),void 0!==t.selected_section&&(s.selected_section=t.selected_section,a.selected_section=!0);var r=new Sections({root:e.root,store:e.store,data:s,_bind(t,s){var r={};!a.data&&t.data&&(r.data=s.data),!a.remedies&&t.remedies&&(r.remedies=s.remedies),!a.filterFields&&t.filterFields&&(r.filterFields=s.filterFields),!a.selected_section&&t.selected_section&&(r.selected_section=s.selected_section),e._set(r),a={}}});return e.root._beforecreate.push(()=>{r._bind({data:1,remedies:1,filterFields:1,selected_section:1},r.get())}),r.on("reset",function(t){e.reset(t)}),{c(){r._fragment.c()},m(e,t){r._mount(e,t)},p(e,s){t=s;var d={};!a.data&&e.data&&(d.data=t.data,a.data=void 0!==t.data),!a.remedies&&e.remedies&&(d.remedies=t.remedies,a.remedies=void 0!==t.remedies),!a.filterFields&&e.filterFields&&(d.filterFields=t.filterFields,a.filterFields=void 0!==t.filterFields),!a.selected_section&&e.selected_section&&(d.selected_section=t.selected_section,a.selected_section=void 0!==t.selected_section),r._set(d),a={}},d(e){r.destroy(e)}}}function AddHistory(e){init(this,e),this._state=assign(assign(assign({Object:Object},this.store._init(["user"])),data()),e.data),this.store._add(this,["user"]),this._recompute({data:1,tracker:1,remedy_found:1,$user:1,remedies:1,omitted_field:1,loadSymptoms:1},this._state),this._intro=!0,this._handlers.destroy=[removeFromStore],this._fragment=create_main_fragment(this,this._state),this.root._oncreate.push(()=>{oncreate.call(this),this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}assign(AddHistory.prototype,proto),assign(AddHistory.prototype,methods),AddHistory.prototype._recompute=function(e,t){(e.data||e.tracker)&&this._differs(t.disabled,t.disabled=disabled(t))&&(e.disabled=!0),e.remedy_found&&this._differs(t.has_searched,t.has_searched=has_searched(t))&&(e.has_searched=!0),e.$user&&this._differs(t.user_role,t.user_role=user_role(t))&&(e.user_role=!0),(e.remedies||e.omitted_field||e.data)&&this._differs(t.filterFields,t.filterFields=filterFields(t))&&(e.filterFields=!0),e.remedies&&this._differs(t.loadSymptoms,t.loadSymptoms=loadSymptoms(t))&&(e.loadSymptoms=!0),e.loadSymptoms&&(this._differs(t.searchable_withkey,t.searchable_withkey=searchable_withkey(t))&&(e.searchable_withkey=!0),this._differs(t.searchable_symp,t.searchable_symp=searchable_symp(t))&&(e.searchable_symp=!0))};export default AddHistory;
//# sourceMappingURL=AddHistory.js.map
