webpackJsonp([0xc5dfafd82f17],{444:function(n,e){n.exports={data:{markdownRemark:{html:"<h3>FizzBuzz and other exercises</h3>\n<ul>\n<li>\n<p>Exercise 2 from Eloquent JavaScript </p>\n<pre>\n//Problem: Print out all numbers from 1 to 100. When divisible by 3 print Fizz, then divisible by 5 print Buzz, when divisible by both 3 and 5 print FizzBuzz\n// Solution: JS - Loop through all the numbers, check modulo 3, 5 and 3 and 5, print appropriate word\n\nfunction fizzBuzz(min, max) {\n    \n    function fizzOrBuzz (number, divisorA, divisorB) {\n        if (divisorB) {\n            return ((number % divisorA === 0) && (number % divisorB === 0))  \n        } else {\n            return number % divisorA === 0\n        }\n    }\n    \n    for (var i = min; i <= max; i++) {\n        if (fizzOrBuzz(i, 3, 5)) {\n            console.log('FizzBuzz (', i , ')');\n        } else if (fizzOrBuzz(i, 3)) {\n            console.log('Fizz (', i, ')');\n        } else if (fizzOrBuzz(i, 5)) {\n            console.log('Buzz (', i , ')');\n        } else {\n            console.log(i);\n        }\n    }\n}\n\nfizzBuzz(1, 100);\n</pre>\n</li>\n<li>\n<p>Exercise 3 from Eloquent JavaScript</p>\n<pre>\n// Problem: Draw out a chessboard of 8*8 using the space and # characters, alternating the start character. \n// Solution: JS - Use a loop to draw out the columns then at the end, alternate a boolean to start with one character or the other. \n\nfunction chessBoard(spread) {\n    var blank = false;\n    var a = ' ', b = '#', row = '';\n    \n    for (var c = 1; c <= spread*spread; c++) {\n        if (c % spread === 0) {\n            row += '\\n'\n        }\n        else if(blank) {\n            row += a;\n            blank = !blank;\n        } else {\n            row += b\n            blank = !blank;\n        }\n    }\n    console.log(row);\n}\n\nchessBoard(8);\n</pre>\n</li>\n<li>\n<p>Exercise 4 from Eloquent JavaScript </p>\n<pre>\n// Problem: Return the minimum number between two numbers\n// Solution: Accept two arguments and determime which is less\n\nfunction min(a, b) {\n    if (typeof(a) === 'number' && typeof(b) === 'number') {\n        var min = a < b;\n        return min ? a : b\n    } else {\n        return NaN;\n    }   \n}\n\nconsole.log(min(3,-9));\n</pre>\n</li>\n<li>\n<p>Exercise 5 from Eloquent JavaScript </p>\n<pre>\n// Problem: Use recursion to determine whether a number is even, if even, return true\n// Solution: Create a function that returns true if number is 0, false if number is 1, else subtract 2 from the number\n\nfunction isEven(number){\n    if(number < 0) {\n        number = number * -1;\n    }\n\n    if (number === 0) {\n        return true;\n    } else if (number === 1) {\n        return false;\n    } else {\n        number -= 2;\n        return isEven(number);\n    }\n}\n\nconsole.log(isEven(-34));\n</pre>\n</li>\n<li>\n<p>Exercise 6 from Eloquent JavaScript </p>\n<pre>\n// Problem: Create a function that counts how many times a provided letter appears in a string\n// Solution: Loop through the string using .charAt to determine whether the letter is a match\nfunction countChars(string, letter){\n    var count = 0;\n    for (var i = 0; i < string.length; i++) {\n        if (string.charAt(i) === letter) {\n            count+=1;\n        }\n    }\n    return count;\n}\n\nconsole.log(countChars('chakkalakka', 'a'));\n</pre>\n</li>\n<li>\n<p>Calculate prime numbers in a range</p>\n<pre>\nfunction getPrimes(min, max) {\n\n    function isPrimeBruteForce(number){\n        for (var i = 2; i < (number - 1); i++) {\n            if (number % i === 0) {\n                return false;\n            }\n        }\n        return true\n    }\n\n    if (min < max && min > 1 && max > 1) {\n        var primes = [];\n        \n        for (var i = min; i < max; i++) {\n            if(isPrimeBruteForce(i)) {\n                primes.push(i);\n            }\n        }     \n        return primes;\n    } else {\n        return -1;\n    }\n}\n\nconsole.log(getPrimes(3, 100));\n</pre>\n</li>\n<li>\n<p>Exercise 7 from Eloquent JavaScript</p>\n<pre>\nfunction range(start, end, increment) {\n    var arr = [];\n    var inc = 1;\n    if (increment) {\n        inc = increment;\n    } \n    for (var i = start; i <= end; i+=inc) {\n        arr.push(i);\n    }\n    return arr;\n}\n\nfunction sum(array) {\n    var sum = 0;\n    for (var i = 0; i < array.length; i++) {\n        sum = sum + array[i];\n    }\n    return sum;\n}\n\nconsole.log(sum(range(1,10, 2)));\n</pre>\n</li>\n</ul>",frontmatter:{title:"TIL 0022"}}},pathContext:{slug:"/til0022/"}}}});
//# sourceMappingURL=path---til-0022-ab73e3f93255a878915c.js.map