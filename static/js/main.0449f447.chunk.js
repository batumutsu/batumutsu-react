(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var a=s(1),r=s(4),n=s.n(r),c=s(3),i=s.n(c),d=s(5),o=s(6),l=s(7),b=s(9),j=s(8),m=(s(15),s.p+"static/media/loading.04d9652c.gif"),u=s.p+"static/media/search_ideogram.e979e3c4.svg",h=s(0),x=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).mySubmitHandler=function(){var e=Object(d.a)(i.a.mark((function e(t){var s,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.setState({isLoading:!0}),""!==a.state.albumId&&(Number(a.state.albumId)||0===a.state.albumId)){e.next=6;break}a.setState({isLoading:!1,isError:!0,errMsg:"Album Id should be a number"}),e.next=17;break;case 6:return e.next=8,fetch("https://jsonplaceholder.typicode.com/albums/".concat(a.state.albumId,"/photos"));case 8:if(!(s=e.sent).ok){e.next=16;break}return e.next=12,s.json();case 12:r=e.sent,a.setState({photos:r,isLoading:!1,isError:!1,errMsg:"No images found for Album Id: ".concat(a.state.albumId)}),e.next=17;break;case 16:a.setState({isError:!0,isLoading:!1,errMsg:"No images found for Album Id: ".concat(a.state.albumId)});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.renderImages=function(){return a.state.photos.map((function(e){return Object(h.jsxs)("article",{children:[Object(h.jsx)("img",{src:e.thumbnailUrl,alt:"Avatar"}),Object(h.jsx)("p",{children:e.title})]},e.title)}))},a.myChangeHandler=function(e){a.setState({albumId:e.target.value})},a.state={photos:[],isLoading:!1,isError:!1,albumId:"",errMsg:"Provide album Id"},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this.state,t=e.photos,s=e.isLoading,a=e.isError,r=e.errMsg,n=Object(h.jsx)("form",{onSubmit:this.mySubmitHandler,children:Object(h.jsx)("div",{className:"topnav",children:Object(h.jsxs)("div",{className:"search-container",children:[Object(h.jsx)("input",{type:"number",placeholder:"enter album id number to fetch its images",name:"search",onChange:this.myChangeHandler,step:"0.1"}),Object(h.jsx)("button",{type:"submit",children:"Get Album Photos By Id"})]})})});return s?Object(h.jsxs)("div",{children:[" ",n," ",Object(h.jsxs)("x-sectiondata",{children:[Object(h.jsx)("div",{className:"divImg",children:Object(h.jsx)("img",{src:m,alt:"Avatar"})}),Object(h.jsx)("h1",{children:"Loading..."})]})]}):a?Object(h.jsxs)("div",{children:[" ",n," ",Object(h.jsxs)("x-sectiondata",{children:[Object(h.jsx)("div",{className:"divImg",children:Object(h.jsx)("img",{src:u,alt:"Avatar"})}),Object(h.jsx)("h1",{children:r})]})]}):t.length>0?Object(h.jsxs)("div",{children:[" ",n,Object(h.jsx)("x-sectiondata",{children:this.renderImages()})]}):Object(h.jsxs)("div",{children:[" ",n,Object(h.jsxs)("x-sectiondata",{children:[Object(h.jsx)("div",{className:"divImg",children:Object(h.jsx)("img",{src:u,alt:"Avatar"})}),Object(h.jsx)("h1",{children:r})]})]})}}]),s}(a.Component);n.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0449f447.chunk.js.map