import{_ as o,l as te,d as H,G as fe,T as ye,U as me,V as be,S as _e,B as K,i as j,r as Ee,J as ke}from"./mermaid.core-CImawxMb.js";import{v as Se,w as ce,x as le}from"./isEmpty-DVc1NNx0.js";import"./index-BY9nHJb9.js";import"./owner-BGeEnU8Q.js";import"./StyledButton-DZSXu6qg.js";import"./proxy-BJLknbmX.js";import"./line-DXtxjsEH.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";var $=function(){var e=o(function(O,i,n,r){for(n=n||{},r=O.length;r--;n[O[r]]=i);return n},"o"),u=[1,4],p=[1,13],s=[1,12],d=[1,15],E=[1,16],m=[1,20],l=[1,19],D=[6,7,8],I=[1,26],g=[1,24],w=[1,25],_=[6,7,11],F=[1,31],N=[6,7,11,24],V=[1,6,13,16,17,20,23],b=[1,35],A=[1,36],L=[1,6,7,11,13,16,17,20,23],U=[1,38],T={trace:o(function(){},"trace"),yy:{},symbols_:{error:2,start:3,mindMap:4,spaceLines:5,SPACELINE:6,NL:7,KANBAN:8,document:9,stop:10,EOF:11,statement:12,SPACELIST:13,node:14,shapeData:15,ICON:16,CLASS:17,nodeWithId:18,nodeWithoutId:19,NODE_DSTART:20,NODE_DESCR:21,NODE_DEND:22,NODE_ID:23,SHAPE_DATA:24,$accept:0,$end:1},terminals_:{2:"error",6:"SPACELINE",7:"NL",8:"KANBAN",11:"EOF",13:"SPACELIST",16:"ICON",17:"CLASS",20:"NODE_DSTART",21:"NODE_DESCR",22:"NODE_DEND",23:"NODE_ID",24:"SHAPE_DATA"},productions_:[0,[3,1],[3,2],[5,1],[5,2],[5,2],[4,2],[4,3],[10,1],[10,1],[10,1],[10,2],[10,2],[9,3],[9,2],[12,3],[12,2],[12,2],[12,2],[12,1],[12,2],[12,1],[12,1],[12,1],[12,1],[14,1],[14,1],[19,3],[18,1],[18,4],[15,2],[15,1]],performAction:o(function(i,n,r,a,h,t,M){var c=t.length-1;switch(h){case 6:case 7:return a;case 8:a.getLogger().trace("Stop NL ");break;case 9:a.getLogger().trace("Stop EOF ");break;case 11:a.getLogger().trace("Stop NL2 ");break;case 12:a.getLogger().trace("Stop EOF2 ");break;case 15:a.getLogger().info("Node: ",t[c-1].id),a.addNode(t[c-2].length,t[c-1].id,t[c-1].descr,t[c-1].type,t[c]);break;case 16:a.getLogger().info("Node: ",t[c].id),a.addNode(t[c-1].length,t[c].id,t[c].descr,t[c].type);break;case 17:a.getLogger().trace("Icon: ",t[c]),a.decorateNode({icon:t[c]});break;case 18:case 23:a.decorateNode({class:t[c]});break;case 19:a.getLogger().trace("SPACELIST");break;case 20:a.getLogger().trace("Node: ",t[c-1].id),a.addNode(0,t[c-1].id,t[c-1].descr,t[c-1].type,t[c]);break;case 21:a.getLogger().trace("Node: ",t[c].id),a.addNode(0,t[c].id,t[c].descr,t[c].type);break;case 22:a.decorateNode({icon:t[c]});break;case 27:a.getLogger().trace("node found ..",t[c-2]),this.$={id:t[c-1],descr:t[c-1],type:a.getType(t[c-2],t[c])};break;case 28:this.$={id:t[c],descr:t[c],type:0};break;case 29:a.getLogger().trace("node found ..",t[c-3]),this.$={id:t[c-3],descr:t[c-1],type:a.getType(t[c-2],t[c])};break;case 30:this.$=t[c-1]+t[c];break;case 31:this.$=t[c];break}},"anonymous"),table:[{3:1,4:2,5:3,6:[1,5],8:u},{1:[3]},{1:[2,1]},{4:6,6:[1,7],7:[1,8],8:u},{6:p,7:[1,10],9:9,12:11,13:s,14:14,16:d,17:E,18:17,19:18,20:m,23:l},e(D,[2,3]),{1:[2,2]},e(D,[2,4]),e(D,[2,5]),{1:[2,6],6:p,12:21,13:s,14:14,16:d,17:E,18:17,19:18,20:m,23:l},{6:p,9:22,12:11,13:s,14:14,16:d,17:E,18:17,19:18,20:m,23:l},{6:I,7:g,10:23,11:w},e(_,[2,24],{18:17,19:18,14:27,16:[1,28],17:[1,29],20:m,23:l}),e(_,[2,19]),e(_,[2,21],{15:30,24:F}),e(_,[2,22]),e(_,[2,23]),e(N,[2,25]),e(N,[2,26]),e(N,[2,28],{20:[1,32]}),{21:[1,33]},{6:I,7:g,10:34,11:w},{1:[2,7],6:p,12:21,13:s,14:14,16:d,17:E,18:17,19:18,20:m,23:l},e(V,[2,14],{7:b,11:A}),e(L,[2,8]),e(L,[2,9]),e(L,[2,10]),e(_,[2,16],{15:37,24:F}),e(_,[2,17]),e(_,[2,18]),e(_,[2,20],{24:U}),e(N,[2,31]),{21:[1,39]},{22:[1,40]},e(V,[2,13],{7:b,11:A}),e(L,[2,11]),e(L,[2,12]),e(_,[2,15],{24:U}),e(N,[2,30]),{22:[1,41]},e(N,[2,27]),e(N,[2,29])],defaultActions:{2:[2,1],6:[2,2]},parseError:o(function(i,n){if(n.recoverable)this.trace(i);else{var r=new Error(i);throw r.hash=n,r}},"parseError"),parse:o(function(i){var n=this,r=[0],a=[],h=[null],t=[],M=this.table,c="",W=0,se=0,ue=2,re=1,ge=t.slice.call(arguments,1),y=Object.create(this.lexer),R={yy:{}};for(var J in this.yy)Object.prototype.hasOwnProperty.call(this.yy,J)&&(R.yy[J]=this.yy[J]);y.setInput(i,R.yy),R.yy.lexer=y,R.yy.parser=this,typeof y.yylloc>"u"&&(y.yylloc={});var q=y.yylloc;t.push(q);var de=y.options&&y.options.ranges;typeof R.yy.parseError=="function"?this.parseError=R.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function pe(S){r.length=r.length-2*S,h.length=h.length-S,t.length=t.length-S}o(pe,"popStack");function ae(){var S;return S=a.pop()||y.lex()||re,typeof S!="number"&&(S instanceof Array&&(a=S,S=a.pop()),S=n.symbols_[S]||S),S}o(ae,"lex");for(var k,P,x,Q,G={},z,C,oe,X;;){if(P=r[r.length-1],this.defaultActions[P]?x=this.defaultActions[P]:((k===null||typeof k>"u")&&(k=ae()),x=M[P]&&M[P][k]),typeof x>"u"||!x.length||!x[0]){var Z="";X=[];for(z in M[P])this.terminals_[z]&&z>ue&&X.push("'"+this.terminals_[z]+"'");y.showPosition?Z="Parse error on line "+(W+1)+`:
`+y.showPosition()+`
Expecting `+X.join(", ")+", got '"+(this.terminals_[k]||k)+"'":Z="Parse error on line "+(W+1)+": Unexpected "+(k==re?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(Z,{text:y.match,token:this.terminals_[k]||k,line:y.yylineno,loc:q,expected:X})}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+P+", token: "+k);switch(x[0]){case 1:r.push(k),h.push(y.yytext),t.push(y.yylloc),r.push(x[1]),k=null,se=y.yyleng,c=y.yytext,W=y.yylineno,q=y.yylloc;break;case 2:if(C=this.productions_[x[1]][1],G.$=h[h.length-C],G._$={first_line:t[t.length-(C||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(C||1)].first_column,last_column:t[t.length-1].last_column},de&&(G._$.range=[t[t.length-(C||1)].range[0],t[t.length-1].range[1]]),Q=this.performAction.apply(G,[c,se,W,R.yy,x[1],h,t].concat(ge)),typeof Q<"u")return Q;C&&(r=r.slice(0,-1*C*2),h=h.slice(0,-1*C),t=t.slice(0,-1*C)),r.push(this.productions_[x[1]][0]),h.push(G.$),t.push(G._$),oe=M[r[r.length-2]][r[r.length-1]],r.push(oe);break;case 3:return!0}}return!0},"parse")},Y=function(){var O={EOF:1,parseError:o(function(n,r){if(this.yy.parser)this.yy.parser.parseError(n,r);else throw new Error(n)},"parseError"),setInput:o(function(i,n){return this.yy=n||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:o(function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var n=i.match(/(?:\r\n?|\n).*/g);return n?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},"input"),unput:o(function(i){var n=i.length,r=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var h=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===a.length?this.yylloc.first_column:0)+a[a.length-r.length].length-r[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[h[0],h[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},"unput"),more:o(function(){return this._more=!0,this},"more"),reject:o(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:o(function(i){this.unput(this.match.slice(i))},"less"),pastInput:o(function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:o(function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:o(function(){var i=this.pastInput(),n=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+n+"^"},"showPosition"),test_match:o(function(i,n){var r,a,h;if(this.options.backtrack_lexer&&(h={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(h.yylloc.range=this.yylloc.range.slice(0))),a=i[0].match(/(?:\r\n?|\n).*/g),a&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],r=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var t in h)this[t]=h[t];return!1}return!1},"test_match"),next:o(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,n,r,a;this._more||(this.yytext="",this.match="");for(var h=this._currentRules(),t=0;t<h.length;t++)if(r=this._input.match(this.rules[h[t]]),r&&(!n||r[0].length>n[0].length)){if(n=r,a=t,this.options.backtrack_lexer){if(i=this.test_match(r,h[t]),i!==!1)return i;if(this._backtrack){n=!1;continue}else return!1}else if(!this.options.flex)break}return n?(i=this.test_match(n,h[a]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:o(function(){var n=this.next();return n||this.lex()},"lex"),begin:o(function(n){this.conditionStack.push(n)},"begin"),popState:o(function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:o(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:o(function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},"topState"),pushState:o(function(n){this.begin(n)},"pushState"),stateStackSize:o(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:o(function(n,r,a,h){switch(a){case 0:return this.pushState("shapeData"),r.yytext="",24;case 1:return this.pushState("shapeDataStr"),24;case 2:return this.popState(),24;case 3:const t=/\n\s*/g;return r.yytext=r.yytext.replace(t,"<br/>"),24;case 4:return 24;case 5:this.popState();break;case 6:return n.getLogger().trace("Found comment",r.yytext),6;case 7:return 8;case 8:this.begin("CLASS");break;case 9:return this.popState(),17;case 10:this.popState();break;case 11:n.getLogger().trace("Begin icon"),this.begin("ICON");break;case 12:return n.getLogger().trace("SPACELINE"),6;case 13:return 7;case 14:return 16;case 15:n.getLogger().trace("end icon"),this.popState();break;case 16:return n.getLogger().trace("Exploding node"),this.begin("NODE"),20;case 17:return n.getLogger().trace("Cloud"),this.begin("NODE"),20;case 18:return n.getLogger().trace("Explosion Bang"),this.begin("NODE"),20;case 19:return n.getLogger().trace("Cloud Bang"),this.begin("NODE"),20;case 20:return this.begin("NODE"),20;case 21:return this.begin("NODE"),20;case 22:return this.begin("NODE"),20;case 23:return this.begin("NODE"),20;case 24:return 13;case 25:return 23;case 26:return 11;case 27:this.begin("NSTR2");break;case 28:return"NODE_DESCR";case 29:this.popState();break;case 30:n.getLogger().trace("Starting NSTR"),this.begin("NSTR");break;case 31:return n.getLogger().trace("description:",r.yytext),"NODE_DESCR";case 32:this.popState();break;case 33:return this.popState(),n.getLogger().trace("node end ))"),"NODE_DEND";case 34:return this.popState(),n.getLogger().trace("node end )"),"NODE_DEND";case 35:return this.popState(),n.getLogger().trace("node end ...",r.yytext),"NODE_DEND";case 36:return this.popState(),n.getLogger().trace("node end (("),"NODE_DEND";case 37:return this.popState(),n.getLogger().trace("node end (-"),"NODE_DEND";case 38:return this.popState(),n.getLogger().trace("node end (-"),"NODE_DEND";case 39:return this.popState(),n.getLogger().trace("node end (("),"NODE_DEND";case 40:return this.popState(),n.getLogger().trace("node end (("),"NODE_DEND";case 41:return n.getLogger().trace("Long description:",r.yytext),21;case 42:return n.getLogger().trace("Long description:",r.yytext),21}},"anonymous"),rules:[/^(?:@\{)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^\"]+)/i,/^(?:[^}^"]+)/i,/^(?:\})/i,/^(?:\s*%%.*)/i,/^(?:kanban\b)/i,/^(?::::)/i,/^(?:.+)/i,/^(?:\n)/i,/^(?:::icon\()/i,/^(?:[\s]+[\n])/i,/^(?:[\n]+)/i,/^(?:[^\)]+)/i,/^(?:\))/i,/^(?:-\))/i,/^(?:\(-)/i,/^(?:\)\))/i,/^(?:\))/i,/^(?:\(\()/i,/^(?:\{\{)/i,/^(?:\()/i,/^(?:\[)/i,/^(?:[\s]+)/i,/^(?:[^\(\[\n\)\{\}@]+)/i,/^(?:$)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:[^"]+)/i,/^(?:["])/i,/^(?:[\)]\))/i,/^(?:[\)])/i,/^(?:[\]])/i,/^(?:\}\})/i,/^(?:\(-)/i,/^(?:-\))/i,/^(?:\(\()/i,/^(?:\()/i,/^(?:[^\)\]\(\}]+)/i,/^(?:.+(?!\(\())/i],conditions:{shapeDataEndBracket:{rules:[],inclusive:!1},shapeDataStr:{rules:[2,3],inclusive:!1},shapeData:{rules:[1,4,5],inclusive:!1},CLASS:{rules:[9,10],inclusive:!1},ICON:{rules:[14,15],inclusive:!1},NSTR2:{rules:[28,29],inclusive:!1},NSTR:{rules:[31,32],inclusive:!1},NODE:{rules:[27,30,33,34,35,36,37,38,39,40,41,42],inclusive:!1},INITIAL:{rules:[0,6,7,8,11,12,13,16,17,18,19,20,21,22,23,24,25,26],inclusive:!0}}};return O}();T.lexer=Y;function B(){this.yy={}}return o(B,"Parser"),B.prototype=T,T.Parser=B,new B}();$.parser=$;var Ne=$,v=[],ne=[],ee=0,ie={},xe=o(()=>{v=[],ne=[],ee=0,ie={}},"clear"),ve=o(e=>{if(v.length===0)return null;const u=v[0].level;let p=null;for(let s=v.length-1;s>=0;s--)if(v[s].level===u&&!p&&(p=v[s]),v[s].level<u)throw new Error('Items without section detected, found section ("'+v[s].label+'")');return e===p?.level?null:p},"getSection"),he=o(function(){return ne},"getSections"),De=o(function(){const e=[],u=[],p=he(),s=H();for(const d of p){const E={id:d.id,label:j(d.label??"",s),isGroup:!0,ticket:d.ticket,shape:"kanbanSection",level:d.level,look:s.look};u.push(E);const m=v.filter(l=>l.parentId===d.id);for(const l of m){const D={id:l.id,parentId:d.id,label:j(l.label??"",s),isGroup:!1,ticket:l?.ticket,priority:l?.priority,assigned:l?.assigned,icon:l?.icon,shape:"kanbanItem",level:l.level,rx:5,ry:5,cssStyles:["text-align: left"]};u.push(D)}}return{nodes:u,edges:e,other:{},config:H()}},"getData"),Le=o((e,u,p,s,d)=>{const E=H();let m=E.mindmap?.padding??K.mindmap.padding;switch(s){case f.ROUNDED_RECT:case f.RECT:case f.HEXAGON:m*=2}const l={id:j(u,E)||"kbn"+ee++,level:e,label:j(p,E),width:E.mindmap?.maxNodeWidth??K.mindmap.maxNodeWidth,padding:m,isGroup:!1};if(d!==void 0){let I;d.includes(`
`)?I=d+`
`:I=`{
`+d+`
}`;const g=Ee(I,{schema:ke});if(g.shape&&(g.shape!==g.shape.toLowerCase()||g.shape.includes("_")))throw new Error(`No such shape: ${g.shape}. Shape names should be lowercase.`);g?.shape&&g.shape==="kanbanItem"&&(l.shape=g?.shape),g?.label&&(l.label=g?.label),g?.icon&&(l.icon=g?.icon.toString()),g?.assigned&&(l.assigned=g?.assigned.toString()),g?.ticket&&(l.ticket=g?.ticket.toString()),g?.priority&&(l.priority=g?.priority)}const D=ve(e);D?l.parentId=D.id||"kbn"+ee++:ne.push(l),v.push(l)},"addNode"),f={DEFAULT:0,NO_BORDER:0,ROUNDED_RECT:1,RECT:2,CIRCLE:3,CLOUD:4,BANG:5,HEXAGON:6},Oe=o((e,u)=>{switch(te.debug("In get type",e,u),e){case"[":return f.RECT;case"(":return u===")"?f.ROUNDED_RECT:f.CLOUD;case"((":return f.CIRCLE;case")":return f.CLOUD;case"))":return f.BANG;case"{{":return f.HEXAGON;default:return f.DEFAULT}},"getType"),Ie=o((e,u)=>{ie[e]=u},"setElementForId"),Ce=o(e=>{if(!e)return;const u=H(),p=v[v.length-1];e.icon&&(p.icon=j(e.icon,u)),e.class&&(p.cssClasses=j(e.class,u))},"decorateNode"),we=o(e=>{switch(e){case f.DEFAULT:return"no-border";case f.RECT:return"rect";case f.ROUNDED_RECT:return"rounded-rect";case f.CIRCLE:return"circle";case f.CLOUD:return"cloud";case f.BANG:return"bang";case f.HEXAGON:return"hexgon";default:return"no-border"}},"type2Str"),Ae=o(()=>te,"getLogger"),Te=o(e=>ie[e],"getElementById"),Re={clear:xe,addNode:Le,getSections:he,getData:De,nodeType:f,getType:Oe,setElementForId:Ie,decorateNode:Ce,type2Str:we,getLogger:Ae,getElementById:Te},Pe=Re,Ve=o(async(e,u,p,s)=>{te.debug(`Rendering kanban diagram
`+e);const E=s.db.getData(),m=H();m.htmlLabels=!1;const l=fe(u),D=l.append("g");D.attr("class","sections");const I=l.append("g");I.attr("class","items");const g=E.nodes.filter(b=>b.isGroup);let w=0;const _=10,F=[];let N=25;for(const b of g){const A=m?.kanban?.sectionWidth||200;w=w+1,b.x=A*w+(w-1)*_/2,b.width=A,b.y=0,b.height=A*3,b.rx=5,b.ry=5,b.cssClasses=b.cssClasses+" section-"+w;const L=await ye(D,b);N=Math.max(N,L?.labelBBox?.height),F.push(L)}let V=0;for(const b of g){const A=F[V];V=V+1;const L=m?.kanban?.sectionWidth||200,U=-L*3/2+N;let T=U;const Y=E.nodes.filter(i=>i.parentId===b.id);for(const i of Y){if(i.isGroup)throw new Error("Groups within groups are not allowed in Kanban diagrams");i.x=b.x,i.width=L-1.5*_;const r=(await me(I,i,{config:m})).node().getBBox();i.y=T+r.height/2,await be(i),T=i.y+r.height/2+_/2}const B=A.cluster.select("rect"),O=Math.max(T-U+3*_,50)+(N-25);B.attr("height",O)}_e(void 0,l,m.mindmap?.padding??K.kanban.padding,m.mindmap?.useMaxWidth??K.kanban.useMaxWidth)},"draw"),Be={draw:Ve},Ge=o(e=>{let u="";for(let s=0;s<e.THEME_COLOR_LIMIT;s++)e["lineColor"+s]=e["lineColor"+s]||e["cScaleInv"+s],Se(e["lineColor"+s])?e["lineColor"+s]=ce(e["lineColor"+s],20):e["lineColor"+s]=le(e["lineColor"+s],20);const p=o((s,d)=>e.darkMode?le(s,d):ce(s,d),"adjuster");for(let s=0;s<e.THEME_COLOR_LIMIT;s++){const d=""+(17-3*s);u+=`
    .section-${s-1} rect, .section-${s-1} path, .section-${s-1} circle, .section-${s-1} polygon, .section-${s-1} path  {
      fill: ${p(e["cScale"+s],10)};
      stroke: ${p(e["cScale"+s],10)};

    }
    .section-${s-1} text {
     fill: ${e["cScaleLabel"+s]};
    }
    .node-icon-${s-1} {
      font-size: 40px;
      color: ${e["cScaleLabel"+s]};
    }
    .section-edge-${s-1}{
      stroke: ${e["cScale"+s]};
    }
    .edge-depth-${s-1}{
      stroke-width: ${d};
    }
    .section-${s-1} line {
      stroke: ${e["cScaleInv"+s]} ;
      stroke-width: 3;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .kanban-ticket-link {
    fill: ${e.background};
    stroke: ${e.nodeBorder};
    text-decoration: underline;
  }
    `}return u},"genSections"),je=o(e=>`
  .edge {
    stroke-width: 3;
  }
  ${Ge(e)}
  .section-root rect, .section-root path, .section-root circle, .section-root polygon  {
    fill: ${e.git0};
  }
  .section-root text {
    fill: ${e.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .cluster-label, .label {
    color: ${e.textColor};
    fill: ${e.textColor};
    }
  .kanban-label {
    dy: 1em;
    alignment-baseline: middle;
    text-anchor: middle;
    dominant-baseline: middle;
    text-align: center;
  }
`,"getStyles"),Fe=je,qe={db:Pe,renderer:Be,parser:Ne,styles:Fe};export{qe as diagram};
