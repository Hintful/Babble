(this.webpackJsonpbabble=this.webpackJsonpbabble||[]).push([[0],{88:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(69),r=c.n(i),a=(c(88),c(59)),o=c.n(a),l=c(70),u=c(8),j=c(106),b=c(107),d=c(79),h=c(108),f=c(109),x=c(116),p=c(110),O=c(113),m=c(31),g=(c(90),c(98),m.a.initializeApp({apiKey:"AIzaSyAfP6rQlttolZzyQLsSzTIi0hBsBaQI_nY",authDomain:"babble-4fe6a.firebaseapp.com",projectId:"babble-4fe6a",storageBucket:"babble-4fe6a.appspot.com",messagingSenderId:"535172438321",appId:"1:535172438321:web:7e89165b6205ee7388b810",measurementId:"G-EVT93D4GXS"})),v=g.auth(),w=g.firestore(),S=c(71),y=c(115),I=c(3);function z(e){return Math.floor(Math.sqrt(e)/2)}function U(e){return 0===e?"#cdcdcd":e<=2?"#adff2f":e<=4?"#00bfff":e<=6?"#0000ff":e<=8?"#8a2be2":e<=10?"#ff8c00":"#ff0000"}function k(e){return 0===e||e<=2?"black":"white"}var A=function(e){var t=z(e.exp);return Object(I.jsx)(y.b,{boxSize:"1em",bg:U(t),style:{border:"2px solid white"},children:Object(I.jsx)("span",{style:{color:k(t),fontWeight:"600",fontSize:12},children:t})})},F=function(e){var t=e.message,c=t.uid===v.currentUser.uid?"msgSent":"msgReceived",s=Object(n.useState)(0),i=Object(u.a)(s,2),r=i[0],a=i[1];return w.collection("users").doc(t.uid).get().then((function(e){a(e.get("exp"))})),Object(I.jsx)(I.Fragment,{children:t.uid!==v.currentUser.uid?Object(I.jsxs)(j.a,{direction:"row",align:"center",mt:"10px",ml:"15px",children:[Object(I.jsx)(y.a,{size:"md",src:t.photoURL,children:Object(I.jsx)(A,{exp:r})}),Object(I.jsx)(b.a,{width:"auto",className:"message ".concat(c),children:t.message})]}):Object(I.jsxs)(j.a,{direction:"row",align:"center",justify:"flex-end",mt:"10px",mr:"15px",children:[Object(I.jsx)(b.a,{width:"auto",className:"message ".concat(c),children:t.message}),Object(I.jsx)(y.a,{size:"md",src:t.photoURL,children:Object(I.jsx)(A,{exp:r})})]})})},R=c(24),B=function(){var e=w.collection("messages"),t=e.orderBy("createdAt").limit(25),c=Object(S.a)(t,{idField:"id"}),s=Object(u.a)(c,1)[0],i=Object(n.useState)(""),r=Object(u.a)(i,2),a=r[0],g=r[1],y=Object(n.useState)(!0),U=Object(u.a)(y,2),k=U[0],A=U[1],B=Object(n.useRef)(),L=function(e){w.collection("users").doc(e).get().then((function(e){var t=e.get("exp");z(t)>z(t-1)&&Object(R.b)("You have leveled up!",{icon:"\ud83d\udc4f",duration:7e3})}))};Object(n.useEffect)((function(){B.current.scrollIntoView({behavior:"smooth"})}));return Object(I.jsxs)(j.a,{direction:"column",justify:"flex-end",pb:"60px",bg:"#ffffff",height:"100vh",children:[Object(I.jsx)(R.a,{}),Object(I.jsxs)(b.a,{w:"100%",h:"auto",style:{overflow:"auto",maxHeight:"95%"},children:[s&&s.map((function(e){return Object(I.jsx)(F,{message:e})})),Object(I.jsx)("div",{ref:B})]}),Object(I.jsx)(j.a,{w:"100%",h:"50px",bg:"gray.300",px:"5px",mt:"auto",mr:"5px",align:"center",position:"fixed",bottom:"0",children:Object(I.jsxs)("form",{style:{width:"100%",display:"inline-flex"},onSubmit:function(){var t=Object(l.a)(o.a.mark((function t(c){var n,s,i,r,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),n=v.currentUser,s=n.uid,i=n.photoURL,A(!1),setTimeout((function(){A(!0)}),1e3),t.next=5,e.add({message:a,createdAt:m.a.firestore.FieldValue.serverTimestamp(),uid:s,photoURL:i});case 5:return r=m.a.firestore.FieldValue.increment(1),l=w.collection("users").doc(s),t.next=9,l.update({exp:r});case 9:t.sent,L(s),g(""),B.current.scrollIntoView({behavior:"smooth"});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(I.jsx)(d.a,{isRequired:!0,children:Object(I.jsxs)(h.a,{children:[Object(I.jsx)(f.a,{children:Object(I.jsx)("i",{class:"fas fa-comment-dots"})}),Object(I.jsx)(x.a,{bg:"white",placeholder:"Type your message...",value:a,onChange:function(e){e.target.value.length>100&&(e.target.value=e.target.value.slice(0,100)),g(e.target.value)}})]})}),Object(I.jsx)(p.a,{orientation:"vertical"}),Object(I.jsx)(O.a,{ml:"5px",type:"submit",colorScheme:"blue",isDisabled:!k,rightIcon:Object(I.jsx)("i",{class:"fas fa-paper-plane"}),children:"Send"})]})})]})},L=c(111),T=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(R.a,{}),Object(I.jsx)(O.a,{h:"40px",ml:"auto",colorScheme:"red",disabled:!v.currentUser,rightIcon:Object(I.jsx)("i",{class:"fas fa-sign-out-alt"}),onClick:function(){v.currentUser&&(v.signOut(),Object(R.b)("You have signed out.",{icon:"\ud83d\udeaa",duration:3e3}))},children:"Sign out"})]})},V=function(){return Object(I.jsxs)(j.a,{direction:"row",px:"5px",align:"center",h:"50px",w:"100%",bg:"white",position:"fixed",top:"0",zIndex:"1",children:[Object(I.jsxs)(L.a,{className:"navbar-logo",fontFamily:"Poppins",fontWeight:"600",fontSize:"lg",ml:"10px",children:[Object(I.jsx)("i",{class:"fas fa-comments emphasis"})," Babble"]}),Object(I.jsx)(T,{})]})},D=c(74),G=c(112);var N=function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(R.a,{}),Object(I.jsx)(G.a,{w:"100%",h:"90vh",bg:"white",children:Object(I.jsx)(O.a,{colorScheme:"green",leftIcon:Object(I.jsx)("i",{class:"fas fa-sign-in-alt"}),onClick:function(){!function(){var e=new m.a.auth.GoogleAuthProvider;v.signInWithPopup(e).then((function(e){w.collection("users").doc(v.currentUser.uid).get().then((function(t){if(!t.exists)return w.collection("users").doc(e.user.uid).set({exp:0},{merge:!0})}))})).then((function(){R.b.success("You have signed in!",{duration:3e3})}))}()},children:"Sign-in with Google"})})]})},P=function(){var e=Object(D.a)(v),t=Object(u.a)(e,3),c=t[0];t[1],t[2];return Object(I.jsxs)(b.a,{w:"100vw",h:"100vh",bg:"white",children:[Object(I.jsx)(V,{}),c?Object(I.jsx)(B,{}):Object(I.jsx)(N,{})]})};var Y=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(P,{})})},C=c(114);r.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(C.a,{children:Object(I.jsx)(Y,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.712ef523.chunk.js.map