import{L as b}from"./Admin.4b602189.js";import{H as f,L as h,r as p,a as i,o as r,c as l,b as c,w as d,d as t,e as v,f as w,v as y,t as k,g as x,F as S,h as g,i as m}from"./app.cbe9c0a4.js";import{S as K}from"./sweetalert2.all.2152a49d.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const N={layout:b,components:{Head:f,Link:h},props:{errors:Object},setup(){const o=p({title:""});return{form:o,submit:()=>{g.Inertia.post("/admin/classrooms",{title:o.title},{onSuccess:()=>{K.fire({title:"Success!",text:"Kelas Berhasil Disimpan!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},B=t("title",null,"Tambah Kelas - Aplikasi Ujian Online",-1),C={class:"container-fluid mb-5 mt-5"},V={class:"row"},H={class:"col-md-12"},T=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),D=m(" Kembali"),M={class:"card border-0 shadow"},j={class:"card-body"},A=t("h5",null,[t("i",{class:"fa fa-clone"}),m(" Tambah Kelas")],-1),F=t("hr",null,null,-1),O={class:"mb-4"},U=t("label",null,"Nama Kelas",-1),E={key:0,class:"alert alert-danger mt-2"},I=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),R=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function q(o,s,n,e,z,G){const _=i("Head"),u=i("Link");return r(),l(S,null,[c(_,null,{default:d(()=>[B]),_:1}),t("div",C,[t("div",V,[t("div",H,[c(u,{href:"/admin/classrooms",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:d(()=>[T,D]),_:1}),t("div",M,[t("div",j,[A,F,t("form",{onSubmit:s[1]||(s[1]=v((...a)=>e.submit&&e.submit(...a),["prevent"]))},[t("div",O,[U,w(t("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Kelas","onUpdate:modelValue":s[0]||(s[0]=a=>e.form.title=a)},null,512),[[y,e.form.title]]),n.errors.title?(r(),l("div",E,k(n.errors.title),1)):x("",!0)]),I,R],32)])])])])])],64)}const X=L(N,[["render",q]]);export{X as default};
