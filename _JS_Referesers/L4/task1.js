console.log("Task 1");

// Task 1: 
// - Create a function that accepts n number of strings. (Hint - you need to use rest).
// - From those strings, you need to print the string that contains maximum number of vowels. (a, e, i, o, u).

const countVowel = word => {
    let vowel = 0;
    for(let i = 0; i < word.length; i++) {
        const singleCharacter = word[i].toLowerCase();
        if(singleCharacter == 'a' || singleCharacter == 'e' || singleCharacter == 'i' || singleCharacter == 'o' || singleCharacter == 'u') {
            vowel++;
        }
    }
    return vowel;
}

const getMax = (...word) => {
    let maxString = word[0];
    let maxCount = countVowel(word[0]);

    for (let i = 0; i < word.length; i++) {
        const singleWord = word[i];
        const wordVowelCount = countVowel(singleWord);
        
        if(wordVowelCount > maxCount) {
            maxCount = wordVowelCount;
            maxString = singleWord;
        }
    }
    return maxString;
}

const word = getMax("Geekster", "aEiOuii", "Vishal", "Mathematics", "enthustic", "JavaScript", "aaaaaa");
console.log(word);