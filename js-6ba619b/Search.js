var K_ENV="prod",K_ENV_DEV="dev",K_ENV_TEST="test",K_ENV_PROD="prod";import{A as addListener,a as append,b as assign,c as assignTrue,u as createComment,d as createElement,e as createFragment,f as createText,v as destroyEach,g as detachNode,h as flush,i as init,j as insert,l as proto,m as removeFromStore,B as removeListener,Y as selectOption,Z as selectValue,w as setData,D as setStyle,n as Icon,y as Notification,x as Panel,o as Message,q as ViewScaffold,r as PageTitle}from"./chunk-4772d5c0.js";import{a as Router}from"./chunk-5811b7a5.js";import{a as SubmitButton,c as ConfirmButton}from"./chunk-2d6b7b97.js";import{a as SearchableSelect}from"./chunk-97880b15.js";import{a as Remedies}from"./chunk-53cc462b.js";import{a as Model}from"./chunk-8e97f036.js";import{a as RemedyFound}from"./chunk-48db85c0.js";import{a as Sections,c as LabsTabs,b as _search}from"./chunk-388d4535.js";import{a as PatientAdd}from"./chunk-67e5b763.js";import{a as TreatmentModel,b as AddTreatment}from"./chunk-7dbeb9cc.js";import"./chunk-d6fc968d.js";import"./chunk-ec71f95d.js";import"./chunk-e309d8c9.js";import"./chunk-59506d55.js";function has_searched({remedy_found:e}){return Object.keys(e).length}function user_role({$user:e}){return e&&e.role}function filterFields({remedies:e,omitted_field:t}){let a=["built","constitution","diathesis","miasm","temperament","temperature_and_weather","thermal_sensitivity","sensation","tendency_take_cold","desires","aversions","birth_history_milestones","tissues","stages_and_states","attacks_and_side","ailments_from","affections","clinical","modalities","mental_state_and_disorders","appearance_and_behavior","attention_and_concentration","expression","consciousness","mood_and_affect","memory","speech","thoughts_and_ideas","perception","intelligence","judgment","fear_and_live_alone","boring","peaceful","anger","hobby","habit","addiction","nutrition","anaemia","cyanosis","dehydration","jaundice","pulse","breathing","peculiar_rare_symptoms"],r=[];if(e.length){for(let[s,d]of Object.entries(e[0]))a.includes(s)||t.includes(s)||r.push(s);return r.push(...a),r}}function remedy_names({remedies:e}){let t=[];for(let a in e){let r=e[a];t.push(r.name)}return t}function loadSymptoms({remedies:e}){let t=[];for(let a in e){Object.entries(e[a]).forEach(([e,a])=>{t[e]=[]});break}for(let a in e){let r=e[a];Object.entries(r).forEach(([e,a])=>{a&&"string"==typeof a&&t[e].push(a.split(","))})}return t}function searchable_withkey({loadSymptoms:e}){let t=[],a=0;return Object.entries(e).forEach(([r,s])=>{let d=e[r];t[r]=[];for(let e in d)if(Array.isArray(d[e]))for(let s in d[e])t[r].push({id:a++,name:d[e][s].trim()})}),t}function searchable_symp({loadSymptoms:e,omitted_field:t}){let a=[],r=0;for(let s in e)if(!t.includes(s)){let t=e[s];for(let e in t)if(Array.isArray(t[e]))for(let d in t[e]){let n=t[e][d]+" -> "+s;a.push({id:r++,name:n.trim()})}}return a}function data(){return{is_loading:!1,is_error:!1,error_message:"",is_active_case_modal:!1,selected_section:"",selected_all_symp:"",selected_keyed_symp:"",active_tab:"patient_cc",result_symptoms:"",remedies:{},data:{},remedy_found:{},remedy_names:[],omitted_field:["id","name","created","modified","deleted","patient","treatments","book_references","total_data_size"],patient:{name:"",age:"",gender:"",phone:"",address:"",patient_type:"new"},tracker:{saving:!1,saved:!1,error:!1},page:{title:"Search Remedy",icon:"search",icon_badge:"plus"},tabs:[{icon:"info-circle",name:"patient_cc",title:"Patient/CC"},{icon:"pencil",name:"case_history",title:"Case History"}],valid:!1}}var methods={loadRemedies(){Remedies.getAll({limit:1e3}).then(e=>{this.set({remedies:e.response})}).catch(e=>{console.log(e)})},reset(e){e&&e.doing(),this.set({data:{},p_data:{}}),this.set({remedy_found:{}}),e&&e.done()},back(){this.set({remedy_found:{}}),this.set({result_symptoms:{}})},showSymptoms(e){this.set({result_symptoms:e.symptoms,field_name:e.field})},saveHistory(){let{data:e}=this.get();this.set({tracker:{saving:!0,saved:!1,error:!1}}),Model.create(e).then(e=>{this.set({tracker:{saving:!1,saved:!0,error:!1},data:e.response}),setTimeout(()=>{this.set({tracker:{saved:!1}}),this.reset()},1500)}).catch(e=>{"406"==e.response.records.errorCode?this.set({error_message:e.response.records.userMessage}):this.set({error_message:"There was an error adding history"}),this.set({tracker:{saving:!1,saved:!1,error:!0}}),setTimeout(()=>{this.set({tracker:{error:!1}})},3e3)})},saveTreatment(e){let{data:t}=this.get();this.set({tracker:{saving:!0,saved:!1,error:!1}}),TreatmentModel.createWithCase({data:e,case:t}).then(e=>{this.set({tracker:{saving:!1,saved:!0,error:!1}}),setTimeout(()=>{this.set({tracker:{saved:!1}}),this.reset()},1500)}).catch(e=>{console.log(e)})},search(e){e.preventDefault();var{data:t,valid:a,remedies:r}=this.get();let s={};this.set({tracker:{saving:!0,saved:!1,error:!1}}),s=_search(t,r),this.set({remedy_found:s}),setTimeout(()=>{this.set({tracker:{saved:!1}}),Router.navigate("search")},1500)}};function oncreate(){this.on("state",({changed:e,current:t,previous:a})=>{let{data:r,selected_section:s,selected_all_symp:d}=this.get();if(t.selected_keyed_symp!=a.selected_keyed_symp&&(r[s]=r[s]?r[s]+", "+t.selected_keyed_symp:t.selected_keyed_symp,this.set({data:r})),t.selected_all_symp!=a.selected_all_symp){let e=d.split(" -> "),t=e[1],a=e[0];r[t]=r[t]?r[t]+", "+a:a,this.set({data:r,selected_section:t,selected_keyed_symp:a})}}),this.on("saveTreatment",e=>{this.saveTreatment(e)}),this.on("addPatient",e=>{let{data:t}=this.get();t.patient=e,this.set({data:t})}),this.on("showSymptoms",e=>{this.showSymptoms(e)}),this.loadRemedies()}function get_each1_context(e,t,a){const r=Object.create(e);return r.key=t[a][0],r.value=t[a][1],r.i=a,r}function get_each0_context(e,t,a){const r=Object.create(e);return r.key=t[a][0],r.value=t[a][1],r.i=a,r}function create_main_fragment(e,t){var a,r,s,d,n,o,c={},i={page:t.page},l=new PageTitle({root:e.root,store:e.store,slots:{default:createFragment()},data:i}),_=t.tracker.error&&create_if_block_9(e,t),m={tabs:t.tabs};void 0!==t.active_tab&&(m.active_tab=t.active_tab,c.active_tab=!0);var p=new LabsTabs({root:e.root,store:e.store,data:m,_bind(t,a){var r={};!c.active_tab&&t.active_tab&&(r.active_tab=a.active_tab),e._set(r),c={}}});e.root._beforecreate.push(()=>{p._bind({active_tab:1},p.get())});var u="patient_cc"==t.active_tab&&create_if_block_8(e,t),f="case_history"==t.active_tab&&create_if_block(e,t),h={is_loading:t.is_loading,is_error:t.is_error,error_message:t.error_message,class:"has-fullpage-tabs has-multilevel-tabs"},y=new ViewScaffold({root:e.root,store:e.store,slots:{default:createFragment()},data:h});return{c(){a=createElement("div"),l._fragment.c(),r=createText("\r\n\r\n  "),_&&_.c(),s=createText("\r\n    "),p._fragment.c(),d=createText("\r\n\r\n    "),u&&u.c(),n=createText("\r\n    "),f&&f.c(),o=createComment(),y._fragment.c(),a.className="page-content"},m(e,t){insert(e,a,t),l._mount(a,null),append(a,r),_&&_.m(y._slotted.default,null),append(y._slotted.default,s),p._mount(y._slotted.default,null),append(y._slotted.default,d),u&&u.m(y._slotted.default,null),append(y._slotted.default,n),f&&f.m(y._slotted.default,null),append(y._slotted.default,o),y._mount(a,null)},p(a,r){t=r;var d={};a.page&&(d.page=t.page),l._set(d),t.tracker.error?_?_.p(a,t):((_=create_if_block_9(e,t)).c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null);var i={};a.tabs&&(i.tabs=t.tabs),!c.active_tab&&a.active_tab&&(i.active_tab=t.active_tab,c.active_tab=void 0!==t.active_tab),p._set(i),c={},"patient_cc"==t.active_tab?u?u.p(a,t):((u=create_if_block_8(e,t)).c(),u.m(n.parentNode,n)):u&&(u.d(1),u=null),"case_history"==t.active_tab?f?f.p(a,t):((f=create_if_block(e,t)).c(),f.m(o.parentNode,o)):f&&(f.d(1),f=null);var m={};a.is_loading&&(m.is_loading=t.is_loading),a.is_error&&(m.is_error=t.is_error),a.error_message&&(m.error_message=t.error_message),y._set(m)},d(e){e&&detachNode(a),l.destroy(),_&&_.d(),p.destroy(),u&&u.d(),f&&f.d(),y.destroy()}}}function create_if_block_9(e,t){var a,r=new Notification({root:e.root,store:e.store,slots:{default:createFragment()},data:{type:"danger"}});return{c(){a=createText(t.error_message),r._fragment.c()},m(e,t){append(r._slotted.default,a),r._mount(e,t)},p(e,t){e.error_message&&setData(a,t.error_message)},d(e){r.destroy(e)}}}function create_if_block_8(e,t){var a={},r={};void 0!==t.patient&&(r.patient=t.patient,a.patient=!0),void 0!==t.data&&(r.data=t.data,a.data=!0),void 0!==t.p_data&&(r.p_data=t.p_data,a.p_data=!0),void 0!==t.searchable_symp&&(r.searchable_symp=t.searchable_symp,a.searchable_symp=!0);var s=new PatientAdd({root:e.root,store:e.store,data:r,_bind(t,r){var s={};!a.patient&&t.patient&&(s.patient=r.patient),!a.data&&t.data&&(s.data=r.data),!a.p_data&&t.p_data&&(s.p_data=r.p_data),!a.searchable_symp&&t.searchable_symp&&(s.searchable_symp=r.searchable_symp),e._set(s),a={}}});e.root._beforecreate.push(()=>{s._bind({patient:1,data:1,p_data:1,searchable_symp:1},s.get())}),s.on("addPatient",function(t){e.fire("addPatient",t)});var d={is_loading:t.is_loading,is_error:t.is_error,error_message:t.error_message},n=new ViewScaffold({root:e.root,store:e.store,slots:{default:createFragment()},data:d});return{c(){s._fragment.c(),n._fragment.c()},m(e,t){s._mount(n._slotted.default,null),n._mount(e,t)},p(e,r){t=r;var d={};!a.patient&&e.patient&&(d.patient=t.patient,a.patient=void 0!==t.patient),!a.data&&e.data&&(d.data=t.data,a.data=void 0!==t.data),!a.p_data&&e.p_data&&(d.p_data=t.p_data,a.p_data=void 0!==t.p_data),!a.searchable_symp&&e.searchable_symp&&(d.searchable_symp=t.searchable_symp,a.searchable_symp=void 0!==t.searchable_symp),s._set(d),a={};var o={};e.is_loading&&(o.is_loading=t.is_loading),e.is_error&&(o.is_error=t.is_error),e.error_message&&(o.error_message=t.error_message),n._set(o)},d(e){s.destroy(),n.destroy(e)}}}function create_if_block(e,t){var a,r,s,d,n=!t.has_searched&&create_if_block_4(e,t),o=t.has_searched&&create_if_block_3(e,t),c=t.has_searched&&!t.data.patient&&create_if_block_2(e,t),i=!t.has_searched&&create_if_block_1(e,t),l={is_loading:t.is_loading,is_error:t.is_error,error_message:t.error_message},_=new ViewScaffold({root:e.root,store:e.store,slots:{default:createFragment()},data:l});return{c(){n&&n.c(),a=createText("\r\n\r\n        "),o&&o.c(),r=createText("\r\n\r\n        "),c&&c.c(),s=createText("\r\n\r\n        "),i&&i.c(),d=createComment(),_._fragment.c()},m(e,t){n&&n.m(_._slotted.default,null),append(_._slotted.default,a),o&&o.m(_._slotted.default,null),append(_._slotted.default,r),c&&c.m(_._slotted.default,null),append(_._slotted.default,s),i&&i.m(_._slotted.default,null),append(_._slotted.default,d),_._mount(e,t)},p(t,l){l.has_searched?n&&(n.d(1),n=null):n?n.p(t,l):((n=create_if_block_4(e,l)).c(),n.m(a.parentNode,a)),l.has_searched?o?o.p(t,l):((o=create_if_block_3(e,l)).c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null),l.has_searched&&!l.data.patient?c||((c=create_if_block_2(e,l)).c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null),l.has_searched?i&&(i.d(1),i=null):i?i.p(t,l):((i=create_if_block_1(e,l)).c(),i.m(d.parentNode,d));var m={};t.is_loading&&(m.is_loading=l.is_loading),t.is_error&&(m.is_error=l.is_error),t.error_message&&(m.error_message=l.error_message),_._set(m)},d(e){n&&n.d(),o&&o.d(),c&&c.d(),i&&i.d(),_.destroy(e)}}}function create_if_block_4(e,t){for(var a,r,s,d,n,o,c,i,l,_,m,p,u,f,h,y,b,v,g,k,N,T,x,S,E,j,w,F,O,C,V,P,A,D,L,R,M,z,H,K,B,$=!1,q=!1,I={},W={},Y={},Z=t.Object.entries(t.data),G=[],J=0;J<Z.length;J+=1)G[J]=create_each_block_1(e,get_each0_context(t,Z,J));var Q=!t.Object.entries(t.data).length&&create_if_block_6(e,t),U=new Message({root:e.root,store:e.store,slots:{default:createFragment()},data:{title:"Records",color:"light"}}),X=t.Object.entries(t.data),ee=[];for(J=0;J<X.length;J+=1)ee[J]=create_each_block(e,get_each1_context(t,X,J));function te(){$=!0,e.set({selected_section:selectValue(_)}),$=!1}function ae(){q=!0,t.data[t.selected_section]=v.value,e.set({data:t.data,selected_section:t.selected_section,Object:t.Object}),q=!1}var re={data:t.searchable_withkey[t.selected_section],placeholder:"Choose...",searchKey:"name",searchValue:"id"};void 0!==t.selected_keyed_symp&&(re._name=t.selected_keyed_symp,I._name=!0);var se=new SearchableSelect({root:e.root,store:e.store,data:re,_bind(t,a){var r={};!I._name&&t._name&&(r.selected_keyed_symp=a._name),e._set(r),I={}}});e.root._beforecreate.push(()=>{se._bind({_name:1},se.get())});var de={data:t.searchable_symp,placeholder:"Choose...",searchKey:"name",searchValue:"id"};void 0!==t.selected_all_symp&&(de._name=t.selected_all_symp,W._name=!0);var ne=new SearchableSelect({root:e.root,store:e.store,data:de,_bind(t,a){var r={};!W._name&&t._name&&(r.selected_all_symp=a._name),e._set(r),W={}}});e.root._beforecreate.push(()=>{ne._bind({_name:1},ne.get())});var oe={classes:"is-primary is-medium is-pulled-right",icon:"search",icon_size:"small",text:"Search"};void 0!==t.tracker&&(oe.tracker=t.tracker,Y.tracker=!0);var ce=new SubmitButton({root:e.root,store:e.store,data:oe,_bind(t,a){var r={};!Y.tracker&&t.tracker&&(r.tracker=a.tracker),e._set(r),Y={}}});e.root._beforecreate.push(()=>{ce._bind({tracker:1},ce.get())});var ie=new Panel({root:e.root,store:e.store,slots:{default:createFragment()},data:{title:"Patient Symptoms",has_toolbar:!0}});function le(t){e.search(t)}return{c(){a=createElement("form"),r=createElement("div"),s=createElement("div");for(var $=0;$<G.length;$+=1)G[$].c();d=createText("\r\n                    "),Q&&Q.c(),n=createComment(),U._fragment.c(),o=createText("\r\n\r\n                "),c=createElement("div"),i=createElement("div"),l=createElement("span"),_=createElement("select"),(m=createElement("option")).textContent="Select Type";for($=0;$<ee.length;$+=1)ee[$].c();p=createText("\r\n\r\n                  "),u=createElement("div"),f=createElement("p"),h=createElement("label"),y=createText(t.selected_section),b=createText("\r\n                      "),v=createElement("textarea"),k=createText("\r\n                "),N=createElement("div"),(T=createElement("p")).textContent="Suggestions",x=createText("\r\n\r\n                  "),S=createElement("div"),E=createElement("p"),j=createElement("label"),w=createText(t.selected_section),F=createText(" Symptoms in the System"),O=createText("\r\n                        "),se._fragment.c(),C=createText("\r\n\r\n                  "),V=createElement("div"),P=createElement("p"),(A=createElement("label")).textContent="All Symptoms in the System",D=createText("\r\n                        "),ne._fragment.c(),L=createText("\r\n                  "),R=createElement("div"),M=createElement("p"),(z=createElement("label")).textContent=" ",H=createText("\r\n                      "),ce._fragment.c(),ie._fragment.c(),K=createText("\r\n          "),B=createElement("br"),s.className="column",m.__value="",m.value=m.__value,addListener(_,"change",te),"selected_section"in t||e.root._beforecreate.push(te),_.className="input",l.className="select is-fullwidth",i.className="field",h.className="label",setStyle(h,"text-transform","capitalize"),addListener(v,"input",ae),v.className="textarea",v.placeholder=g=t.selected_section+"...",setStyle(v,"height","15rem"),f.className="control",u.className="field",c.className="column",T.className="title is-5",j.className="label",setStyle(j,"text-transform","capitalize"),E.className="control",S.className="field",A.className="label",setStyle(A,"text-transform","capitalize"),P.className="control",V.className="field",z.className="label",M.className="control",R.className="field",N.className="column",r.className="columns",addListener(a,"submit",le)},m(e,g){insert(e,a,g),append(ie._slotted.default,r),append(r,s);for(var $=0;$<G.length;$+=1)G[$].m(U._slotted.default,null);append(U._slotted.default,d),Q&&Q.m(U._slotted.default,null),append(U._slotted.default,n),U._mount(s,null),append(r,o),append(r,c),append(c,i),append(i,l),append(l,_),append(_,m);for($=0;$<ee.length;$+=1)ee[$].m(_,null);selectOption(_,t.selected_section),append(c,p),append(c,u),append(u,f),append(f,h),append(h,y),append(f,b),append(f,v),v.value=t.data[t.selected_section],append(r,k),append(r,N),append(N,T),append(N,x),append(N,S),append(S,E),append(E,j),append(j,w),append(j,F),append(E,O),se._mount(E,null),append(N,C),append(N,V),append(V,P),append(P,A),append(P,D),ne._mount(P,null),append(N,L),append(N,R),append(R,M),append(M,z),append(M,H),ce._mount(M,null),ie._mount(a,null),insert(e,K,g),insert(e,B,g)},p(a,r){if(t=r,a.omitted_field||a.Object||a.data){Z=t.Object.entries(t.data);for(var s=0;s<Z.length;s+=1){const r=get_each0_context(t,Z,s);G[s]?G[s].p(a,r):(G[s]=create_each_block_1(e,r),G[s].c(),G[s].m(d.parentNode,d))}for(;s<G.length;s+=1)G[s].d(1);G.length=Z.length}if(t.Object.entries(t.data).length?Q&&(Q.d(1),Q=null):Q||((Q=create_if_block_6(e,t)).c(),Q.m(n.parentNode,n)),a.omitted_field||a.Object||a.data){X=t.Object.entries(t.data);for(s=0;s<X.length;s+=1){const r=get_each1_context(t,X,s);ee[s]?ee[s].p(a,r):(ee[s]=create_each_block(e,r),ee[s].c(),ee[s].m(_,null))}for(;s<ee.length;s+=1)ee[s].d(1);ee.length=X.length}!$&&a.selected_section&&selectOption(_,t.selected_section),a.selected_section&&setData(y,t.selected_section),q||!a.data&&!a.selected_section||(v.value=t.data[t.selected_section]),a.selected_section&&g!==(g=t.selected_section+"...")&&(v.placeholder=g),a.selected_section&&setData(w,t.selected_section);var o={};(a.searchable_withkey||a.selected_section)&&(o.data=t.searchable_withkey[t.selected_section]),!I._name&&a.selected_keyed_symp&&(o._name=t.selected_keyed_symp,I._name=void 0!==t.selected_keyed_symp),se._set(o),I={};var c={};a.searchable_symp&&(c.data=t.searchable_symp),!W._name&&a.selected_all_symp&&(c._name=t.selected_all_symp,W._name=void 0!==t.selected_all_symp),ne._set(c),W={};var i={};!Y.tracker&&a.tracker&&(i.tracker=t.tracker,Y.tracker=void 0!==t.tracker),ce._set(i),Y={}},d(e){e&&detachNode(a),destroyEach(G,e),Q&&Q.d(),U.destroy(),destroyEach(ee,e),removeListener(_,"change",te),removeListener(v,"input",ae),se.destroy(),ne.destroy(),ce.destroy(),ie.destroy(),removeListener(a,"submit",le),e&&(detachNode(K),detachNode(B))}}}function create_if_block_7(e,t){var a,r,s,d,n,o,c,i=t.key,l=t.value;return{c(){a=createElement("p"),r=createElement("span"),s=createText(i),d=createText(": "),n=createText(l),o=createText(" "),c=createElement("br"),r.className="has-text-weight-bold is-size-5"},m(e,t){insert(e,a,t),append(a,r),append(r,s),append(a,d),append(a,n),insert(e,o,t),insert(e,c,t)},p(e,t){(e.Object||e.data)&&i!==(i=t.key)&&setData(s,i),(e.Object||e.data)&&l!==(l=t.value)&&setData(n,l)},d(e){e&&(detachNode(a),detachNode(o),detachNode(c))}}}function create_each_block_1(e,t){var a,r=!t.omitted_field.includes(t.key)&&create_if_block_7(e,t);return{c(){r&&r.c(),a=createComment()},m(e,t){r&&r.m(e,t),insert(e,a,t)},p(t,s){s.omitted_field.includes(s.key)?r&&(r.d(1),r=null):r?r.p(t,s):((r=create_if_block_7(e,s)).c(),r.m(a.parentNode,a))},d(e){r&&r.d(e),e&&detachNode(a)}}}function create_if_block_6(e,t){var a;return{c(){a=createText("No records yet")},m(e,t){insert(e,a,t)},d(e){e&&detachNode(a)}}}function create_if_block_5(e,t){var a,r,s,d=t.key;return{c(){a=createElement("option"),r=createText(d),a.__value=s=t.key,a.value=a.__value},m(e,t){insert(e,a,t),append(a,r)},p(e,t){(e.Object||e.data)&&d!==(d=t.key)&&setData(r,d),(e.Object||e.data)&&s!==(s=t.key)&&(a.__value=s),a.value=a.__value},d(e){e&&detachNode(a)}}}function create_each_block(e,t){var a,r=!t.omitted_field.includes(t.key)&&create_if_block_5(e,t);return{c(){r&&r.c(),a=createComment()},m(e,t){r&&r.m(e,t),insert(e,a,t)},p(t,s){s.omitted_field.includes(s.key)?r&&(r.d(1),r=null):r?r.p(t,s):((r=create_if_block_5(e,s)).c(),r.m(a.parentNode,a))},d(e){r&&r.d(e),e&&detachNode(a)}}}function create_if_block_3(e,t){var a,r,s,d,n,o,c={},i={},l={field_name:t.field_name,result_symptoms:t.result_symptoms};void 0!==t.data&&(l.data=t.data,c.data=!0),void 0!==t.tracker&&(l.tracker=t.tracker,c.tracker=!0),void 0!==t.remedy_found&&(l.remedy_found=t.remedy_found,c.remedy_found=!0);var _=new RemedyFound({root:e.root,store:e.store,data:l,_bind(t,a){var r={};!c.data&&t.data&&(r.data=a.data),!c.tracker&&t.tracker&&(r.tracker=a.tracker),!c.remedy_found&&t.remedy_found&&(r.remedy_found=a.remedy_found),e._set(r),c={}}});e.root._beforecreate.push(()=>{_._bind({data:1,tracker:1,remedy_found:1},_.get())}),_.on("back",function(t){e.back()}),_.on("showSymptoms",function(t){e.fire("showSymptoms",t)}),_.on("saveHistory",function(t){e.saveHistory()});var m={result_symptoms:t.result_symptoms};void 0!==t.remedy_names&&(m.remedy_names=t.remedy_names,i.remedy_names=!0),void 0!==t.data&&(m.data=t.data,i.data=!0),void 0!==t.tracker&&(m.tracker=t.tracker,i.tracker=!0),void 0!==t.remedy_found&&(m.remedy_found=t.remedy_found,i.remedy_found=!0);var p=new AddTreatment({root:e.root,store:e.store,data:m,_bind(t,a){var r={};!i.remedy_names&&t.remedy_names&&(r.remedy_names=a.remedy_names),!i.data&&t.data&&(r.data=a.data),!i.tracker&&t.tracker&&(r.tracker=a.tracker),!i.remedy_found&&t.remedy_found&&(r.remedy_found=a.remedy_found),e._set(r),i={}}});return e.root._beforecreate.push(()=>{p._bind({remedy_names:1,data:1,tracker:1,remedy_found:1},p.get())}),p.on("saveTreatment",function(t){e.fire("saveTreatment",t)}),{c(){a=createElement("div"),r=createElement("div"),_._fragment.c(),s=createText("\r\n            "),d=createElement("div"),p._fragment.c(),n=createText("\r\n          "),o=createElement("br"),r.className="column",d.className="column",a.className="columns"},m(e,t){insert(e,a,t),append(a,r),_._mount(r,null),append(a,s),append(a,d),p._mount(d,null),insert(e,n,t),insert(e,o,t)},p(e,a){t=a;var r={};e.field_name&&(r.field_name=t.field_name),e.result_symptoms&&(r.result_symptoms=t.result_symptoms),!c.data&&e.data&&(r.data=t.data,c.data=void 0!==t.data),!c.tracker&&e.tracker&&(r.tracker=t.tracker,c.tracker=void 0!==t.tracker),!c.remedy_found&&e.remedy_found&&(r.remedy_found=t.remedy_found,c.remedy_found=void 0!==t.remedy_found),_._set(r),c={};var s={};e.result_symptoms&&(s.result_symptoms=t.result_symptoms),!i.remedy_names&&e.remedy_names&&(s.remedy_names=t.remedy_names,i.remedy_names=void 0!==t.remedy_names),!i.data&&e.data&&(s.data=t.data,i.data=void 0!==t.data),!i.tracker&&e.tracker&&(s.tracker=t.tracker,i.tracker=void 0!==t.tracker),!i.remedy_found&&e.remedy_found&&(s.remedy_found=t.remedy_found,i.remedy_found=void 0!==t.remedy_found),p._set(s),i={}},d(e){e&&detachNode(a),_.destroy(),p.destroy(),e&&(detachNode(n),detachNode(o))}}}function create_if_block_2(e,t){var a;return{c(){(a=createElement("div")).innerHTML='<label class="subtitle is-size-5 has-text-warning is-centered"> Selection patient is mendatory for saving Case History or Treatment ! </label>',a.className="columns is-centered"},m(e,t){insert(e,a,t)},d(e){e&&detachNode(a)}}}function create_if_block_1(e,t){var a={},r={};void 0!==t.data&&(r.data=t.data,a.data=!0),void 0!==t.remedies&&(r.remedies=t.remedies,a.remedies=!0),void 0!==t.filterFields&&(r.filterFields=t.filterFields,a.filterFields=!0),void 0!==t.selected_section&&(r.selected_section=t.selected_section,a.selected_section=!0);var s=new Sections({root:e.root,store:e.store,data:r,_bind(t,r){var s={};!a.data&&t.data&&(s.data=r.data),!a.remedies&&t.remedies&&(s.remedies=r.remedies),!a.filterFields&&t.filterFields&&(s.filterFields=r.filterFields),!a.selected_section&&t.selected_section&&(s.selected_section=r.selected_section),e._set(s),a={}}});return e.root._beforecreate.push(()=>{s._bind({data:1,remedies:1,filterFields:1,selected_section:1},s.get())}),s.on("reset",function(t){e.reset(t)}),{c(){s._fragment.c()},m(e,t){s._mount(e,t)},p(e,r){t=r;var d={};!a.data&&e.data&&(d.data=t.data,a.data=void 0!==t.data),!a.remedies&&e.remedies&&(d.remedies=t.remedies,a.remedies=void 0!==t.remedies),!a.filterFields&&e.filterFields&&(d.filterFields=t.filterFields,a.filterFields=void 0!==t.filterFields),!a.selected_section&&e.selected_section&&(d.selected_section=t.selected_section,a.selected_section=void 0!==t.selected_section),s._set(d),a={}},d(e){s.destroy(e)}}}function Search(e){init(this,e),this._state=assign(assign(assign({Object:Object},this.store._init(["user"])),data()),e.data),this.store._add(this,["user"]),this._recompute({remedy_found:1,$user:1,remedies:1,omitted_field:1,loadSymptoms:1},this._state),this._intro=!0,this._handlers.destroy=[removeFromStore],this._fragment=create_main_fragment(this,this._state),this.root._oncreate.push(()=>{oncreate.call(this),this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}assign(Search.prototype,proto),assign(Search.prototype,methods),Search.prototype._recompute=function(e,t){e.remedy_found&&this._differs(t.has_searched,t.has_searched=has_searched(t))&&(e.has_searched=!0),e.$user&&this._differs(t.user_role,t.user_role=user_role(t))&&(e.user_role=!0),(e.remedies||e.omitted_field)&&this._differs(t.filterFields,t.filterFields=filterFields(t))&&(e.filterFields=!0),e.remedies&&(this._differs(t.remedy_names,t.remedy_names=remedy_names(t))&&(e.remedy_names=!0),this._differs(t.loadSymptoms,t.loadSymptoms=loadSymptoms(t))&&(e.loadSymptoms=!0)),e.loadSymptoms&&this._differs(t.searchable_withkey,t.searchable_withkey=searchable_withkey(t))&&(e.searchable_withkey=!0),(e.loadSymptoms||e.omitted_field)&&this._differs(t.searchable_symp,t.searchable_symp=searchable_symp(t))&&(e.searchable_symp=!0)};export default Search;
//# sourceMappingURL=Search.js.map
