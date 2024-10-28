const containWords = document.getElementById("container");
const defsCont = document.getElementById("defsContainer");
//These variable get the elements for the text box and button
const textInput = document.getElementById("dicTextbox");
const searchButton = document.getElementById("searchBtn");

//These variables get the p elements for the part of speech and definitions
const PartOfSpeech = document.getElementById("prtOfSpch");
const wordDef1 = document.getElementById("definition1");
const wordDef2 = document.getElementById("definition2");


//These are all the words for this simple dictionary
const dictionary = {
    "yes": {
        PartOfSpeech: "noun",
        Definitions: ["1. Used to give an affirmative response.", "2. Used as a response to someone addressing one or otherwise trying to attract one's attention." ]
    },
    "panacea":{
        PartOfSpeech: "noun",
        Definitions: ["1. An answer or solution for all problems or difficulties."]
    },
    "concatenation": {
        PartOfSpeech: "noun",
        Definitions: ["1. A series of interconnected or interdependent things or events."]
    },
    "saw":{
        PartOfSpeech: "verb",
        Definitions: ["1. Cut (something) using a saw.", "2. Make rapid to-and-fro motions in cutting something or in playing a stringed instrument."]
    },
    "found":{
        PartOfSpeech: "adjective",
        Definitions: ["1. Having been discovered by chance or unexpectedly.", "2. (of a ship) Equipped; Supplied."]
    },
    "crane":{
        PartOfSpeech: "verb",
        Definitions: ["1. Stretch out one's body or neck in order to see something.", "2. Move (a heavy object) with a crane."]
    },
    "minute":{
        PartOfSpeech: "noun",
        Definitions: ["1. A period of time equal to sixty seconds or sixtieth of an hour.", "2. A sixtieth of a degree of angular measurement (symbol: ')"]
    },
    "grotesque":{
        PartOfSpeech: "adjective",
        Definitions: ["1. Comically or repulsively ugly or distorted."]
    },
    "label":{
        PartOfSpeech: "noun",
        Definitions: ["1. A small piece of paper, fabric, plastic, or similar material attached to an object and giving information about it."]
    },
    "debacle":{
        debPartOfSpeech: "noun",
        debDefinitions: ["1. A sudden and ignominious failure; a fiasco."]
    },
    "element":{
        PartOfSpeech: "noun",
        Definitions: ["1. a part or aspect of something abstract."]
    },
    "index":{
        PartOfSpeech: "noun",
        Definitions: ["1. a counter that points to a relative location in a table or a specific place in a list or string."]
    },
    "array":{
        PartOfSpeech: "noun",
        Definitions: ["1. a data structure that stores multiple items of data of the same type under a single variable name."]
    },
    "comment":{
        PartOfSpeech: "noun",
        Definitions: ["1. a human-readable explanation or annotation in the source code of a computer program."]
    },
    "attribute":{
        PartOfSpeech: "noun",
        Definitions: ["1. a keyword and a value that provide additional information about elements."]
    },
    "variable":{
        PartOfSpeech: "noun",
        Definitions: ["1. a way to store and manipulate data."]
    },
    "expression":{
        PartOfSpeech: "noun",
        Definitions: ["1. a line of code that does not end in a semicolon."]
    },
    "integer":{
        PartOfSpeech: "noun",
        Definitions: ["1. any whole number, can be negative or positive."]
    },
    "double":{
        PartOfSpeech: "noun",
        Definitions: ["1. any number with a decimal, can be negative or positive."]
    },
    "string":{
        PartOfSpeech: "noun",
        Definitions: ["1. a word or a sentence."]
    },
    "character":{
        PartOfSpeech: "noun",
        Definitions: ["1. a single letter or a symbol."]
    },
    "boolean":{
        PartOfSpeech: "noun",
        Definitions: ["1. a variable used for decision making with only two possible values being True or False."]
    },
    "parameter":{
        PartOfSpeech: "noun",
        Definitions: ["1. a variable that is used to give some data to a function, so it does something with that data, and then returns something to you."]
    },
    "events":{
        PartOfSpeech: "noun",
        Definitions: ["1. an action or occurance that a program can recognize and respond to."]
    },
    "loop":{
        PartOfSpeech: "noun",
        Definitions: ["1. a sequence of instructions that is repeated until a certain condition is met."]
    },
    "object":{
        PartOfSpeech: "noun",
        Definitions: ["1. a collection of member variables packaged as a unit."]
    },
    "selector":{
        PartOfSpeech: "noun",
        Definitions: ["1. patterns that tell the browser which HTML elements to style."]
    },
    "property":{
        PartOfSpeech: "noun",
        Definitions: ["1. special attributes or characteristics associated with an object."]
    },
    "value":{
        PartOfSpeech: "noun",
        Definitions: ["1. a fundamental unit of data that a program manipulates, such as a number or a word."]
    },
    "declaration":{
        PartOfSpeech: "noun",
        Definitions: ["1. a property and a value together."]
    }
}


//When the search button is clicked it run the function below to 'search' a word
searchButton.addEventListener("click", searchWord);

function searchWord(){
    
   //This variable grabs what the user typed into the textbox
   const userInput = textInput.value.toLowerCase();

    if(userInput === ""){
        PartOfSpeech.innerText = "Enter a word!"; 
        return;
    }
    if(!dictionary[userInput]){
        PartOfSpeech.innerText = "Enter a valid word!"; 
        return;
    }
    
    PartOfSpeech.innerText = dictionary[userInput].PartOfSpeech

    defsCont.textContent = "";

    for(let i = 0; i < dictionary[userInput].Definitions.length; i++){
       const defs = document.createElement("p")
        defs.innerText = dictionary[userInput].Definitions[i];
        defsCont.appendChild(defs);
        containWords.appendChild(defsCont);
    }  
 }