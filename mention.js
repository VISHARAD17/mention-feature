// dummy data
var data = [
    {
        key: "visharad",
        value: "visharad",
        email: "visharad@gmail.com",
        id:'1'
    },
    {
        key: "akshay",
        value: "akshay",
        email: "akshay@gmail.com",
        id :'2'
    },
    {
        key: "chinmay",
        value: "chinmay",
        email: "chinmay@gmail.com",
        id:'3'
    },
    {
        key: "visharad borsutkar",
        value: "visharad borsutkar",
        email: "visharadihihh@gmail.com",
        id:'4'
    },
];

// ------- name and id data from the main dummy data
var nameData = [];
var idData = [];
for(var i=0; i<data.length; i++) nameData.push(data[i].value);
for(var i=0; i<data.length; i++) idData.push(data[i].id);

var tribute = new Tribute({
values: data,
selectTemplate: function(item) {
    if (typeof item === "undefined") return null;
    if (this.range.isContentEditable(this.current.element)) {

    return (
        '<span contenteditable="false">&nbsp<a href="http://google.com" target="_blank" title="' +
        item.original.email +
        '">' +
        item.original.value +
        "</a>&nbsp</span>"
        // '<a href="' + item.original.email +'">' + item.original.value+'</a>'
        // '@' + item.original.value
    );
    }
    return "@" + item.original.value;
},
requireLeadingSpace: false,
allowSpaces: true
});
tribute.attach(document.getElementById("test"));
tribute.attach(document.getElementById("testInput"));
tribute.attach(document.getElementById("testarea"));

// logic for getting edited msgs
function getIndex(str) {
    for (var j=0; j<nameData.length; j++) {
        if (nameData[j] === str) return j;
    }
    return -1;
}

function getIndexID(str) {
    for (var j=0; j<nameData.length; j++) {
        if (idData[j] === str) return j;
    }
    return -1;
}

function myFunction() {
    var text = document.getElementById('test').innerText;
    var textArray = text.split(/(\s+)/);
    var wordArray = [];
    console.log(textArray);
    for(var i=0; i<textArray.length; i++){
        if(textArray[i][0] != " " && textArray[i].length > 0){
            wordArray.push(textArray[i]);
        }
    }
    // replacing mentions with ids
    modText = "";
    for(i=0; i<wordArray.length; i++){
        var index = getIndex(wordArray[i]);
        if(index != -1){
            modText += "#@" + data[index].id;
        }
        else{
            modText += wordArray[i] + " ";
        }
    }
    console.log(modText);
    document.getElementById('output-text-1').innerHTML = modText;
    
    // getting original msg from the converted msg
    var orginalText = " ";
    modTextArray = modText.split(/(\s+)/);
    console.log(modTextArray);
    for(i=0; i<modTextArray.length; i++){
        if(modTextArray[i][0] != " " && modTextArray[i].length > 0){
            if(modTextArray[i][0] === "#" && modTextArray[i][1] === "@"){
                var index = getIndexID(modTextArray[i].substring(2, modTextArray[i].length));
                if(index != -1){
                    orginalText += data[index].value + " ";
                }
            }
            else{
                orginalText += modTextArray[i] + " ";
            }
        }
    }
    document.getElementById('output-text-2').innerHTML = orginalText;
}