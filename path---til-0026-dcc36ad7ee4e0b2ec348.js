webpackJsonp([0x6827d5a6dd5d],{432:function(e,n){e.exports={data:{markdownRemark:{html:'<h3>Express, Express, Express</h3>\n<ul>\n<li>\n<p>Add static resources to Node.js server</p>\n<pre>\n    app.use(\'/static\', express.static(\'public\'));\n</pre>\n</li>\n<li>\n<p>Modularize your routes, for example, in /routes/index.js:</p>\n<pre>\n    const express = require("express");\n    const router = express.Router();\n\n    router.get(\'/\', (req, res) => {\n        ...\n    });\n    ...\n    module.export = router;\n</pre>\n<p>Then in your main app.js</p>\n<pre>\n    const routes = require(\'./routes\');\n    app.use(routes);\n</pre>\n</li>\n<li>\n<p>Setup CORS for your API app | npm i cors --save</p>\n<pre>\n    ...\n    var cors = require("cors");\n    ...\n    app.use(cors({\n        origin: ["http://localhost:8000"],\n        methods: ["GET", "POST"],\n        allowedHeaders: ["Content-Type", "Authorization"]\n    }));\n    ...\n</pre>\n</li>\n<li>\n<p>Logging with Morgan | npm i morgan --save</p>\n<pre>\n...\nvar morgan = require(\'morgan\');\n...\napp.use(morgan(\'common\'));\n</li>\n</ul>\n</pre>\n<ul>\n<li>\n<p>Configuring Node.js clusters in cluster.js | <a href="https://nodejs.org/dist/latest-v4.x/docs/api/cluster.html">Clusters</a></p>\n<pre>\n    var cluster = require("cluster");\n    var os = require("os");\n    \n    const CPUS = os.cpus();\n    \n    if (cluster.isMaster) {\n        for (var i = 0; i < CPUS.length; i++) { \n            cluster.fork() \n        });\n        \n        cluster.on("listening", function(worker) {\n            console.log(`Cluster ${ worker.process.pid } connected`);\n        });\n    \n        cluster.on("disconnect", function(worker) {\n            console.log(`Cluster ${ worker.process.pid } disconnected`);\n        });\n\n        cluster.on("exit", function(worker) {\n            console.log(`Cluster ${ worker.process.pid } is dead`);\n            // Ensuring a new cluster will start if an old one dies\n            cluster.fork();\n        });\n    } else {\n        require("./index.js");\n    }\n</pre>\n<p>Then run: nodemon cluster.js </p>\n</li>\n<li>\n<p>GZIP Compression | npm i compression --save | <a href="http://expressjs.com/en/advanced/best-practice-performance.html#use-gzip-compression">Compression</a></p>\n<pre>\n    ...\n    var compression = require(\'compression\');\n    ...\n    app.use(compression(6)); // number indicates level of compression\n</pre>\n<br/>\n</li>\n<li>\n<p>Protect from some forms of attach with Helmet | npm i helmet --save</p>\n<pre>\n    ...\n    var helmet = require(\'helmet\');\n    ...\n    app.use(helmet());\n</pre>\n</li>\n</ul>\n<p>Credit: <a href="https://medium.com/@Jscrambler/setting-up-5-useful-middlewares-for-an-express-api-640039cc6708">JScrambler Blog</a></p>',frontmatter:{title:"TIL 0026"}}},pathContext:{slug:"/til0026/"}}}});
//# sourceMappingURL=path---til-0026-dcc36ad7ee4e0b2ec348.js.map