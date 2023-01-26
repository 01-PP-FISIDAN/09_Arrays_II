/*********   Theorie **********/

// push() / pop()

// push --> Daten rein ... (+)
//push schiebt Daten an das Ende des Array
let arr = [];
// output(arr);
// arr.push("Ich");
// output(arr);
// arr.push("bin");
// output(arr);
// arr.push("MadMax");
// output(arr);

// //pop nimmt Daten von hinten aus dem Array weg
// // pop() --> Daten raus ... (-)
// output(arr);
// arr.pop();
// output(arr);
// arr.pop();
// output(arr);
// arr.pop();

// // man kann auch die Funktion direkt ausgeben lassen, worauf sie zeigt, indem output davor kommt
// output(arr);
// output(arr.push("Ich"));
// output(arr);
// output(arr.push("bin"));
// output(arr);
// output(arr.push("MadMax"));
// output(arr);
// output(arr);
// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);
// output(arr.pop());


/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const COBJ      = {open_o:"<",close_o:"</",close:">"} 
const CONTROLS  = ["<", "</", ">"];
const TAGS = [  "html",
				"head","head",
				"body",
                "h1","h1",
                "p","p",
                "ul","li","li","li","li","li","li","ul",
                "p","p",
                "ol","li","li","ol",
                "body",
				"html"
            ];

let stack = [];

// Modul: HTML-Synthese | Test
output(getHTML());

// folgende Funktion aus 07_Arrays_I umbauen getHTML und htmlstr
function getHTML()
{
    let htmlStr = "";

    for (let i = 0; i < TAGS.length; i++) {
        if (isOpenElement(TAGS[i])) {

        // if (true) 
        // if (false)
        
            htmlStr += getElement(TAGS[i], "open");
        } else {
            htmlStr += getElement(TAGS[i], "close");
        }
            
        }

        // htmlStr += "</" + TAGS[i] + ">";
        // htmlStr += getElement();
        // htmlStr += getElement(TAGS[i], "open");
        // htmlStr += getElement(TAGS[i], "close");
   return htmlStr;

};



// Modul: Zusammenbau der Elements: <tagStr> --> Tests:
// output(getElement(TAGS[3],"open"));
// output(getElement(TAGS[2],"close"));
// output(getElement(TAGS[1]));
function getElement(tag,op) {
    
    // switch (op) {
    //     case "open":
    //         return CONTROLS[0] + tag + CONTROLS[2];   
    //     case "close":
    //         return CONTROLS[1] + tag + CONTROLS[2];
        
    //     default:
    //         return "error";    
            
    // }
    
    switch (op) {
        case "open":
            return COBJ.open_o + tag + COBJ.close;   
        case "close":
            return COBJ.close_o + tag + COBJ.close;
        
        default:
            return "error";    
            
    }
    
    
    
    
    
}
output(isOpenElement(TAGS[0])); //TAG kommt aus der Schleife oben
output(isOpenElement(TAGS[1]));
output(isOpenElement(TAGS[2]));
function isOpenElement(tag) {

    // let cond = true
    let cond = tag != stack[stack.length - 1]
 
    
    
    if (cond) {
        stack.push(tag);
        output(stack);
        return true;
    } else {
        stack.pop();
        output(stack);
        return false;
    }

    
}


//     //TAGS stackt für "open" von KI:
//     //tag.length < 3 --> error, Tag ungueltig
//     //getElement(tag, "open")
//     if (TAGS.length < 3) {
//         return false;
//     }
    
//     return getElement(TAGS[TAGS.length-1], "open");
    
    
    
// }





// // Zusammenbau der Tests:
// // test(isOpenElement(TAGS[3]));
// // test(isOpenElement(TAGS[1]));
// // test(isOpenElement(TAGS[0]));
// function test(isOpen) {
//     // TAGS stackt für "open"
//     if (TAGS.length < 3) {
//         return false;
//     }
    
//     if (isOpenElement()) {
//         output(isOpenElement());
//     } else {
//         output(getElement(TAGS[TAGS.length - 1], "close"));

    
    
    
//         return false;
//     }
// }
//von KI gebaut:
// function isOpenElement() {
//     var str = "<" + TAGS[3] + " " + TAGS[2] + ">";
//     return COBJ.isOpen(str);
// }
// function isCloseElement() {
//     var str = "<" + TAGS[3] + " " + TAGS[2] + "/>";
//     return COBJ.isOpen(str);
// }
// function getElements() {
//     return COBJ.getElements(TAGS[3], TAGS[2]);
// }

// function output(str) {
//     alert(str);
// }
























































// Modul: Ausgabe | Test
//output("hi");

function output(outputData) {
    console.log(outputData);
}
