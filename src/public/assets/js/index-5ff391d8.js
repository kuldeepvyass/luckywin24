import{_ as T,G as le,g as M,b0 as te,aY as ce,dA as ye,o as ee,u as we,S as re,a as ke,dB as Se,dC as $e,dD as Ce,dE as Ae,ba as Le,bq as Ie,bb as De,bc as Te,K as ue,i as ae,h as Ee,dF as oe,dG as Be,r as de,j as Pe}from"./page-activity-fec29892.js";import{_ as F,P as ve,Q,a2 as D,o as m,j as k,a4 as Z,a5 as Ne,l as a,ae as C,H as u,a1 as y,a6 as h,a0 as v,a9 as _e,A as j,N as me,ap as pe,r as f,a3 as fe,aa as I,af as xe,ag as Re,q as Ve,Z as Fe,J as V,G as J,a7 as P,a8 as K,K as Ge,aD as Oe,aC as ne,b2 as Ue,X as je,ac as z,$ as He,B as Me,b3 as Ke,ak as H,k as ze,a$ as Ye,b4 as qe,b5 as Xe,b6 as We,b7 as Je,b8 as Qe,b9 as Ze,ba as et,bb as tt,bc as st,bd as at,be as ot,bf as nt,bg as it,bh as lt,bi as ct,bj as rt,bk as ut,bl as dt,bm as vt,bn as _t,bo as mt,bp as pt,bq as ft,br as gt,bs as ht,bt,bu as yt,bv as wt,bw as kt,bx as St,by as $t,bz as Ct,bA as At,bB as Lt,bC as It,bD as Dt,bE as Tt,bF as Et,bG as Bt,bH as Pt,bI as Nt,bJ as xt}from"./modules-169a6d8a.js";import{u as ge}from"./page-login-16483bf0.js";import"./native/index-8472c1de.js";import"./en-d8b93f6c.js";import"./rus-f36a0376.js";import"./vi-078696bc.js";import"./id-0e1a5e94.js";import"./hd-70c20855.js";import"./tha-a79d0bfa.js";import"./md-4050132e.js";import"./bra-135533fa.js";import"./my-4048b35d.js";import"./bdt-ce4c267d.js";import"./zh-db2d9740.js";import"./pak-8a523195.js";import"./ar-4393a98f.js";import"./page-home-baad8c58.js";window.getBuildInfo=function(){return{buildTime:"10/14/2024, 4:11:55 AM",branch:" commitId:9a3cbcf5a2b23b168ac430bfe6b394ce81f38449"}};(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const Rt={class:"tabbar__container"},Vt=["onClick"],Ft={key:1,class:"promotionBg"},Gt={key:2},Ot=F({__name:"index2",setup(t){const e=ve(),s=Q();async function n(i){await e.push({name:i})}const o=[{name:"promotion"},{name:"activity"},{name:"home"},{name:"wallet"},{name:"main"}];return(i,d)=>{const l=D("svg-icon");return m(),k("div",Rt,[(m(),k(Z,null,Ne(o,(r,_)=>a("div",{class:_e(["tabbar__container-item",{active:r.name===u(s).name}]),key:r+""+_,onClick:c=>n(r.name)},[_!==2?(m(),C(l,{key:0,name:r.name===u(s).name?`p3_${r.name}_a`:`p3_${r.name}`},null,8,["name"])):y("v-if",!0),_==2?(m(),k("div",Ft,[h(l,{name:r.name===u(s).name?`p3_${r.name}_a`:`p3_${r.name}`},null,8,["name"])])):(m(),k("span",Gt,v(i.$t(r.name)),1))],10,Vt)),64))])}}});const Ut=T(Ot,[["__scopeId","data-v-fb80cf49"],["__file","/var/lib/jenkins/workspace/web-印度-sikkim-ar058-webnew/src/components/TabBar/index2.vue"]]);function jt(){const t=le(),e=()=>{document.visibilityState==="visible"?t.setvisibility():t.setvisibility(0)};j(()=>{document.addEventListener("visibilitychange",e)}),me(()=>{document.removeEventListener("visibilitychange",e)})}const Ht=F({__name:"Customer",setup(t){pe(p=>({"f6a705e1-currentFontFamily":G.value}));const e=f(!1),s=f({x:0,y:0}),n=f(0),o=f(0),i=f(0),d=f(0),l=f(0),r=f(0),_=f();let c,E,S,A;const{getSelfCustomerServiceLink:N}=ge({ServerType:2});function x(){U(c,E,S,A)||N()}j(()=>{_.value=document.getElementById("customerId")});function w(p){e.value=!0;var g;p.touches?g=p.touches[0]:g=p,s.value.x=g.clientX,s.value.y=g.clientY,n.value=_.value.offsetLeft,o.value=_.value.offsetTop,c=p.clientX,E=p.clientY}function L(p){if(e.value){var g,B=document.getElementById("customerId"),O=B.clientWidth,Y=B.clientHeight,q=document.documentElement.clientHeight,b=document.documentElement.clientWidth;p.touches?g=p.touches[0]:g=p,i.value=g.clientX-s.value.x,d.value=g.clientY-s.value.y,l.value=n.value+i.value,r.value=o.value+d.value,l.value<=0&&(l.value=0),r.value<=0&&(r.value=0),l.value>=b-O&&(l.value=b-O),r.value>=q-Y&&(r.value=q-Y),_.value.style.left=l.value+"px",_.value.style.top=r.value+"px",document.addEventListener("touchmove",function(){p.preventDefault()},!1)}p.stopPropagation(),p.preventDefault()}function $(p){e.value=!1,S=p.clientX,A=p.clientY}function U(p,g,B,O){return!(Math.sqrt((p-B)*(p-B)+(g-O)*(g-O))<=1)}const G=f("bahnschrift");return(p,g)=>{const B=fe("lazy");return m(),k("div",{class:"customer",onClick:x,onMousedown:w,onTouchstart:w,onMousemove:L,onTouchmove:L,onMouseup:$,id:"customerId"},[I(a("img",null,null,512),[[B,u(M)("home","icon_sevice")]])],32)}}});const Mt=T(Ht,[["__file","/var/lib/jenkins/workspace/web-印度-sikkim-ar058-webnew/src/components/common/Customer.vue"]]),Kt="/assets/png/logo-cb8bf40e.png";const zt={},he=t=>(xe("data-v-5eb72be7"),t=t(),Re(),t),Yt={class:"start-page"},qt=he(()=>a("div",{class:"dice"},null,-1)),Xt=he(()=>a("img",{class:"logo",src:Kt},null,-1));function Wt(t,e){return m(),k("div",Yt,[a("div",null,[qt,a("p",null,v(t.$t("fairAndSafe")),1),Xt])])}const Jt=T(zt,[["render",Wt],["__scopeId","data-v-5eb72be7"],["__file","/var/lib/jenkins/workspace/web-印度-sikkim-ar058-webnew/entrance/ar058/StartPage.vue"]]),Qt={class:"header"},Zt={class:"title"},es={class:"tip"},ts={class:"container"},ss={class:"footer"},as=F({__name:"dialog",setup(t){const e=ve(),s=Q(),n=f(!1),{closeFirstSave:o}=te(),{ActiveSotre:i,getFirstRechargeList:d}=ce(),l=Ve(new Date).format("YYYY-MM-DD"),r=Fe("firstSave",null),_=V(()=>r.value==l),c=()=>{_.value?(r.value="",localStorage.removeItem("firstSave")):r.value=l},E=()=>{n.value=!1,o()},S=["activity","home","main","wallet","promotion"];J(()=>s.name,w=>{S.includes(s.name)&&A()});const A=()=>{r.value!=l&&d().then(w=>{if(!w.length){n.value=!1,o();return}const L=w.find($=>$.isFinshed);L&&(i.value.isShowFirstSaveDialog=!1),L||(n.value=!0)})},N=()=>{n.value=!1,o(!0),e.push({name:"FirstRecharge"})},x=()=>{n.value=!1,o(!0),e.push({name:"Recharge"})};return j(()=>{S.includes(s.name)&&A()}),(w,L)=>{const $=D("svg-icon"),U=D("van-dialog");return m(),C(U,{show:n.value,"onUpdate:show":L[0]||(L[0]=G=>n.value=G),className:"firstSaveDialog"},{title:P(()=>[a("div",Qt,[a("div",Zt,v(w.$t("firstDialogH")),1),a("div",es,v(w.$t("firstDialogTip")),1)])]),footer:P(()=>[a("div",ss,[a("div",{class:_e(["active",{a:_.value}]),onClick:c},[h($,{name:"active"}),K(v(w.$t("noTipToday")),1)],2),a("div",{class:"btn",onClick:N},v(w.$t("activity")),1)])]),default:P(()=>[a("div",ts,[h(ye,{list:u(i).FirstRechargeList,onGorecharge:x},null,8,["list"])]),a("div",{class:"close",onClick:E})]),_:1},8,["show"])}}});const os=T(as,[["__scopeId","data-v-9cd12fb2"],["__file","/var/lib/jenkins/workspace/web-印度-sikkim-ar058-webnew/src/components/Activity/FirstRecharge/dialog.vue"]]),ns={class:"dialog-window"},is={class:"dialog-wrapper"},ls={class:"dialog-title"},cs={class:"dialog-content"},rs={class:"dialog-window"},us={class:"dialog-wrapper"},ds={class:"dialog-title"},vs={class:"dialog-tips"},_s={class:"dialog-content"},ms={class:"dialog-tips",style:{"margin-bottom":"0"}},ps={class:"dialog-window"},fs={class:"dialog-wrapper"},gs={class:"dialog-tips",style:{"margin-top":"10px"}},hs={class:"dialog-title",style:{"margin-top":"0"}},bs={class:"dialog-tips"},ys={class:"dialog-content"},ws=F({__name:"AllPageDialog",setup(t){Q();const{ActiveSotre:e}=ce(),{store:s,closeInvite:n,showFirstSave:o,onReturnAwards:i}=te();return(d,l)=>{const r=D("van-dialog"),_=fe("lazy");return m(),k(Z,null,[u(o)?(m(),C(os,{key:0})):y("v-if",!0),h(r,{show:u(e).showReceiveDialog,"onUpdate:show":l[1]||(l[1]=c=>u(e).showReceiveDialog=c),"show-confirm-button":!1,className:"noOverHidden"},{default:P(()=>[a("div",ns,[a("div",is,[I(a("img",null,null,512),[[_,u(M)("public","succeed")]]),a("div",ls,v(d.$t("awardsReceived")),1),a("div",cs,[I(a("img",null,null,512),[[_,u(M)("activity/DailyTask","amountIcon")]]),a("span",null,v(u(ee)(u(e).receiveAmount)),1)]),a("div",{class:"dialog-btn",onClick:l[0]||(l[0]=c=>u(e).showReceiveDialog=!1)},v(d.$t("confirm")),1)])])]),_:1},8,["show"]),h(r,{show:u(s).invite,"onUpdate:show":l[3]||(l[3]=c=>u(s).invite=c),"show-confirm-button":!1,className:"noOverHidden"},{default:P(()=>[a("div",rs,[a("div",us,[I(a("img",null,null,512),[[_,u(M)("public","succeed")]]),a("div",ds,v(d.$t("inviteTips")),1),a("p",vs,v(d.$t("inviteAmount")),1),a("div",_s,[a("span",ms,v(d.$t("commissionAmount")),1),a("span",null,v(u(ee)(u(s).rebateAmount)),1)]),a("div",{class:"dialog-btn",onClick:l[2]||(l[2]=c=>u(n)())},v(d.$t("receive")),1)])])]),_:1},8,["show"]),h(r,{show:u(s).oldUser,"onUpdate:show":l[5]||(l[5]=c=>u(s).oldUser=c),"show-confirm-button":!1,"close-on-click-overlay":!0,className:"noOverHidden"},{default:P(()=>[a("div",ps,[a("div",fs,[I(a("img",null,null,512),[[_,u(M)("public","succeed")]]),a("p",gs,v(d.$t("oldPromptTip")),1),a("div",hs,v(d.$t("oldPrompt")),1),a("p",bs,v(d.$t("oldPromptGift")),1),a("div",ys,[a("span",null,v(u(ee)(u(s).returnAwards)),1)]),a("div",{class:"dialog-btn",onClick:l[4]||(l[4]=c=>u(i)())},v(d.$t("receive")),1)])])]),_:1},8,["show"])],64)}}});const ks=T(ws,[["__scopeId","data-v-3d4fafbb"],["__file","/var/lib/jenkins/workspace/web-印度-sikkim-ar058-webnew/src/components/common/AllPageDialog.vue"]]),Ss=F({__name:"App",setup(t){pe(b=>({"f13b4d11-currentFontFamily":G.value}));const{openAll:e}=te(),s=Ie(),n=f(!1),o=f(!1),i=Q(),d=we(),l=re(),{locale:r}=Ge(),_=le(),c=f(!1),E=V(()=>i.meta.tabBar),S="public3Home",A=V(()=>["electronic","blackGoldHome"].includes(S)?!1:!["/wallet/Withdraw/C2cDetail","/wallet/RechargeHistory/RechargeUpiDetail","/wallet/Withdraw/Upi","/wallet/Withdraw/AddUpi","/wallet/Withdraw/c2cCancelWithdrawal/index.vue","/wallet/otherPay?type=C2C","/home/game"].includes(i.path)),N=f(0),x=f(Math.floor(Math.random()*1e4)),w=V(()=>i.name+x.value),L=()=>{s.on("changeKeepAliveKey",()=>{x.value=Math.floor(Math.random()*1e4)})};sessionStorage.getItem("isload")?n.value=!1:(o.value=!0,sessionStorage.setItem("isload",o.value.toString()),n.value=!0),l.getHomeSetting(),J(()=>l.getAreacode,b=>{b&&d.setNumberType(b.substring(1))}),J(()=>l.getDL,b=>{r.value=b,_.updateLanguage(b),De(b),Te(ue.global.t)}),setTimeout(()=>{n.value=!1},2e3);const $=f(!1),U=ke();U.$subscribe((b,R)=>{$.value=R.isLoading,U.setLoading($.value)});const G=f("bahnschrift");let p=Se(),g=l.getLanguage,B=$e(p,g);const O=async b=>{const R=[{title:"vi",fontStyle:"bahnschrift"},{title:"else",fontStyle:"'Roboto', 'Inter', sans-serif"}],X=R.findIndex(W=>W.title==B);X>=0?G.value=R[X].fontStyle:G.value=R[R.length-1].fontStyle},Y=()=>{s.on("keyChange",()=>{N.value++}),s.on("changeIsGame",()=>{c.value=!c.value,$.value=!$.value})},q=()=>{s.off("keyChange"),s.off("changeKeepAliveKey"),s.off("changeIsGame")};return d.setNumberType(l.getAreacode.substring(1)),O(),j(()=>{Ce()&&Ae(),e(),q(),Y(),L(),localStorage.getItem("language")&&Le(localStorage.getItem("language"))}),jt(),(b,R)=>{const X=D("LoadingView");return m(),k(Z,null,[h(X,{loading:$.value,type:"loading",isGame:c.value},{default:P(()=>[(m(),C(u(Ue),{key:N.value},{default:P(({Component:W})=>[(m(),C(Oe,{max:1},[u(i).meta.keepAlive?(m(),C(ne(W),{key:w.value})):y("v-if",!0)],1024)),u(i).meta.keepAlive?y("v-if",!0):(m(),C(ne(W),{key:0}))]),_:1})),y("online custom service"),A.value?(m(),C(Mt,{key:0})):y("v-if",!0),E.value?(m(),C(Ut,{key:1})):y("v-if",!0)]),_:1},8,["loading","isGame"]),n.value?(m(),C(Jt,{key:0})):y("v-if",!0),h(ks)],64)}}});const $s=T(Ss,[["__file","/var/lib/jenkins/workspace/web-印度-sikkim-ar058-webnew/entrance/ar058/App.vue"]]);const Cs={mounted(t,e){if(typeof e.value[0]!="function"||typeof e.value[1]!="number")throw new Error("v-debounce: value must be an array that includes a function and a number");let s=null;const n=e.value[0],o=e.value[1];t.__handleClick__=function(){s&&clearTimeout(s),s=setTimeout(()=>{n()},o||500)},t.addEventListener("click",t.__handleClick__)},beforeUnmount(t){t.removeEventListener("click",t.__handleClick__)}},As={mounted(t,e){if(typeof e.value[0]!="function"||typeof e.value[1]!="number")throw new Error("v-throttle: value must be an array that includes a function and a number");let s=null;const n=e.value[0],o=e.value[1];t.__handleClick__=function(){s&&clearTimeout(s),t.disabled||(t.disabled=!0,n(),s=setTimeout(()=>{t.disabled=!1},o||500))},t.addEventListener("click",t.__handleClick__)},beforeUnmount(t){t.removeEventListener("click",t.__handleClick__)}},Ls={mounted(t,e){t.addEventListener("input",s=>{const o=t.value.replace(/\D+/g,"");t.value=o,e.value=o})}},Is=t=>({beforeMount:(e,s)=>{e.classList.add("ar-lazyload");const{value:n}=s;e.dataset.origin=n,t.observe(e)},updated(e,s){e.dataset.origin=s.value,t.observe(e)},unmounted(e,s){t.unobserve(e)},mounted(e,s){t.observe(e)}}),Ds={mounted(t,e){let s=0;const n=e.value&&e.value.wait?e.value.wait:3e3,o=i=>{const d=Date.now();d-s>=n&&(s=d,e.value&&e.value.handler&&e.value.handler(i))};t.addEventListener("click",o),t._throttleClickCleanup=()=>{t.removeEventListener("click",o)}},unmounted(t){t._throttleClickCleanup&&t._throttleClickCleanup(),delete t._throttleClickCleanup}},Ts={mounted(t,e){const{value:s}=e;let n=je("permission",null);n.value===null||!s||(n&&(n=JSON.parse(n.value)),n&&n[s]===!1&&(t.style.display="none"))}},ie={debounce:Cs,throttle:As,onlyNum:Ls,throttleClick:Ds,haspermission:Ts},Es={install:function(t){Object.keys(ie).forEach(s=>{t.directive(s,ie[s])});const e=new IntersectionObserver(s=>{s.forEach(n=>{if(n.isIntersecting){const o=n.target;o.src=o.dataset.origin||ae("images","avatar"),o.onerror=()=>{e.unobserve(o);let i=o.dataset.img||ae("images","avatar");if(!i||i!=null&&i.includes("undefined")){o.onerror=null;return}o.src=i,o.style.objectFit="contain"},o.classList.remove("ar-lazyload"),e.unobserve(o)}})},{rootMargin:"0px 0px -50px 0px"});t.directive("lazy",Is(e))}},Bs={class:"navbar-fixed"},Ps={class:"navbar__content"},Ns={class:"navbar__content-center"},xs={class:"navbar__content-title"},Rs=F({__name:"NavBar",props:{title:{type:String,default:""},placeholder:{type:Boolean,default:!0},leftArrow:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#f7f8ff"},classN:{type:String,default:""},headLogo:{type:Boolean,default:!1},headerUrl:{type:String,default:""}},emits:["click-left","click-right"],setup(t,{emit:e}){const s=f(),n=re(),o=V(()=>n.getHeadLogo),i=()=>{e("click-left")},d=()=>{e("click-right")};return j(()=>{}),(l,r)=>{const _=D("van-icon");return m(),k("div",{class:"navbar",ref_key:"navbar",ref:s},[a("div",Bs,[a("div",Ps,[a("div",{class:"navbar__content-left",onClick:i},[z(l.$slots,"left",{},()=>[t.leftArrow?(m(),C(_,{key:0,name:"arrow-left"})):y("v-if",!0)],!0)]),a("div",Ns,[t.headLogo?(m(),k("div",{key:0,class:"headLogo",style:He({backgroundImage:"url("+(t.headerUrl||o.value)+")"})},null,4)):y("v-if",!0),z(l.$slots,"center",{},()=>[a("div",xs,v(t.title),1)],!0)]),a("div",{class:"navbar__content-right",onClick:d},[z(l.$slots,"right",{},void 0,!0)])])])],512)}}});const Vs=T(Rs,[["__scopeId","data-v-12a80a3e"],["__file","/var/lib/jenkins/workspace/web-印度-sikkim-ar058-webnew/src/components/common/NavBar.vue"]]),Fs={class:"ar-loading-view"},Gs={class:"loading-wrapper"},Os={class:"com__box"},Us=ze('<div class="loading" data-v-647954c7><div class="shape shape-1" data-v-647954c7></div><div class="shape shape-2" data-v-647954c7></div><div class="shape shape-3" data-v-647954c7></div><div class="shape shape-4" data-v-647954c7></div></div>',1),js={class:"skeleton-wrapper"},Hs={class:"iosDialog"},Ms={class:"title"},Ks={class:"websit_info"},zs=["src"],Ys={class:"link"},qs={class:"text"},Xs={class:"text"},Ws={class:"text"},Js=["src"],Qs=F({__name:"LoadingView",props:{loading:{type:Boolean,required:!0},type:{type:String,required:!0},isGame:{type:Boolean,required:!0}},setup(t){const e=t,s=f();let n=null;const{homeState:o,downloadIcon:i,webSiteUrl:d}=Ee(),{getSelfCustomerServiceLink:l}=ge({ServerType:2}),r=window.location.href,_=V(()=>location.origin||"");return j(async()=>{if(r.includes("?")){const c=new URLSearchParams(r.split("?")[1]);c.size&&c.get("goTo")==="worktraking"&&l("worktraking")}await Me(),n=Ke.loadAnimation({container:s.value,renderer:"svg",loop:!0,autoplay:!0,path:"/data.json"})}),J(()=>e.loading,()=>{e.type==="loading"&&!e.isGame&&(e.loading?n&&n.play():n&&n.stop())}),me(()=>{n&&n.destroy(),n=null}),(c,E)=>{const S=D("VanSkeleton"),A=D("svg-icon"),N=D("van-popup");return m(),k(Z,null,[I(a("div",Fs,[z(c.$slots,"template",{},()=>[I(a("div",Gs,[y(" <VanLoading /> "),I(a("div",{ref_key:"element",ref:s,class:"loading-animat"},null,512),[[H,!c.isGame]]),I(a("div",Os,[y(" loading "),Us,y(" 说明：组件名 ")],512),[[H,c.isGame]]),y(' <div class="animation"></div> ')],512),[[H,c.type==="loading"]]),I(a("div",js,[h(S,{row:10}),h(S,{title:"",avatar:"",row:5}),h(S,{title:"",row:5})],512),[[H,c.type==="skeleton"]])],!0)],512),[[H,c.loading]]),z(c.$slots,"default",{},void 0,!0),h(N,{show:u(o).iosDialog,"onUpdate:show":E[0]||(E[0]=x=>u(o).iosDialog=x),round:"",closeable:"",position:"bottom",style:{height:"40%"}},{default:P(()=>[a("div",Hs,[a("div",Ms,v(c.$t("pwaInstall")),1),a("div",Ks,[a("img",{class:"icon",src:u(i)},null,8,zs),a("div",Ys,[a("div",null,v(_.value.split("://")[1]),1),a("div",null,v(_.value),1)])]),a("div",qs,[K("1. "+v(c.$t("pwaText1"))+" ",1),h(A,{name:"share"})]),a("div",Xs,[K("2. "+v(c.$t("pwaText2"))+" ",1),a("span",null,[K(v(c.$t("pwaText3"))+" ",1),h(A,{name:"add_icon"})])]),a("div",Ws,[K("3. "+v(c.$t("pwaText4"))+" ",1),a("img",{class:"icon",src:u(i)},null,8,Js)])])]),_:1},8,["show"])],64)}}});const Zs=T(Qs,[["__scopeId","data-v-647954c7"],["__file","/var/lib/jenkins/workspace/web-印度-sikkim-ar058-webnew/src/components/common/LoadingView.vue"]]);const ea=["xlink:href"],ta={__name:"svgIcons",props:{name:{type:String,required:!0},color:{type:String,default:""}},setup(t){const e=t,s=V(()=>`#icon-${e.name}`),n=V(()=>e.name?`svg-icon icon-${e.name}`:"svg-icon");return(o,i)=>(m(),k("svg",Ye({class:n.value},o.$attrs,{style:{color:t.color}}),[a("use",{"xlink:href":s.value},null,8,ea)],16))}},sa=T(ta,[["__file","/var/lib/jenkins/workspace/web-印度-sikkim-ar058-webnew/src/components/common/svgIcons.vue"]]),aa={class:"ar-searchbar__selector"},oa={class:"ar-searchbar__selector-default"},na=F({__name:"ArSelect",props:{selectName:{type:String,default:""}},emits:["click-select"],setup(t,{emit:e}){const s=()=>{e("click-select")};return(n,o)=>{const i=D("van-icon");return m(),k("div",aa,[a("div",{onClick:s},[a("span",oa,v(t.selectName),1),h(i,{name:"arrow-down"})])])}}});const ia=T(na,[["__scopeId","data-v-fa757a88"],["__file","/var/lib/jenkins/workspace/web-印度-sikkim-ar058-webnew/src/components/common/ArSelect.vue"]]),la=t=>{t.component("NavBar",Vs),t.component("LoadingView",Zs),t.component("ArSelect",ia),t.component("svg-icon",sa),t.use(qe).use(Xe).use(We).use(Je).use(Qe).use(Ze).use(et).use(tt).use(st).use(at).use(ot).use(nt).use(it).use(lt).use(ct).use(rt).use(ut).use(dt).use(vt).use(_t).use(mt).use(pt).use(ft).use(gt).use(ht).use(bt).use(yt).use(wt).use(kt).use(St).use($t).use(Ct).use(At).use(Lt).use(It).use(Dt).use(Tt).use(ue).use(Es).use(Et).use(Bt);let e=t.config.globalProperties,s={};s.TopHeight=38,Object.keys(oe.refiter).forEach(n=>{s[n]=oe.refiter[n]}),e.$u=s};({}).VITE_POINT&&Be[{}.VITE_POINT]();de.addRoute({path:"/",name:"home",component:()=>Pe(()=>import("./page-home-baad8c58.js").then(t=>t.X),["assets/js/page-home-baad8c58.js","assets/js/modules-169a6d8a.js","assets/css/modules-5dd73da0.css","assets/js/page-activity-fec29892.js","assets/js/native/index-8472c1de.js","assets/js/en-d8b93f6c.js","assets/js/rus-f36a0376.js","assets/js/vi-078696bc.js","assets/js/id-0e1a5e94.js","assets/js/hd-70c20855.js","assets/js/tha-a79d0bfa.js","assets/js/md-4050132e.js","assets/js/bra-135533fa.js","assets/js/my-4048b35d.js","assets/js/bdt-ce4c267d.js","assets/js/zh-db2d9740.js","assets/js/pak-8a523195.js","assets/js/ar-4393a98f.js","assets/css/page-activity-4cebb61c.css","assets/css/page-home-79b3714c.css"]),meta:{title:"home",tabBar:!0,keepAlive:!1}});const se=Pt($s),be=Nt();la(se);be.use(xt);se.use(de).use(be);se.mount("#app");
