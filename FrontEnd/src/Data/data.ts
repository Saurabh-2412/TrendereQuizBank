import { Quiz } from "./DataType"

export const allQuizzes : Array<Quiz> = [
  {
      id: "ebdd93a2-97a3-4ef5-b8db-0e50e2831977",
      name: "Javascript",
      totalScore: 25,
      questions: [
          {
              id: "0200aa14-5d75-4a66-8b1b-85d516e504ce",
              question: "Which company developed JavaScript?",
              points: 5,
              options: [
                  {
                      id: "f098b3d8-0080-40d0-bb34-7be85310a06f",
                      content: "Netlify",
                      isAnswer: false
                  },
                  {
                      id: "9f4d88cf-6bf1-45d9-a75d-442f882310cd",
                      content: "Netscape",
                      isAnswer: true
                  },
                  {
                      id: "9f4d88cf-6bf1-45d9-a75d-442f882318cd",
                      content: "Facebook",
                      isAnswer: false
                  }
              ]
          },
          {
              id: "590f528f-d485-49d1-b009-cd899cbe83c0",
              question: "What will be error for undeclared variables?",
              points: 5,
              options: [
                  {
                      id: "b73e3c48-cd6f-48c8-a0d5-2a98b83afe58",
                      content: "Compiletime error",
                      isAnswer: false
                  },
                  {
                      id: "4b5231dd-4e84-4d2a-bb8c-3cc88474fb07",
                      content: "Excution error",
                      isAnswer: false
                  },
                  {
                      id: "f55774b0-c50b-4ea5-b610-5578845fd6b3",
                      content: "Runtime error",
                      isAnswer: true
                  }
              ]
          },
          {
              id: "2bb770b4-fc78-4d42-aa0c-924c7f17d02e",
              question: "What will undefined variables return?",
              points: 5,
              options: [
                  {
                      id: "6550799e-232a-4d64-8a6d-22f5665e0409",
                      content: "Runtime error",
                      isAnswer: false
                  },
                  {
                      id: "cb5b38ca-8036-48e1-8ebd-58be67a11521",
                      content: "Compiletime error",
                      isAnswer: false
                  },
                  {
                      id: "30d6b3ac-09e4-4be8-b1c5-bdb3df7b4e58",
                      content: "undefined value",
                      isAnswer: true
                  }
              ]
          },
          {
              id: "75ed805c-1849-49ba-9a47-5de5a8418d26",
              question: "How to read and write a file using JavaScript?",
              points: 5,
              options: [
                  {
                      id: "acd08455-898c-4a35-8b10-5f633ebbf79a",
                      content: "Using JS extensions",
                      isAnswer: true
                  },
                  {
                      id: "61c7fb9a-993c-4e3a-acfb-df6372f15d7f",
                      content: "Using TSX extensions",
                      isAnswer: false
                  },
                  {
                      id: "e33f56cd-7c54-464a-bc9d-78f65578d2bc",
                      content: "Using JSX extensions",
                      isAnswer: false
                  }
              ]
          },
          {
              id: "eadc854f-5d80-4f7b-a3f2-44f39deab200",
              question: "What would be the result of 3+2+'7'?",
              points: 5,
              options: [
                  {
                      id: "9278cb36-320b-48c8-963f-7d7a3e036db4",
                      content: "12",
                      isAnswer: false
                  },
                  {
                      id: "605524ec-00b4-4101-acca-900c87c09a25",
                      content: "57",
                      isAnswer: true
                  },
                  {
                      id: "7dd74db4-b71e-4404-87e8-eec35685d3b4",
                      content: "39",
                      isAnswer: false
                  }
              ]
          }
      ]
  },
  
  {
    id: "fffa23a7-4d8c-4f09-8a63-5e1bc63ee7ec",
    name: "React",
    totalScore: 25,
    questions: [
      {
        id: "04c98537-9d22-4bec-83b7-ad4784162b1a",
        question: "What is React?",
        points: 5,
        options: [
          {
              id: "b829351e-9f55-4abd-a1d7-aa7a35404ce9",
              content: "React is a fullstack JavaScript library",
              isAnswer: false
          },
          {
              id: "b45aa490-5a5f-41a3-8177-cca8b64b172e",
              content: "React is a front-end JavaScript library",
              isAnswer: true
          },
          {
              id: "a2b0c1d2-4f4f-4eef-9279-1a2ac7549700",
              content: "React is a back-end JavaScript library",
              isAnswer: false
          }
        ]
      },
      {
        id: "bee89d5a-8f2f-43b9-b879-02f1cdb8937d",
        question: "What are the features of React?",
        points: 5,
        options: [
          {
            id: "abef93aa-d1b8-4eeb-9694-26129a44eef5",
            content: "virtual DOM instead of the real DOM",
            isAnswer: true
          },
          {
            id: "fb380e5f-9d81-4f85-bf05-060f47b31b49",
            content: "reacl DOM plays main role",
            isAnswer: false
          },
          {
            id: "34cdb860-60e1-44de-b0ad-43d7a3ebfed8",
            content: "virtual DOM plays main role",
            isAnswer: false
          }
        ]
      },
      {
        id: "2722ecd0-2d54-4836-8284-76fde5abe7d0",
        question: "What is JSX?",
        points: 5,
        options: [
          {
            id: "6377d841-c842-444a-b473-352578228ea7",
            content: "JSX is a shorthand for JSXML.",
            isAnswer: false
          },
          {
            id: "7108c1aa-3398-48c5-be3c-d7fda8b80444",
            content: "JSX is a shorthand for JavaScript XML.",
            isAnswer: true
          }
        ]
      },
        {
          id: "2a15eafe-8c11-40f1-89ab-3b8f55104e7a",
          question: "What are React props?",
          points: 5,
          options: [
            {
              id: "d793b38e-9bc8-4421-be70-6fa2ded81933",
              content: "Props are short for Properation",
              isAnswer: false
            },
            {
              id: "4ac36f5c-2bdd-4d1c-a2b2-60842f62ebd9",
              content: "Props are short for Properties",
              isAnswer: true
            }
          ]
        },
        {
          id: "1af0ab03-c699-4043-9967-7bbf930a9e39",
          question: "What are refs in React?",
          points: 5,
          options: [
            {
              id: "16bad4f8-d48f-41b5-a165-9aa6f5eff54e",
              content: "Refs are the shorthand that is used for references in React. It helps to store a reference to a DOM node.",
              isAnswer: true
            },
            {
              id: "3003f123-7994-4994-ae8f-79630d91761a",
              content: "Refs are pure functions which specify how the application’s state changes in response to an ACTION.",
              isAnswer: false
            }
          ]
        }
    ]
  },

  {
    id: "fffa23a7-4d8c-4f09-8a63-5e1bc637eca",
    name: "Vanilla JS",
    totalScore: 25,
    questions: [
      {
        id: "04c98537-9d22-4bec-83b7-ad4784162b1aa",
        question: "Convert the string “8675309” to a number.",
        points: 5,
        options: [
          {
              id: "b829351e-9f55-4abd-a1d7-aa7a35404ce9a",
              content: "var x = '8675309', x += Number(x)",
              isAnswer: false
          },
          {
              id: "b45aa490-5a5f-41a3-8177-cca8b64b172ea",
              content: "var x = '8675309', var y = Number(x)",
              isAnswer: true
          },
          {
              id: "a2b0c1d2-4f4f-4eef-9279-1a2ac7549700a",
              content: "var x = 8675309, var y = Number(x)",
              isAnswer: false
          }
        ]
      },
      {
        id: "bee89d5a-8f2f-43b9-b879-02f1cdb8937da",
        question: "What is JavaScript typeof and how is it used?",
        points: 5,
        options: [
          {
            id: "abef93aa-d1b8-4eeb-9694-26129a44eef5a",
            content: "We use the typeof operator to get the data type of an operand. Typeof tells if a function, variable, or object is an object, function, string, boolean, or undefined.",
            isAnswer: true
          },
          {
            id: "fb380e5f-9d81-4f85-bf05-060f47b31b49a",
            content: "Typeof is used to convert an object, function, string, boolean, or undefined.",
            isAnswer: false
          }
        ]
      },
      {
        id: "2722ecd0-2d54-4836-8284-76fde5abe7d0a",
        question: "Is JavaScript thread safe?",
        points: 5,
        options: [
          {
            id: "6377d841-c842-444a-b473-352578228ea7a",
            content: "JavaScript is multi-threaded. Each execution thread finishes simultenously, so JS is thread safety issues.",
            isAnswer: false
          },
          {
            id: "7108c1aa-3398-48c5-be3c-d7fda8b80444a",
            content: "JavaScript is single-threaded. Each execution thread finishes before the next starts, so JS has no thread safety issues.",
            isAnswer: true
          }
        ]
      },
        {
          id: "2a15eafe-8c11-40f1-89ab-3b8f55104e7aa",
          question: "How would you change an array into a comma-separated list?",
          points: 5,
          options: [
            {
              id: "d793b38e-9bc8-4421-be70-6fa2ded81933a",
              content: "Use the array.concat() method. To change the commas to a different separator, put the new separator between the parentheses.",
              isAnswer: false
            },
            {
              id: "4ac36f5c-2bdd-4d1c-a2b2-60842f62ebd9a",
              content: "Use the array.join() method. To change the commas to a different separator, put the new separator between the parentheses.",
              isAnswer: true
            }
          ]
        },
        {
          id: "1af0ab03-c699-4043-9967-7bbf930a9e39a",
          question: "Does JavaScript support multiple inheritance?",
          points: 5,
          options: [
            {
              id: "16bad4f8-d48f-41b5-a165-9aa6f5eff54ea",
              content: "No. Each object in JS has a single “prototype” object.",
              isAnswer: true
            },
            {
              id: "3003f123-7994-4994-ae8f-79630d91761aa",
              content: "Yes. Each object in JS has a single “prototype” object.",
              isAnswer: false
            }
          ]
        }
    ]
  }
]

