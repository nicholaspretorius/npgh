webpackJsonp([35783957827783],{243:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return e.raw=t,e}t.__esModule=!0,t.query=void 0;var r=l(["\n    margin: .5rem 0;\n    &:last-child {\n        border-bottom: 1px solid black;\n        margin-bottom: 0;\n        padding-bottom: 3rem\n    }\n"],["\n    margin: .5rem 0;\n    &:last-child {\n        border-bottom: 1px solid black;\n        margin-bottom: 0;\n        padding-bottom: 3rem\n    }\n"]),d=l(["\n    padding:0;\n    margin\n"],["\n    padding:0;\n    margin\n"]),u=l(["\n    \n"],["\n    \n"]),o=l(["\n    margin: .5rem 0;\n"],["\n    margin: .5rem 0;\n"]),m=n(4),i=a(m),f=n(58),c=a(f),g=n(172),p=a(g),s=n(44),b=a(s),E=c.default.div(r),k=c.default.h3(d),v=c.default.span(u),x=c.default.div(o),y=function(e){return i.default.createElement(E,null,i.default.createElement(p.default,{to:e.to},i.default.createElement(k,null,e.title)),i.default.createElement(v,null,e.date),i.default.createElement(x,null,e.excerpt))};t.default=function(e){var t=e.data;return i.default.createElement(b.default,null,i.default.createElement("p",null,"A ",i.default.createElement("em",null,"very"),' rudimentary "Today I Learned" log with ',t.allMarkdownRemark.totalCount," posts to date."),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return i.default.createElement(y,{key:t.id,title:t.frontmatter.title,excerpt:t.excerpt,to:t.fields.slug,date:t.frontmatter.date})}))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-210eda97ca9cbfdc886d.js.map