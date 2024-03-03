import{S as X,i as F,s as J,k as b,a as S,q as Z,l as k,m as N,c as D,h as p,r as x,n as u,D as B,p as H,b as E,E as v,u as ee,A,v as P,C as te,w as G,x as M,f as w,d as Q,t as I,y as j,G as R,I as ne,K as ae,g as Y,V as q,W as L,X as K}from"../../../chunks/index-02d869aa.js";import{S as re}from"../../../chunks/SectionHeader-6e6d2083.js";import{S as se}from"../../../chunks/SubSectionHeader-e4ade1d3.js";import{c as O}from"../../../chunks/stores-63a8d78e.js";const V=[{title:"Sponsor","card-width":28.75,"card-height":20,entries:[{name:"Bank of Baroda",logo:"BOB.jpg"},{name:"TIH",logo:"ibitf.webp"}]},{title:"Sustainability Partner","card-width":28.75,"card-height":20,entries:[{name:"ABIS",logo:"meraz.png"}]},{title:"Event Sponsor","card-width":28.75,"card-height":20,entries:[{name:"Career Launcher",logo:"career-launcher.png"}]},{title:"Beauty Partner","card-width":28.75,"card-height":20,entries:[{name:"Aishwarya's Makeover Salon",logo:"aishwarya-salon.jpeg"}]},{title:"Digital Partner","card-width":28.75,"card-height":20,entries:[{name:"UNSTOP",logo:"unstop.jpeg"}]}];function oe(o){let n,a,r,_,g,f,s,h,c,C,i;return{c(){n=b("div"),a=b("div"),r=b("img"),g=S(),f=b("div"),s=b("img"),c=S(),C=b("div"),i=Z(o[2]),this.h()},l(e){n=k(e,"DIV",{class:!0});var l=N(n);a=k(l,"DIV",{class:!0});var t=N(a);r=k(t,"IMG",{class:!0,src:!0,alt:!0,style:!0}),g=D(t),f=k(t,"DIV",{class:!0});var d=N(f);s=k(d,"IMG",{class:!0,src:!0,alt:!0}),d.forEach(p),t.forEach(p),c=D(l),C=k(l,"DIV",{class:!0});var m=N(C);i=x(m,o[2]),m.forEach(p),l.forEach(p),this.h()},h(){u(r,"class","frame-container svelte-1va9kfd"),B(r.src,_="/assets/sponsors/sponsor_frame.svg")||u(r,"src",_),u(r,"alt","sponsor contianer"),H(r,"--width",o[0]+"rem"),H(r,"--height",o[1]+"rem"),u(s,"class","sponsor-image svelte-1va9kfd"),B(s.src,h=`${o[3]}`)||u(s,"src",h),u(s,"alt","not found"),u(f,"class","image-container svelte-1va9kfd"),u(a,"class","card-img-container svelte-1va9kfd"),u(C,"class","sponsor-name svelte-1va9kfd"),u(n,"class","card-container svelte-1va9kfd")},m(e,l){E(e,n,l),v(n,a),v(a,r),v(a,g),v(a,f),v(f,s),v(n,c),v(n,C),v(C,i)},p(e,[l]){l&1&&H(r,"--width",e[0]+"rem"),l&2&&H(r,"--height",e[1]+"rem"),l&8&&!B(s.src,h=`${e[3]}`)&&u(s,"src",h),l&4&&ee(i,e[2])},i:A,o:A,d(e){e&&p(n)}}}function ie(o,n,a){let{frameContainerWidth:r=30}=n,{frameContainerHeight:_=30}=n,{sponsorName:g=""}=n,{logoName:f=""}=n;return o.$$set=s=>{"frameContainerWidth"in s&&a(0,r=s.frameContainerWidth),"frameContainerHeight"in s&&a(1,_=s.frameContainerHeight),"sponsorName"in s&&a(2,g=s.sponsorName),"logoName"in s&&a(3,f=s.logoName)},[r,_,g,f]}class le extends X{constructor(n){super(),F(this,n,ie,oe,J,{frameContainerWidth:0,frameContainerHeight:1,sponsorName:2,logoName:3})}}function $(o,n,a){const r=o.slice();return r[5]=n[a],r[6]=n,r[7]=a,r}function z(o,n,a){const r=o.slice();return r[8]=n[a],r[9]=n,r[10]=a,r}function T(o){let n,a,r,_,g,f,s;function h(e){o[1](e,o[5])}function c(e){o[2](e,o[5])}function C(e){o[3](e,o[8])}let i={logoName:"/assets/sponsors/"+o[8].logo};return o[5]["card-width"]!==void 0&&(i.frameContainerWidth=o[5]["card-width"]),o[5]["card-height"]!==void 0&&(i.frameContainerHeight=o[5]["card-height"]),o[8].name!==void 0&&(i.sponsorName=o[8].name),a=new le({props:i}),q.push(()=>L(a,"frameContainerWidth",h)),q.push(()=>L(a,"frameContainerHeight",c)),q.push(()=>L(a,"sponsorName",C)),{c(){n=b("div"),P(a.$$.fragment),f=S(),this.h()},l(e){n=k(e,"DIV",{class:!0});var l=N(n);G(a.$$.fragment,l),f=D(l),l.forEach(p),this.h()},h(){u(n,"class","single-sponsor svelte-2r3cnx")},m(e,l){E(e,n,l),M(a,n,null),v(n,f),s=!0},p(e,l){o=e;const t={};l&1&&(t.logoName="/assets/sponsors/"+o[8].logo),!r&&l&1&&(r=!0,t.frameContainerWidth=o[5]["card-width"],K(()=>r=!1)),!_&&l&1&&(_=!0,t.frameContainerHeight=o[5]["card-height"],K(()=>_=!1)),!g&&l&1&&(g=!0,t.sponsorName=o[8].name,K(()=>g=!1)),a.$set(t)},i(e){s||(w(a.$$.fragment,e),s=!0)},o(e){I(a.$$.fragment,e),s=!1},d(e){e&&p(n),j(a)}}}function U(o){let n,a,r,_,g,f,s;r=new se({props:{name:o[5].title}});let h=o[5].entries,c=[];for(let i=0;i<h.length;i+=1)c[i]=T(z(o,h,i));const C=i=>I(c[i],1,1,()=>{c[i]=null});return{c(){n=b("div"),a=b("div"),P(r.$$.fragment),_=S(),g=b("div");for(let i=0;i<c.length;i+=1)c[i].c();f=S(),this.h()},l(i){n=k(i,"DIV",{class:!0});var e=N(n);a=k(e,"DIV",{class:!0});var l=N(a);G(r.$$.fragment,l),l.forEach(p),_=D(e),g=k(e,"DIV",{class:!0});var t=N(g);for(let d=0;d<c.length;d+=1)c[d].l(t);t.forEach(p),f=D(e),e.forEach(p),this.h()},h(){u(a,"class","sub-title svelte-2r3cnx"),u(g,"class","sponsors-grid-container svelte-2r3cnx"),u(n,"class","sponsor-container")},m(i,e){E(i,n,e),v(n,a),M(r,a,null),v(n,_),v(n,g);for(let l=0;l<c.length;l+=1)c[l].m(g,null);v(n,f),s=!0},p(i,e){const l={};if(e&1&&(l.name=i[5].title),r.$set(l),e&1){h=i[5].entries;let t;for(t=0;t<h.length;t+=1){const d=z(i,h,t);c[t]?(c[t].p(d,e),w(c[t],1)):(c[t]=T(d),c[t].c(),w(c[t],1),c[t].m(g,null))}for(Y(),t=h.length;t<c.length;t+=1)C(t);Q()}},i(i){if(!s){w(r.$$.fragment,i);for(let e=0;e<h.length;e+=1)w(c[e]);s=!0}},o(i){I(r.$$.fragment,i),c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)I(c[e]);s=!1},d(i){i&&p(n),j(r),R(c,i)}}}function ce(o){let n,a,r,_,g,f,s,h,c,C;h=new re({props:{name:"Sponsors"}});let i=o[0],e=[];for(let t=0;t<i.length;t+=1)e[t]=U($(o,i,t));const l=t=>I(e[t],1,1,()=>{e[t]=null});return{c(){n=b("link"),a=b("link"),r=b("link"),_=b("link"),g=S(),f=b("div"),s=b("div"),P(h.$$.fragment),c=S();for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){const d=te('[data-svelte="svelte-19shhsi"]',document.head);n=k(d,"LINK",{rel:!0,href:!0}),a=k(d,"LINK",{rel:!0,href:!0}),r=k(d,"LINK",{rel:!0,href:!0,crossorigin:!0}),_=k(d,"LINK",{href:!0,rel:!0}),d.forEach(p),g=D(t),f=k(t,"DIV",{class:!0});var m=N(f);s=k(m,"DIV",{class:!0});var y=N(s);G(h.$$.fragment,y),y.forEach(p),c=D(m);for(let W=0;W<e.length;W+=1)e[W].l(m);m.forEach(p),this.h()},h(){document.title="Sponsors | Meraz'24",u(n,"rel","stylesheet"),u(n,"href","https://fonts.googleapis.com/css?family=Lato"),u(a,"rel","preconnect"),u(a,"href","https://fonts.googleapis.com"),u(r,"rel","preconnect"),u(r,"href","https://fonts.gstatic.com"),u(r,"crossorigin",""),u(_,"href","https://fonts.googleapis.com/css2?family=DotGothic16&family=Oswald&family=Silkscreen&display=swap"),u(_,"rel","stylesheet"),u(s,"class","sponsor-heading svelte-2r3cnx"),u(f,"class","sponsor-main-container svelte-2r3cnx")},m(t,d){v(document.head,n),v(document.head,a),v(document.head,r),v(document.head,_),E(t,g,d),E(t,f,d),v(f,s),M(h,s,null),v(f,c);for(let m=0;m<e.length;m+=1)e[m].m(f,null);C=!0},p(t,[d]){if(d&1){i=t[0];let m;for(m=0;m<i.length;m+=1){const y=$(t,i,m);e[m]?(e[m].p(y,d),w(e[m],1)):(e[m]=U(y),e[m].c(),w(e[m],1),e[m].m(f,null))}for(Y(),m=i.length;m<e.length;m+=1)l(m);Q()}},i(t){if(!C){w(h.$$.fragment,t);for(let d=0;d<i.length;d+=1)w(e[d]);C=!0}},o(t){I(h.$$.fragment,t),e=e.filter(Boolean);for(let d=0;d<e.length;d+=1)I(e[d]);C=!1},d(t){p(n),p(a),p(r),p(_),t&&p(g),t&&p(f),j(h),R(e,t)}}}function he(o,n,a){let r;ne(o,O,s=>a(4,r=s)),ae(O,r=!1,r);function _(s,h){o.$$.not_equal(h["card-width"],s)&&(h["card-width"]=s,a(0,V))}function g(s,h){o.$$.not_equal(h["card-height"],s)&&(h["card-height"]=s,a(0,V))}function f(s,h){o.$$.not_equal(h.name,s)&&(h.name=s,a(0,V))}return[V,_,g,f]}class ge extends X{constructor(n){super(),F(this,n,he,ce,J,{})}}export{ge as default};
