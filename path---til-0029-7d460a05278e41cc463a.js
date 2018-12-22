webpackJsonp([0x9a6e709b1cb5],{424:function(e,n){e.exports={data:{markdownRemark:{html:"<ul>\n<li>\n<p>npm i busboy azure-storage --save</p>\n</li>\n<li>\n<p>In your Express Generator app/controllers/home.js: (Note that this is just a basic example without login)</p>\n<pre>\n    ...\n    const Busboy = require('busboy');\n    const blobStorage = require('../services/blobStorage');\n    ...\n    router.post('/upload', function(req, res) {\n\n        var busboy = new Busboy({ headers: req.headers });\n\n        busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {\n            blobStorage.saveToBlob(filename, file, function(err, result){\n            if(err) {\n                res.setEncoding(500, err);\n            } else {\n                res.redirect('/show?name=' + encodeURI(filename));\n            }\n            });\n        });\n        req.pipe(busboy);\n        });\n\n    router.get('/show', function (req, res) {\n        res.render('show', {\n            name: req.query.name,\n            url: blobStorage.getUrl(req.query.name)\n        });\n    });\n</pre>\n</li>\n<li>\n<p>In blobStorage.js | Note, you should not hardcode your details like this, they should be retrieved from Azure directly.</p>\n<pre>\n    process.env['AZURE_STORAGE_ACCOUNT'] = 'your-storage-name';\n    process.env['AZURE_STORAGE_ACCESS_KEY'] = 'your-storage-access-key';\n\n    var azure = require('azure-storage');\n    var blobService = azure.createBlobService();\n    var images = 'images';\n\n    function saveToBlob(name, stream, cb) {\n\n        // cb is callback\n        stream.pipe(blobService.createWriteStreamToBlockBlob(images, name, cb));\n    }\n\n    function getUrl(name) {\n\n        var startDate = new Date();\n        startDate.setMinutes(startDate.getMinutes() - 15);\n\n        var expiryDate = new Date(startDate);\n        expiryDate.setMinutes(startDate.getMinutes() + 30);\n\n        var permissions = azure.BlobUtilities.SharedAccessPermissions.READ;\n\n        var sharedAccessPolicy = {\n            AccessPolicy: {\n            Permissions: azure.BlobUtilities.SharedAccessPermissions.READ,\n            Start: startDate,\n            Expiry: expiryDate\n            },\n        };\n\n        var sasToken = blobService.generateSharedAccessSignature(images, name, sharedAccessPolicy);\n\n        return blobService.getUrl(images, name, sasToken);\n    }\n\n    module.exports = {\n        saveToBlob: saveToBlob,\n        getUrl: getUrl\n    };\n</pre>\n</li>\n<li>\n<p>In your .pug form</p>\n<pre>\n    form(action=\"/upload\", method=\"post\", enctype=\"multipart/form-data\")\n        input(type=\"file\", name=\"image\")\n        button(type=\"submit\", value=\"Upload\") Upload photo\n</pre>\n</li>\n<li>\n<p>In your .pug redirected page</p>\n<pre>\n    p Showing #{name}\n    img(src=url)\n</pre>\n</li>\n</ul>",frontmatter:{title:"Azure Blob Storage."}}},pathContext:{slug:"/til0029/"}}}});
//# sourceMappingURL=path---til-0029-7d460a05278e41cc463a.js.map