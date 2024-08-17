const testdata = [
  {
    title: "Java Test",
    description: "Test your knowledge of Java programming with 40 questions covering basic to advanced concepts.",
    category: "Programming",
    image: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/java_logo_icon_168609.png",
    questions: [
      // Basic Concepts
      {
        question: "What is the size of int in Java?",
        options: ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
        correctOption: "4 bytes"
      },
      {
        question: "Which keyword is used to create a subclass in Java?",
        options: ["extends", "implements", "inherits", "subclass"],
        correctOption: "extends"
      },
      {
        question: "What is the default value of a boolean variable?",
        options: ["true", "false", "0", "null"],
        correctOption: "false"
      },
      {
        question: "Which of these is not a Java feature?",
        options: ["Pointer", "Object-Oriented", "Portable", "Dynamic"],
        correctOption: "Pointer"
      },
      {
        question: "Which method can be defined only once in a program?",
        options: ["main method", "finalize method", "static method", "private method"],
        correctOption: "main method"
      },
      {
        question: "What is the return type of the hashCode() method in the Object class?",
        options: ["int", "Object", "void", "long"],
        correctOption: "int"
      },
      {
        question: "Which package contains the Random class?",
        options: ["java.util", "java.lang", "java.io", "java.net"],
        correctOption: "java.util"
      },
      {
        question: "Which of these cannot be used for a variable name in Java?",
        options: ["keyword", "identifier", "letter", "number"],
        correctOption: "keyword"
      },
      {
        question: "Which of the following is not an OOP concept in Java?",
        options: ["Compilation", "Inheritance", "Polymorphism", "Encapsulation"],
        correctOption: "Compilation"
      },
      {
        question: "Which method must be implemented by all threads in Java?",
        options: ["run()", "start()", "stop()", "sleep()"],
        correctOption: "run()"
      },
      {
        question: "Which of the following is a marker interface?",
        options: ["Serializable", "Runnable", "Remote", "Readable"],
        correctOption: "Serializable"
      },
      // Intermediate Concepts
      {
        question: "Which of these is a checked exception?",
        options: ["ClassCastException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
        correctOption: "IOException"
      },
      {
        question: "Which of these can be used to differentiate between overloaded methods?",
        options: ["Return type", "Type of parameters", "Method name", "All of the above"],
        correctOption: "Type of parameters"
      },
      {
        question: "Which of the following is not a type of constructor?",
        options: ["Default constructor", "Parameterized constructor", "Copy constructor", "Friend constructor"],
        correctOption: "Friend constructor"
      },
      {
        question: "What will be the output of the following code snippet?\n`int[] arr = {1, 2, 3};\nSystem.out.println(arr[3]);`",
        options: ["1", "2", "3", "ArrayIndexOutOfBoundsException"],
        correctOption: "ArrayIndexOutOfBoundsException"
      },
      {
        question: "What is the output of 9 % 2?",
        options: ["1", "2", "0", "9"],
        correctOption: "1"
      },
      {
        question: "Which of these is not a method of the Thread class?",
        options: ["start()", "run()", "sleep()", "wait()"],
        correctOption: "wait()"
      },
      {
        question: "What does the `synchronized` keyword do in Java?",
        options: ["Ensures thread safety", "Prevents inheritance", "Improves performance", "Makes methods private"],
        correctOption: "Ensures thread safety"
      },
      {
        question: "Which keyword is used to prevent method overriding in Java?",
        options: ["final", "static", "abstract", "protected"],
        correctOption: "final"
      },
      {
        question: "Which access modifier makes a class member visible only within its own package?",
        options: ["public", "private", "protected", "default"],
        correctOption: "default"
      },
      {
        question: "What is the purpose of the `transient` keyword in Java?",
        options: ["To make a variable non-serializable", "To make a method static", "To make a class final", "To make a variable static"],
        correctOption: "To make a variable non-serializable"
      },
      // Advanced Concepts
      {
        question: "What is the use of the final keyword in Java?",
        options: ["To define a constant", "To prevent inheritance", "To prevent method overriding", "All of the above"],
        correctOption: "All of the above"
      },
      {
        question: "Which method in Java is used to clone an object?",
        options: ["copy()", "duplicate()", "clone()", "replicate()"],
        correctOption: "clone()"
      },
      {
        question: "What is the output of Math.floor(3.6)?",
        options: ["3.0", "4.0", "3", "4"],
        correctOption: "3.0"
      },
      {
        question: "What is the default thread priority in Java?",
        options: ["0", "1", "5", "10"],
        correctOption: "5"
      },
      {
        question: "What is a lambda expression in Java?",
        options: ["A way to create anonymous classes", "A method for string concatenation", "A new type of variable", "A way to handle exceptions"],
        correctOption: "A way to create anonymous classes"
      },
      {
        question: "What does the `volatile` keyword do?",
        options: ["Makes a variable thread-safe", "Prevents inheritance", "Increases performance", "Makes a variable static"],
        correctOption: "Makes a variable thread-safe"
      },
      {
        question: "What is the purpose of the `try-with-resources` statement?",
        options: ["To automatically close resources", "To handle exceptions", "To optimize performance", "To create threads"],
        correctOption: "To automatically close resources"
      },
      {
        question: "What is the output of the following code snippet?\n`System.out.println(1 + 2 + \"3\");`",
        options: ["33", "6", "15", "Error"],
        correctOption: "33"
      },
      {
        question: "What is a functional interface in Java?",
        options: ["An interface with exactly one abstract method", "An interface with multiple abstract methods", "An interface that extends another interface", "An interface with default methods only"],
        correctOption: "An interface with exactly one abstract method"
      },
      {
        question: "Which of these is not a collection class in Java?",
        options: ["ArrayList", "HashMap", "TreeSet", "LinkedList", "String"],
        correctOption: "String"
      },
      // Java 8 Features
      {
        question: "Which new feature introduced in Java 8 allows the creation of anonymous methods?",
        options: ["Lambda expressions", "Method references", "Streams", "Optional"],
        correctOption: "Lambda expressions"
      },
      {
        question: "What is the purpose of the `Stream` API introduced in Java 8?",
        options: ["To process sequences of elements", "To create anonymous classes", "To handle exceptions", "To create multi-threaded applications"],
        correctOption: "To process sequences of elements"
      },
      {
        question: "Which interface in Java 8 allows you to create a method reference?",
        options: ["Function", "Predicate", "Supplier", "Consumer"],
        correctOption: "Function"
      },
      {
        question: "What is the purpose of the `Optional` class in Java 8?",
        options: ["To handle null values", "To create streams", "To create lambda expressions", "To manage exceptions"],
        correctOption: "To handle null values"
      },
      {
        question: "Which of the following is a valid lambda expression syntax?",
        options: ["(a, b) -> a + b", "(a, b) => a + b", "lambda (a, b) { return a + b; }", "a, b -> a + b"],
        correctOption: "(a, b) -> a + b"
      },
      {
        question: "What is a method reference in Java 8?",
        options: ["A way to refer to methods without invoking them", "A way to create lambda expressions", "A new type of class", "A method that returns another method"],
        correctOption: "A way to refer to methods without invoking them"
      },
      {
        question: "What does the `@FunctionalInterface` annotation do?",
        options: ["Indicates that the interface has only one abstract method", "Indicates that the interface is deprecated", "Indicates that the interface is serializable", "Indicates that the interface extends another interface"],
        correctOption: "Indicates that the interface has only one abstract method"
      },
      {
        question: "Which class in Java 8 represents a mutable sequence of characters?",
        options: ["String", "StringBuilder", "StringBuffer", "CharSequence"],
        correctOption: "StringBuilder"
      },
      {
        question: "Which of the following is used to iterate over elements of a collection in Java 8?",
        options: ["Iterator", "ListIterator", "forEach", "Enumeration"],
        correctOption: "forEach"
      },
      {
        question: "What is the purpose of `default` methods in interfaces introduced in Java 8?",
        options: ["To provide method implementations in interfaces", "To make methods private", "To define abstract methods", "To prevent method overriding"],
        correctOption: "To provide method implementations in interfaces"
      },
      {
        question: "What is the default behavior of `Stream` operations in Java 8?",
        options: ["Eager", "Lazy", "Synchronous", "Immediate"],
        correctOption: "Lazy"
      }
    ]
  },
  {
    title: " Python  Test",
    description: "Test your knowledge of Python programming with 40 questions covering basic to advanced concepts.",
    category: "Programming",
    image: "https://www.achieversit.com/management/uploads/course_image/python-img22.jpg",
    questions: [
      // Basic Concepts
      {
        question: "What is the correct file extension for Python files?",
        options: [".py", ".python", ".p", ".pyth"],
        correctOption: ".py"
      },
      {
        question: "Which of the following is a valid variable name in Python?",
        options: ["1variable", "variable_name", "variable-name", "variable name"],
        correctOption: "variable_name"
      },
      {
        question: "What will be the output of the following code snippet?\n`print(type(3.14))`",
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'list'>"],
        correctOption: "<class 'float'>"
      },
      {
        question: "What is the purpose of the `pass` statement in Python?",
        options: ["To define a placeholder for future code", "To exit from a loop", "To raise an exception", "To define a function"],
        correctOption: "To define a placeholder for future code"
      },
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        correctOption: "def"
      },
      {
        question: "What is the result of `2 ** 3` in Python?",
        options: ["6", "8", "9", "2"],
        correctOption: "8"
      },
      {
        question: "How do you insert comments in Python code?",
        options: ["// Comment", "# Comment", "/* Comment */", "<!-- Comment -->"],
        correctOption: "# Comment"
      },
      {
        question: "Which of the following is a mutable data type in Python?",
        options: ["tuple", "list", "str", "int"],
        correctOption: "list"
      },
      {
        question: "How do you concatenate two strings in Python?",
        options: ["string1 + string2", "string1.concat(string2)", "string1.add(string2)", "string1.append(string2)"],
        correctOption: "string1 + string2"
      },
      {
        question: "What does the `len()` function do?",
        options: ["Returns the length of a list", "Returns the type of an object", "Converts a string to a list", "Removes duplicates from a list"],
        correctOption: "Returns the length of a list"
      },
      {
        question: "Which function is used to read user input in Python?",
        options: ["input()", "read()", "scan()", "get()"],
        correctOption: "input()"
      },
      {
        question: "Which of these statements is used to handle exceptions in Python?",
        options: ["try/except", "catch/throw", "handle/error", "check/fix"],
        correctOption: "try/except"
      },
      // Intermediate Concepts
      {
        question: "What will be the output of the following code snippet?\n`x = [1, 2, 3]\ny = x.copy()\ny.append(4)\nprint(x)`",
        options: ["[1, 2, 3, 4]", "[1, 2, 3]", "[1, 2, 3, 4]", "[4, 1, 2, 3]"],
        correctOption: "[1, 2, 3]"
      },
      {
        question: "What is the difference between `==` and `is` operators in Python?",
        options: ["`==` checks value equality, `is` checks object identity", "`==` checks object identity, `is` checks value equality", "`==` checks type, `is` checks value", "`==` and `is` are the same"],
        correctOption: "`==` checks value equality, `is` checks object identity"
      },
      {
        question: "What is the output of `range(3)` in Python?",
        options: ["0 1 2", "0 1 2 3", "[0, 1, 2]", "range(0, 3)"],
        correctOption: "range(0, 3)"
      },
      {
        question: "Which module is used to work with regular expressions in Python?",
        options: ["re", "regex", "regexp", "re.match"],
        correctOption: "re"
      },
      {
        question: "What is the purpose of the `__init__` method in a Python class?",
        options: ["To initialize object attributes", "To finalize an object", "To create a new class", "To delete an object"],
        correctOption: "To initialize object attributes"
      },
      {
        question: "How can you make a Python function return multiple values?",
        options: ["By using a tuple", "By using a list", "By using a dictionary", "By using multiple return statements"],
        correctOption: "By using a tuple"
      },
      {
        question: "What will be the output of the following code snippet?\n`print('a' in 'apple')`",
        options: ["True", "False", "Error", "None"],
        correctOption: "True"
      },
      {
        question: "Which of these is not a valid dictionary method in Python?",
        options: ["get()", "items()", "keys()", "append()"],
        correctOption: "append()"
      },
      {
        question: "How do you open a file for writing in Python?",
        options: ["open('file.txt', 'w')", "open('file.txt', 'r')", "file.open('file.txt', 'write')", "file.open('file.txt', 'w')"],
        correctOption: "open('file.txt', 'w')"
      },
      {
        question: "What does the `yield` keyword do in Python?",
        options: ["Pauses a function and returns a generator", "Returns a value from a function", "Defines a global variable", "Creates a new class"],
        correctOption: "Pauses a function and returns a generator"
      },
      {
        question: "Which of the following is used to sort a list in Python?",
        options: ["list.sort()", "sorted(list)", "list.order()", "sort(list)"],
        correctOption: "list.sort()"
      },
      // Advanced Concepts
      {
        question: "Which of these is used for data manipulation and analysis in Python?",
        options: ["pandas", "numpy", "matplotlib", "scipy"],
        correctOption: "pandas"
      },
      {
        question: "What is the purpose of the `@staticmethod` decorator?",
        options: ["To define a static method that doesn't require a class instance", "To define a method that requires a class instance", "To define a class method", "To define an instance method"],
        correctOption: "To define a static method that doesn't require a class instance"
      },
      {
        question: "What is the output of the following code snippet?\n`print({1: 'a', 2: 'b'}[1])`",
        options: ["'a'", "'b'", "1", "2"],
        correctOption: "'a'"
      },
      {
        question: "What is a generator in Python?",
        options: ["A function that returns an iterator", "A method that creates a class", "A type of list", "A way to create a file"],
        correctOption: "A function that returns an iterator"
      },
      {
        question: "Which function is used to measure the time a piece of code takes to execute?",
        options: ["timeit()", "timing()", "measure()", "stopwatch()"],
        correctOption: "timeit()"
      },
      {
        question: "What will be the output of the following code snippet?\n`print(3 // 2)`",
        options: ["1", "1.5", "2", "0"],
        correctOption: "1"
      },
      {
        question: "Which Python library is commonly used for creating static, animated, and interactive visualizations?",
        options: ["matplotlib", "seaborn", "plotly", "pandas"],
        correctOption: "matplotlib"
      },
      {
        question: "What is the purpose of the `__str__` method in a Python class?",
        options: ["To return a human-readable string representation of an object", "To initialize the object", "To create a class method", "To convert an object to a string"],
        correctOption: "To return a human-readable string representation of an object"
      },
      {
        question: "What is the output of the following code snippet?\n`print([x for x in range(3)])`",
        options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "range(3)"],
        correctOption: "[0, 1, 2]"
      },
      {
        question: "Which of these is used for numerical computing in Python?",
        options: ["numpy", "scikit-learn", "scipy", "pandas"],
        correctOption: "numpy"
      },
      {
        question: "What will be the output of `print(True + True)`?",
        options: ["2", "TrueTrue", "False", "1"],
        correctOption: "2"
      },
      {
        question: "Which of the following allows for efficient handling of large amounts of data in Python?",
        options: ["pandas", "sqlite3", "os", "json"],
        correctOption: "pandas"
      },
      {
        question: "What does `self` represent in a Python class method?",
        options: ["The instance of the class", "The class itself", "The parent class", "A method argument"],
        correctOption: "The instance of the class"
      },
      {
        question: "How can you merge two dictionaries in Python?",
        options: ["dict1.update(dict2)", "dict1.merge(dict2)", "dict1 + dict2", "dict1.join(dict2)"],
        correctOption: "dict1.update(dict2)"
      },
      {
        question: "Which method can be used to get all the keys of a dictionary?",
        options: ["dict.keys()", "dict.all()", "dict.getKeys()", "dict.key()"],
        correctOption: "dict.keys()"
      },
      {
        question: "What does the `__getitem__` method do in a Python class?",
        options: ["Allows access to an item using square brackets", "Allows setting an item", "Allows deletion of an item", "Allows printing of an item"],
        correctOption: "Allows access to an item using square brackets"
      },
      {
        question: "Which of the following is not a built-in Python data type?",
        options: ["set", "list", "queue", "dict"],
        correctOption: "queue"
      },
      {
        question: "What is the purpose of the `__repr__` method in a Python class?",
        options: ["To provide a detailed string representation for debugging", "To provide a human-readable string representation", "To initialize object attributes", "To define a class method"],
        correctOption: "To provide a detailed string representation for debugging"
      },
      {
        question: "Which library would you use for web scraping in Python?",
        options: ["BeautifulSoup", "requests", "pandas", "matplotlib"],
        correctOption: "BeautifulSoup"
      },
      {
        question: "How can you check if a file exists in Python?",
        options: ["os.path.exists(file_path)", "file.exists(file_path)", "path.exists(file_path)", "check.file(file_path)"],
        correctOption: "os.path.exists(file_path)"
      },
      {
        question: "What does the `__del__` method do in a Python class?",
        options: ["Defines cleanup actions when an object is deleted", "Defines the constructor of the class", "Defines a method for setting attributes", "Defines a method for getting attributes"],
        correctOption: "Defines cleanup actions when an object is deleted"
      },
      {
        question: "Which of the following allows the creation of a coroutine in Python?",
        options: ["async def", "coroutine def", "def async", "await def"],
        correctOption: "async def"
      },
      {
        question: "What is the result of `abs(-10)` in Python?",
        options: ["10", "-10", "0", "None"],
        correctOption: "10"
      },
      {
        question: "How do you create a virtual environment in Python?",
        options: ["python -m venv env_name", "python create venv env_name", "python make venv env_name", "python venv env_name"],
        correctOption: "python -m venv env_name"
      },
      {
        question: "Which of these methods can be used to convert a string to a number in Python?",
        options: ["int()", "float()", "eval()", "all of the above"],
        correctOption: "all of the above"
      },
      {
        question: "How do you add a new element to the end of a list in Python?",
        options: ["list.append(element)", "list.add(element)", "list.insert(element)", "list.extend(element)"],
        correctOption: "list.append(element)"
      },
      {
        question: "Which of these is used for multiprocessing in Python?",
        options: ["multiprocessing", "threading", "asyncio", "concurrent"],
        correctOption: "multiprocessing"
      },
      {
        question: "What will be the output of the following code snippet?\n`print('hello'.capitalize())`",
        options: ["'Hello'", "'hello'", "'HELLO'", "'Hello'"],
        correctOption: "'Hello'"
      },
      {
        question: "Which method would you use to remove an item from a list by its value?",
        options: ["list.remove(value)", "list.pop(value)", "list.del(value)", "list.delete(value)"],
        correctOption: "list.remove(value)"
      },
      {
        question: "What is the purpose of the `with` statement in Python?",
        options: ["To simplify resource management", "To define a class method", "To create a new object", "To handle exceptions"],
        correctOption: "To simplify resource management"
      },
      {
        question: "What is a lambda function in Python?",
        options: ["An anonymous function", "A function with a name", "A method of a class", "A built-in function"],
        correctOption: "An anonymous function"
      },
      {
        question: "Which of these is used for asynchronous programming in Python?",
        options: ["asyncio", "multiprocessing", "threading", "concurrent.futures"],
        correctOption: "asyncio"
      }
    ]
  },
  {
    title: " JavaScript  Test",
    description: "Test your knowledge of JavaScript programming with 40 questions covering basic to advanced concepts.",
    category: "Programming",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1n1I_zvcYuDFcFHpNhe6LtzOkn-W5jBIY5FEZw_wghLP0yDSFYMa5k4cW_LQtWlEANI&usqp=CAU",
    questions: [
      // Basic Concepts
      {
        question: "Which of the following is the correct syntax to print a message in JavaScript?",
        options: ["print('Hello World')", "console.log('Hello World')", "console.print('Hello World')", "log.console('Hello World')"],
        correctOption: "console.log('Hello World')"
      },
      {
        question: "What will be the output of `typeof 'hello'` in JavaScript?",
        options: ["'string'", "'text'", "'undefined'", "'object'"],
        correctOption: "'string'"
      },
      {
        question: "Which of these is a valid way to declare a variable in JavaScript?",
        options: ["var myVar", "let myVar", "const myVar", "All of the above"],
        correctOption: "All of the above"
      },
      {
        question: "What will `console.log(0.1 + 0.2 == 0.3)` output?",
        options: ["true", "false", "undefined", "NaN"],
        correctOption: "false"
      },
      {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction() {}", "function: myFunction() {}", "create function myFunction() {}", "def myFunction() {}"],
        correctOption: "function myFunction() {}"
      },
      {
        question: "What will be the output of `console.log([] == [])`?",
        options: ["true", "false", "undefined", "Error"],
        correctOption: "false"
      },
      {
        question: "Which operator is used for equality comparison in JavaScript?",
        options: ["==", "=", "===","!"],
        correctOption: "=="
      },
      {
        question: "What is the result of `null == undefined`?",
        options: ["true", "false", "null", "undefined"],
        correctOption: "true"
      },
      {
        question: "How can you check if a variable is an array in JavaScript?",
        options: ["Array.isArray(variable)", "variable.isArray()", "variable instanceof Array", "Both Array.isArray(variable) and variable instanceof Array"],
        correctOption: "Both Array.isArray(variable) and variable instanceof Array"
      },
      {
        question: "What does the `push()` method do in JavaScript?",
        options: ["Adds one or more elements to the end of an array", "Removes the last element of an array", "Adds one or more elements to the beginning of an array", "Removes the first element of an array"],
        correctOption: "Adds one or more elements to the end of an array"
      },
      {
        question: "How do you declare a constant in JavaScript?",
        options: ["const myConst", "constant myConst", "var myConst", "let myConst"],
        correctOption: "const myConst"
      },
      {
        question: "What will `console.log(2 + '2')` output?",
        options: ["4", "22", "NaN", "undefined"],
        correctOption: "22"
      },
      {
        question: "Which method is used to convert a string to a number in JavaScript?",
        options: ["parseInt()", "Number()", "parseFloat()", "All of the above"],
        correctOption: "All of the above"
      },
      // Intermediate Concepts
      {
        question: "What will `console.log(1 == '1')` output?",
        options: ["true", "false", "undefined", "NaN"],
        correctOption: "true"
      },
      {
        question: "What is the output of `console.log([1] == [1])`?",
        options: ["true", "false", "undefined", "Error"],
        correctOption: "false"
      },
      {
        question: "Which event is fired when a user clicks on a button?",
        options: ["click", "submit", "change", "mouseover"],
        correctOption: "click"
      },
      {
        question: "How can you add a property to an object in JavaScript?",
        options: ["object.property = value", "object.addProperty('property', value)", "object.set('property', value)", "object.appendProperty('property', value)"],
        correctOption: "object.property = value"
      },
      {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        options: ["Refers to the current object", "Refers to the previous object", "Refers to the global object", "Refers to the function itself"],
        correctOption: "Refers to the current object"
      },
      {
        question: "What does the `splice()` method do?",
        options: ["Adds/removes items from an array", "Returns a shallow copy of a portion of an array", "Sorts the elements of an array", "Filters the elements of an array"],
        correctOption: "Adds/removes items from an array"
      },
      {
        question: "Which of these methods can be used to remove the last item from an array?",
        options: ["pop()", "shift()", "slice()", "delete()"],
        correctOption: "pop()"
      },
      {
        question: "How do you create an object in JavaScript?",
        options: ["let obj = {}", "let obj = new Object()", "Both of the above", "None of the above"],
        correctOption: "Both of the above"
      },
      {
        question: "What is the output of `console.log(5 + 10 + '15')`?",
        options: ["2015", "2515", "1515", "Error"],
        correctOption: "2515"
      },
      {
        question: "How can you remove a property from an object in JavaScript?",
        options: ["delete object.property", "object.remove(property)", "object.pop(property)", "object.clear(property)"],
        correctOption: "delete object.property"
      },
      {
        question: "What will `console.log(typeof NaN)` output?",
        options: ["'number'", "'NaN'", "'undefined'", "'object'"],
        correctOption: "'number'"
      },
      {
        question: "What is a closure in JavaScript?",
        options: ["A function that retains access to its lexical scope", "A function that is called by another function", "A method of an object", "A built-in function"],
        correctOption: "A function that retains access to its lexical scope"
      },
      {
        question: "Which keyword is used to define a class in JavaScript?",
        options: ["class", "define", "function", "object"],
        correctOption: "class"
      },
      // Advanced Concepts
      {
        question: "What is the purpose of the `async` keyword?",
        options: ["To define a function that returns a Promise", "To define a function that runs synchronously", "To create a new object", "To handle errors"],
        correctOption: "To define a function that returns a Promise"
      },
      {
        question: "How do you handle asynchronous operations in JavaScript?",
        options: ["Promises and async/await", "Callbacks only", "Synchronous methods only", "Both Promises and Callbacks"],
        correctOption: "Promises and async/await"
      },
      {
        question: "What will be the output of `console.log(!!'false')`?",
        options: ["true", "false", "undefined", "Error"],
        correctOption: "true"
      },
      {
        question: "Which method can be used to execute a function after a delay?",
        options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
        correctOption: "setTimeout()"
      },
      {
        question: "What will `console.log([].slice.call(arguments))` do in a function?",
        options: ["Convert the `arguments` object to an array", "Call the `slice` method on `arguments`", "Log the `arguments` object directly", "Create a new array with `arguments`"],
        correctOption: "Convert the `arguments` object to an array"
      },
      {
        question: "What is the output of `console.log([] == ![])`?",
        options: ["true", "false", "undefined", "NaN"],
        correctOption: "true"
      },
      {
        question: "What is event delegation?",
        options: ["Handling events at a parent level", "Attaching events to each individual element", "Removing events from elements", "Binding events using jQuery"],
        correctOption: "Handling events at a parent level"
      },
      {
        question: "Which of the following is used to create a promise in JavaScript?",
        options: ["new Promise()", "Promise.create()", "Promise.resolve()", "Promise.build()"],
        correctOption: "new Promise()"
      },
      {
        question: "How do you make a function execute after a specified delay?",
        options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
        correctOption: "setTimeout()"
      },
      {
        question: "What does `JSON.stringify()` do?",
        options: ["Converts a JavaScript object to a JSON string", "Parses a JSON string into a JavaScript object", "Formats a JavaScript object", "Converts a string to JSON"],
        correctOption: "Converts a JavaScript object to a JSON string"
      },
      {
        question: "How can you prevent an event's default action?",
        options: ["event.preventDefault()", "event.stopPropagation()", "event.cancel()", "event.disable()"],
        correctOption: "event.preventDefault()"
      },
      {
        question: "What is the result of `console.log(1 + '1' - 1)`?",
        options: ["10", "1", "11", "NaN"],
        correctOption: "10"
      },
      {
        question: "How can you get the current date and time in JavaScript?",
        options: ["new Date()", "Date.now()", "currentDateTime()", "new DateTime()"],
        correctOption: "new Date()"
      },
      {
        question: "What is the purpose of the `bind()` method?",
        options: ["To create a new function with a specific `this` context", "To call a function immediately", "To delay the execution of a function", "To create a new object"],
        correctOption: "To create a new function with a specific `this` context"
      },
      {
        question: "How can you merge two arrays in JavaScript?",
        options: ["array1.concat(array2)", "array1.merge(array2)", "array1.add(array2)", "array1.join(array2)"],
        correctOption: "array1.concat(array2)"
      },
      {
        question: "Which of the following methods is used to remove duplicate elements from an array?",
        options: ["Set", "Array.prototype.filter()", "Array.prototype.reduce()", "Array.prototype.map()"],
        correctOption: "Set"
      },
      {
        question: "What is the purpose of the `reduce()` method?",
        options: ["To accumulate values into a single result", "To filter elements based on a condition", "To create a new array from an existing array", "To sort elements of an array"],
        correctOption: "To accumulate values into a single result"
      },
      {
        question: "What will `console.log(5 == '5')` output?",
        options: ["true", "false", "undefined", "NaN"],
        correctOption: "true"
      },
      {
        question: "What is the purpose of the `call()` method?",
        options: ["To invoke a function with a specific `this` context", "To create a new function", "To delay function execution", "To remove a function"],
        correctOption: "To invoke a function with a specific `this` context"
      },
      {
        question: "How can you handle errors in asynchronous code?",
        options: ["Using `try/catch` with async/await", "Using `.catch()` with promises", "Using both `try/catch` and `.catch()`", "Errors cannot be handled in asynchronous code"],
        correctOption: "Using both `try/catch` and `.catch()`"
      },
      {
        question: "What does the `setInterval()` method do?",
        options: ["Executes a function repeatedly after a specified interval", "Executes a function only once after a specified interval", "Sets a delay for a function execution", "Stops a previously set interval"],
        correctOption: "Executes a function repeatedly after a specified interval"
      },
      {
        question: "How can you get the value of a query parameter in JavaScript?",
        options: ["new URLSearchParams(window.location.search).get('parameter')", "window.location.search.get('parameter')", "window.queryParams.get('parameter')", "URL.getParameter('parameter')"],
        correctOption: "new URLSearchParams(window.location.search).get('parameter')"
      },
      {
        question: "What is a JavaScript promise?",
        options: ["An object representing the eventual completion or failure of an asynchronous operation", "A function that returns a value", "A method to execute synchronous code", "A way to handle events"],
        correctOption: "An object representing the eventual completion or failure of an asynchronous operation"
      },
      {
        question: "What is the result of `console.log(1 + '1' - 1)`?",
        options: ["10", "1", "11", "NaN"],
        correctOption: "10"
      },
      {
        question: "How do you define a class method in JavaScript?",
        options: ["method() {}", "this.method() {}", "static method() {}", "class.method() {}"],
        correctOption: "method() {}"
      }
    ]
  }
  ,
  {
    title: " React  Test",
    description: "Test your knowledge of React with 40 questions covering basic to advanced concepts.",
    category: "Programming",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQm9wNFRBoQXgVwVbMPAaGk95Q9lqXvZzvfw&s",
    questions: [
      // Basic Concepts
      {
        question: "What is React?",
        options: ["A JavaScript library for building user interfaces", "A framework for backend development", "A CSS preprocessor", "A database"],
        correctOption: "A JavaScript library for building user interfaces"
      },
      {
        question: "Which method is used to create a React component?",
        options: ["class ComponentName extends React.Component", "React.createComponent()", "createClass(ComponentName)", "function ComponentName() {}"],
        correctOption: "class ComponentName extends React.Component"
      },
      {
        question: "What is JSX?",
        options: ["A syntax extension for JavaScript that looks similar to XML", "A CSS styling language", "A JavaScript function", "A type of React component"],
        correctOption: "A syntax extension for JavaScript that looks similar to XML"
      },
      {
        question: "How do you pass data to a child component in React?",
        options: ["Through props", "Through state", "Through context", "Through a global variable"],
        correctOption: "Through props"
      },
      {
        question: "What is the purpose of the `render()` method in a React component?",
        options: ["To return the component’s UI", "To initialize the component", "To handle events", "To update the component’s state"],
        correctOption: "To return the component’s UI"
      },
      {
        question: "How do you create a functional component in React?",
        options: ["function ComponentName() { return <div />; }", "class ComponentName extends React.Component { render() { return <div />; } }", "React.createComponent(ComponentName)", "const ComponentName = () => { return <div />; }"],
        correctOption: "function ComponentName() { return <div />; }"
      },
      {
        question: "What is the difference between state and props in React?",
        options: ["State is managed within the component, while props are passed from parent to child", "Props are managed within the component, while state is passed from parent to child", "State and props are the same", "State is used for styling, while props are used for data"],
        correctOption: "State is managed within the component, while props are passed from parent to child"
      },
      {
        question: "What is the purpose of `useState` hook in React?",
        options: ["To add state to functional components", "To perform side effects in functional components", "To create context in functional components", "To handle event binding in functional components"],
        correctOption: "To add state to functional components"
      },
      {
        question: "How do you handle events in React?",
        options: ["By attaching event handlers to elements using JSX", "By using vanilla JavaScript event listeners", "By binding methods in the constructor", "All of the above"],
        correctOption: "All of the above"
      },
      {
        question: "What is the purpose of the `useEffect` hook?",
        options: ["To perform side effects in functional components", "To add state to functional components", "To manage form inputs", "To handle component lifecycle events"],
        correctOption: "To perform side effects in functional components"
      },
      {
        question: "What is the virtual DOM in React?",
        options: ["A lightweight copy of the actual DOM used to optimize updates", "A database for storing component data", "A method for direct DOM manipulation", "An API for making HTTP requests"],
        correctOption: "A lightweight copy of the actual DOM used to optimize updates"
      },
      {
        question: "How do you conditionally render a component in React?",
        options: ["Using JavaScript conditional statements within JSX", "Using inline styles", "By modifying the state", "Using props"],
        correctOption: "Using JavaScript conditional statements within JSX"
      },
      {
        question: "What is a React hook?",
        options: ["A function that lets you use state and other React features in functional components", "A class method used to manage state", "A method for updating props", "A tool for routing"],
        correctOption: "A function that lets you use state and other React features in functional components"
      },
      // Intermediate Concepts
      {
        question: "What is the purpose of `useContext` hook?",
        options: ["To access context values in functional components", "To handle state updates", "To perform side effects", "To manage component lifecycle"],
        correctOption: "To access context values in functional components"
      },
      {
        question: "How do you handle form submissions in React?",
        options: ["By using controlled components and event handlers", "By using uncontrolled components", "By directly manipulating the DOM", "By using the `form` element’s `submit` method"],
        correctOption: "By using controlled components and event handlers"
      },
      {
        question: "What is the purpose of `useReducer` hook?",
        options: ["To manage complex state logic in functional components", "To access context values", "To perform side effects", "To handle component lifecycle events"],
        correctOption: "To manage complex state logic in functional components"
      },
      {
        question: "How do you update the state in a functional component?",
        options: ["Using the `setState` function returned by `useState`", "Directly modifying the state object", "Using `this.setState`", "By calling a lifecycle method"],
        correctOption: "Using the `setState` function returned by `useState`"
      },
      {
        question: "What does `React.memo` do?",
        options: ["It memoizes the result of a component’s render to prevent unnecessary re-renders", "It caches API responses", "It handles state management", "It manages routing"],
        correctOption: "It memoizes the result of a component’s render to prevent unnecessary re-renders"
      },
      {
        question: "What is a higher-order component (HOC) in React?",
        options: ["A function that takes a component and returns a new component with enhanced functionality", "A component that renders another component", "A component that manages state", "A component used for routing"],
        correctOption: "A function that takes a component and returns a new component with enhanced functionality"
      },
      {
        question: "How do you optimize performance in a React application?",
        options: ["By using `React.memo`, code splitting, and lazy loading", "By directly manipulating the DOM", "By avoiding state management", "By using only class components"],
        correctOption: "By using `React.memo`, code splitting, and lazy loading"
      },
      {
        question: "What is the purpose of the `useCallback` hook?",
        options: ["To memoize callback functions and prevent unnecessary re-renders", "To handle side effects", "To manage component state", "To access context values"],
        correctOption: "To memoize callback functions and prevent unnecessary re-renders"
      },
      {
        question: "What is the purpose of `useRef` hook?",
        options: ["To persist values across renders and access DOM elements directly", "To handle side effects", "To manage component state", "To access context values"],
        correctOption: "To persist values across renders and access DOM elements directly"
      },
      {
        question: "How do you create a custom hook in React?",
        options: ["By defining a function that uses other hooks and returns values", "By extending `React.Component`", "By using `React.createHook()`", "By modifying the state directly"],
        correctOption: "By defining a function that uses other hooks and returns values"
      },
      {
        question: "What is the purpose of `useImperativeHandle` hook?",
        options: ["To customize the instance value that is exposed when using `ref`", "To handle side effects", "To manage component state", "To memoize values"],
        correctOption: "To customize the instance value that is exposed when using `ref`"
      },
      {
        question: "What does `React.createContext` do?",
        options: ["It creates a Context object for managing state across components", "It creates a new React component", "It creates a new hook", "It manages routing"],
        correctOption: "It creates a Context object for managing state across components"
      },
      {
        question: "How do you handle errors in React components?",
        options: ["Using error boundaries", "Using try/catch blocks", "By modifying the state", "By using the `catch` method"],
        correctOption: "Using error boundaries"
      },
      {
        question: "What is the purpose of `React.StrictMode`?",
        options: ["To highlight potential problems in an application during development", "To improve performance", "To manage state", "To handle routing"],
        correctOption: "To highlight potential problems in an application during development"
      },
      {
        question: "How do you handle routing in a React application?",
        options: ["Using React Router", "Using the browser's history API directly", "By using `window.location`", "By managing state"],
        correctOption: "Using React Router"
      },
      {
        question: "What is `React.lazy` used for?",
        options: ["To dynamically import components and enable code splitting", "To handle side effects", "To manage state", "To create context"],
        correctOption: "To dynamically import components and enable code splitting"
      },
      {
        question: "What does `ReactDOM.render` do?",
        options: ["It renders a React element into the DOM", "It creates a new React component", "It handles routing", "It manages state"],
        correctOption: "It renders a React element into the DOM"
      },
      {
        question: "How do you provide context to components in React?",
        options: ["Using a Provider component", "By passing props", "By modifying the global state", "By using hooks"],
        correctOption: "Using a Provider component"
      },
      {
        question: "What is a controlled component?",
        options: ["A component whose form data is handled by the component's state", "A component with uncontrolled state", "A component that manages its own lifecycle", "A component that uses hooks"],
        correctOption: "A component whose form data is handled by the component's state"
      },
      // Advanced Concepts
      {
        question: "How does React handle re-renders?",
        options: ["By using a virtual DOM and diffing algorithm", "By re-rendering the entire DOM", "By directly manipulating the DOM", "By using a global state manager"],
        correctOption: "By using a virtual DOM and diffing algorithm"
      },
      {
        question: "What is `ReactDOM.hydrate` used for?",
        options: ["To hydrate server-rendered HTML with React components", "To render React components into the DOM", "To manage component state", "To handle routing"],
        correctOption: "To hydrate server-rendered HTML with React components"
      },
      {
        question: "How do you implement server-side rendering in React?",
        options: ["By using frameworks like Next.js or custom server-side code", "By using only client-side React components", "By using only static site generation", "By using only client-side routing"],
        correctOption: "By using frameworks like Next.js or custom server-side code"
      },
      {
        question: "What is `React.Suspense` used for?",
        options: ["To handle asynchronous operations and lazy-loaded components", "To manage component state", "To handle routing", "To create context"],
        correctOption: "To handle asynchronous operations and lazy-loaded components"
      },
      {
        question: "What is a render prop?",
        options: ["A pattern for sharing code between React components using a function that returns a React element", "A method for handling state", "A hook for managing side effects", "A method for routing"],
        correctOption: "A pattern for sharing code between React components using a function that returns a React element"
      },
      {
        question: "What does `React.forwardRef` do?",
        options: ["It allows a component to forward a ref to one of its child components", "It handles routing", "It manages state", "It creates a new hook"],
        correctOption: "It allows a component to forward a ref to one of its child components"
      },
      {
        question: "What is the purpose of the `useLayoutEffect` hook?",
        options: ["To perform side effects synchronously after all DOM mutations", "To manage component state", "To handle routing", "To create context"],
        correctOption: "To perform side effects synchronously after all DOM mutations"
      },
      {
        question: "How do you handle global state management in React?",
        options: ["Using libraries like Redux or Context API", "By directly modifying the global object", "By using local component state", "By avoiding state management"],
        correctOption: "Using libraries like Redux or Context API"
      },
      {
        question: "What is the purpose of `React.StrictMode`?",
        options: ["To identify potential problems in an application during development", "To improve performance", "To manage routing", "To handle state"],
        correctOption: "To identify potential problems in an application during development"
      },
      {
        question: "How do you optimize a React application for performance?",
        options: ["By using memoization techniques, code splitting, and avoiding unnecessary re-renders", "By directly manipulating the DOM", "By using class components only", "By managing state with global variables"],
        correctOption: "By using memoization techniques, code splitting, and avoiding unnecessary re-renders"
      },
      {
        question: "What is the `key` prop used for in React lists?",
        options: ["To help React identify which items have changed, are added, or are removed", "To manage component state", "To handle routing", "To create context"],
        correctOption: "To help React identify which items have changed, are added, or are removed"
      },
      {
        question: "How do you manage side effects in functional components?",
        options: ["By using the `useEffect` hook", "By directly modifying the DOM", "By using lifecycle methods", "By managing state with props"],
        correctOption: "By using the `useEffect` hook"
      },
      {
        question: "What is the purpose of `useMemo` hook?",
        options: ["To memoize expensive calculations and avoid unnecessary re-renders", "To manage state", "To handle routing", "To create context"],
        correctOption: "To memoize expensive calculations and avoid unnecessary re-renders"
      },
      {
        question: "What is the difference between `useCallback` and `useMemo`?",
        options: ["`useCallback` memoizes functions, while `useMemo` memoizes values", "`useCallback` memoizes values, while `useMemo` memoizes functions", "`useCallback` and `useMemo` are the same", "`useCallback` handles side effects, while `useMemo` handles state"],
        correctOption: "`useCallback` memoizes functions, while `useMemo` memoizes values"
      },
      {
        question: "How do you implement lazy loading of images in React?",
        options: ["By using React.lazy() with Suspense or by using a third-party library", "By directly importing images", "By using `require` statement", "By using static imports only"],
        correctOption: "By using React.lazy() with Suspense or by using a third-party library"
      },
      {
        question: "What is a Context Provider?",
        options: ["A component that supplies context values to its children", "A component that manages routing", "A component that handles state management", "A component that creates new hooks"],
        correctOption: "A component that supplies context values to its children"
      },
      {
        question: "What is `useTransition` used for?",
        options: ["To manage concurrent rendering and handle transitions", "To manage component state", "To handle routing", "To create context"],
        correctOption: "To manage concurrent rendering and handle transitions"
      },
      {
        question: "What does `useDeferredValue` do?",
        options: ["It allows you to defer re-rendering of a component", "It manages component state", "It handles side effects", "It creates a new hook"],
        correctOption: "It allows you to defer re-rendering of a component"
      },
      {
        question: "How do you handle updates in a class component?",
        options: ["By using the `setState` method", "By directly modifying the state object", "By using `this.update` method", "By using hooks"],
        correctOption: "By using the `setState` method"
      },
      {
        question: "How do you handle conditional rendering in React?",
        options: ["By using JavaScript conditional expressions or ternary operators within JSX", "By using state management only", "By modifying the global object", "By using only props"],
        correctOption: "By using JavaScript conditional expressions or ternary operators within JSX"
      }
    ]
  }
  ,
  
  {
    title: " C++  Test",
    description: "Test your knowledge of C++ with 40 questions covering basic to advanced concepts.",
    category: "Programming",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wy-AZBLnYuTcmchMq_G_aEmfvWQ106npmg&s",
    questions: [
      // Basic Concepts
      {
        question: "What is C++?",
        options: ["A general-purpose programming language that supports object-oriented, procedural, and generic programming", "A database management system", "A web development framework", "A type of operating system"],
        correctOption: "A general-purpose programming language that supports object-oriented, procedural, and generic programming"
      },
      {
        question: "What is the purpose of the `main` function in a C++ program?",
        options: ["It serves as the entry point for the program", "It manages memory allocation", "It handles input/output operations", "It defines classes"],
        correctOption: "It serves as the entry point for the program"
      },
      {
        question: "What is a variable in C++?",
        options: ["A storage location with a name and type", "A type of function", "A type of class", "A keyword"],
        correctOption: "A storage location with a name and type"
      },
      {
        question: "How do you declare a variable in C++?",
        options: ["Type variableName;", "variableName: Type;", "Type variableName = value;", "variableName Type;"],
        correctOption: "Type variableName;"
      },
      {
        question: "What does `#include <iostream>` do?",
        options: ["It includes the input/output stream library", "It defines the main function", "It declares a variable", "It creates a class"],
        correctOption: "It includes the input/output stream library"
      },
      {
        question: "What is the use of the `cout` object in C++?",
        options: ["To output data to the standard output stream", "To input data from the user", "To manage file operations", "To handle errors"],
        correctOption: "To output data to the standard output stream"
      },
      {
        question: "What is the purpose of the `return` statement in C++?",
        options: ["To exit from a function and optionally return a value", "To define a variable", "To include a library", "To perform an operation"],
        correctOption: "To exit from a function and optionally return a value"
      },
      {
        question: "What is an operator in C++?",
        options: ["A symbol that performs operations on variables and values", "A function that manipulates data", "A type of loop", "A method for error handling"],
        correctOption: "A symbol that performs operations on variables and values"
      },
      {
        question: "What are control structures in C++?",
        options: ["Statements that control the flow of execution in a program", "Functions that manage memory", "Objects that handle I/O operations", "Libraries for data manipulation"],
        correctOption: "Statements that control the flow of execution in a program"
      },
      {
        question: "How do you define a constant in C++?",
        options: ["Using the `const` keyword", "Using the `define` keyword", "Using `static` keyword", "By declaring a variable with a fixed value"],
        correctOption: "Using the `const` keyword"
      },
      {
        question: "What is a function in C++?",
        options: ["A block of code that performs a specific task", "A type of variable", "A control structure", "An input/output stream"],
        correctOption: "A block of code that performs a specific task"
      },
      {
        question: "What does the `new` operator do in C++?",
        options: ["It allocates memory dynamically", "It defines a class", "It creates a constant", "It deallocates memory"],
        correctOption: "It allocates memory dynamically"
      },
      {
        question: "What is the purpose of the `delete` operator in C++?",
        options: ["To deallocate memory that was allocated with `new`", "To define a constant", "To create a class", "To manage I/O operations"],
        correctOption: "To deallocate memory that was allocated with `new`"
      },
      {
        question: "What are classes in C++?",
        options: ["User-defined data types that represent objects with attributes and methods", "Built-in data types", "Functions that perform operations", "Control structures"],
        correctOption: "User-defined data types that represent objects with attributes and methods"
      },
      {
        question: "How do you create an object of a class in C++?",
        options: ["Using the class name followed by the object name", "Using the `new` keyword", "By defining a variable with the class name", "Using a function call"],
        correctOption: "Using the class name followed by the object name"
      },
      {
        question: "What is inheritance in C++?",
        options: ["A mechanism where a new class derives properties and behaviors from an existing class", "A way to handle errors", "A method for memory management", "A type of control structure"],
        correctOption: "A mechanism where a new class derives properties and behaviors from an existing class"
      },
      {
        question: "What is polymorphism in C++?",
        options: ["The ability to present the same interface for different data types", "A type of variable", "A control structure", "A method for memory allocation"],
        correctOption: "The ability to present the same interface for different data types"
      },
      {
        question: "What is encapsulation in C++?",
        options: ["The bundling of data and methods that operate on the data within a single unit (class)", "A method for error handling", "A way to manage memory", "A type of control structure"],
        correctOption: "The bundling of data and methods that operate on the data within a single unit (class)"
      },
      {
        question: "What is an abstract class in C++?",
        options: ["A class that cannot be instantiated and may contain pure virtual functions", "A class that can be instantiated", "A class with only public members", "A class with no methods"],
        correctOption: "A class that cannot be instantiated and may contain pure virtual functions"
      },
      {
        question: "What are templates in C++?",
        options: ["A feature that allows functions and classes to operate with generic types", "A way to handle I/O operations", "A method for error handling", "A type of variable"],
        correctOption: "A feature that allows functions and classes to operate with generic types"
      },
      {
        question: "What is a namespace in C++?",
        options: ["A feature that allows grouping of identifiers to avoid name conflicts", "A type of function", "A way to manage memory", "A method for error handling"],
        correctOption: "A feature that allows grouping of identifiers to avoid name conflicts"
      },
      // Intermediate Concepts
      {
        question: "What is the purpose of the `static` keyword in C++?",
        options: ["To define a variable or function with static storage duration", "To define a constant", "To allocate memory dynamically", "To handle I/O operations"],
        correctOption: "To define a variable or function with static storage duration"
      },
      {
        question: "What is a pointer in C++?",
        options: ["A variable that stores the memory address of another variable", "A type of control structure", "A method for memory management", "A function that performs operations"],
        correctOption: "A variable that stores the memory address of another variable"
      },
      {
        question: "How do you declare a pointer in C++?",
        options: ["Type *pointerName;", "Type pointerName;", "pointerName * Type;", "Type pointerName = &variable;"],
        correctOption: "Type *pointerName;"
      },
      {
        question: "What is the difference between `NULL` and `nullptr` in C++?",
        options: ["`nullptr` is type-safe and `NULL` is a macro", "`nullptr` is used in C++ only and `NULL` is used in C only", "`NULL` is type-safe and `nullptr` is a macro", "`NULL` and `nullptr` are the same"],
        correctOption: "`nullptr` is type-safe and `NULL` is a macro"
      },
      {
        question: "What does the `&` operator do in C++?",
        options: ["It retrieves the address of a variable", "It performs a bitwise AND operation", "It assigns values", "It creates a new object"],
        correctOption: "It retrieves the address of a variable"
      },
      {
        question: "What is the purpose of the `->` operator in C++?",
        options: ["To access members of a class through a pointer", "To access members of a class through an object", "To perform a bitwise shift", "To declare a new variable"],
        correctOption: "To access members of a class through a pointer"
      },
      {
        question: "What is exception handling in C++?",
        options: ["A mechanism to handle runtime errors using `try`, `catch`, and `throw` keywords", "A way to manage memory", "A method for input/output operations", "A control structure"],
        correctOption: "A mechanism to handle runtime errors using `try`, `catch`, and `throw` keywords"
      },
      {
        question: "How do you create a copy constructor in C++?",
        options: ["By defining a constructor that takes a reference to an object of the same class", "By using the `copy` keyword", "By using the `new` operator", "By defining a function with the same name"],
        correctOption: "By defining a constructor that takes a reference to an object of the same class"
      },
      {
        question: "What is the difference between `struct` and `class` in C++?",
        options: ["By default, members of a `struct` are public, and members of a `class` are private", "There is no difference", "A `struct` can only have methods, while a `class` can have both methods and variables", "A `class` is a type of control structure"],
        correctOption: "By default, members of a `struct` are public, and members of a `class` are private"
      },
      {
        question: "What is RAII in C++?",
        options: ["Resource Acquisition Is Initialization - a programming idiom for managing resources", "Run-time Allocation and Initialization", "A method for error handling", "A way to handle control structures"],
        correctOption: "Resource Acquisition Is Initialization - a programming idiom for managing resources"
      },
      {
        question: "What is the purpose of the `virtual` keyword in C++?",
        options: ["To declare a function that can be overridden in derived classes", "To define a static method", "To manage memory allocation", "To handle exceptions"],
        correctOption: "To declare a function that can be overridden in derived classes"
      },
      {
        question: "What is the `static_cast` operator used for in C++?",
        options: ["To perform type conversions with compile-time checks", "To define a static method", "To manage memory allocation", "To handle runtime errors"],
        correctOption: "To perform type conversions with compile-time checks"
      },
      {
        question: "What is the purpose of the `friend` keyword in C++?",
        options: ["To allow a function or class to access private and protected members of another class", "To define a global function", "To manage memory allocation", "To handle I/O operations"],
        correctOption: "To allow a function or class to access private and protected members of another class"
      },
      {
        question: "What is the `override` keyword used for in C++?",
        options: ["To indicate that a method is intended to override a virtual method in a base class", "To define a static method", "To manage memory allocation", "To handle exceptions"],
        correctOption: "To indicate that a method is intended to override a virtual method in a base class"
      },
      {
        question: "What is the purpose of the `explicit` keyword in C++?",
        options: ["To prevent implicit conversions for constructors and conversion operators", "To define a constant", "To handle exceptions", "To manage memory allocation"],
        correctOption: "To prevent implicit conversions for constructors and conversion operators"
      },
      {
        question: "What is the `decltype` keyword used for in C++?",
        options: ["To query the type of an expression", "To define a constant", "To manage memory allocation", "To handle I/O operations"],
        correctOption: "To query the type of an expression"
      },
      {
        question: "What is the purpose of `std::move` in C++?",
        options: ["To indicate that an object is about to be moved rather than copied", "To define a constant", "To manage memory allocation", "To handle exceptions"],
        correctOption: "To indicate that an object is about to be moved rather than copied"
      },
      {
        question: "What is a lambda expression in C++?",
        options: ["A feature that allows you to define anonymous functions", "A type of variable", "A method for error handling", "A control structure"],
        correctOption: "A feature that allows you to define anonymous functions"
      },
      {
        question: "How do you declare a lambda expression in C++?",
        options: ["[] (parameters) { body }", "function(parameters) { body }", "lambda(parameters) { body }", "[] { body }"],
        correctOption: "[] (parameters) { body }"
      },
      {
        question: "What is the purpose of the `auto` keyword in C++?",
        options: ["To automatically deduce the type of a variable from its initializer", "To define a constant", "To manage memory allocation", "To handle exceptions"],
        correctOption: "To automatically deduce the type of a variable from its initializer"
      },
      {
        question: "What is the `std::vector` container in C++?",
        options: ["A dynamic array that can resize itself", "A fixed-size array", "A type of function", "A method for memory management"],
        correctOption: "A dynamic array that can resize itself"
      },
      {
        question: "What is the `std::map` container in C++?",
        options: ["A sorted associative container that stores key-value pairs", "A type of array", "A fixed-size container", "A method for error handling"],
        correctOption: "A sorted associative container that stores key-value pairs"
      },
      {
        question: "What is the difference between `std::set` and `std::multiset` in C++?",
        options: ["`std::set` stores unique elements, while `std::multiset` allows duplicate elements", "`std::set` allows duplicate elements, while `std::multiset` stores unique elements", "`std::set` is a type of vector, while `std::multiset` is a type of list", "There is no difference"],
        correctOption: "`std::set` stores unique elements, while `std::multiset` allows duplicate elements"
      },
      {
        question: "What does `std::unique_ptr` do in C++?",
        options: ["It provides exclusive ownership of a dynamically allocated object", "It defines a constant", "It manages memory allocation", "It handles I/O operations"],
        correctOption: "It provides exclusive ownership of a dynamically allocated object"
      },
      {
        question: "What is a virtual destructor in C++?",
        options: ["A destructor that ensures proper cleanup of derived classes when deleting objects through base class pointers", "A method for memory allocation", "A way to handle exceptions", "A type of control structure"],
        correctOption: "A destructor that ensures proper cleanup of derived classes when deleting objects through base class pointers"
      },
      {
        question: "What is the purpose of `std::shared_ptr` in C++?",
        options: ["To manage shared ownership of a dynamically allocated object", "To define a constant", "To handle exceptions", "To manage I/O operations"],
        correctOption: "To manage shared ownership of a dynamically allocated object"
      },
      {
        question: "What is the use of `std::deque` in C++?",
        options: ["To provide a double-ended queue that allows fast insertions and deletions at both ends", "To define a constant", "To manage memory allocation", "To handle I/O operations"],
        correctOption: "To provide a double-ended queue that allows fast insertions and deletions at both ends"
      },
      {
        question: "What is the purpose of `std::atomic` in C++?",
        options: ["To provide atomic operations for concurrency and multithreading", "To define a constant", "To handle I/O operations", "To manage memory allocation"],
        correctOption: "To provide atomic operations for concurrency and multithreading"
      },
      {
        question: "What does `std::mutex` do in C++?",
        options: ["It provides mutual exclusion to prevent data races in concurrent programming", "It defines a constant", "It handles I/O operations", "It manages memory allocation"],
        correctOption: "It provides mutual exclusion to prevent data races in concurrent programming"
      },
      {
        question: "What is the purpose of `std::condition_variable` in C++?",
        options: ["To synchronize threads by allowing them to wait until a particular condition is met", "To define a constant", "To manage memory allocation", "To handle I/O operations"],
        correctOption: "To synchronize threads by allowing them to wait until a particular condition is met"
      },
      {
        question: "What is a `static` member in a C++ class?",
        options: ["A member that is shared across all instances of the class", "A member that is specific to each instance", "A method for handling exceptions", "A type of control structure"],
        correctOption: "A member that is shared across all instances of the class"
      },
      {
        question: "What is the difference between `public`, `protected`, and `private` access specifiers in C++?",
        options: ["`public` allows unrestricted access, `protected` allows access within derived classes, and `private` restricts access to the class itself", "`public` restricts access, `protected` allows unrestricted access, and `private` allows access within derived classes", "`public` and `protected` are the same, `private` restricts access", "`public` and `private` are the same, `protected` allows access within derived classes"],
        correctOption: "`public` allows unrestricted access, `protected` allows access within derived classes, and `private` restricts access to the class itself"
      },
      {
        question: "What is a member initializer list in C++?",
        options: ["A way to initialize member variables of a class in the constructor", "A type of function", "A method for error handling", "A way to manage memory allocation"],
        correctOption: "A way to initialize member variables of a class in the constructor"
      },
      {
        question: "What is the purpose of the `friend` function in C++?",
        options: ["To allow a non-member function to access private and protected members of a class", "To define a global function", "To manage memory allocation", "To handle exceptions"],
        correctOption: "To allow a non-member function to access private and protected members of a class"
      },
      {
        question: "What is a smart pointer in C++?",
        options: ["A pointer that automatically manages the memory of the object it points to", "A type of variable", "A method for error handling", "A way to manage control structures"],
        correctOption: "A pointer that automatically manages the memory of the object it points to"
      },
      {
        question: "What is the difference between `std::unique_ptr` and `std::shared_ptr`?",
        options: ["`std::unique_ptr` provides exclusive ownership, while `std::shared_ptr` provides shared ownership", "`std::unique_ptr` allows shared ownership, while `std::shared_ptr` provides exclusive ownership", "`std::unique_ptr` is a type of control structure, while `std::shared_ptr` is a type of function", "There is no difference"],
        correctOption: "`std::unique_ptr` provides exclusive ownership, while `std::shared_ptr` provides shared ownership"
      },
      {
        question: "What is the purpose of the `using` keyword in C++?",
        options: ["To create type aliases and bring names into the current scope", "To define a constant", "To manage memory allocation", "To handle I/O operations"],
        correctOption: "To create type aliases and bring names into the current scope"
      },
      {
        question: "What does `std::async` do in C++?",
        options: ["It allows asynchronous execution of functions", "It manages memory allocation", "It handles I/O operations", "It defines a constant"],
        correctOption: "It allows asynchronous execution of functions"
      },
      {
        question: "What is a `decltype` in C++?",
        options: ["A keyword used to query the type of an expression", "A type of control structure", "A method for error handling", "A way to manage memory allocation"],
        correctOption: "A keyword used to query the type of an expression"
      },
      {
        question: "What is `std::tuple` in C++?",
        options: ["A fixed-size collection of heterogeneous values", "A type of vector", "A fixed-size array", "A method for managing memory"],
        correctOption: "A fixed-size collection of heterogeneous values"
      },
      {
        question: "What is the purpose of `std::thread` in C++?",
        options: ["To create and manage threads for concurrent execution", "To define a constant", "To handle I/O operations", "To manage memory allocation"],
        correctOption: "To create and manage threads for concurrent execution"
      }
    ]
  }
  ,
  
    // MERN Stack Basics
    {
      title: "MERN Stack Basics",
      description: "Test your foundational knowledge of the MERN stack.",
      category: "Web Development",
      image: "https://seldomindia.com/wp-content/uploads/2023/12/mern-stack-development-1.jpg",
      questions: [
        {
          question: "What does MERN stand for?",
          options: ["MongoDB, Express, React, Node.js", "MongoDB, Express, Redux, Node.js", "MySQL, Express, React, Node.js", "MongoDB, Ember.js, React, Node.js"],
          correctOption: "MongoDB, Express, React, Node.js"
        },
        {
          question: "Which library is used to manage state in React?",
          options: ["Redux", "Context API", "MobX", "All of the above"],
          correctOption: "All of the above"
        },
        {
          question: "Which of the following is not a NoSQL database?",
          options: ["MongoDB", "MySQL", "Cassandra", "Redis"],
          correctOption: "MySQL"
        },
        {
          question: "Which method is used to retrieve data in Express?",
          options: ["POST", "GET", "PUT", "DELETE"],
          correctOption: "GET"
        }
      ]
    },
  
    // MongoDB Basics
    {
      title: "MongoDB Basics",
      description: "This quiz tests your basic knowledge of MongoDB.",
      category: "Database",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*QJnvahq_EBdUGjYQUYrhvA.png",
      questions: [
        {
          question: "Which of the following is used to connect to a MongoDB database?",
          options: ["connect()", "mongoose.connect()", "database.connect()", "mongo.connect()"],
          correctOption: "mongoose.connect()"
        },
        {
          question: "Which command is used to create a new database in MongoDB?",
          options: ["create", "newdb", "use", "db.create"],
          correctOption: "use"
        },
        {
          question: "In MongoDB, which method is used to insert a document?",
          options: ["insertOne()", "insert()", "create()", "add()"],
          correctOption: "insertOne()"
        },
        {
          question: "Which of these is not a valid data type in MongoDB?",
          options: ["String", "Number", "ObjectId", "Boolean"],
          correctOption: "Number"
        }
      ]
    },
  
    // Flutter Basics
    {
      title: "Flutter Basics",
      description: "This quiz tests your understanding of Flutter basics.",
      category: "Mobile Development",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*vgN2zojqiIYu23JPVuaSiA.jpeg",
      questions: [
        {
          question: "What language is used to write Flutter apps?",
          options: ["Java", "Kotlin", "Dart", "Swift"],
          correctOption: "Dart"
        },
        {
          question: "What is a widget in Flutter?",
          options: ["A component of UI", "A method", "A variable", "A class"],
          correctOption: "A component of UI"
        },
        {
          question: "Which of the following is not a Flutter widget?",
          options: ["Container", "Column", "Row", "Service"],
          correctOption: "Service"
        },
        {
          question: "What command is used to create a new Flutter project?",
          options: ["flutter create", "flutter new", "flutter init", "flutter start"],
          correctOption: "flutter create"
        }
      ]
    }  
];

export default testdata;
