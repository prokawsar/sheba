var K_ENV="prod",K_ENV_DEV="dev",K_ENV_TEST="test",K_ENV_PROD="prod";import{a as append,b as assign,c as assignTrue,d as createElement,e as createFragment,f as createText,g as detachNode,h as flush,i as init,j as insert,l as proto,y as setAttribute,n as Icon,q as ViewScaffold,r as PageTitle}from"./chunk-5d88ab61.js";import{a as Router}from"./chunk-fdf63a19.js";import{a as DataList}from"./chunk-9d170df0.js";import{a as Model}from"./chunk-97fddd3e.js";import"./chunk-1056db43.js";import"./chunk-93a5e233.js";function data(){return{model_set:!1,is_loading:!0,is_error:!1,error_message:"",meta:{},data:[],Model:Model,View:"Histories",entity_name:"History",route_prefix:"history/",has_additional_buttons:!0,clickableRows:!0,columns:{id:"ID",name:"Patient Name",created:"Last Visited Date"},search_placeholder:"Name",page:{title:"Case Histories",icon:"building-o",subtitle:"Case Histories in this System"},searchStringTransformer:e=>{var r=e.split("~"),a=[];""!=r[0]&&a.push("name[lk]:"+r[0]),r.shift();for(var s=0;s<r.length;s++){var t=r[s],o=t.split(":");""!=t&&void 0!==o[1]&&""!=o[1]&&a.push(o[0]+"[eq]:"+o[1])}return a.join(",")},valueTransformers:{id:(e,r)=>r.patient.id,name:(e,r)=>r.patient.name},classTransformers:{link:()=>"is-icon"},styleTransformers:{}}}function oncreate(){this.on("rowClick",({row:e})=>{Router.navigate(`history/view/${e.id}`)})}function create_main_fragment(e,r){var a,s,t,o,i={},n={page:r.page},d=new PageTitle({root:e.root,store:e.store,data:n}),l=new Icon({root:e.root,store:e.store,data:{size:"small",icon:"plus-circle"}}),_={Model:r.Model,View:r.View,entity_name:r.entity_name,route_prefix:r.route_prefix,has_additional_buttons:r.has_additional_buttons,search_placeholder:r.search_placeholder,columns:r.columns,searchStringTransformer:r.searchStringTransformer,valueTransformers:r.valueTransformers,classTransformers:r.classTransformers,styleTransformers:r.styleTransformers,clickableRows:r.clickableRows};void 0!==r.is_loading&&(_.is_loading=r.is_loading,i.is_loading=!0),void 0!==r.is_error&&(_.is_error=r.is_error,i.is_error=!0),void 0!==r.error_message&&(_.error_message=r.error_message,i.error_message=!0),void 0!==r.data&&(_.data=r.data,i.data=!0),void 0!==r.meta&&(_.meta=r.meta,i.meta=!0);var m=new DataList({root:e.root,store:e.store,slots:{default:createFragment(),additionalButtons:createFragment()},data:_,_bind(r,a){var s={};!i.is_loading&&r.is_loading&&(s.is_loading=a.is_loading),!i.is_error&&r.is_error&&(s.is_error=a.is_error),!i.error_message&&r.error_message&&(s.error_message=a.error_message),!i.data&&r.data&&(s.data=a.data),!i.meta&&r.meta&&(s.meta=a.meta),e._set(s),i={}}});e.root._beforecreate.push(()=>{m._bind({is_loading:1,is_error:1,error_message:1,data:1,meta:1},m.get())}),m.on("rowClick",function(r){e.fire("rowClick",r)});var c={is_loading:r.is_loading,is_error:r.is_error,error_message:r.error_message},g=new ViewScaffold({root:e.root,store:e.store,slots:{default:createFragment()},data:c});return{c(){a=createElement("div"),d._fragment.c(),s=createText("\r\n\r\n  "),t=createElement("a"),l._fragment.c(),(o=createElement("span")).textContent="Add Case History",m._fragment.c(),g._fragment.c(),setAttribute(t,"slot","additionalButtons"),t.href="#history/add",t.className="button is-success",a.className="page-content"},m(e,r){insert(e,a,r),d._mount(a,null),append(a,s),append(m._slotted.additionalButtons,t),l._mount(t,null),append(t,o),m._mount(g._slotted.default,null),g._mount(a,null)},p(e,a){r=a;var s={};e.page&&(s.page=r.page),d._set(s);var t={};e.Model&&(t.Model=r.Model),e.View&&(t.View=r.View),e.entity_name&&(t.entity_name=r.entity_name),e.route_prefix&&(t.route_prefix=r.route_prefix),e.has_additional_buttons&&(t.has_additional_buttons=r.has_additional_buttons),e.search_placeholder&&(t.search_placeholder=r.search_placeholder),e.columns&&(t.columns=r.columns),e.searchStringTransformer&&(t.searchStringTransformer=r.searchStringTransformer),e.valueTransformers&&(t.valueTransformers=r.valueTransformers),e.classTransformers&&(t.classTransformers=r.classTransformers),e.styleTransformers&&(t.styleTransformers=r.styleTransformers),e.clickableRows&&(t.clickableRows=r.clickableRows),!i.is_loading&&e.is_loading&&(t.is_loading=r.is_loading,i.is_loading=void 0!==r.is_loading),!i.is_error&&e.is_error&&(t.is_error=r.is_error,i.is_error=void 0!==r.is_error),!i.error_message&&e.error_message&&(t.error_message=r.error_message,i.error_message=void 0!==r.error_message),!i.data&&e.data&&(t.data=r.data,i.data=void 0!==r.data),!i.meta&&e.meta&&(t.meta=r.meta,i.meta=void 0!==r.meta),m._set(t),i={};var o={};e.is_loading&&(o.is_loading=r.is_loading),e.is_error&&(o.is_error=r.is_error),e.error_message&&(o.error_message=r.error_message),g._set(o)},d(e){e&&detachNode(a),d.destroy(),l.destroy(),m.destroy(),g.destroy()}}}function Histories(e){init(this,e),this._state=assign(data(),e.data),this._intro=!0,this._fragment=create_main_fragment(this,this._state),this.root._oncreate.push(()=>{oncreate.call(this),this.fire("update",{changed:assignTrue({},this._state),current:this._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}assign(Histories.prototype,proto);export default Histories;
//# sourceMappingURL=Histories.js.map
