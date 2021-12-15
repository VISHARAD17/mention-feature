// var data = [
//     {
//         key: "visharad",
//         value: "visharad",
//         email: "visharad@gmail.com",
//         id:'1'
//     },
//     {
//         key: "akshay",
//         value: "akshay",
//         email: "akshay@gmail.com",
//         id :'2'
//     },
//     {
//         key: "chinmay",
//         value: "chinmay",
//         email: "chinmay@gmail.com",
//         id:'3'
//     }
// ];
// // dummy sentence
// var str = "hii visharad";

// var nameData = [];
// for(var i=0; i<data.length; i++) nameData.push(data[i].value);

// // printing name data
// // for(i=0; i<nameData.length; i++) console.log(nameData[i]);

// var wordArray = str.split(" ");
// var modText = "";
// // priting words in str
// // for(i=0; i<wordArray.length; i++){
// //     console.log(wordArray[i]);
// // }

// function getIndex(str){
//     for(i=0; i<nameData.length; i++){
//         if(nameData[i].match(str)) return i;
//     }
//     return -1;
// }


// for(i=0; i<wordArray.length; i++){
    
//     if(nameData.includes(wordArray[i])){
//        console.log("YES");
//     }
//     else{
//         console.log("NO");
       
//     }
// }

// // for(i=0; i<wordArray.length; i++){
// //     let index = getIndex(wordArray[i])
// //     if(index != -1){
// //         console.log("YES");
// //         modText += "@#" + toString(data[index].id) + " ";
// //     }
// //     else{
// //         console.log("NO");
// //         modText += wordArray[i] + " ";
// //     }
// // }

// console.log("modText:" + modText);


text = "hi visharad how is akshay";
// var str   = "my car is red";
// var stringArray = str.split(/(\s+)/);
console.log(text.split(/(\s+)/));