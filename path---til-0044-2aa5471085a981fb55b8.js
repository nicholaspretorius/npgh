webpackJsonp([0xffdf5b1a94b6],{462:function(e,t){e.exports={data:{markdownRemark:{html:"<p>I spent some time today getting to grips with the pricing structures on Azure in terms of putting together a proof of concept for running a Liferay application in our Azure PoC environments. Liferay is a Java-based CMS running a Postgres database, on an Apache Tomcat server and interestingly, Elasticsearch. I have previously setup a small Java microservice on Azure before and enjoyed the experience, so this has been an interesting exercise. </p>\n<p>At present, the decision we face is how to set the stack up. The options as I see them are: </p>\n<ul>\n<li>Run the application in a VM with a Bitnami Liferay image as well as an Elasticsearch image. I am not sure this will be cost-effective since the team is already under a lot of pressure and running their own stack within the VM might not be the best option. </li>\n<li><em>Manually</em> set the stack up inside a VM, however, this may also be a challenge since the team is not experienced in devops culture and running what gets built. </li>\n<li>Find a way to run the app inside an App Service with a managed instance of Postgres along with blob storage and a CDN. </li>\n</ul>\n<p>I am still investigating the options, but I am excited about the possibilities and options for expanding my Azure knowledge further! </p>",frontmatter:{title:"Liferay on Azure."}}},pathContext:{slug:"/til0044/"}}}});
//# sourceMappingURL=path---til-0044-2aa5471085a981fb55b8.js.map