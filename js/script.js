// function to check empty spaces 
function noInputtedWord(word,text){
    ((word.trim().length === 0) || (text.trim().length === 0))
    return 0;
    }

    //function to counter total number of words in a text
function wordCounter(text) {
    if (text.trim().length === 0){
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function(element) {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;
  }

  // to check occurences of word in a text
  function numberOfOccurrencesInText(word, text) {
    if (word.trim().length === 0) {
      return 0;
    }
    const wordArray = text.split(" ");
    let wordCount = 0;
    wordArray.forEach(function(element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;
  }
  
  //function to check offensive words
  let badWords = ["zoinks", "muppeteer", "biffaroni","loopdaloop"];//offensive words
  function offensiveWords(word){
    let newWord = word.split(" ");
    nonOffensive = [];
    newWord.forEach(function(element){
        if(badWords.includes(element)){
            nonOffensive.push("****")
        }else{
            nonOffensive.push(element);
        }
    });
    let finalWord = nonOffensive.join(" ");
    return finalWord;
}
//occurences
// function list(text){
//   const char = {};
//   const arr = text.split(" ");
//   for(let word of arr){
//     if(!char[word]){
//       char[word] = 1;
//     }
//     else{
//       char[word]++;
//     }
//   };
//   console.log(char);
//   //  $("#most").text(char[text]);
//   }
function topThreeWords(text) {
  // if (errorCheck(text)) {
  //   return 0;
  // }
  // let text = filterSentence(text);
  let textArray = text.split(" ");
  let topmost = 0;
  let topmostWord = "";
  let secondMost = 0;
  let secondWord = "";
  let thirdMost = 0;
  let thirdWord = "";
  let result = "";
  textArray.forEach(function (element) {
    let numberOfTimes = numberOfOccurrencesInText(element, text);
    if (numberOfTimes > topmost) {
      topmost = numberOfTimes;
      topmostWord = element;
    } else if (numberOfTimes > secondMost) {
      secondMost = numberOfTimes;
      secondWord = element;
    } else if (numberOfTimes > thirdMost) {
      thirdMost = numberOfTimes;
      thirdWord = element;
    }
    result = topmostWord + " " + topmost + "<br>" + secondWord + " " + secondMost + "<br>" + thirdWord + " " + thirdMost;
  });
  return result;
}


//   function to bold text
function boldPassage(word, text) {
    if(noInputtedWord(word,text)){
      return ""
    }
    let htmlString = "<p>";
    let textArray = text.split(" ");
    textArray.forEach(function(element, index) {
        if (element.toLowerCase().includes(word.toLowerCase()))  {
            htmlString = htmlString.concat("<b>" + element + "</b>");
        } else {
            htmlString = htmlString.concat(element);
        }
        if (index !== (textArray.length - 1)) {
            htmlString = htmlString.concat(" ");
        }
    });
    return htmlString + "</p>";
  }

//   UI LOGIC
$(document).ready(function(){
    $("#project").submit(function(event){
      event.preventDefault();
      const text = $("#text").val();
      const word = $("#word").val();
      const wordCount = wordCounter(text);
      const occurrencesOfWord = numberOfOccurrencesInText(word, text);
      const nonOffensive = offensiveWords(text);
      const top = topThreeWords(text);
      $("#total").html(wordCount);
      $("#selected").html(occurrencesOfWord);
      $("#offensive").html(nonOffensive);
      $("#bold").html(boldPassage(word, text));
      $("#most").append(top);
     

    })
  });
