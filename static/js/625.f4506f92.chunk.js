"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[625],{625:function(e,t,n){n.r(t);var r=n(433),i=n(439),o=n(791),c=n(689),s=n(87),a=n(184);t.default=function(e){var t=e.onMovieDetails,u=(0,o.useState)([]),f=(0,i.Z)(u,2),l=f[0],d=f[1],h=(0,c.TH)();return(0,o.useEffect)((function(){n(359)("https://api.themoviedb.org/3/trending/all/day",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmY4ZmJiYzMwMTNlY2I1MDY0MGFmMDE0NDA1Nzc0YyIsInN1YiI6IjY0YjRlYTdiNjI5YjJjMDEzYzQzMDJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GHtJMZzPbE8SRwlwTEx3-peT33LPisCOv3lEOiFCJVM"}}).then((function(e){return e.json()})).then((function(e){return d((0,r.Z)(e.results))})).catch((function(e){return console.error("error:"+e)}))}),[]),(0,a.jsx)("div",{className:"movie-list",children:l.map((function(e){var n=e.id,r=e.title,i=e.name;return(0,a.jsxs)(s.rU,{to:"/movies/".concat(n),state:{from:h},onClick:function(){t(n)},children:[r,i]},n)}))})}},359:function(e,t,n){var r=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,r.fetch&&(t.default=r.fetch.bind(r)),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response}}]);
//# sourceMappingURL=625.f4506f92.chunk.js.map