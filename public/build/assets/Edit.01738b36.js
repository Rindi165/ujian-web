import{L as _}from"./Admin.4b602189.js";import{H as b,L as f,r as p,a,o as h,c as g,b as l,w as r,d as t,e as y,f as w,s as k,F as V,h as q,i as m}from"./app.cbe9c0a4.js";import{S as v}from"./sweetalert2.all.2152a49d.js";import{E as j}from"./Editor.19991423.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";const S={layout:_,components:{Head:b,Link:f,Editor:j},props:{errors:Object,exam:Object,question:Object},setup(n){const o=p({question:n.question.question,option_1:n.question.option_1,option_2:n.question.option_2,option_3:n.question.option_3,option_4:n.question.option_4,answer:n.question.answer});return{form:o,submit:()=>{q.Inertia.put(`/admin/exams/${n.exam.id}/questions/${n.question.id}/update`,{question:o.question,option_1:o.option_1,option_2:o.option_2,option_3:o.option_3,option_4:o.option_4,answer:o.answer},{onSuccess:()=>{v.fire({title:"Success!",text:"Soal Ujian Berhasil Dipdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},U=t("title",null,"Edit Soal Ujian - Aplikasi Ujian Online",-1),B={class:"container-fluid mb-5 mt-5"},E={class:"row"},L={class:"col-md-12"},C=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),A=m(" Kembali"),D={class:"card border-0 shadow"},H={class:"card-body"},O=t("h5",null,[t("i",{class:"fa fa-question-circle"}),m(" Edit Soal Ujian")],-1),P=t("hr",null,null,-1),N={class:"table-responsive mb-4"},F={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},M=t("td",{style:{width:"20%"},class:"fw-bold"},"Soal",-1),I=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan A",-1),J=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan B",-1),K=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan C",-1),R=t("td",{style:{width:"20%"},class:"fw-bold"},"Pilihan D",-1),T=t("td",{style:{width:"20%"},class:"fw-bold"},"Jawaban Benar",-1),z=t("option",{value:"1"},"A",-1),G=t("option",{value:"2"},"B",-1),Q=t("option",{value:"3"},"C",-1),W=t("option",{value:"4"},"D",-1),X=[z,G,Q,W],Y=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Simpan",-1),Z=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function $(n,o,d,i,tt,ot){const u=a("Head"),c=a("Link"),s=a("Editor");return h(),g(V,null,[l(u,null,{default:r(()=>[U]),_:1}),t("div",B,[t("div",E,[t("div",L,[l(c,{href:`/admin/exams/${d.exam.id}`,class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:r(()=>[C,A]),_:1},8,["href"]),t("div",D,[t("div",H,[O,P,t("form",{onSubmit:o[6]||(o[6]=y((...e)=>i.submit&&i.submit(...e),["prevent"]))},[t("div",N,[t("table",F,[t("tbody",null,[t("tr",null,[M,t("td",null,[l(s,{"api-key":"no-api-key",modelValue:i.form.question,"onUpdate:modelValue":o[0]||(o[0]=e=>i.form.question=e),init:{menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[I,t("td",null,[l(s,{"api-key":"no-api-key",modelValue:i.form.option_1,"onUpdate:modelValue":o[1]||(o[1]=e=>i.form.option_1=e),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[J,t("td",null,[l(s,{"api-key":"no-api-key",modelValue:i.form.option_2,"onUpdate:modelValue":o[2]||(o[2]=e=>i.form.option_2=e),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[K,t("td",null,[l(s,{"api-key":"no-api-key",modelValue:i.form.option_3,"onUpdate:modelValue":o[3]||(o[3]=e=>i.form.option_3=e),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[R,t("td",null,[l(s,{"api-key":"no-api-key",modelValue:i.form.option_4,"onUpdate:modelValue":o[4]||(o[4]=e=>i.form.option_4=e),init:{height:130,menubar:!1,plugins:"lists link image emoticons",toolbar:"styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image emoticons"}},null,8,["modelValue"])])]),t("tr",null,[T,t("td",null,[w(t("select",{class:"form-control","onUpdate:modelValue":o[5]||(o[5]=e=>i.form.answer=e)},X,512),[[k,i.form.answer]])])])])])]),Y,Z],32)])])])])])],64)}const at=x(S,[["render",$]]);export{at as default};
