"use strict";(self.webpackChunkFrontEndPuraVidaStore=self.webpackChunkFrontEndPuraVidaStore||[]).push([[335],{4335:(z,b,a)=>{a.r(b),a.d(b,{UsuariosModule:()=>g});var U=a(6895),u=a(8184),y=a(5861),s=a(433),l=a(805),C=a(4623),I=a(8868),e=a(8256),A=a(4204),T=a(2340),h=a(529);class p{constructor(o){this.http=o,this.baseUrl=T.N.urlBase}listaRoles(){return this.http.get(`${this.baseUrl}Roles/ListaRoles`)}}p.\u0275fac=function(o){return new(o||p)(e.LFG(h.eN))},p.\u0275prov=e.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});class d{constructor(o){this.http=o,this.baseUrl=T.N.urlBase}listaPersonasCedula(o){const r=(new h.LE).set("id",o);return this.http.get(`${this.baseUrl}persona/obtenerPersonaCedula`,{params:r})}buscarPersonaId(o){const r=(new h.LE).set("id",o);return this.http.get(`${this.baseUrl}persona/personaPorId`,{params:r})}}d.\u0275fac=function(o){return new(o||d)(e.LFG(h.eN))},d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"});var x=a(5593),S=a(2210),F=a(1740),N=a(2453),M=a(1795);class v{constructor(o,r,t,n,Z,G){this.route=o,this.ruta=r,this.servicio=t,this.servicioRol=n,this.servicioPersona=Z,this.messageService=G,this.personaM={psrId:0,psrIdentificacion:"",psrNombre:"",psrApellido1:"",psrApellido2:""},this.rolM={rluId:0,rluDescripcion:""},this.usuarioEdtitar={usrId:0,clave:"",usrUser:"",usrEmail:"",usrIdPersona:0,usrIdRol:0,persona:this.personaM,rol:this.rolM,usrActivo:!0},this.usuarioForm=new s.cw({cedula:new s.NI("",[s.kI.required]),nombre:new s.NI("",[s.kI.required]),apellido1:new s.NI("",[s.kI.required]),apellido2:new s.NI("",[s.kI.required]),usuario:new s.NI("",[s.kI.required]),clave:new s.NI("",[s.kI.required]),correo:new s.NI("",[s.kI.email,s.kI.required]),rol:new s.NI(2)}),this.transacionExitosa=!1,this.esAgregar=!1,this.listaPersonas=[],this.listaRoles=[],this.titulo=""}ngOnInit(){const o=this.route.snapshot.paramMap.get("id");this.validacion(o)}validacion(o){var r=this;return(0,y.Z)(function*(){r.cargarListaRoles(),o>0?yield r.servicio.usuarioPorId(o).pipe().subscribe(t=>{r.usuarioEdtitar=t,null!=t.persona&&(r.personaM=t.persona),null!=t.rol&&(r.rolM=t.rol),r.usuarioForm.patchValue({cedula:r.personaM.psrIdentificacion,nombre:r.personaM.psrNombre,apellido1:r.personaM.psrApellido1,apellido2:r.personaM.psrApellido2,usuario:r.usuarioEdtitar.usrUser,correo:r.usuarioEdtitar.usrEmail,rol:r.usuarioEdtitar.usrIdRol});var n=I.K.decryptUsingAES256(r.usuarioEdtitar.clave).replace('"',"").replace('"',"");r.usuarioForm.patchValue({clave:n})},t=>console.log(t)):(r.usuarioEdtitar.usrId=0,r.personaM.psrId=0,r.rolM=r.listaRoles[1]),"0"!=o?(r.titulo="Editar usuario ",r.esAgregar=!1):(r.titulo="Agregar usuario",r.esAgregar=!0),r.cambioRol()})()}cargarListaRoles(){this.servicioRol.listaRoles().subscribe(o=>{this.listaRoles=o},o=>console.log(o))}guardar(){this.personaM.psrIdentificacion=this.usuarioForm.get("cedula")?.value,this.personaM.psrNombre=this.usuarioForm.get("nombre")?.value,this.personaM.psrApellido1=this.usuarioForm.get("apellido1")?.value,this.personaM.psrApellido2=this.usuarioForm.get("apellido2")?.value,this.usuarioEdtitar.usrUser=this.usuarioForm.get("usuario")?.value,this.usuarioEdtitar.clave=I.K.encryptUsingAES256(this.usuarioForm.get("clave")?.value),this.usuarioEdtitar.usrEmail=this.usuarioForm.get("correo")?.value,this.usuarioEdtitar.usrIdRol=this.usuarioForm.get("rol")?.value,this.usuarioEdtitar.usrIdPersona=this.personaM.psrId,this.usuarioEdtitar.persona=this.personaM,this.servicio.GuardarUsuario(this.usuarioEdtitar,this.esAgregar).subscribe(o=>{this.transacionExitosa=!0,this.showOk("Se guard\xf3 con exit\xf3 al usuario",o.usrUser),(0,C.H)(3e3).subscribe(r=>{this.irUsuarios()})},o=>{this.showError("Se present\xf3 un error",o.error),this.transacionExitosa=!1})}irUsuarios(){(0,C.H)(0,0).subscribe(),this.ruta.navigate(["./principal/usuarios"])}cambioRol(){this.usuarioForm.get("correo");const r=this.usuarioForm.get("rol")?.value,t=this.usuarioForm.controls.correo.hasValidator(s.kI.required);1===r?t||this.usuarioForm.controls.correo.addValidators(s.kI.required):t&&this.usuarioForm.controls.correo.removeValidators(s.kI.required)}showOk(o,r){this.messageService.add({severity:"success",summary:o,detail:r})}showError(o,r){this.messageService.add({severity:"error",summary:o,detail:r})}}v.\u0275fac=function(o){return new(o||v)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(A.P),e.Y36(p),e.Y36(d),e.Y36(l.ez))},v.\u0275cmp=e.Xpm({type:v,selectors:[["app-editar-nuevo"]],features:[e._Bn([l.ez])],decls:52,vars:5,consts:[[3,"formGroup","ngSubmit"],[1,"formgrid","grid"],[1,"col-12","md:col-4"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-id-card"],["type","text","id","cedula","pInputText","","placeholder","C\xe9dula","formControlName","cedula"],[1,"formgrid","grid","my-2"],[1,"field","col"],["for","nombre"],["id","nombre","type","text","formControlName","nombre",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["for","apellido1"],["id","apellido1","type","text","formControlName","apellido1",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],["for","apellido2"],["id","apellido2","type","text","formControlName","apellido2",1,"text-base","text-color","surface-overlay","p-2","border-1","border-solid","surface-border","border-round","appearance-none","outline-none","focus:border-primary","w-full"],[1,"grid","p-fluid"],[1,"pi","pi-user"],["type","text","id","usuario","pInputText","","placeholder","Usuario","autocomplete","new-username","formControlName","usuario"],["type","password","id","clave","pInputText","","placeholder","Contrase\xf1a","autocomplete","new-password","formControlName","clave"],[1,"grid","p-fluid","mt-2"],[1,"pi","pi-envelope"],["type","email","id","correo","pInputText","","placeholder","Correo","formControlName","correo",3,"disabled"],["formControlName","rol","placeholder","Tipo de rol","optionLabel","rluDescripcion","optionValue","rluId",3,"options","onChange"],[1,"my-2"],[1,"p-buttonset"],["pButton","","pRipple","","label","Guardar","type","submit","icon","pi pi-save",3,"disabled"],["pButton","","pRipple","","label","Cancel","routerLink","./usuarios/lista-usuarios"],["position","top-right"]],template:function(o,r){1&o&&(e.TgZ(0,"h1"),e._uU(1),e.qZA(),e.TgZ(2,"form",0),e.NdJ("ngSubmit",function(){return r.guardar()}),e.TgZ(3,"div")(4,"h3"),e._uU(5,"Datos de la persona"),e.qZA(),e.TgZ(6,"div",1)(7,"div",2)(8,"div",3)(9,"span",4),e._UZ(10,"i",5),e.qZA(),e._UZ(11,"input",6),e.qZA()()(),e.TgZ(12,"div",7)(13,"div",8)(14,"label",9),e._uU(15,"Nombre"),e.qZA(),e._UZ(16,"input",10),e.qZA(),e.TgZ(17,"div",8)(18,"label",11),e._uU(19,"Primer apellido"),e.qZA(),e._UZ(20,"input",12),e.qZA(),e.TgZ(21,"div",8)(22,"label",13),e._uU(23,"Segundo apellido"),e.qZA(),e._UZ(24,"input",14),e.qZA()()(),e.TgZ(25,"div")(26,"h3"),e._uU(27,"Datos del Usuario"),e.qZA(),e.TgZ(28,"div",15)(29,"div",2)(30,"div",3)(31,"span",4),e._UZ(32,"i",16),e.qZA(),e._UZ(33,"input",17),e.qZA()(),e.TgZ(34,"div",2)(35,"div",3)(36,"span",4),e._UZ(37,"i",16),e.qZA(),e._UZ(38,"input",18),e.qZA()()(),e.TgZ(39,"div",19)(40,"div",2)(41,"div",3)(42,"span",4),e._UZ(43,"i",20),e.qZA(),e._UZ(44,"input",21),e.qZA()(),e.TgZ(45,"div",2)(46,"p-dropdown",22),e.NdJ("onChange",function(){return r.cambioRol()}),e.qZA()()(),e.TgZ(47,"div",23)(48,"span",24),e._UZ(49,"button",25)(50,"button",26),e.qZA()()()(),e._UZ(51,"p-toast",27)),2&o&&(e.xp6(1),e.Oqu(r.titulo),e.xp6(1),e.Q6J("formGroup",r.usuarioForm),e.xp6(42),e.Q6J("disabled",1!=r.usuarioEdtitar.usrIdRol),e.xp6(2),e.Q6J("options",r.listaRoles),e.xp6(3),e.Q6J("disabled",!r.usuarioForm.valid))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,x.Hq,u.rH,S.Lt,F.o,N.FN,M.H,s.sg,s.u]});var E=a(8590),w=a(8396);function q(i,o){1&i&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"#"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Usuario"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Nombre"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Rol"),e.qZA(),e._UZ(9,"th"),e.qZA())}function R(i,o){if(1&i){const r=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"span",9),e._UZ(11,"button",10),e.TgZ(12,"button",11),e.NdJ("click",function(){e.CHM(r);const n=e.oxw().$implicit,Z=e.oxw();return e.KtG(Z.showConfirm(n.persona.psrNombre,n.usrId))}),e.qZA()()()()}if(2&i){const r=e.oxw().$implicit;e.xp6(2),e.Oqu(r.usrId),e.xp6(2),e.Oqu(r.usrUser),e.xp6(2),e.lnq("",r.persona.psrNombre," ",r.persona.psrApellido1," ",r.persona.psrApellido2,""),e.xp6(2),e.Oqu(r.rol.rluDescripcion),e.xp6(3),e.MGl("routerLink","editar-nuevo/",r.usrId,"")}}function L(i,o){if(1&i&&e.YNc(0,R,13,7,"tr",8),2&i){const r=o.$implicit,t=e.oxw();e.Q6J("ngIf",!t.esVisible(r.usrId)&&r.usrActivo)}}function P(i,o){if(1&i){const r=e.EpF();e.TgZ(0,"div",12)(1,"div",13),e._UZ(2,"i",14),e.TgZ(3,"h4"),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA()(),e.TgZ(7,"div",15)(8,"div",16)(9,"button",17),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.onConfirm())}),e.qZA()(),e.TgZ(10,"div",16)(11,"button",18),e.NdJ("click",function(){e.CHM(r);const n=e.oxw();return e.KtG(n.onReject())}),e.qZA()()()()}if(2&i){const r=o.$implicit;e.xp6(4),e.Oqu(r.summary),e.xp6(2),e.Oqu(r.detail)}}const _=function(){return[10,20,30]};class c{constructor(o,r,t){this.messageService=o,this.servicio=r,this.primengConfig=t,this.listaUsuario=[],this.idUsarioBorrar=0}ngOnInit(){this.primengConfig.ripple=!0,this.llenarUsuarios()}esVisible(o){return null!=E.o.usuarioPrograma.usrId&&E.o.usuarioPrograma.usrId===o}llenarUsuarios(){this.servicio.listaUsuarios().subscribe(o=>{this.listaUsuario=[],this.listaUsuario=o},o=>{console.log(o)})}showSuccess(){this.messageService.add({severity:"success",summary:"Success",detail:"Message Content"})}showInfo(){this.messageService.add({severity:"info",summary:"Info",detail:"Message Content"})}showWarn(){this.messageService.add({severity:"warn",summary:"Warn",detail:"Message Content"})}showError(o,r){this.messageService.add({severity:"error",summary:o,detail:r})}showTopLeft(){this.messageService.add({key:"tl",severity:"info",summary:"Info",detail:"Message Content"})}showTopCenter(){this.messageService.add({key:"tc",severity:"info",summary:"Info",detail:"Message Content"})}showBottomCenter(){this.messageService.add({key:"bc",severity:"info",summary:"Info",detail:"Message Content"})}showConfirm(o,r){this.idUsarioBorrar=r,this.messageService.clear(),this.messageService.add({key:"c",sticky:!0,severity:"warn",summary:"\xbfEst\xe1s seguro de eliminar a "+o+"?",detail:"Confirmar proceso"})}showMultiple(){this.messageService.addAll([{severity:"info",summary:"Message 1",detail:"Message Content"},{severity:"info",summary:"Message 2",detail:"Message Content"},{severity:"info",summary:"Message 3",detail:"Message Content"}])}showSticky(){this.messageService.add({severity:"info",summary:"Sticky",detail:"Message Content",sticky:!0})}onConfirm(){var o=this;return(0,y.Z)(function*(){o.messageService.clear("c"),o.servicio.usuarioPorId(o.idUsarioBorrar).subscribe(r=>{let t;t=r,t.usrActivo=!1,o.servicio.GuardarUsuario(t,!1).subscribe(n=>{null!=t.persona&&(o.llenarUsuarios(),o.showError("Se Elimin\xf3 al usuario ",t.persona.psrNombre))},n=>console.log(n))},r=>console.error)})()}onReject(){this.idUsarioBorrar=0,this.messageService.clear("c")}clear(){this.messageService.clear()}}c.\u0275fac=function(o){return new(o||c)(e.Y36(l.ez),e.Y36(A.P),e.Y36(l.b4))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-lista-usuarios"]],features:[e._Bn([l.ez])],decls:11,vars:6,consts:[[3,"value","paginator","rows","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["position","top-left","key","tl"],["position","top-center","key","tc"],["position","bottom-center","key","bc"],["position","top-center","key","c",3,"baseZIndex","onClose"],["pTemplate","message"],[4,"ngIf"],[1,"p-buttonset"],["pButton","","pRipple","","type","button","icon","pi pi-pencil",1,"p-button-rounded","p-button-warning",3,"routerLink"],["pButton","","pRipple","","type","button","icon","pi pi-trash",1,"p-button-rounded","p-button-danger",3,"click"],[1,"p-flex","p-flex-column",2,"flex","1"],[1,"p-text-center"],[1,"pi","pi-exclamation-triangle",2,"font-size","3rem"],[1,"p-grid","p-fluid"],[1,"p-col-6"],["type","button","pButton","","label","S\xed",1,"p-button-success",3,"click"],["type","button","pButton","","label","No",1,"p-button-secondary",3,"click"]],template:function(o,r){1&o&&(e.TgZ(0,"h1"),e._uU(1,"Lista usuarios"),e.qZA(),e.TgZ(2,"p-table",0),e.YNc(3,q,10,0,"ng-template",1),e.YNc(4,L,1,1,"ng-template",2),e.qZA(),e._UZ(5,"p-toast")(6,"p-toast",3)(7,"p-toast",4)(8,"p-toast",5),e.TgZ(9,"p-toast",6),e.NdJ("onClose",function(){return r.onReject()}),e.YNc(10,P,12,2,"ng-template",7),e.qZA()),2&o&&(e.xp6(2),e.Q6J("value",r.listaUsuario)("paginator",!0)("rows",10)("rowsPerPageOptions",e.DdM(5,_)),e.xp6(7),e.Q6J("baseZIndex",5e3))},dependencies:[U.O5,l.jx,x.Hq,u.rH,w.iA,N.FN,M.H]});var k=a(8861);class f{constructor(){this.items=[]}ngOnInit(){this.items=[{label:"Lista de usuarios",icon:"pi pi-users",routerLink:"lista-usuarios"},{label:"Agregar usuario",icon:"pi pi-user-plus",routerLink:"editar-nuevo/0"}]}}f.\u0275fac=function(o){return new(o||f)},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-usuarios"]],decls:6,vars:1,consts:[[1,"formgrid","grid","my-2"],[1,"field","col-2"],[3,"model"],["menu",""],[1,"field","col"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"p-slideMenu",2,3),e.qZA(),e.TgZ(4,"div",4),e._UZ(5,"router-outlet"),e.qZA()()),2&o&&(e.xp6(2),e.Q6J("model",r.items))},dependencies:[u.lC,k.aj]});const B=[{path:"",component:f,children:[{path:"",component:c},{path:"lista-usuarios",component:c},{path:"editar-nuevo/:id",component:v},{path:"**",redirectTo:"/"}]}];class m{}m.\u0275fac=function(o){return new(o||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[u.Bz.forChild(B),u.Bz]});var J=a(6949),Y=a(1405),O=a(2464);class g{}g.\u0275fac=function(o){return new(o||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({providers:[{provide:h.TP,useClass:O.n,multi:!0}],imports:[U.ez,s.u5,J.R,s.UX,m,Y.PrincipalModule]})}}]);