// function to check empty spaces 
function noInputtedWord(word,text){
    ((word.trim().length === 0) || (text.trim().length === 0))
    return 0;
    }

    //function to counter total number of words in a text
function wordCounter(text) {
    if (text.trim().length === 0) {
      
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
  let badWords = ["zoinks", "muppeteer", "biffaroni","loopdaloop"];
  function offensiveWords(words){
    let newWord = words.split(" ");
    nonOffensive = [];
    newWord.forEach(function(element){
        if(badWords.includes(element)){
            nonOffensive.push("****")
        }else{
            nonOffensive.push(element);
        }
    })
    let finalWord = nonOffensive.join(" ");
    return finalWord;
}

//   function to bold text