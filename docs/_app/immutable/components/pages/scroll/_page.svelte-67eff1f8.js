import{S as j,i as z,s as F,V as R,k as w,a as S,l as b,m as T,h as v,c as A,n as M,b as q,D as d,N,t as O,d as H,f as X,J as L,R as Q,p as B,P as W,g as U,q as Y,r as P,u as G,B as C,W as Z,X as $}from"../../../chunks/index-2b9916c0.js";import{f as x,a as ee}from"../../../chunks/index-49aad5cf.js";function J(s,e,o){const a=s.slice();return a[9]=e[o],a}function K(s){let e,o;return{c(){e=w("img"),this.h()},l(a){e=b(a,"IMG",{style:!0,src:!0,alt:!0,class:!0}),this.h()},h(){B(e,"transform","translate(0, "+(s[1]<2?s[1]*s[9]:-s[1]*s[9]/(s[4].length-1))+"px)"),W(e.src,o=`https://www.devsamples.com/parallax-layer${s[9]}.png`)||M(e,"src",o),M(e,"alt",`parallax layer ${s[9]}`),M(e,"class","svelte-1fk8y27")},m(a,i){q(a,e,i)},p(a,i){i&2&&B(e,"transform","translate(0, "+(a[1]<2?a[1]*a[9]:-a[1]*a[9]/(a[4].length-1))+"px)")},d(a){a&&v(e)}}}function le(s){let e,o,a,i,u,_,n;return{c(){e=w("p"),o=Y("You have scrolled "),a=Y(s[1]),i=Y(" pixels"),u=S(),_=w("p"),n=Y(s[3])},l(l){e=b(l,"P",{});var t=T(e);o=P(t,"You have scrolled "),a=P(t,s[1]),i=P(t," pixels"),t.forEach(v),u=A(l),_=b(l,"P",{});var p=T(_);n=P(p,s[3]),p.forEach(v)},m(l,t){q(l,e,t),d(e,o),d(e,a),d(e,i),q(l,u,t),q(l,_,t),d(_,n)},p(l,t){t&2&&G(a,l[1]),t&8&&G(n,l[3])},i:C,o:C,d(l){l&&v(e),l&&v(u),l&&v(_)}}}function te(s){let e,o,a,i,u,_,n,l,t,p,I,E,k,f;return{c(){e=w("div"),o=w("p"),a=Y("You have scrolled "),i=Y(s[1]),u=Y(" pixels"),_=S(),n=w("p"),l=Y(s[3]),t=S(),p=w("img"),this.h()},l(m){e=b(m,"DIV",{class:!0});var c=T(e);o=b(c,"P",{});var D=T(o);a=P(D,"You have scrolled "),i=P(D,s[1]),u=P(D," pixels"),D.forEach(v),_=A(c),n=b(c,"P",{});var r=T(n);l=P(r,s[3]),r.forEach(v),t=A(c),p=b(c,"IMG",{src:!0,alt:!0,class:!0}),c.forEach(v),this.h()},h(){W(p.src,I="https://www.onlygfx.com/wp-content/uploads/2021/02/6-pixel-heart-1.png")||M(p,"src",I),M(p,"alt","heart"),M(p,"class","svelte-1fk8y27"),M(e,"class","story svelte-1fk8y27")},m(m,c){q(m,e,c),d(e,o),d(o,a),d(o,i),d(o,u),d(e,_),d(e,n),d(n,l),d(e,t),d(e,p),f=!0},p(m,c){(!f||c&2)&&G(i,m[1]),(!f||c&8)&&G(l,m[3])},i(m){f||(R(()=>{k&&k.end(1),E=Z(e,x,{y:200,duration:2e3}),E.start()}),f=!0)},o(m){E&&E.invalidate(),k=$(e,ee,{}),f=!1},d(m){m&&v(e),m&&k&&k.end()}}}function se(s){let e=!1,o=()=>{e=!1},a,i,u,_,n,l,t,p,I,E;R(s[6]);let k=s[4],f=[];for(let r=0;r<k.length;r+=1)f[r]=K(J(s,k,r));const m=[te,le],c=[];function D(r,g){return r[2]&&r[0]>0?0:r[0]===0?1:-1}return~(l=D(s))&&(t=c[l]=m[l](s)),{c(){i=w("main"),u=w("div");for(let r=0;r<f.length;r+=1)f[r].c();_=S(),n=w("div"),t&&t.c(),this.h()},l(r){i=b(r,"MAIN",{class:!0});var g=T(i);u=b(g,"DIV",{class:!0});var y=T(u);for(let V=0;V<f.length;V+=1)f[V].l(y);y.forEach(v),_=A(g),n=b(g,"DIV",{class:!0});var h=T(n);t&&t.l(h),h.forEach(v),g.forEach(v),this.h()},h(){M(u,"class","container svelte-1fk8y27"),M(n,"class","text svelte-1fk8y27"),M(i,"class","svelte-1fk8y27")},m(r,g){q(r,i,g),d(i,u);for(let y=0;y<f.length;y+=1)f[y].m(u,null);d(i,_),d(i,n),~l&&c[l].m(n,null),p=!0,I||(E=[N(window,"scroll",s[5]),N(window,"scroll",()=>{e=!0,clearTimeout(a),a=setTimeout(o,100),s[6]()})],I=!0)},p(r,[g]){if(g&2&&!e&&(e=!0,clearTimeout(a),scrollTo(window.pageXOffset,r[1]),a=setTimeout(o,100)),g&18){k=r[4];let h;for(h=0;h<k.length;h+=1){const V=J(r,k,h);f[h]?f[h].p(V,g):(f[h]=K(V),f[h].c(),f[h].m(u,null))}for(;h<f.length;h+=1)f[h].d(1);f.length=k.length}let y=l;l=D(r),l===y?~l&&c[l].p(r,g):(t&&(U(),O(c[y],1,1,()=>{c[y]=null}),H()),~l?(t=c[l],t?t.p(r,g):(t=c[l]=m[l](r),t.c()),X(t,1),t.m(n,null)):t=null)},i(r){p||(X(t),p=!0)},o(r){O(t),p=!1},d(r){r&&v(i),L(f,r),~l&&c[l].d(),I=!1,Q(E)}}}function ae(s,e,o){let a;const i=[0,1,2,3],u=["Keep scrolling...","More scrolling...","Almost there...","You did it!","You are done!"];let _=0,n=0,l=!0;const t=Math.floor(600/u.length);function p(){const E=n;o(0,n=Math.max(0,Math.floor(_/t))),o(2,l=n===E)}function I(){o(1,_=window.pageYOffset)}return s.$$.update=()=>{s.$$.dirty&1&&o(3,a=u[n])},[n,_,l,a,i,p,I]}class ie extends j{constructor(e){super(),z(this,e,ae,se,F,{})}}export{ie as default};
