(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(146);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h5",null,"Nows."),r.a.createElement("ul",null,r.a.createElement("li",null,"Building: ",r.a.createElement("a",{href:"https://github.com/nicholaspretorius/itemly",target:"_blank",rel:"noopener noreferrer"},"Itemly"),": A rudimentary Todo API."),r.a.createElement("li",null,"Learning: Nest.js, Typescript, Angular"),r.a.createElement("li",null,"Watching (Course): Angular Core Deep Dive by Angular Univesity"),r.a.createElement("li",null,"Reading: Born to Run by Christopher McDougall"),r.a.createElement("li",null,"Listening (Audiobook): A Clash of Kings by George R.R. Martin"),r.a.createElement("li",null,"Listening (Music): Zola Blood - Infinite Games"),r.a.createElement("li",null,"Watching (Series): Ozark. Season 2")),r.a.createElement("h5",null,"Then:09/12"),r.a.createElement("ul",null,r.a.createElement("li",null,"Learning: Node.js, Typescript, Azure"),r.a.createElement("li",null,"Reading: The Lean Startup by Eric Ries"),r.a.createElement("li",null,"Listening (Audiobook): In the Plex by Steven Levy"),r.a.createElement("li",null,"Listening (Music): The Glitch Mob"),r.a.createElement("li",null,"Watching (Series): Mad Men. Season 3"),r.a.createElement("li",null,"Watching (Course): The Complete Typescript Course by Angular University")))}},143:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(147)),i=a(n(148)),o=a(n(7)),l=a(n(51)),u=a(n(52)),s=a(n(4)),c=a(n(0)),d=n(16),p=n(144);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:s.default.string,activeStyle:s.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,l=t.onClick,u=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=f(n);return c.default.createElement(d.Link,(0,i.default)({to:g,state:s,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(n,{state:s,replace:h})),!0}},m))},t}(c.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var g=m;t.default=g;var v=function(e,t){window.___navigate(f(e),t)};t.navigate=v;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(143),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(145),c=n.n(s);n.d(t,"PageRenderer",function(){return c.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},146:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(144);t.a=function(e){var t=e.children;return r.a.createElement("div",{style:{margin:"0 auto",padding:"1rem",maxWidth:650}},r.a.createElement("h2",{style:{display:"inline-block"}},"PostCode"),r.a.createElement("div",{style:{margin:"3.5rem 0",float:"right"}},r.a.createElement(i.Link,{to:"/",style:{marginRight:"1rem"}},"Home"),r.a.createElement(i.Link,{to:"/about",style:{marginRight:"1rem"}},"About"),r.a.createElement(i.Link,{to:"/uses",style:{marginRight:"1rem"}},"Uses"),r.a.createElement(i.Link,{to:"/now"},"Now")),t)}},147:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},148:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},149:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(53),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s}}]);
//# sourceMappingURL=component---src-pages-now-js-de9edc1a36f5aff21394.js.map