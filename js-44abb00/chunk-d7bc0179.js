var K_ENV="prod",K_ENV_DEV="dev",K_ENV_TEST="test",K_ENV_PROD="prod";import{s as baseModel}from"./chunk-b74ece54.js";var Model=new class extends baseModel{constructor(){super(),this.apiEndpoint="/users";var e=this.getOne;this.getOne=((t,s)=>Promise.all([this.authContext.apply(this,[s]),e.apply(this,[t])]))}uploadAvatar(e,t,s){return this.upload(e+"/avatar",t,s)}premiseByOrg(e){return this.getAll("",this.apiEndpoint+"/"+e+"/premises")}};export{Model as a};
//# sourceMappingURL=chunk-d7bc0179.js.map
