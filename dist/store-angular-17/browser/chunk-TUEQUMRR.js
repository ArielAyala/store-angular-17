import{a as s}from"./chunk-VCC6BU4Z.js";import{L as o,R as n}from"./chunk-7LMTLDZJ.js";var p={apiUrl:"https://api.escuelajs.co/api/v1/"};var f=(()=>{let t=class t{constructor(){this.http=n(s),this.apiUrl=p.apiUrl}getProducts(r){let i=new URL(this.apiUrl+"products");return r&&i.searchParams.set("categoryId",r),this.http.get(i.toString())}getProduct(r){return this.http.get(this.apiUrl+`products/${r}`)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{p as a,f as b};
