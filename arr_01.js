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
//output(getHTML());




// Modul: Zusammenbau der Elements: <tagStr> --> Tests:
// output(getElement(tags[1],"open"));
// output(getElement(tags[1],"close"));
// output(getElement(tags[1]));


// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}
