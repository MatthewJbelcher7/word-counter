// Business Logic

// function wordCounter(text) {
//   if (text.trim().length === 0) {
//     return 0;
//   }
//   let wordCount = 0;
//   const textArray = text.split(" ");
//   textArray.forEach(function(element) {
//     if (!Number(element)) {
//       wordCount++;
//     }
//   });
//   return wordCount;
function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function includesRarestLetter(word) {
  if (word.toLowerCase().includes("q")) {
    return true;
  }
  return false;
}

function omitOffensiveWords(word, text) {
  // make passage lowercase to check
  let lowercasePassage = text.toLowerCase();
  return lowercasePassage.replaceAll(word,"");

  // const textArray = text.split(" ");

  // textArray.forEach(function(element) {
  //   if (element.toLowerCase().contains(word)) {
  //     element.replace(word,"")
  //   }
  // });
}