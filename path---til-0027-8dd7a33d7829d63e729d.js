webpackJsonp([0xceda9a1caec9],{451:function(e,n){e.exports={data:{markdownRemark:{html:'<h3>Azure &#x26; Node.js, PowerShell</h3>\n<ul>\n<li>\n<p>Check the OS and architecture in PowerShell: <br></p>\n<pre>\n    wmic os get caption\n    wmic os get osarchitecture\n</pre>\n</li>\n<li>\n<p>2 Ways to check which version of Node is running on Azure: </p>\n<ol>\n<li>Open the Kudu Console (via Advanced Tools, CMD) and run: node -v or npm -v</li>\n<li>\n<p>In the Azure Portal, in the App Service blade, in Application Settings look for:                     <pre>\nWEBSITE_NODE_DEFAULT_VERSION</p>\n</pre>\n</li>\n</ol>\n</li>\n<li>\n<p>3 Ways to specify the Node.js version to run in Azure:</p>\n<ol>\n<li>\n<p>In package.json set the following:</p>\n<pre>\n    "engines":{\n        "node": "0.6.22 || 0.8.x"\n    }\n</pre>\n</li>\n<li>\n<p>Set the \'node_env\' by changing the value mentioned above in Application settings. </p>\n</li>\n<li>\n<p>Set \'node_env\' in your web.config in the system.webServer block:</p>\n<pre>\n    &lt;system.webServer&gt;\n        ...\n        &lt;iisnode node_env="production" /&gt;\n        ...\n    &lt;/system.webServer&gt;\n</pre>\n</li>\n<li>\n<p>Set it via the iisnode.yml file | <a href="https://github.com/tjanczuk/iisnode/blob/master/src/samples/configuration/iisnode.yml">Link</a>\n<br/><br/>\nNote: The web.config or iisnode.yml values will override the value in Application Settings</p>\n</li>\n<li>\n<p>Deploying Node.js to Azure: <br/>\n<a href="https://docs.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-rest-api">Link</a>\n<br/>\nFurther reading:\n<br/>\n<a href="http://mosshowto.blogspot.co.za/2017/10/quick-tutorial-nodejs-app-service-azure.html">Link</a><br/>\n<a href="http://mosshowto.blogspot.co.za/2017/10/nodejs-swaggerize-api-into-azure-app.html">Link</a></p>\n</li>\n<li>\n<p>The first article above introduced me to Swaggerize, which, via a Yo generator, lets you generate boilerplate code for your API via a Swagger.json document specifying your routes. It will then also setup the Swagger UI for you to enable testing. Very cool! <a href="https://www.npmjs.com/package/swaggerize-express">Link</a></p>\n</li>\n<li>\n<p>As a reminder, when working with GitHub or Azure via a proxy, remember to: </p>\n<pre>\n    git config --global http.proxy http://proxyuser:proxypassword@proxy.server.domain:port\n    git config --global --unset http.proxy\n    git config --global --get http.proxy\n</pre>\n</li>\n</ol>\n</li>\n</ul>',frontmatter:{title:"TIL 0027"}}},pathContext:{slug:"/til0027/"}}}});
//# sourceMappingURL=path---til-0027-8dd7a33d7829d63e729d.js.map