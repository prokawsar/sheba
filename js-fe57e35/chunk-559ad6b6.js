var K_ENV="prod",K_ENV_DEV="dev",K_ENV_TEST="test",K_ENV_PROD="prod";import{s as baseModel}from"./chunk-5d88ab61.js";var Model=new class extends baseModel{constructor(){super(),this.apiEndpoint="/users";var t=this.getOne;this.getOne=((e,s)=>Promise.all([this.authContext.apply(this,[s]),t.apply(this,[e])]))}uploadAvatar(t,e,s){return this.upload(t+"/avatar",e,s)}premiseByOrg(t){return this.getAll("",this.apiEndpoint+"/"+t+"/premises")}};export{Model as a};
//# sourceMappingURL=chunk-559ad6b6.js.map
