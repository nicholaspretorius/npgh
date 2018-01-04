webpackJsonp([0xbba0093866f0],{422:function(e,t){e.exports={data:{markdownRemark:{html:'<h3>Git, Azure and Deploying a AngularJS app from VS Code</h3>\n<ul>\n<li>If you are working behind a corporate proxy, first setup Git for this: git config --global http.proxy <a href="http://username:password@proxy:port">http://username:password@proxy:port</a></li>\n<li>Check it looks right: git config --global --get http.proxy</li>\n<li>You can also unset it: git config --global --unset http.proxy</li>\n<li>In the Azure portal, select your App Service, then select Deployment Options and configure your local Git as a deployment source. Take note of your deployment credentials</li>\n<li>git checkout your-branch</li>\n<li>Add your azure instance as a remote via: git remote add azure <a href="https://your.provided.azure.git">https://your.provided.azure.git</a></li>\n<li>Check that the remote added by running: git remote -v</li>\n<li>\n<p>Since the AngularJS app runs from the dist folder,  you will need to: touch .deployment | code .deployment <br/></p>\n<pre>\n[config]\nfolder = dist\n</pre>\n</li>\n<li>You will also need to remove the dist/ line from your .gitignore</li>\n<li>git add --all </li>\n<li>git commit -m ".deployment for deploying from repo to Azure. Update .gitignore for this purpose. Adding /dist"</li>\n<li>git push azure your-branch</li>\n<li>Note that Azure deploys from the master branch by default, to change this, you can add an Azure App Setting on your App Service called deployment_branch with the name of your-branch. Remember to stop and start your App Service once this has been done. </li>\n<li>Once your push has been successful, check your App Service URL. </li>\n<li>Next steps: Use Deployment Slots to manage moving your Development service through Staging/UAT to Production.</li>\n</ul>',frontmatter:{title:"TIL 0016"}}},pathContext:{slug:"/til0016/"}}}});
//# sourceMappingURL=path---til-0016-6c1228d7bb716972afaf.js.map