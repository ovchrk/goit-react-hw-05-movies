"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{541:function(e,t,n){n.r(t);var r=n(433),i=n(439),c=n(791),a=n(689),o=n(184);t.default=function(){var e=(0,a.UO)().movieId,t=(0,c.useState)([]),s=(0,i.Z)(t,2),l=s[0],h=s[1];return(0,c.useEffect)((function(){n(359)("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmY4ZmJiYzMwMTNlY2I1MDY0MGFmMDE0NDA1Nzc0YyIsInN1YiI6IjY0YjRlYTdiNjI5YjJjMDEzYzQzMDJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GHtJMZzPbE8SRwlwTEx3-peT33LPisCOv3lEOiFCJVM"}}).then((function(e){return e.json()})).then((function(e){return h((0,r.Z)(e.cast.splice(0,8)))})).catch((function(e){return console.error("error:"+e)}))}),[e]),(0,o.jsx)("div",{children:(0,o.jsx)("ul",{className:"cast__list",children:l.map((function(e){return(0,o.jsxs)("li",{className:"cast__item",children:[e.profile_path&&(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w780".concat(e.profile_path),alt:e.name,width:"80"}),(0,o.jsx)("h4",{children:e.name}),(0,o.jsxs)("p",{className:"caption",children:["Character: ",e.character]})]},e.id)}))})})}},359:function(e,t,n){var r=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,r.fetch&&(t.default=r.fetch.bind(r)),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response}}]);
//# sourceMappingURL=541.83f14b4e.chunk.js.map