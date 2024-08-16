const testdata = [
  {
    title: "Java Quiz",
    description: "This quiz is about Java programming language.",
    category: "Programming",
    image: "https://www.chawtechsolutions.com/wp-content/uploads/2020/10/java_binary.jpg",
    questions: [
      {
        question: "What is the size of int in Java?",
        options: ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
        correctOption: "4 bytes"
      },
      {
        question: "Which of these is not a Java feature?",
        options: ["Pointer", "Object-Oriented", "Portable", "Dynamic"],
        correctOption: "Pointer"
      },
      {
        question: "Which keyword is used to create a subclass in Java?",
        options: ["extends", "implements", "inherits", "subclass"],
        correctOption: "extends"
      },
      {
        question: "Which method can be defined only once in a program?",
        options: ["main method", "finalize method", "static method", "private method"],
        correctOption: "main method"
      },
      {
        question: "Which of the following is not an OOP concept in Java?",
        options: ["Compilation", "Inheritance", "Polymorphism", "Encapsulation"],
        correctOption: "Compilation"
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
        question: "What is the return type of the hashCode() method in the Object class?",
        options: ["int", "Object", "void", "long"],
        correctOption: "int"
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
      }
    ]
  },
  {
    title: "Python Basics",
    description: "Test your knowledge of Python basics.",
    category: "Programming",
    image: "https://miro.medium.com/max/1400/1*1t9TVHre3gH0dXERFqB-Cg.jpeg",
    questions: [
      {
        question: "What is the correct file extension for Python files?",
        options: [".python", ".pyth", ".py", ".pyt"],
        correctOption: ".py"
      },
      {
        question: "How do you insert COMMENTS in Python code?",
        options: ["/* this is a comment */", "// this is a comment", "# this is a comment", "!! this is a comment"],
        correctOption: "# this is a comment"
      },
      {
        question: "Which one is NOT a legal variable name in Python?",
        options: ["my_var", "MyVar", "my-var", "_myvar"],
        correctOption: "my-var"
      },
      {
        question: "Which function is used to output data to the screen in Python?",
        options: ["output()", "print()", "echo()", "console.log()"],
        correctOption: "print()"
      },
      {
        question: "How do you start a new line of code within a single statement?",
        options: ["\n", "\\", "continue", "newline"],
        correctOption: "\\"
      },
      {
        question: "Which of these operators can be used to compare two values in Python?",
        options: ["=", "==", "!=", "<>"],
        correctOption: "=="
      },
      {
        question: "What will be the result of the expression 4 + 3 * 2?",
        options: ["14", "10", "8", "13"],
        correctOption: "10"
      },
      {
        question: "Which of the following is a valid way to declare a list in Python?",
        options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
        correctOption: "[1, 2, 3]"
      },
      {
        question: "Which of these is NOT a core data type in Python?",
        options: ["Lists", "Tuples", "Class", "Dictionary"],
        correctOption: "Class"
      },
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "define", "func"],
        correctOption: "def"
      }
    ]
  },
  {
    title: "HTML & CSS Basics",
    description: "This quiz tests your knowledge on the basics of HTML and CSS.",
    category: "Web Development",
    image: "https://webdevtrick.com/wp-content/uploads/html-css-code.jpg",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Trainer Marking Language",
          "Hyper Text Marketing Language",
          "Hyper Text Markup Language",
          "Hyper Text Markup Leveler"
        ],
        correctOption: "Hyper Text Markup Language"
      },
      {
        question: "Who is making the Web standards?",
        options: ["Google", "Mozilla", "Microsoft", "The World Wide Web Consortium"],
        correctOption: "The World Wide Web Consortium"
      },
      {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"],
        correctOption: "Cascading Style Sheets"
      },
      {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        options: ["In the <head> section", "In the <body> section", "At the end of the document", "You can't refer to an external style sheet"],
        correctOption: "In the <head> section"
      },
      {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<style>", "<css>", "<script>", "<link>"],
        correctOption: "<style>"
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "styles", "font", "style"],
        correctOption: "style"
      },
      {
        question: "How do you insert a comment in a CSS file?",
        options: ["// this is a comment", "/* this is a comment */", "// this is a comment //", "<!-- this is a comment -->"],
        correctOption: "/* this is a comment */"
      },
      {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "fgcolor"],
        correctOption: "color"
      },
      {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-style", "font-size", "text-size"],
        correctOption: "font-size"
      },
      {
        question: "How do you select an element with id 'demo' in CSS?",
        options: [".demo", "*demo", "#demo", "demo"],
        correctOption: "#demo"
      }
    ]
  },
  {
    title: "General Knowledge",
    description: "Test your general knowledge across a variety of topics.",
    category: "General Knowledge",
    image: "https://cdn.pixabay.com/photo/2015/01/08/18/24/board-593322_1280.jpg",
    questions:[
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctOption: "Mars"
      },
      {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctOption: "Canberra"
      },
      {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctOption: "Pacific"
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correctOption: "William Shakespeare"
      },
      {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1913", "1914", "1915"],
        correctOption: "1912"
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        correctOption: "Japan"
      },
      {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Malta", "Vatican City", "Liechtenstein"],
        correctOption: "Vatican City"
      },
      {
        question: "Which organ in the human body is responsible for pumping blood?",
        options: ["Liver", "Brain", "Kidney", "Heart"],
        correctOption: "Heart"
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correctOption: "Leonardo da Vinci"
      },
      {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctOption: "Nile"
      }
    ]
  },
    {
      title: "Java Basics",
      description: "This quiz tests your knowledge of basic Java concepts.",
      category: "Programming",
      image: "https://cdn.pixabay.com/photo/2015/04/23/17/41/java-736400_1280.png",
      questions: [
        {
          question: "What is the default value of a boolean variable?",
          options: ["true", "false", "0", "null"],
          correctOption: "false"
        },
        {
          question: "Which of the following is not a Java keyword?",
          options: ["static", "Boolean", "void", "private"],
          correctOption: "Boolean"
        },
        {
          question: "What is the output of 9 % 2?",
          options: ["1", "2", "0", "9"],
          correctOption: "1"
        },
        {
          question: "Which one is a valid declaration of a boolean?",
          options: ["boolean b1 = 0;", "boolean b2 = 'false';", "boolean b3 = false;", "boolean b4 = 'true';"],
          correctOption: "boolean b3 = false;"
        }
      ]
    },
  
    // Java Intermediate
    {
      title: "Java Intermediate",
      description: "This quiz tests your understanding of intermediate Java concepts.",
      category: "Programming",
      image: "https://cdn.pixabay.com/photo/2016/11/23/14/47/java-1851412_1280.png",
      questions: [
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
          question: "Which of these is not a method of the Thread class?",
          options: ["start()", "run()", "sleep()", "wait()"],
          correctOption: "wait()"
        }
      ]
    },
  
    // Java Advanced
    {
      title: "Java Advanced",
      description: "This quiz tests your knowledge of advanced Java topics.",
      category: "Programming",
      image: "https://cdn.pixabay.com/photo/2015/04/23/17/41/java-736400_1280.png",
      questions: [
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
        }
      ]
    },
  
    // MERN Stack Basics
    {
      title: "MERN Stack Basics",
      description: "Test your foundational knowledge of the MERN stack.",
      category: "Web Development",
      image: "https://cdn.pixabay.com/photo/2019/10/24/20/55/mern-stack-4572940_1280.png",
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
      image: "https://cdn.pixabay.com/photo/2015/12/08/00/27/data-1084697_1280.jpg",
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
  
    // React Basics
    {
      title: "React Basics",
      description: "Test your understanding of basic React concepts.",
      category: "Web Development",
      image: "https://cdn.pixabay.com/photo/2017/06/10/07/30/seo-2389233_1280.png",
      questions: [
        {
          question: "Which of the following is used to create a React component?",
          options: ["function", "class", "const", "All of the above"],
          correctOption: "All of the above"
        },
        {
          question: "What is JSX?",
          options: ["JavaScript XML", "Java Syntax Extension", "JavaScript and XML", "JavaScript Extra"],
          correctOption: "JavaScript XML"
        },
        {
          question: "Which of the following is not a React hook?",
          options: ["useState", "useEffect", "useHook", "useContext"],
          correctOption: "useHook"
        },
        {
          question: "What is the correct way to pass props in React?",
          options: ["<Component prop1='value' />", "<Component prop1={value} />", "<Component {prop1=value} />", "None of the above"],
          correctOption: "<Component prop1={value} />"
        }
      ]
    },
  
    // Flutter Basics
    {
      title: "Flutter Basics",
      description: "This quiz tests your understanding of Flutter basics.",
      category: "Mobile Development",
      image: "https://cdn.pixabay.com/photo/2016/04/13/22/03/code-1329182_1280.jpg",
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
