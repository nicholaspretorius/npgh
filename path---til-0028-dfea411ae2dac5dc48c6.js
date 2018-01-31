webpackJsonp([0x810cb9cae123],{445:function(e,n){e.exports={data:{markdownRemark:{html:"<h3>More Azure &#x26; Node.js</h3>\n<ul>\n<li>When deploying Node.js to Azure, the default entry file is server.js. </li>\n<li>Make sure to set the port in your app to something like: const port = process.env.port || 8000; so that Azure can use it's preferred port. </li>\n<li>\n<p>2 ways to setup up Node.js on Azure:</p>\n<ol>\n<li>In a Virtual Machine</li>\n<li>In an App Service</li>\n</ol>\n</li>\n</ul>\n<h4>Azure Virtual Machines</h4>\n<ul>\n<li>Virtual Machine: In the Azure Portal, select 'Virtual machines' and follow the prompts: e.g. Ubuntu, SSD + SSH public key for authentication</li>\n<li>In iterm2/terminal: ssh-keygen -t rsa -b 2084</li>\n<li>Remember your passphrase if you set one</li>\n<li>Once setup: ssh username@IP.ADD.RES.S </li>\n<li>I had trouble using a non-standard key, as such, I ended up using the default: rsa_id</li>\n<li>\n<p>Once logged in, run: </p>\n<pre>\nsudo apt-get update\nsudo apt-get install nodejs\nsudo apt-get install npm\n</pre>\n</li>\n<li>\n<p>Then run: nodejs -v to check your version and if all is well.\n*On your local, install the Azure CLI via Homebrew: </p>\n<pre>\nbrew update \nbrew install azure-cli\n</pre>\n</li>\n<li>\n<p>A few commands to get you started: </p>\n<pre>\naz -h \naz vm -h\naz login\naz stop\naz deallocate\naz start\naz account set --subscription your-subcription-name\naz vm list --output-table\naz vm deallocate --name your-vm-name --resource-group your-resource-group\n</pre>\n</li>\n<li>\n<p>You can then setup Local Git as a deployment source to Azure. </p>\n<pre>\ncd your-project\ngit init\ngit add .\ngit commit -m 'First commit'\ngit add remote azure http://the-azure-git-url.git\ngit push azure master\naz webapp browse --name your-app-name --resource-group your-resource-group \n</pre>\n</li>\n<li>\n<p>Once that is done, you can setup deployment slots as: </p>\n<pre>\naz webapp -h\naz webapp deployment slot swap --slot your-slot-name --name your-app-name --resource-group your-resource-group-name\n</pre>\n</li>\n</ul>\n<h4>Azure App Service</h4>\n<ul>\n<li>az group create --location 'location-name' --name your-app-service-name</li>\n<li>az appservice plan create --name your-app-service-name --resource your-resource-name --sku FREE</li>\n<li>az webapp create --name your-app-name --resource-group your-resource-group-name --plan your-plan-name</li>\n<li>az webapp deployment source config-local-git --name your-app-name --resource-group your-resource-group-name</li>\n<li>Then connect your add your Azure git remote, add/commit and push. </li>\n</ul>",frontmatter:{title:"TIL 0028"}}},pathContext:{slug:"/til0028/"}}}});
//# sourceMappingURL=path---til-0028-dfea411ae2dac5dc48c6.js.map