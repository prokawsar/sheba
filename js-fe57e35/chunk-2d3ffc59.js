var K_ENV="prod",K_ENV_DEV="dev",K_ENV_TEST="test",K_ENV_PROD="prod";import{s as baseModel,w as addListener,a as append,b as assign,c as assignTrue,d as createElement,e as createFragment,f as createText,A as destroyEach,g as detachNode,h as flush,i as init,j as insert,l as proto,x as removeListener,X as selectOption,Y as selectValue,y as setAttribute,B as setData,C as setStyle,D as Panel}from"./chunk-5d88ab61.js";import{b as SubmitButton,a as ConfirmButton}from"./chunk-c5026b61.js";var TreatmentModel=new class extends baseModel{constructor(){super(),this.apiEndpoint="/treatments"}createWithCase(e){return this.create(e,this.apiEndpoint+"/create_with_case")}};function disabled({data:e,selected_remedies:t}){return!e.patient||0==t.length}function disable_add({treatment:e}){return!e.remedy}function data(){return{remedy_found:{},powers:["1x","3x",6,30,200,"1m","10m","50m","cm"],quantities:["1d","2d","half ounce","1 ounce","4 ounce"],types:["liquid","pill","biochemic","mother tencture"],rules:["10-2","10-3","5-2"],remedy_type:"suggested",prescribe:!1,treatment:{remedy:"",power:200,taking_rule:"10-2",type:"Liquid",quantity:"1d"},selected_remedies:[],remedy_names:[],result_symptoms:"",tracker:{}}}var methods={saveTreatment(e){e.preventDefault();let{selected_remedies:t}=this.get();this.fire("saveTreatment",t)},addRemedy(){let{selected_remedies:e,treatment:t}=this.get();t.remedy&&(e.push(Object.assign({},t)),this.set({selected_remedies:e}))},reset(){this.set({selected_remedies:[]})},deleteItem(e){let{selected_remedies:t}=this.get();t.splice(e,1),this.set({selected_remedies:t})}};function oncreate(){let{prescribe:e}=this.get();e&&this.set({remedy_type:"all"})}function click_handler(e){const{component:t,ctx:a}=this._svelte;t.deleteItem(a.i)}function get_each4_context(e,t,a){const n=Object.create(e);return n.remedy=t[a].remedy,n.power=t[a].power,n.taking_rule=t[a].taking_rule,n.quantity=t[a].quantity,n.type=t[a].type,n.i=a,n}function get_each3_context(e,t,a){const n=Object.create(e);return n.quantity=t[a],n}function get_each2_context(e,t,a){const n=Object.create(e);return n.rule=t[a],n}function get_each1_context(e,t,a){const n=Object.create(e);return n.power=t[a],n}function get_each0_context(e,t,a){const n=Object.create(e);return n.rule=t[a],n}function get_each_context_1(e,t,a){const n=Object.create(e);return n.key=t[a],n.i=a,n}function get_each_context(e,t,a){const n=Object.create(e);return n.key=t[a][0],n.value=t[a][1],n.i=a,n}function create_main_fragment(e,t){var a,n,r,c,l,s,d,i,o,m,p,_,u,h,f,b,g,v,y,E,x,k,T,N,O,w,L,j,q,D,C,S,V,R,A,G,M,B,P,K,F,H,z,I,Q,W,X,Y,J,U,Z,$,ee,te,ae,ne,re,ce,le,se,de,ie,oe,me,pe,_e,ue,he,fe,be,ge,ve,ye,Ee=!1,xe=!1,ke=!1,Te=!1,Ne={},Oe=t.prescribe&&create_if_block_2(e,t);function we(t){e.reset()}function Le(){e.set({remedy_type:m.__value})}function je(){e.set({remedy_type:h.__value})}for(var qe="suggested"==t.remedy_type&&create_if_block_1(e,t),De="all"==t.remedy_type&&create_if_block(e,t),Ce=t.types,Se=[],Ve=0;Ve<Ce.length;Ve+=1)Se[Ve]=create_each_block_4(e,get_each0_context(t,Ce,Ve));function Re(){Ee=!0,t.treatment.type=selectValue(S),e.set({treatment:t.treatment,Object:t.Object,remedy_found:t.remedy_found}),Ee=!1}var Ae=t.powers,Ge=[];for(Ve=0;Ve<Ae.length;Ve+=1)Ge[Ve]=create_each_block_3(e,get_each1_context(t,Ae,Ve));function Me(){xe=!0,t.treatment.power=selectValue(K),e.set({treatment:t.treatment,Object:t.Object,remedy_found:t.remedy_found}),xe=!1}var Be=t.rules,Pe=[];for(Ve=0;Ve<Be.length;Ve+=1)Pe[Ve]=create_each_block_2(e,get_each2_context(t,Be,Ve));function Ke(){ke=!0,t.treatment.taking_rule=selectValue(X),e.set({treatment:t.treatment,Object:t.Object,remedy_found:t.remedy_found}),ke=!1}var Fe=t.quantities,He=[];for(Ve=0;Ve<Fe.length;Ve+=1)He[Ve]=create_each_block_1(e,get_each3_context(t,Fe,Ve));function ze(){Te=!0,t.treatment.quantity=selectValue(ae),e.set({treatment:t.treatment,Object:t.Object,remedy_found:t.remedy_found}),Te=!1}function Ie(t){e.addRemedy()}var Qe=t.selected_remedies,We=[];for(Ve=0;Ve<Qe.length;Ve+=1)We[Ve]=create_each_block(e,get_each4_context(t,Qe,Ve));var Xe={classes:"is-primary is-pulled-right",icon:"save",icon_size:"small",text:"Save Treatment"};void 0!==t.disabled&&(Xe.disabled=t.disabled,Ne.disabled=!0),void 0!==t.tracker&&(Xe.tracker=t.tracker,Ne.tracker=!0);var Ye=new SubmitButton({root:e.root,store:e.store,data:Xe,_bind(t,a){var n={};!Ne.disabled&&t.disabled&&(n.disabled=a.disabled),!Ne.tracker&&t.tracker&&(n.tracker=a.tracker),e._set(n),Ne={}}});e.root._beforecreate.push(()=>{Ye._bind({disabled:1,tracker:1},Ye.get())});var Je={title:t.prescribe?" ":"Select Remedy",has_toolbar:!0},Ue=new Panel({root:e.root,store:e.store,slots:{default:createFragment(),toolbar:createFragment()},data:Je});function Ze(t){e.saveTreatment(t)}return{c(){a=createElement("form"),n=createElement("div"),Oe&&Oe.c(),r=createText("\r\n      "),(c=createElement("button")).innerHTML='<span class="icon is-small"><i class="fa fa-refresh"></i></span>\n\t\t\t        Reset\n\t\t\t      ',l=createText("\r\n    \r\n    "),s=createElement("div"),d=createElement("div"),i=createElement("div"),o=createElement("label"),m=createElement("input"),p=createText("\r\n            Suggested remedy"),_=createText("\r\n          "),u=createElement("label"),h=createElement("input"),f=createText("\r\n            All remedy"),b=createText("\r\n    \r\n    "),g=createElement("div"),v=createElement("div"),y=createElement("div"),E=createElement("div"),(x=createElement("label")).textContent="Remedy name",k=createText("\r\n            "),T=createElement("div"),qe&&qe.c(),N=createText("\r\n              "),De&&De.c(),w=createText("\r\n\r\n        "),L=createElement("div"),j=createElement("div"),(q=createElement("label")).textContent="Type",D=createText("\r\n            "),C=createElement("div"),S=createElement("select");for(var Ee=0;Ee<Se.length;Ee+=1)Se[Ee].c();V=createText("\r\n      "),R=createElement("div"),A=createElement("div"),G=createElement("div"),(M=createElement("label")).textContent="Power",B=createText("\r\n            "),P=createElement("div"),K=createElement("select");for(Ee=0;Ee<Ge.length;Ee+=1)Ge[Ee].c();F=createText("\r\n        "),H=createElement("div"),z=createElement("div"),(I=createElement("label")).textContent="Taking rule",Q=createText("\r\n            "),W=createElement("div"),X=createElement("select");for(Ee=0;Ee<Pe.length;Ee+=1)Pe[Ee].c();Y=createText("\r\n      "),J=createElement("div"),U=createElement("div"),Z=createElement("div"),($=createElement("label")).textContent="Quantity",ee=createText("\r\n            "),te=createElement("div"),ae=createElement("select");for(Ee=0;Ee<He.length;Ee+=1)He[Ee].c();ne=createText("\r\n        "),re=createElement("div"),ce=createElement("div"),(le=createElement("label")).textContent=" ",se=createText("\r\n              "),de=createElement("button"),ie=createText("Add"),oe=createText("\r\n    \r\n    "),me=createElement("div"),pe=createElement("div"),_e=createElement("table"),(ue=createElement("tr")).innerHTML="<th>Remedy name</th>\n\t\t\t            <th>Power</th>\n\t\t\t            <th>Taking Rule</th>\n\t\t\t            <th>Quantity</th>\n\t\t\t            <th>Type</th>\n\t\t\t            <th></th>",he=createText("\r\n          ");for(Ee=0;Ee<We.length;Ee+=1)We[Ee].c();fe=createText("\r\n      \r\n      \r\n    "),be=createElement("div"),ge=createElement("p"),(ve=createElement("label")).textContent="By saving treatment, whole case will be saved",ye=createText("\r\n        \r\n        \r\n    \r\n        "),Ye._fragment.c(),Ue._fragment.c(),addListener(c,"click",we),c.type="button",c.className="button is-warning",setAttribute(n,"slot","toolbar"),e._bindingGroups[0].push(m),addListener(m,"change",Le),setAttribute(m,"type","radio"),m.name="",m.__value="suggested",m.value=m.__value,o.className="radio",e._bindingGroups[0].push(h),addListener(h,"change",je),setAttribute(h,"type","radio"),h.name="",h.__value="all",h.value=h.__value,u.className="radio",i.className="control",d.className="column",s.className="columns",x.className="label",T.className=O="select is-fullwidth "+(""!=t.treatment.remedy||t.selected_remedies.length?"":"is-danger"),E.className="control",y.className="field",q.className="label",addListener(S,"change",Re),"treatment"in t||e.root._beforecreate.push(Re),C.className="select is-fullwidth",j.className="control",L.className="field",v.className="column",M.className="label",addListener(K,"change",Me),"treatment"in t||e.root._beforecreate.push(Me),P.className="select is-fullwidth",G.className="control",A.className="field",I.className="label",addListener(X,"change",Ke),"treatment"in t||e.root._beforecreate.push(Ke),W.className="select is-fullwidth",z.className="control",H.className="field",R.className="column",$.className="label",addListener(ae,"change",ze),"treatment"in t||e.root._beforecreate.push(ze),te.className="select is-fullwidth",Z.className="control",U.className="field",le.className="label",addListener(de,"click",Ie),de.className="button is-info is-pulled-right",de.type="button",de.disabled=t.disable_add,ce.className="control",re.className="field",J.className="column",g.className="columns",_e.className="table has-background-warning-light",pe.className="column",me.className="columns",ve.className="subtitle is-size-6 has-text-grey",setStyle(ve,"line-height","2rem"),ge.className="control",be.className="field",addListener(a,"submit",Ze)},m(e,O){insert(e,a,O),append(Ue._slotted.toolbar,n),Oe&&Oe.m(n,null),append(n,r),append(n,c),append(Ue._slotted.default,l),append(Ue._slotted.default,s),append(s,d),append(d,i),append(i,o),append(o,m),m.checked=m.__value===t.remedy_type,append(o,p),append(i,_),append(i,u),append(u,h),h.checked=h.__value===t.remedy_type,append(u,f),append(Ue._slotted.default,b),append(Ue._slotted.default,g),append(g,v),append(v,y),append(y,E),append(E,x),append(E,k),append(E,T),qe&&qe.m(T,null),append(T,N),De&&De.m(T,null),append(v,w),append(v,L),append(L,j),append(j,q),append(j,D),append(j,C),append(C,S);for(var Ee=0;Ee<Se.length;Ee+=1)Se[Ee].m(S,null);selectOption(S,t.treatment.type),append(g,V),append(g,R),append(R,A),append(A,G),append(G,M),append(G,B),append(G,P),append(P,K);for(Ee=0;Ee<Ge.length;Ee+=1)Ge[Ee].m(K,null);selectOption(K,t.treatment.power),append(R,F),append(R,H),append(H,z),append(z,I),append(z,Q),append(z,W),append(W,X);for(Ee=0;Ee<Pe.length;Ee+=1)Pe[Ee].m(X,null);selectOption(X,t.treatment.taking_rule),append(g,Y),append(g,J),append(J,U),append(U,Z),append(Z,$),append(Z,ee),append(Z,te),append(te,ae);for(Ee=0;Ee<He.length;Ee+=1)He[Ee].m(ae,null);selectOption(ae,t.treatment.quantity),append(J,ne),append(J,re),append(re,ce),append(ce,le),append(ce,se),append(ce,de),append(de,ie),append(Ue._slotted.default,oe),append(Ue._slotted.default,me),append(me,pe),append(pe,_e),append(_e,ue),append(_e,he);for(Ee=0;Ee<We.length;Ee+=1)We[Ee].m(_e,null);append(Ue._slotted.default,fe),append(Ue._slotted.default,be),append(be,ge),append(ge,ve),append(ge,ye),Ye._mount(ge,null),Ue._mount(a,null)},p(a,c){if((t=c).prescribe?Oe||((Oe=create_if_block_2(e,t)).c(),Oe.m(n,r)):Oe&&(Oe.d(1),Oe=null),a.remedy_type&&(m.checked=m.__value===t.remedy_type),a.remedy_type&&(h.checked=h.__value===t.remedy_type),"suggested"==t.remedy_type?qe?qe.p(a,t):((qe=create_if_block_1(e,t)).c(),qe.m(T,N)):qe&&(qe.d(1),qe=null),"all"==t.remedy_type?De?De.p(a,t):((De=create_if_block(e,t)).c(),De.m(T,null)):De&&(De.d(1),De=null),(a.treatment||a.selected_remedies)&&O!==(O="select is-fullwidth "+(""!=t.treatment.remedy||t.selected_remedies.length?"":"is-danger"))&&(T.className=O),a.types){Ce=t.types;for(var l=0;l<Ce.length;l+=1){const n=get_each0_context(t,Ce,l);Se[l]?Se[l].p(a,n):(Se[l]=create_each_block_4(e,n),Se[l].c(),Se[l].m(S,null))}for(;l<Se.length;l+=1)Se[l].d(1);Se.length=Ce.length}if(!Ee&&a.treatment&&selectOption(S,t.treatment.type),a.powers){Ae=t.powers;for(l=0;l<Ae.length;l+=1){const n=get_each1_context(t,Ae,l);Ge[l]?Ge[l].p(a,n):(Ge[l]=create_each_block_3(e,n),Ge[l].c(),Ge[l].m(K,null))}for(;l<Ge.length;l+=1)Ge[l].d(1);Ge.length=Ae.length}if(!xe&&a.treatment&&selectOption(K,t.treatment.power),a.rules){Be=t.rules;for(l=0;l<Be.length;l+=1){const n=get_each2_context(t,Be,l);Pe[l]?Pe[l].p(a,n):(Pe[l]=create_each_block_2(e,n),Pe[l].c(),Pe[l].m(X,null))}for(;l<Pe.length;l+=1)Pe[l].d(1);Pe.length=Be.length}if(!ke&&a.treatment&&selectOption(X,t.treatment.taking_rule),a.quantities){Fe=t.quantities;for(l=0;l<Fe.length;l+=1){const n=get_each3_context(t,Fe,l);He[l]?He[l].p(a,n):(He[l]=create_each_block_1(e,n),He[l].c(),He[l].m(ae,null))}for(;l<He.length;l+=1)He[l].d(1);He.length=Fe.length}if(!Te&&a.treatment&&selectOption(ae,t.treatment.quantity),a.disable_add&&(de.disabled=t.disable_add),a.selected_remedies){Qe=t.selected_remedies;for(l=0;l<Qe.length;l+=1){const n=get_each4_context(t,Qe,l);We[l]?We[l].p(a,n):(We[l]=create_each_block(e,n),We[l].c(),We[l].m(_e,null))}for(;l<We.length;l+=1)We[l].d(1);We.length=Qe.length}var s={};!Ne.disabled&&a.disabled&&(s.disabled=t.disabled,Ne.disabled=void 0!==t.disabled),!Ne.tracker&&a.tracker&&(s.tracker=t.tracker,Ne.tracker=void 0!==t.tracker),Ye._set(s),Ne={};var d={};a.prescribe&&(d.title=t.prescribe?" ":"Select Remedy"),Ue._set(d)},d(t){t&&detachNode(a),Oe&&Oe.d(),removeListener(c,"click",we),e._bindingGroups[0].splice(e._bindingGroups[0].indexOf(m),1),removeListener(m,"change",Le),e._bindingGroups[0].splice(e._bindingGroups[0].indexOf(h),1),removeListener(h,"change",je),qe&&qe.d(),De&&De.d(),destroyEach(Se,t),removeListener(S,"change",Re),destroyEach(Ge,t),removeListener(K,"change",Me),destroyEach(Pe,t),removeListener(X,"change",Ke),destroyEach(He,t),removeListener(ae,"change",ze),removeListener(de,"click",Ie),destroyEach(We,t),Ye.destroy(),Ue.destroy(),removeListener(a,"submit",Ze)}}}function create_if_block_2(e,t){var a,n;function r(t){e.set({add_remedy:!1,selected_remedies:[]})}return{c(){a=createElement("span"),(n=createElement("button")).textContent="Cancel",addListener(n,"click",r),n.className="button is-primary",n.type="button",a.className=""},m(e,t){insert(e,a,t),append(a,n)},d(e){e&&detachNode(a),removeListener(n,"click",r)}}}function create_if_block_1(e,t){for(var a,n,r=!1,c=t.Object.entries(t.remedy_found),l=[],s=0;s<c.length;s+=1)l[s]=create_each_block_6(e,get_each_context(t,c,s));function d(){r=!0,t.treatment.remedy=selectValue(a),e.set({treatment:t.treatment,Object:t.Object,remedy_found:t.remedy_found}),r=!1}return{c(){a=createElement("select"),(n=createElement("option")).textContent="Select...";for(var r=0;r<l.length;r+=1)l[r].c();n.__value="",n.value=n.__value,addListener(a,"change",d),"treatment"in t||e.root._beforecreate.push(d)},m(e,r){insert(e,a,r),append(a,n);for(var c=0;c<l.length;c+=1)l[c].m(a,null);selectOption(a,t.treatment.remedy)},p(n,s){if(t=s,n.Object||n.remedy_found){c=t.Object.entries(t.remedy_found);for(var d=0;d<c.length;d+=1){const r=get_each_context(t,c,d);l[d]?l[d].p(n,r):(l[d]=create_each_block_6(e,r),l[d].c(),l[d].m(a,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=c.length}!r&&n.treatment&&selectOption(a,t.treatment.remedy)},d(e){e&&detachNode(a),destroyEach(l,e),removeListener(a,"change",d)}}}function create_each_block_6(e,t){var a,n,r,c=t.key;return{c(){a=createElement("option"),n=createText(c),a.__value=r=t.key,a.value=a.__value},m(e,t){insert(e,a,t),append(a,n)},p(e,t){(e.Object||e.remedy_found)&&c!==(c=t.key)&&setData(n,c),(e.Object||e.remedy_found)&&r!==(r=t.key)&&(a.__value=r),a.value=a.__value},d(e){e&&detachNode(a)}}}function create_if_block(e,t){for(var a,n,r=!1,c=t.remedy_names,l=[],s=0;s<c.length;s+=1)l[s]=create_each_block_5(e,get_each_context_1(t,c,s));function d(){r=!0,t.treatment.remedy=selectValue(a),e.set({treatment:t.treatment,Object:t.Object,remedy_found:t.remedy_found}),r=!1}return{c(){a=createElement("select"),(n=createElement("option")).textContent="Select...";for(var r=0;r<l.length;r+=1)l[r].c();n.__value="",n.value=n.__value,addListener(a,"change",d),"treatment"in t||e.root._beforecreate.push(d)},m(e,r){insert(e,a,r),append(a,n);for(var c=0;c<l.length;c+=1)l[c].m(a,null);selectOption(a,t.treatment.remedy)},p(n,s){if(t=s,n.remedy_names){c=t.remedy_names;for(var d=0;d<c.length;d+=1){const r=get_each_context_1(t,c,d);l[d]?l[d].p(n,r):(l[d]=create_each_block_5(e,r),l[d].c(),l[d].m(a,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=c.length}!r&&n.treatment&&selectOption(a,t.treatment.remedy)},d(e){e&&detachNode(a),destroyEach(l,e),removeListener(a,"change",d)}}}function create_each_block_5(e,t){var a,n,r,c=t.key;return{c(){a=createElement("option"),n=createText(c),a.__value=r=t.key,a.value=a.__value},m(e,t){insert(e,a,t),append(a,n)},p(e,t){e.remedy_names&&c!==(c=t.key)&&setData(n,c),e.remedy_names&&r!==(r=t.key)&&(a.__value=r),a.value=a.__value},d(e){e&&detachNode(a)}}}function create_each_block_4(e,t){var a,n,r,c=t.rule;return{c(){a=createElement("option"),n=createText(c),a.__value=r=t.rule,a.value=a.__value},m(e,t){insert(e,a,t),append(a,n)},p(e,t){e.types&&c!==(c=t.rule)&&setData(n,c),e.types&&r!==(r=t.rule)&&(a.__value=r),a.value=a.__value},d(e){e&&detachNode(a)}}}function create_each_block_3(e,t){var a,n,r,c=t.power;return{c(){a=createElement("option"),n=createText(c),a.__value=r=t.power,a.value=a.__value},m(e,t){insert(e,a,t),append(a,n)},p(e,t){e.powers&&c!==(c=t.power)&&setData(n,c),e.powers&&r!==(r=t.power)&&(a.__value=r),a.value=a.__value},d(e){e&&detachNode(a)}}}function create_each_block_2(e,t){var a,n,r,c=t.rule;return{c(){a=createElement("option"),n=createText(c),a.__value=r=t.rule,a.value=a.__value},m(e,t){insert(e,a,t),append(a,n)},p(e,t){e.rules&&c!==(c=t.rule)&&setData(n,c),e.rules&&r!==(r=t.rule)&&(a.__value=r),a.value=a.__value},d(e){e&&detachNode(a)}}}function create_each_block_1(e,t){var a,n,r,c=t.quantity;return{c(){a=createElement("option"),n=createText(c),a.__value=r=t.quantity,a.value=a.__value},m(e,t){insert(e,a,t),append(a,n)},p(e,t){e.quantities&&c!==(c=t.quantity)&&setData(n,c),e.quantities&&r!==(r=t.quantity)&&(a.__value=r),a.value=a.__value},d(e){e&&detachNode(a)}}}function create_each_block(e,t){var a,n,r,c,l,s,d,i,o,m,p,_,u,h,f,b,g,v,y,E,x=t.remedy,k=t.power,T=t.taking_rule,N=t.quantity,O=t.type;return{c(){a=createElement("tr"),n=createElement("td"),r=createText(x),c=createText("\r\n              "),l=createElement("td"),s=createText(k),d=createText("\r\n              "),i=createElement("td"),o=createText(T),m=createText("\r\n              "),p=createElement("td"),_=createText(N),u=createText("\r\n              "),h=createElement("td"),f=createText(O),b=createText("\r\n              "),g=createElement("td"),v=createText("\r\n              "),y=createElement("td"),(E=createElement("span")).innerHTML='<i class="fa fa-trash"></i>',E._svelte={component:e,ctx:t},addListener(E,"click",click_handler),E.className="icon has-text-danger is-pulled-right",setStyle(E,"cursor","pointer"),E.dataset.tooltip="Remove"},m(e,t){insert(e,a,t),append(a,n),append(n,r),append(a,c),append(a,l),append(l,s),append(a,d),append(a,i),append(i,o),append(a,m),append(a,p),append(p,_),append(a,u),append(a,h),append(h,f),append(a,b),append(a,g),append(a,v),append(a,y),append(y,E)},p(e,a){t=a,e.selected_remedies&&x!==(x=t.remedy)&&setData(r,x),e.selected_remedies&&k!==(k=t.power)&&setData(s,k),e.selected_remedies&&T!==(T=t.taking_rule)&&setData(o,T),e.selected_remedies&&N!==(N=t.quantity)&&setData(_,N),e.selected_remedies&&O!==(O=t.type)&&setData(f,O),E._svelte.ctx=t},d(e){e&&detachNode(a),removeListener(E,"click",click_handler)}}}function Treatment(e){init(this,e),this._state=assign(assign({Object:Object},data()),e.data),this._recompute({data:1,selected_remedies:1,treatment:1},this._state),this._bindingGroups=[[]],this._intro=!0,this._fragment=create_main_fragment(this,this._state),this.root._oncreate.push(()=>{oncreate.call(this),this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}assign(Treatment.prototype,proto),assign(Treatment.prototype,methods),Treatment.prototype._recompute=function(e,t){(e.data||e.selected_remedies)&&this._differs(t.disabled,t.disabled=disabled(t))&&(e.disabled=!0),e.treatment&&this._differs(t.disable_add,t.disable_add=disable_add(t))&&(e.disable_add=!0)};export{TreatmentModel as a,Treatment as b};
//# sourceMappingURL=chunk-2d3ffc59.js.map
