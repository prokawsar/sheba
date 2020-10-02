var K_ENV="prod",K_ENV_DEV="dev",K_ENV_TEST="test",K_ENV_PROD="prod";import{a as append,b as assign,d as createElement,e as createFragment,f as createText,g as detachNode,h as flush,i as init,j as insert,l as proto,y as setAttribute,n as Icon,q as ViewScaffold,r as PageTitle}from"./chunk-ce2fee6f.js";import{a as DataList}from"./chunk-8f9d4b6c.js";import{a as Remedies}from"./chunk-dc7fa8bb.js";import"./chunk-0860a2de.js";import"./chunk-f0ce08d9.js";import"./chunk-a7963841.js";const hexToRGB=e=>{let r=0,a=0,s=0;return 4==e.length?(r="0x"+e[1]+e[1],a="0x"+e[2]+e[2],s="0x"+e[3]+e[3]):7==e.length&&(r="0x"+e[1]+e[2],a="0x"+e[3]+e[4],s="0x"+e[5]+e[6]),"rgb("+ +r+","+ +a+","+ +s+")"},RGBToHSL=e=>{let r=e.indexOf(",")>-1?",":" ";e=e.substr(4).split(")")[0].split(r);for(let r in e){let a=e[r];a.indexOf("%")>-1&&(e[r]=Math.round(a.substr(0,a.length-1)/100*255))}let a=e[0]/255,s=e[1]/255,t=e[2]/255,o=Math.min(a,s,t),i=Math.max(a,s,t),n=i-o,d=0,l=0,m=0;return d=0==n?0:i==a?(s-t)/n%6:i==s?(t-a)/n+2:(a-s)/n+4,(d=Math.round(60*d))<0&&(d+=360),m=(i+o)/2,{h:d,s:l=+(100*(l=0==n?0:n/(1-Math.abs(2*m-1)))).toFixed(1),l:m=+(100*m).toFixed(1)}};function hexToRgb(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,r,a,s){return r+r+a+a+s+s});var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}function colorLuminance(e){let r=hexToRgb(e);if(r){let e=Object.values(r).map(e=>{let r=e/255;return r<.03928?r/=12.92:(r=(r+.055)/1.055,r=Math.pow(r,2)),r}),a=.2126*e[0]+.7152*e[1]+.0722*e[2];return Math.round(1e5*a)/1e5}return 0}function findColorInvert(e){return colorLuminance(e)>.55?"rgba(0, 0, 0, 0.7)":"#ffffff"}function data(){return{model_set:!1,is_loading:!0,is_error:!1,error_message:"",meta:{},data:[],Model:Remedies,View:"Remedies",entity_name:"Remedies",route_prefix:"remedies/",has_additional_buttons:!0,columns:{name:"Remedy Name",total_data_size:"Data Saved Percentage",book_references:"Referenced Books",singleview:"",link:""},search_placeholder:"Name",page:{title:"Remedies",icon:"building-o",subtitle:"All Remedies in this System"},searchStringTransformer:e=>{var r=e.split("~"),a=[];""!=r[0]&&a.push("name[lk]:"+r[0]),r.shift();for(var s=0;s<r.length;s++){var t=r[s],o=t.split(":");""!=t&&void 0!==o[1]&&""!=o[1]&&a.push(o[0]+"[eq]:"+o[1])}return a.join(",")},valueTransformers:{total_data_size(e,r){let a=parseFloat(r.total_data_size).toFixed(2)+" %",s=e=>{let r="",a=0;(e=parseFloat(e))<10?(r="#e01409",a=10):e<20?(r="#e06609",a=20):e<30?(r="#e0a009",a=30):e<40?(r="#D6FA50",a=40):e<50?(r="#CBD89D",a=50):e<60?(r="#04ba83",a=60):e<70?(r="#63d40d",a=70):e<80&&(r="#07ba3d",a=80);let s=RGBToHSL(hexToRGB(r)),{h:t,s:o,l:i}=s;return[`hsl(${t},${o}%,${i+(a-e)}%)`,r]};return`<span class='tag is-medium' style='background-color: ${s(a)[0]}; color: ${findColorInvert(s(a)[1])};'>${a}</span>`},singleview:(e,r)=>'<a href="#remedies/singleview/'+r.id+'"><span class="icon"><i class="fa fa-eye"></i></span></a>',link:(e,r)=>'<a href="#remedies/view/'+r.id+'"><span class="icon"><i class="fa fa-pencil"></i></span></a>'},classTransformers:{name:()=>"title is-4",singleview:()=>"is-icon",link:()=>"is-icon"},styleTransformers:{}}}function create_main_fragment(e,r){var a,s,t,o,i={},n={page:r.page},d=new PageTitle({root:e.root,store:e.store,data:n}),l=new Icon({root:e.root,store:e.store,data:{size:"small",icon:"plus-circle"}}),m={Model:r.Model,View:r.View,entity_name:r.entity_name,route_prefix:r.route_prefix,has_additional_buttons:r.has_additional_buttons,search_placeholder:r.search_placeholder,columns:r.columns,searchStringTransformer:r.searchStringTransformer,valueTransformers:r.valueTransformers,classTransformers:r.classTransformers,styleTransformers:r.styleTransformers};void 0!==r.is_loading&&(m.is_loading=r.is_loading,i.is_loading=!0),void 0!==r.is_error&&(m.is_error=r.is_error,i.is_error=!0),void 0!==r.error_message&&(m.error_message=r.error_message,i.error_message=!0),void 0!==r.data&&(m.data=r.data,i.data=!0),void 0!==r.meta&&(m.meta=r.meta,i.meta=!0);var _=new DataList({root:e.root,store:e.store,slots:{default:createFragment(),additionalButtons:createFragment()},data:m,_bind(r,a){var s={};!i.is_loading&&r.is_loading&&(s.is_loading=a.is_loading),!i.is_error&&r.is_error&&(s.is_error=a.is_error),!i.error_message&&r.error_message&&(s.error_message=a.error_message),!i.data&&r.data&&(s.data=a.data),!i.meta&&r.meta&&(s.meta=a.meta),e._set(s),i={}}});e.root._beforecreate.push(()=>{_._bind({is_loading:1,is_error:1,error_message:1,data:1,meta:1},_.get())});var c={is_loading:r.is_loading,is_error:r.is_error,error_message:r.error_message},f=new ViewScaffold({root:e.root,store:e.store,slots:{default:createFragment()},data:c});return{c(){a=createElement("div"),d._fragment.c(),s=createText("\r\n\r\n  "),t=createElement("a"),l._fragment.c(),(o=createElement("span")).textContent="Add Remedy",_._fragment.c(),f._fragment.c(),setAttribute(t,"slot","additionalButtons"),t.href="#remedies/add",t.className="button is-success",a.className="page-content"},m(e,r){insert(e,a,r),d._mount(a,null),append(a,s),append(_._slotted.additionalButtons,t),l._mount(t,null),append(t,o),_._mount(f._slotted.default,null),f._mount(a,null)},p(e,a){r=a;var s={};e.page&&(s.page=r.page),d._set(s);var t={};e.Model&&(t.Model=r.Model),e.View&&(t.View=r.View),e.entity_name&&(t.entity_name=r.entity_name),e.route_prefix&&(t.route_prefix=r.route_prefix),e.has_additional_buttons&&(t.has_additional_buttons=r.has_additional_buttons),e.search_placeholder&&(t.search_placeholder=r.search_placeholder),e.columns&&(t.columns=r.columns),e.searchStringTransformer&&(t.searchStringTransformer=r.searchStringTransformer),e.valueTransformers&&(t.valueTransformers=r.valueTransformers),e.classTransformers&&(t.classTransformers=r.classTransformers),e.styleTransformers&&(t.styleTransformers=r.styleTransformers),!i.is_loading&&e.is_loading&&(t.is_loading=r.is_loading,i.is_loading=void 0!==r.is_loading),!i.is_error&&e.is_error&&(t.is_error=r.is_error,i.is_error=void 0!==r.is_error),!i.error_message&&e.error_message&&(t.error_message=r.error_message,i.error_message=void 0!==r.error_message),!i.data&&e.data&&(t.data=r.data,i.data=void 0!==r.data),!i.meta&&e.meta&&(t.meta=r.meta,i.meta=void 0!==r.meta),_._set(t),i={};var o={};e.is_loading&&(o.is_loading=r.is_loading),e.is_error&&(o.is_error=r.is_error),e.error_message&&(o.error_message=r.error_message),f._set(o)},d(e){e&&detachNode(a),d.destroy(),l.destroy(),_.destroy(),f.destroy()}}}function Remedies$1(e){init(this,e),this._state=assign(data(),e.data),this._intro=!0,this._fragment=create_main_fragment(this,this._state),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),flush(this))}assign(Remedies$1.prototype,proto);export default Remedies$1;
//# sourceMappingURL=Remedies.js.map
