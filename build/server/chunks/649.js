"use strict";exports.id=649,exports.ids=[649],exports.modules={9649:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{resolveRobots:function(){return resolveRobots},resolveSitemap:function(){return resolveSitemap},resolveManifest:function(){return resolveManifest},resolveRouteData:function(){return resolveRouteData}});let o=t(1406);function resolveRobots(e){let r="",t=Array.isArray(e.rules)?e.rules:[e.rules];for(let e of t){let t=(0,o.resolveArray)(e.userAgent||["*"]);for(let e of t)r+=`User-Agent: ${e}
`;if(e.allow){let t=(0,o.resolveArray)(e.allow);for(let e of t)r+=`Allow: ${e}
`}if(e.disallow){let t=(0,o.resolveArray)(e.disallow);for(let e of t)r+=`Disallow: ${e}
`}e.crawlDelay&&(r+=`Crawl-delay: ${e.crawlDelay}
`),r+="\n"}if(e.host&&(r+=`Host: ${e.host}
`),e.sitemap){let t=(0,o.resolveArray)(e.sitemap);t.forEach(e=>{r+=`Sitemap: ${e}
`})}return r}function resolveSitemap(e){let r="";for(let t of(r+='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n',e)){if(r+=`<url>
<loc>${t.url}</loc>
`,t.lastModified){let e=t.lastModified instanceof Date?t.lastModified.toISOString():t.lastModified;r+=`<lastmod>${e}</lastmod>
`}t.changeFrequency&&(r+=`<changefreq>${t.changeFrequency}</changefreq>
`),"number"==typeof t.priority&&(r+=`<priority>${t.priority}</priority>
`),r+="</url>\n"}return r+"</urlset>\n"}function resolveManifest(e){return JSON.stringify(e)}function resolveRouteData(e,r){return"robots"===r?resolveRobots(e):"sitemap"===r?resolveSitemap(e):"manifest"===r?resolveManifest(e):""}},1406:(e,r)=>{function resolveArray(e){return Array.isArray(e)?e:[e]}function resolveAsArrayOrUndefined(e){if(null!=e)return resolveArray(e)}Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{resolveAsArrayOrUndefined:function(){return resolveAsArrayOrUndefined},resolveArray:function(){return resolveArray}})}};