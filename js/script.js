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
  