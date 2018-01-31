webpackJsonp([0xe2d5e65d1e23],{450:function(e,t){e.exports={data:{markdownRemark:{html:'<h3>Jira Sundry</h3>\n<ul>\n<li>Our team has very recently begun using Jira. Our current setup is that we have a Backlog (Kanban style) and a Sprint board.</li>\n<li>This week is our first sprint and will run for one week with Retrospective and Sprint Planning on Fridays. </li>\n<li>\n<p>Our basic flow is this: </p>\n<ul>\n<li>Scoped, groomed and prioritised stories are moved from Backlog to Active Sprint. </li>\n<li>Our sprintboard has 4 columns To Do, In Progress, In Test, Done</li>\n<li>To Do and In Progress are self-explanatory.</li>\n<li>In Test means that once the Definition of Done is reached, the developer will release to the UAT environment so that testing can begin. </li>\n<li>Once the tester is happy, the story is moved to Done. </li>\n<li>Since our project relies on a 3rd party API and frequent support thereof or therearound, we have an Epic for the third party. As such, any items that are waiting for their response/input/feedback are put into that epic. Once resolved/responded, the issues is moved back into play. </li>\n<li>In theory, this means that our Project Lead only needs to keep an eye on this Epic in terms of follow-up with the third party. </li>\n<li>Since the third party uses a separate board called Teamwork, all communication with them is logged there with the link to that thread added to the issue so that the thread can be followed in full there. </li>\n</ul>\n</li>\n<li>When it comes to testing, we are using HP ALM as per company standard, however, since we are a small team, we are looking to experiment with X-Ray, the Jira add-on. </li>\n<li>While most of our prior project communication is tied up in the MS Office rabbit hole of Outlook, Excel, Word, PowerPoint and share drives, I am doing my best to move as much of the development relevant information to Confluence. </li>\n<li>All our project code was moved into Git and BitBucket in October/November last year. </li>\n<li>We will be using Confluence\'s Meeting Notes pages for our meeting memos. </li>\n<li>In terms of the structure of our stories, this is still in early stage, but since we do a lot of config/rollout tasks, we settled on having User Stories for TEST and LIVE config on both the technical and development/server side. Each story then has a Checklist. The first person in the chain assigns the task to themselves using "Assign to me" and moves the story into In Progress. Once complete with their items on the checklist, they assign the story to the next person in the chain. When they are done, they moved the story to In Test and assign the story to the tester. Once the tester is happy, it gets moved to Done. </li>\n<li>We originally tried to use Tasks and sub-tasks for this, but this proved to be one hand too much overhead (creating stories with checlists is far easier and quicker) and our corporate decided workflow means that Tasks cannot be moved to In Test. As such, we stick to checklists inside stories for config. Only items that truly are "tasks" that do not require testing are created as "Tasks". </li>\n<li>Then we have defects which will go where they are found. </li>\n<li>We have a daily stand-up following the routine of "What I did yesterday? What I did today? Impediments?"</li>\n<li>On that note, we have no Business Analyst (BA) or designer on the team, so many of the user stories need to be written by yours truly. I have little to no experience or trainig on this, so Google is my friend. It also means, I tend to create a lot of my own stories and issues, which, I don\'t think is really a good thing, but there you have it! Small teams need to multi-task! </li>\n</ul>',frontmatter:{title:"TIL 0033"}}},pathContext:{slug:"/til0033/"}}}});
//# sourceMappingURL=path---til-0033-ad66a38220719b827648.js.map