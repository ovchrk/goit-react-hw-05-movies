"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{785:function(e,n,t){t.r(n);var r=t(433),i=t(439),o=t(791),c=t(689),s=t(184);n.default=function(){var e=(0,c.UO)().movieId,n=(0,o.useState)([]),u=(0,i.Z)(n,2),a=u[0],h=u[1];return(0,o.useEffect)((function(){t(359)("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmY4ZmJiYzMwMTNlY2I1MDY0MGFmMDE0NDA1Nzc0YyIsInN1YiI6IjY0YjRlYTdiNjI5YjJjMDEzYzQzMDJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GHtJMZzPbE8SRwlwTEx3-peT33LPisCOv3lEOiFCJVM"}}).then((function(e){return e.json()})).then((function(e){return h((0,r.Z)(e.results))})).catch((function(e){return console.error("error:"+e)}))}),[e]),console.log(a),(0,s.jsxs)("div",{children:[a.length<1&&(0,s.jsx)("div",{children:"There are no reviews on this movie."}),a.map((function(e){return(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:e.author}),(0,s.jsx)("p",{className:"caption",children:e.content})]},e.id)}))]})}},359:function(e,n,t){var r=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof t.g)return t.g;throw new Error("unable to locate global object")}();e.exports=n=r.fetch,r.fetch&&(n.default=r.fetch.bind(r)),n.Headers=r.Headers,n.Request=r.Request,n.Response=r.Response}}]);
//# sourceMappingURL=785.1a6ce6ec.chunk.js.map