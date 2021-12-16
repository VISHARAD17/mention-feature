
/////////// test 1---------------------------------------------------------------------
// var wordArray = "@visharad$@akshay$";
// var text = "";

// function countMentions(str){
//     var ans = 0;
//     for(var i=0; i<str.length; i++){
//         if(str[i] == "@") ans += 1;
//     }
//     return ans;
// }
// if(wordArray[0] == "@" && wordArray.length > 1){
//     var len = wordArray.length;
//     var word = wordArray;
//     var i=0;
//     var words = [];
//     var count = countMentions(word);
//     var t = "";
//     for(i=0; i<len; i++){
//         if(word[i] == "$" && count > 0){
//             t += word[i];
//             words.push(t);
//             t = "";
//             count -= 1;
//         }
//         else t += word[i];
//     }
//     if(t.llength > 0)words.push(t);
//     for(var i=0; i<words.length; i++){
//         if(words[i][0] == "@"){
//             //remove first and last letter of the word
//             words[i] = words[i].slice(1); // removes first charactor
//             words[i] = words[i].slice(0, -1); // removes last charactor
//         }
//     }
// }
// console.log(words);
// for(var i=0; i<words.length; i++){
//     text += words[i] +" ";
// }
// console.log(text);

// attempt-2----------------------------------------------------
var text = [
    "hii",
    "visharad",
    "how",
    "are",
    "you",
    "??"
];
var ans = "";
for(var i=0; i<text.length; i++){
    if(text[i].length > 1 && text[i] == "@" && text[i][1] != "@"){
        text[i] = text[1].slice(i);
        ans += text[i] + " ";
    }
    else{
        ans += text[i] + " ";
    }
}
console.log(ans);