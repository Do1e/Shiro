import{p as J,d as v,s as Q,D as M,a as X,S as Z,b as F,c as I}from"./styles-de3becd0-Bs8610WL.js";import{G as tt}from"./graph-WzuwaVgX.js";import{s as $}from"./isEmpty-DVc1NNx0.js";import{l as d,c as y,u as ot,h as et,i as R}from"./index.demo-DM4AbRs5.js";import{r as st}from"./index-9620d214-BsklpmsL.js";import"./owner-BGeEnU8Q.js";import"./layout-CyUYZ2rh.js";import"./has-BhlPWlhe.js";import"./_baseUniq-Su2bbkL-.js";import"./union-BrCZxpHF.js";import"./index-BY9nHJb9.js";import"./use-is-dark-UxqcpH6b.js";import"./LinkCard-COhyhfJ0.js";import"./StyledButton-DZSXu6qg.js";import"./proxy-BJLknbmX.js";import"./image-jRXXRdIw.js";import"./viewport-CVjyGpRt.js";import"./provider-DQwv29Xy.js";import"./spring-C80N1tKa.js";import"./index-CuNKYj4Y.js";import"./use-is-unmounted-D4rKeMw1.js";import"./use-event-callback-Di6eJN-a.js";import"./dom-BowoBODo.js";import"./use-drag-controls-JSPShkHq.js";import"./visual-element-B98QpYO8.js";import"./index-B7Spdbjg.js";import"./use-motion-template-CdySTXd8.js";import"./Gallery-BBffvDAh.js";import"./use-ref-value-DgAED4iJ.js";import"./index-AVdtiPEX.js";import"./useQuery-CqlE7i-x.js";import"./util-Co_iLau6.js";import"./Shiki-BkZQ2vhH.js";import"./alert-DvO3179E.js";import"./index-BvRjWNre.js";import"./FloatPopover-BC95vwFc.js";import"./SocialSourceLink-jDTvROLy.js";import"./Collapse-hHGzCWZf.js";import"./CodeEditor-Cz0JY8sl.js";import"./index-LAI3pait.js";import"./cookie-DF_Cdf0E.js";import"./Mermaid-CEEYuSnw.js";import"./clone-BbSaKZR9.js";import"./_basePickBy-DfnWw-Wj.js";import"./edges-5962ec63-BpKvbjJs.js";import"./createText-4a4f35c9-6LoXa6Sm.js";import"./line-DXtxjsEH.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";import"./zipObject-CztN56XO.js";const h="rect",x="rectWithTitle",it="start",nt="end",rt="divider",ct="roundedWithTitle",lt="note",at="noteGroup",_="statediagram",pt="state",dt=`${_}-${pt}`,H="transition",Et="note",St="note-edge",Tt=`${H} ${St}`,_t=`${_}-${Et}`,ut="cluster",ft=`${_}-${ut}`,Dt="cluster-alt",bt=`${_}-${Dt}`,U="parent",V="note",At="state",G="----",ht=`${G}${V}`,B=`${G}${U}`,Y="fill:none",W="fill: #333",z="c",q="text",K="normal";let m={},p=0;const mt=function(t){const i=Object.keys(t);for(const o of i)t[o]},yt=function(t,i){return i.db.extract(i.db.getRootDocV2()),i.db.getClasses()};function gt(t){return t==null?"":t.classes?t.classes.join(" "):""}function C(t="",i=0,o="",n=G){const r=o!==null&&o.length>0?`${n}${o}`:"";return`${At}-${t}${r}-${i}`}const A=(t,i,o,n,r,c)=>{const e=o.id,u=gt(n[e]);if(e!=="root"){let S=h;o.start===!0&&(S=it),o.start===!1&&(S=nt),o.type!==M&&(S=o.type),m[e]||(m[e]={id:e,shape:S,description:R.sanitizeText(e,y()),classes:`${u} ${dt}`});const s=m[e];o.description&&(Array.isArray(s.description)?(s.shape=x,s.description.push(o.description)):s.description.length>0?(s.shape=x,s.description===e?s.description=[o.description]:s.description=[s.description,o.description]):(s.shape=h,s.description=o.description),s.description=R.sanitizeTextOrArray(s.description,y())),s.description.length===1&&s.shape===x&&(s.shape=h),!s.type&&o.doc&&(d.info("Setting cluster for ",e,w(o)),s.type="group",s.dir=w(o),s.shape=o.type===X?rt:ct,s.classes=s.classes+" "+ft+" "+(c?bt:""));const T={labelStyle:"",shape:s.shape,labelText:s.description,classes:s.classes,style:"",id:e,dir:s.dir,domId:C(e,p),type:s.type,padding:15};if(T.centerLabel=!0,o.note){const l={labelStyle:"",shape:lt,labelText:o.note.text,classes:_t,style:"",id:e+ht+"-"+p,domId:C(e,p,V),type:s.type,padding:15},a={labelStyle:"",shape:at,labelText:o.note.text,classes:s.classes,style:"",id:e+B,domId:C(e,p,U),type:"group",padding:0};p++;const f=e+B;t.setNode(f,a),t.setNode(l.id,l),t.setNode(e,T),t.setParent(e,f),t.setParent(l.id,f);let E=e,D=l.id;o.note.position==="left of"&&(E=l.id,D=e),t.setEdge(E,D,{arrowhead:"none",arrowType:"",style:Y,labelStyle:"",classes:Tt,arrowheadStyle:W,labelpos:z,labelType:q,thickness:K})}else t.setNode(e,T)}i&&i.id!=="root"&&(d.trace("Setting node ",e," to be child of its parent ",i.id),t.setParent(e,i.id)),o.doc&&(d.trace("Adding nodes children "),$t(t,o,o.doc,n,r,!c))},$t=(t,i,o,n,r,c)=>{d.trace("items",o),o.forEach(e=>{switch(e.stmt){case F:A(t,i,e,n,r,c);break;case M:A(t,i,e,n,r,c);break;case Z:{A(t,i,e.state1,n,r,c),A(t,i,e.state2,n,r,c);const u={id:"edge"+p,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:Y,labelStyle:"",label:R.sanitizeText(e.description,y()),arrowheadStyle:W,labelpos:z,labelType:q,thickness:K,classes:H};t.setEdge(e.state1.id,e.state2.id,u,p),p++}break}})},w=(t,i=I)=>{let o=i;if(t.doc)for(let n=0;n<t.doc.length;n++){const r=t.doc[n];r.stmt==="dir"&&(o=r.value)}return o},xt=async function(t,i,o,n){d.info("Drawing state diagram (v2)",i),m={},n.db.getDirection();const{securityLevel:r,state:c}=y(),e=c.nodeSpacing||50,u=c.rankSpacing||50;d.info(n.db.getRootDocV2()),n.db.extract(n.db.getRootDocV2()),d.info(n.db.getRootDocV2());const S=n.db.getStates(),s=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:w(n.db.getRootDocV2()),nodesep:e,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});A(s,void 0,n.db.getRootDocV2(),S,n.db,!0);let T;r==="sandbox"&&(T=$("#i"+i));const l=r==="sandbox"?$(T.nodes()[0].contentDocument.body):$("body"),a=l.select(`[id="${i}"]`),f=l.select("#"+i+" g");await st(f,s,["barb"],_,i);const E=8;ot.insertTitle(a,"statediagramTitleText",c.titleTopMargin,n.db.getDiagramTitle());const D=a.node().getBBox(),N=D.width+E*2,L=D.height+E*2;a.attr("class",_);const P=a.node().getBBox();et(a,L,N,c.useMaxWidth);const O=`${P.x-E} ${P.y-E} ${N} ${L}`;d.debug(`viewBox ${O}`),a.attr("viewBox",O);const j=document.querySelectorAll('[id="'+i+'"] .edgeLabel .label');for(const g of j){const k=g.getBBox(),b=document.createElementNS("http://www.w3.org/2000/svg",h);b.setAttribute("rx",0),b.setAttribute("ry",0),b.setAttribute("width",k.width),b.setAttribute("height",k.height),g.insertBefore(b,g.firstChild)}},Ct={setConf:mt,getClasses:yt,draw:xt},$o={parser:J,db:v,renderer:Ct,styles:Q,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,v.clear()}};export{$o as diagram};