/* [
  {
    id: "ebdd93a2-97a3-4ef5-b8db-0e50e2831977",
    name: "I don't play the odds, I play the man",
    totalScore: 20,
    questions: [
      {
        id: "0200aa14-5d75-4a66-8b1b-85d516e504ce",
        question:
          "Harvey Specter is considered one of New York's most brilliant corporate litigation lawyers, but what's his unusual middle name?",
        points: 10,
        options: [
          {
            id: "f098b3d8-0080-40d0-bb34-7be85310a06f",
            content: `Michael`,
            isAnswer: false,
          },
          {
            id: "9f4d88cf-6bf1-45d9-a75d-442f882310cd",
            content: `Reginald`,
            isAnswer: true,
          },
          {
            id: "9f4d88cf-6bf1-45d9-a75d-442f882310cd",
            content: `Brandon`,
            isAnswer: false,
          },
        ],
      },
      {
        id: "590f528f-d485-49d1-b009-cd899cbe83c0",
        question: "Which partner loves mudding and had a cat named Bruno?",
        points: 10,
        options: [
          {
            id: "b73e3c48-cd6f-48c8-a0d5-2a98b83afe58",
            content: `Harvey Specter`,
            isAnswer: false,
          },
          {
            id: "4b5231dd-4e84-4d2a-bb8c-3cc88474fb07",
            content: `Jessica Pearson`,
            isAnswer: false,
          },
          {
            id: "f55774b0-c50b-4ea5-b610-5578845fd6b3",
            content: `Louis Litt`,
            isAnswer: true,
          },
        ],
      },
      {
        id: "2bb770b4-fc78-4d42-aa0c-924c7f17d02e",
        question: "Which partner loves mudding and had a cat named Bruno?",
        points: 10,
        options: [
          {
            id: "6550799e-232a-4d64-8a6d-22f5665e0409",
            content: `Michael Ross`,
            isAnswer: false,
          },
          {
            id: "cb5b38ca-8036-48e1-8ebd-58be67a11521",
            content: `Harvey Specter`,
            isAnswer: false,
          },
          {
            id: "30d6b3ac-09e4-4be8-b1c5-bdb3df7b4e58",
            content: `Stephen Huntley`,
            isAnswer: true,
          },
        ],
      },
      {
        id: "75ed805c-1849-49ba-9a47-5de5a8418d26",
        question:
          "Where did Harvey Specter work before he became an associate at Pearson Hardman?",
        points: 10,
        options: [
          {
            id: "acd08455-898c-4a35-8b10-5f633ebbf79a",
            content: `New York District Attorney's Office`,
            isAnswer: true,
          },
          {
            id: "61c7fb9a-993c-4e3a-acfb-df6372f15d7f",
            content: `Bratton Gould`,
            isAnswer: false,
          },
          {
            id: "e33f56cd-7c54-464a-bc9d-78f65578d2bc",
            content: `Darby International`,
            isAnswer: false,
          },
        ],
      },
      {
        id: "eadc854f-5d80-4f7b-a3f2-44f39deab200",
        question:
          "Jessica Pearson and Daniel Hardman ousted three named partners in order to create Pearson Hardman. What was the firm called before the ousting?",
        points: 10,
        options: [
          {
            id: "9278cb36-320b-48c8-963f-7d7a3e036db4",
            content: `Specter Zane Litt`,
            isAnswer: false,
          },
          {
            id: "605524ec-00b4-4101-acca-900c87c09a25",
            content: `Gordon Schmidt Van Dyke`,
            isAnswer: true,
          },
          {
            id: "7dd74db4-b71e-4404-87e8-eec35685d3b4",
            content: `Who killed Patrick Jane's family?`,
            isAnswer: false,
          },
        ],
      },
    ],
  } */

  /* {
    id:"1000001",
    name:"Javascript",
    totalScore:20,
    questions: [
      {
        questionId: "1",
        points: 5,
        question: "Which company developed JavaScript?",
        options: [
          { optionId: "101", content: "Netscape", isRight: true },
          { optionId: "102", content: "Netlify", isRight: false },
          { optionId: "103", content: "Facebook", isRight: false },
          { optionId: "104", content: "Accio", isRight: false },
          { optionId: "105", content: "None of the above", isRight: false },
        ]
      },
      {
        questionId: "2",
        points: 5,
        question:
          "What will be error for undeclared variables?",
        options: [
          { optionId: "201", content: "Compiletime error", isRight: false },
          { optionId: "202", content: "Runtime error", isRight: true },
          { optionId: "203", content: "Excution error", isRight: false },
          { optionId: "204", content: "Excuted successfully", isRight: false },
          { optionId: "205", content: "None of the above", isRight: false },
        ]
      },
      {
        questionId: "3",
        points: 5,
        question: "What will undefined variables return?",
        options: [
          { optionId: "301", content: "undefined value", isRight: true },
          { optionId: "302", content: "Runtime error", isRight: false },
          { optionId: "303", content: "Compiletime error", isRight: false },
          { optionId: "304", content: "Executed successfully", isRight: false },
          { optionId: "305", content: "None of the above", isRight: false },
        ]
      },
      {
        questionId: "4",
        points: 5,
        question: "How to read and write a file using JavaScript?",
        options: [
          { optionId: "401", content: "Using JS extensions", isRight: true },
          { optionId: "402", content: "Using TSX extensions", isRight: false },
          { optionId: "403", content: "Using JSX extensions", isRight: false },
          { optionId: "404", content: "Using EXE extensions", isRight: false },
          { optionId: "405", content: "None of the above", isRight: false },
        ]
      },
      {
        questionId: "5",
        points: 5,
        question:
          "What would be the result of 3+2+'7'?",
        options: [
          { optionId: "501", content: "12", isRight: false },
          { optionId: "502", content: "57", isRight: true },
          { optionId: "503", content: "39", isRight: false },
          { optionId: "504", content: "327", isRight: false },
          { optionId: "505", content: "None of the above", isRight: false },
        ]
      },
      {
        questionId: "6",
        points: 5,
        question:
          "What do you mean by NULL in Javascript?",
        options: [
          { optionId: "601", content: "no value or no object", isRight: true },
          { optionId: "602", content: "value or no object", isRight: false },
          { optionId: "603", content: "no value or object", isRight: false },
          { optionId: "604", content: "value or object", isRight: false },
          { optionId: "605", content: "None of the above", isRight: false },
        ]
      },
      {
        questionId: "7",
        points: 5,
        question: "Does JavaScript has concept level scope?",
        options: [
          { optionId: "701", content: "No, JavaScript does not have concept-level scope.", isRight: true },
          { optionId: "702", content: "Yes, JavaScript does not have concept-level scope.", isRight: false },
          { optionId: "703", content: "None of the above", isRight: false }
        ]
      },
      {
        questionId: "8",
        points: 5,
        question:
          "What is the use of the blur function?",
        options: [
          { optionId: "801", content: "Blur function is used to remove the focus.", isRight: true },
          { optionId: "802", content: "Blur function is used to focus the element.", isRight: false },
          { optionId: "803", content: "Blur the element.", isRight: false },
          { optionId: "804", content: "Hide the element", isRight: false },
          { optionId: "805", content: "None of the above", isRight: false }
        ]
      },
      {
        questionId: "9",
        points: 5,
        question: "Is JavaScript case sensitive?",
        options: [
          { optionId: "901", content: "Yes, JavaScript is case-sensitive.", isRight: true },
          { optionId: "902", content: "No, JavaScript is case-sensitive. ", isRight: false },
          { optionId: "903", content: "None of the above", isRight: false }
        ]
      },
      {
        questionId: "10",
        points: 5,
        question:
          "What are some important JavaScript Unit Testing Frameworks?",
        options: [
          { optionId: "1011", content: "Unit.js", isRight: false },
          { optionId: "1012", content: "QUnit", isRight: false },
          { optionId: "1013", content: "Karma", isRight: false },
          { optionId: "1014", content: "Jest", isRight: false },
          { optionId: "1015", content: "All of the above", isRight: true }
        ]
      }
    ] 
  } 
]*/

/**
 * quizName => language name eg(react JS,vanilla JS)
 * quizStage => [ set of quiz with beginner intermediate and expert level indicator ]
 * QuizLevel: name of the quiz e.g(beginner intermediate and expert)
 */