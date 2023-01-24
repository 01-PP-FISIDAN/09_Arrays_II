/*********   Theorie **********/

// push() / pop()
// push --> Daten rein ... (+)


// pop() --> Daten raus ... (-)



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
// output(getHTML());

// folgende Funktion aus 07_Arrays_I umbauen getHTML und htmlstr
function getHTML() {

 

    let htmlStr = "";

    for (let i = 0; i < TAGS.length; i++) {

        // htmlStr += "</" + TAGS[i] + ">";
        htmlStr += getElement();
    }

   return htmlStr;

}

// Modul: Zusammenbau der Elements: <tagStr> --> Tests:
output(getElement(TAGS[1],"open"));
output(getElement(TAGS[1],"close"));
output(getElement(TAGS[1]));
function getElement(tag,op) {
    
    switch (op) {
        case "open":
            return CONTROLS[0] + tag + CONTROLS[2];   
        case "close":
            return CONTROLS[1] + tag + CONTROLS[2];
        
        default:
            return "error";    
            
    }
    
    
    
    
    
    
}

// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}
