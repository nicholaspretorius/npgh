webpackJsonp([52732521669285],{408:function(t,o){t.exports={data:{markdownRemark:{html:"<h3>CSS left:auto, strikethroughs on OneNote and Bootstrap Modal trickery.</h3>\n<ul>\n<li>\n<p>If you need to overwrite an absolutely positioned element to the other side of the container</p>\n<pre>.rtl {\n.className {\n    right:0; \n    left: auto; /* this will overwrite the original left: 0; */\n}\n}</pre>\n</li>\n<li>If you use Microsoft OneNote you can strikethrough text by selecting it and pressing: CTRL + -</li>\n<li>\n<p>Using a Bootstrap 3 modal, you can create a space of clickable content above the modal backdrop by:</p>\n<pre>/* Say we want to push it down 50px */\n.modal-backdrop, .modal {\ntop:50px;\n}\n</li>\n</ul>\n<p>/* If you then wanted to stretch the modal to cover the whole screen */\n.modal-dialog, .modal-content{\nheight:100%;\n}</p>\n<p>.modal-dialog {\nwidth: 100%;\n}       </p>\n<ul>\n<li>\n<p>Another useful Bootstrap modal trick - if you want to make sure the user clicks on a modal button.</p>\n<pre>$('#myModal').show({\nbackdrop: 'static',\nkeyboard: false\n});</pre>\n</li>\n</ul>",frontmatter:{title:"TIL 0009"}}},pathContext:{slug:"/til0009/"}}}});
//# sourceMappingURL=path---til-0009-40172ae3b8593e6182f1.js.map