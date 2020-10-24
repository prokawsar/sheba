var K_ENV="prod",K_ENV_DEV="dev",K_ENV_TEST="test",K_ENV_PROD="prod";import{w as addListener,a as append,b as assign,c as assignTrue,z as createComment,d as createElement,e as createFragment,f as createText,A as destroyEach,g as detachNode,h as flush,i as init,j as insert,l as proto,m as removeFromStore,x as removeListener,X as selectOption,Y as selectValue,y as setAttribute,B as setData,n as Icon,E as Notification,D as Panel,q as ViewScaffold,r as PageTitle}from"./chunk-5d88ab61.js";import{a as Router}from"./chunk-fdf63a19.js";import{b as SubmitButton}from"./chunk-c5026b61.js";import{a as PasswordValidator}from"./chunk-6c4a6fb2.js";import{a as Model}from"./chunk-559ad6b6.js";function user_role({$user:e}){return e&&e.role}function is_api_key({data:e}){return-1!=["AK"].indexOf(e.role)}function data(){return{is_loading:!1,is_error:!1,error_message:"",data:{role:"",name:"",surname:"",username:"",email:"",password:""},tracker:{saving:!1,saved:!1,error:!1},confirm_password:"",page:{title:"Add User",icon:"vcard-o",icon_badge:"plus"},roles:{},valid:!1}}var methods={loadRoles(){this.set({is_loading:!0,is_error:!1}),Model.authContext(this.get().user_role).then(e=>{this.set({is_loading:!1,roles:e.response})}).catch(e=>{var t="";void 0!==e.response&&void 0!==e.response.records&&(t=e.response.records.userMessage),this.set({is_error:!0,is_loading:!1,error_message:t})})},addNew(e){e.preventDefault();var{data:t,confirm_password:a,valid:r}=this.get();t.password==a&&r&&(this.set({tracker:{saving:!0,saved:!1,error:!1}}),Model.create(t).then(e=>{e.response.password="",this.set({tracker:{saving:!1,saved:!0,error:!1},data:e.response,confirm_password:""}),setTimeout(()=>{this.set({tracker:{saved:!1}}),Router.navigate("users")},1500)}).catch(e=>{"406"==e.response.records.errorCode?this.set({error_message:e.response.records.userMessage}):this.set({error_message:"There was an error adding user"}),this.set({tracker:{saving:!1,saved:!1,error:!0}}),setTimeout(()=>{this.set({tracker:{error:!1}})},3e3)}))}};function oncreate(){this.loadRoles()}function get_each_context_1(e,t,a){const r=Object.create(e);return r.role=t[a],r}function get_each_context(e,t,a){const r=Object.create(e);return r.role=t[a],r}function create_main_fragment(e,t){var a,r,s,n,o,l,c,d=new Icon({root:e.root,store:e.store,data:{icon:"long-arrow-left",size:"small"}}),i={page:t.page},p=new PageTitle({root:e.root,store:e.store,slots:{default:createFragment()},data:i}),m=t.tracker.error&&create_if_block_1(e,t);function u(e){return e.is_api_key?create_if_block:create_else_block}var _=u(t),v=_(e,t),f={is_loading:t.is_loading,is_error:t.is_error,error_message:t.error_message},g=new ViewScaffold({root:e.root,store:e.store,slots:{default:createFragment()},data:f});return{c(){a=createElement("div"),r=createElement("a"),d._fragment.c(),s=createText("\r\n      "),(n=createElement("span")).textContent="Back to All Users",p._fragment.c(),o=createText("\r\n\r\n  "),m&&m.c(),l=createText("\r\n\r\n    "),v.c(),c=createComment(),g._fragment.c(),r.className="button is-info is-pulled-right",r.href="#users",a.className="page-content"},m(e,t){insert(e,a,t),append(p._slotted.default,r),d._mount(r,null),append(r,s),append(r,n),p._mount(a,null),append(a,o),m&&m.m(g._slotted.default,null),append(g._slotted.default,l),v.m(g._slotted.default,null),append(g._slotted.default,c),g._mount(a,null)},p(t,a){var r={};t.page&&(r.page=a.page),p._set(r),a.tracker.error?m?m.p(t,a):((m=create_if_block_1(e,a)).c(),m.m(l.parentNode,l)):m&&(m.d(1),m=null),_===(_=u(a))&&v?v.p(t,a):(v.d(1),(v=_(e,a)).c(),v.m(c.parentNode,c));var s={};t.is_loading&&(s.is_loading=a.is_loading),t.is_error&&(s.is_error=a.is_error),t.error_message&&(s.error_message=a.error_message),g._set(s)},d(e){e&&detachNode(a),d.destroy(),p.destroy(),m&&m.d(),v.d(),g.destroy()}}}function create_if_block_1(e,t){var a,r=new Notification({root:e.root,store:e.store,slots:{default:createFragment()},data:{type:"danger"}});return{c(){a=createText(t.error_message),r._fragment.c()},m(e,t){append(r._slotted.default,a),r._mount(e,t)},p(e,t){e.error_message&&setData(a,t.error_message)},d(e){r.destroy(e)}}}function create_else_block(e,t){for(var a,r,s,n,o,l,c,d,i,p,m,u,_,v,f,g,h,b,N,E,k,x,w,O,T,j,y,L,C,A,P,V,D,S,U,R,q,F,K,B,M,z,I,$,X,Y,G,H,J,Q,W,Z,ee,te,ae,re=!1,se=!1,ne=!1,oe=!1,le=!1,ce=!1,de={},ie=!1,pe={},me=t.Object.entries(t.roles),ue=[],_e=0;_e<me.length;_e+=1)ue[_e]=create_each_block_1(e,get_each_context_1(t,me,_e));function ve(){re=!0,t.data.role=selectValue(i),e.set({data:t.data,Object:t.Object,roles:t.roles}),re=!1}function fe(){se=!0,t.data.name=g.value,e.set({data:t.data,Object:t.Object,roles:t.roles}),se=!1}function ge(){ne=!0,t.data.surname=x.value,e.set({data:t.data,Object:t.Object,roles:t.roles}),ne=!1}function he(){oe=!0,t.data.email=L.value,e.set({data:t.data,Object:t.Object,roles:t.roles}),oe=!1}function be(){le=!0,t.data.username=U.value,e.set({data:t.data,Object:t.Object,roles:t.roles}),le=!1}function Ne(){ce=!0,t.data.password=M.value,e.set({data:t.data,Object:t.Object,roles:t.roles}),ce=!1}var Ee={new_pass:t.data.password};void 0!==t.valid&&(Ee.valid=t.valid,de.valid=!0);var ke=new PasswordValidator({root:e.root,store:e.store,data:Ee,_bind(t,a){var r={};!de.valid&&t.valid&&(r.valid=a.valid),e._set(r),de={}}});function xe(){ie=!0,e.set({confirm_password:J.value}),ie=!1}e.root._beforecreate.push(()=>{ke._bind({valid:1},ke.get())});var we={classes:"is-primary is-pulled-right",icon:"plus",icon_size:"small",text:"Create User"};void 0!==t.tracker&&(we.tracker=t.tracker,pe.tracker=!0);var Oe=new SubmitButton({root:e.root,store:e.store,data:we,_bind(t,a){var r={};!pe.tracker&&t.tracker&&(r.tracker=a.tracker),e._set(r),pe={}}});e.root._beforecreate.push(()=>{Oe._bind({tracker:1},Oe.get())});var Te=new Panel({root:e.root,store:e.store,slots:{default:createFragment()},data:{title:"User Details"}});function je(t){e.addNew(t)}return{c(){a=createElement("form"),r=createElement("div"),s=createElement("div"),n=createElement("div"),o=createElement("p"),(l=createElement("label")).textContent="Role",c=createText("\r\n                  "),d=createElement("span"),i=createElement("select"),(p=createElement("option")).textContent="Select Role";for(var re=0;re<ue.length;re+=1)ue[re].c();m=createText("\r\n              "),u=createElement("div"),_=createElement("p"),(v=createElement("label")).textContent="Name",f=createText("\r\n                  "),g=createElement("input"),h=createText("\r\n              "),b=createElement("div"),N=createElement("p"),(E=createElement("label")).textContent="Surname",k=createText("\r\n                  "),x=createElement("input"),w=createText("\r\n              "),O=createElement("div"),T=createElement("p"),(j=createElement("label")).textContent="Email",y=createText("\r\n                  "),L=createElement("input"),C=createText("\r\n            "),A=createElement("div"),P=createElement("div"),V=createElement("p"),(D=createElement("label")).textContent="Username",S=createText("\r\n                  "),U=createElement("input"),R=createText("\r\n              "),q=createElement("div"),F=createElement("p"),(K=createElement("label")).textContent="Password",B=createText("\r\n                  "),M=createElement("input"),I=createText("\r\n                  "),ke._fragment.c(),$=createText("\r\n              "),X=createElement("div"),Y=createElement("p"),(G=createElement("label")).textContent="Confirm Password",H=createText("\r\n                  "),J=createElement("input"),W=createText("\r\n              \r\n              "),Z=createElement("div"),ee=createElement("p"),(te=createElement("label")).textContent=" ",ae=createText("\r\n                  "),Oe._fragment.c(),Te._fragment.c(),l.className="label",p.__value="",p.value=p.__value,addListener(i,"change",ve),"data"in t||e.root._beforecreate.push(ve),i.className="input",i.required=!0,d.className="select is-fullwidth",o.className="control",n.className="field",v.className="label",addListener(g,"input",fe),g.className="input",setAttribute(g,"type","text"),g.required=!0,_.className="control",u.className="field",E.className="label",addListener(x,"input",ge),x.className="input ",setAttribute(x,"type","text"),N.className="control",b.className="field",j.className="label",addListener(L,"input",he),L.className="input",setAttribute(L,"type","email"),T.className="control",O.className="field",s.className="column",D.className="label",addListener(U,"input",be),U.className="input",setAttribute(U,"type","text"),U.required=!0,U.autocomplete="off",V.className="control",P.className="field",K.className="label",addListener(M,"input",Ne),M.className=z="input "+(t.data.password&&!t.valid?"is-danger":""),setAttribute(M,"type","password"),M.required=!0,M.autocomplete="off",F.className="control",q.className="field",G.className="label",addListener(J,"input",xe),J.className=Q="input "+(t.data.password!=t.confirm_password?"is-danger":""),setAttribute(J,"type","password"),J.required=!0,Y.className="control",X.className="field",te.className="label",ee.className="control",Z.className="field",A.className="column",r.className="columns",addListener(a,"submit",je)},m(e,z){insert(e,a,z),append(Te._slotted.default,r),append(r,s),append(s,n),append(n,o),append(o,l),append(o,c),append(o,d),append(d,i),append(i,p);for(var Q=0;Q<ue.length;Q+=1)ue[Q].m(i,null);selectOption(i,t.data.role),append(s,m),append(s,u),append(u,_),append(_,v),append(_,f),append(_,g),g.value=t.data.name,append(s,h),append(s,b),append(b,N),append(N,E),append(N,k),append(N,x),x.value=t.data.surname,append(s,w),append(s,O),append(O,T),append(T,j),append(T,y),append(T,L),L.value=t.data.email,append(r,C),append(r,A),append(A,P),append(P,V),append(V,D),append(V,S),append(V,U),U.value=t.data.username,append(A,R),append(A,q),append(q,F),append(F,K),append(F,B),append(F,M),M.value=t.data.password,append(F,I),ke._mount(F,null),append(A,$),append(A,X),append(X,Y),append(Y,G),append(Y,H),append(Y,J),J.value=t.confirm_password,append(A,W),append(A,Z),append(Z,ee),append(ee,te),append(ee,ae),Oe._mount(ee,null),Te._mount(a,null)},p(a,r){if(t=r,a.Object||a.roles){me=t.Object.entries(t.roles);for(var s=0;s<me.length;s+=1){const r=get_each_context_1(t,me,s);ue[s]?ue[s].p(a,r):(ue[s]=create_each_block_1(e,r),ue[s].c(),ue[s].m(i,null))}for(;s<ue.length;s+=1)ue[s].d(1);ue.length=me.length}!re&&a.data&&selectOption(i,t.data.role),!se&&a.data&&(g.value=t.data.name),!ne&&a.data&&(x.value=t.data.surname),!oe&&a.data&&(L.value=t.data.email),!le&&a.data&&(U.value=t.data.username),!ce&&a.data&&(M.value=t.data.password),(a.data||a.valid)&&z!==(z="input "+(t.data.password&&!t.valid?"is-danger":""))&&(M.className=z);var n={};a.data&&(n.new_pass=t.data.password),!de.valid&&a.valid&&(n.valid=t.valid,de.valid=void 0!==t.valid),ke._set(n),de={},!ie&&a.confirm_password&&(J.value=t.confirm_password),(a.data||a.confirm_password)&&Q!==(Q="input "+(t.data.password!=t.confirm_password?"is-danger":""))&&(J.className=Q);var o={};!pe.tracker&&a.tracker&&(o.tracker=t.tracker,pe.tracker=void 0!==t.tracker),Oe._set(o),pe={}},d(e){e&&detachNode(a),destroyEach(ue,e),removeListener(i,"change",ve),removeListener(g,"input",fe),removeListener(x,"input",ge),removeListener(L,"input",he),removeListener(U,"input",be),removeListener(M,"input",Ne),ke.destroy(),removeListener(J,"input",xe),Oe.destroy(),Te.destroy(),removeListener(a,"submit",je)}}}function create_if_block(e,t){for(var a,r,s,n,o,l,c,d,i,p,m,u,_,v,f,g,h,b,N,E,k,x,w,O=!1,T=!1,j={},y=t.Object.entries(t.roles),L=[],C=0;C<y.length;C+=1)L[C]=create_each_block(e,get_each_context(t,y,C));function A(){O=!0,t.data.role=selectValue(i),e.set({data:t.data,Object:t.Object,roles:t.roles}),O=!1}function P(){T=!0,t.data.name=h.value,e.set({data:t.data,Object:t.Object,roles:t.roles}),T=!1}var V={classes:"is-primary is-pulled-right",icon:"plus",icon_size:"small",text:"Create API Key"};void 0!==t.tracker&&(V.tracker=t.tracker,j.tracker=!0);var D=new SubmitButton({root:e.root,store:e.store,data:V,_bind(t,a){var r={};!j.tracker&&t.tracker&&(r.tracker=a.tracker),e._set(r),j={}}});e.root._beforecreate.push(()=>{D._bind({tracker:1},D.get())});var S=new Panel({root:e.root,store:e.store,slots:{default:createFragment()},data:{title:"API Key Details"}});function U(t){e.addNew(t)}return{c(){a=createElement("form"),r=createElement("div"),s=createElement("div"),n=createElement("div"),o=createElement("p"),(l=createElement("label")).textContent="Role",c=createText("\r\n                  "),d=createElement("span"),i=createElement("select"),(p=createElement("option")).textContent="Select Role";for(var O=0;O<L.length;O+=1)L[O].c();m=createText("\r\n            "),u=createElement("div"),_=createElement("div"),v=createElement("p"),(f=createElement("label")).textContent="Key Description",g=createText("\r\n                  "),h=createElement("input"),b=createText("\r\n            "),N=createElement("div"),E=createElement("div"),k=createElement("p"),(x=createElement("label")).textContent=" ",w=createText("\r\n                  "),D._fragment.c(),S._fragment.c(),l.className="label",p.__value="",p.value=p.__value,addListener(i,"change",A),"data"in t||e.root._beforecreate.push(A),i.className="input",i.required=!0,d.className="select is-fullwidth",o.className="control",n.className="field",s.className="column",f.className="label",addListener(h,"input",P),h.className="input",setAttribute(h,"type","text"),h.required=!0,v.className="control",_.className="field",u.className="column",x.className="label",k.className="control",E.className="field",N.className="column",r.className="columns",addListener(a,"submit",U)},m(e,O){insert(e,a,O),append(S._slotted.default,r),append(r,s),append(s,n),append(n,o),append(o,l),append(o,c),append(o,d),append(d,i),append(i,p);for(var T=0;T<L.length;T+=1)L[T].m(i,null);selectOption(i,t.data.role),append(r,m),append(r,u),append(u,_),append(_,v),append(v,f),append(v,g),append(v,h),h.value=t.data.name,append(r,b),append(r,N),append(N,E),append(E,k),append(k,x),append(k,w),D._mount(k,null),S._mount(a,null)},p(a,r){if(t=r,a.Object||a.roles){y=t.Object.entries(t.roles);for(var s=0;s<y.length;s+=1){const r=get_each_context(t,y,s);L[s]?L[s].p(a,r):(L[s]=create_each_block(e,r),L[s].c(),L[s].m(i,null))}for(;s<L.length;s+=1)L[s].d(1);L.length=y.length}!O&&a.data&&selectOption(i,t.data.role),!T&&a.data&&(h.value=t.data.name);var n={};!j.tracker&&a.tracker&&(n.tracker=t.tracker,j.tracker=void 0!==t.tracker),D._set(n),j={}},d(e){e&&detachNode(a),destroyEach(L,e),removeListener(i,"change",A),removeListener(h,"input",P),D.destroy(),S.destroy(),removeListener(a,"submit",U)}}}function create_each_block_1(e,t){var a,r,s,n=t.role[1];return{c(){a=createElement("option"),r=createText(n),a.__value=s=t.role[0],a.value=a.__value},m(e,t){insert(e,a,t),append(a,r)},p(e,t){(e.Object||e.roles)&&n!==(n=t.role[1])&&setData(r,n),(e.Object||e.roles)&&s!==(s=t.role[0])&&(a.__value=s),a.value=a.__value},d(e){e&&detachNode(a)}}}function create_each_block(e,t){var a,r,s,n=t.role[1];return{c(){a=createElement("option"),r=createText(n),a.__value=s=t.role[0],a.value=a.__value},m(e,t){insert(e,a,t),append(a,r)},p(e,t){(e.Object||e.roles)&&n!==(n=t.role[1])&&setData(r,n),(e.Object||e.roles)&&s!==(s=t.role[0])&&(a.__value=s),a.value=a.__value},d(e){e&&detachNode(a)}}}function AddUser(e){init(this,e),this._state=assign(assign(assign({Object:Object},this.store._init(["user"])),data()),e.data),this.store._add(this,["user"]),this._recompute({$user:1,data:1},this._state),this._intro=!0,this._handlers.destroy=[removeFromStore],this._fragment=create_main_fragment(this,this._state),this.root._oncreate.push(()=>{oncreate.call(this),this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}assign(AddUser.prototype,proto),assign(AddUser.prototype,methods),AddUser.prototype._recompute=function(e,t){e.$user&&this._differs(t.user_role,t.user_role=user_role(t))&&(e.user_role=!0),e.data&&this._differs(t.is_api_key,t.is_api_key=is_api_key(t))&&(e.is_api_key=!0)};export default AddUser;
//# sourceMappingURL=AddUser.js.map
