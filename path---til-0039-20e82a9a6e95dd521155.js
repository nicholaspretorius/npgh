webpackJsonp([21557652821179],{463:function(n,o){n.exports={data:{markdownRemark:{html:'<h3>TypeScript Basics</h3>\n<pre>\nfunction LogBook() { \n    this.trips = [];\n}\n\nLogBook.prototype.addTrip = function (trip) {\n    this.trips = this.trips.concat([trip]);\n    //immutable way of adding - Angular favours this. \n    // Alternatvie to this.trips.push(trip);\n};\n\nLogBook.prototype.removeTrip = function (trip) { \n    this.trips = this.trips.filter(function (log) { \n        return trip !== log;\n    })\n}\n\nvar myLog = new LogBook();\n\nmyLog.addTrip(43);\nmyLog.addTrip(7);\nmyLog.addTrip(29);\n\nconsole.log("My Log: ", myLog);\nconsole.log(typeof (myLog));\nconsole.log("My Trips: ", myLog.trips);\n\nmyLog.removeTrip(7);\n\nconsole.log("My Trips: ", myLog.trips);\n\n// ES6/2015 class - TS Classes\n\nclass ShoppingList { \n\n    groceries: string[]; // array of string\n\n    constructor() { \n        this.groceries = [];\n    }\n\n    // Public property on ShoppingList class\n    addItem(item) {\n        // Use ES6 spread operator to add item, alternative to concat and push\n        this.groceries = [...this.groceries, item];\n     }\n\n    removeItem(item) {\n        // implicit return using an ES6 arrow function\n        this.groceries = this.groceries.filter((grocery) => item !== grocery);\n        // same as in Trips \n        \n     }\n}\n\nconst myList = new ShoppingList();\n\nmyList.addItem("Apple");\nmyList.addItem("Banana");\n\nconsole.log(myList.groceries);\n\nmyList.removeItem("Apple");\n\nconsole.log(myList.groceries);\n\n</pre>',frontmatter:{title:"TIL 0039"}}},pathContext:{slug:"/til0039/"}}}});
//# sourceMappingURL=path---til-0039-20e82a9a6e95dd521155.js.map