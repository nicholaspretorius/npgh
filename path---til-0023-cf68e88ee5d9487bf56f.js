webpackJsonp([0xf1594480443e],{436:function(e,n){e.exports={data:{markdownRemark:{html:"<h3>Eloquent JavaScript Chapter 3: Functions</h3>\n<ul>\n<li>\n<p>Recursion - Generally, recursion can be up to 10 times slower than looping. However, recursion can be more elegant, as such, the programmer must determine whether efficiency or simplicity is more appropriate. </p>\n<pre>\n\nfunction power(base, exponent) {\n    if (exponent == undefined) {\n        exponent = 2;\n    }\n\n    var result = 1;\n\n    for (var count = 0; count < exponent; count++) {\n        result *= base;\n    }\n    \n    return result;\n}\n\nfunction powerR(base, exponent) {\n    if (exponent == 0)\n        return 1;\n    else\n        return base * power(base, exponent - 1);\n}\n\nconsole.log(\"Recursive: \", powerR(2, 3));\nconsole.log(\"Loop: \", power(2,3));\n</li>\n</ul>\n</pre>\n* Closures - The ability to reference an instance of a local variable in an enclosing function.\n<pre>\nfunction multiplier(factor) {\n    return function(number) {\n            console.log(\"Factor: \", factor, \" Number: \", number);\n            return number * factor;\n        };\n    }\n<pre><code>var twice = multiplier(3);\nconsole.log(twice(5));\n</code></pre>\n</pre>\n* Lexical scope is the variable 'visibility' of variables within a program via combinations of scope. Essentially, local scopes have access to those scope around them. They do not have access to scopes inside of them.  \n* Function declarations can be placed anywhere within the program as they are effectively hoisted to the top of the scope when running. \n<pre>\n    foo('bar');\n    // function declaration\n    function foo(string) {\n        console.log('Foo', string);\n    }\n</pre>\n<ul>\n<li>\n<p>Expression functions need to be declared before they are used. </p>\n<pre>\n// function definition\nvar foo = function(string) {\n    return 'Foo' + string;\n}\nconsole.log(foo('bar'));\n</pre>\n</li>\n<li>In JavaScript you can have optional arguments/parameters. If there are too many, the extras get ignored. If there are too few, the missing params get undefined. </li>\n<li>There are basically two ways functions are introduced:\nReplication - You find there is code repeated in your program and you write a function to remove this repetition.\nPurpose - You have something you need to do, so you write a function to do it. </li>\n</ul>\n<blockquote>'How difficult it is to find a good name for a function is a good indication of how clear a concept it is that you’re trying to wrap.' - Marijn Haverbeke</blockquote>\n<ul>\n<li>There are generally three types of functions:\nPure functions - return values and receive values, they do not access global variables or have side effects. They do not rely on side-effects from elsewhere.\nSide effect functions - do not return a value and typically adjust globals. These can be difficult to reason about.\nCombination functions - these are functions that combine both the approaches</li>\n</ul>",frontmatter:{title:"TIL 0023"}}},pathContext:{slug:"/til0023/"}}}});
//# sourceMappingURL=path---til-0023-cf68e88ee5d9487bf56f.js.map