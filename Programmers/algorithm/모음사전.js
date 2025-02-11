function solution(word) {
    const dicionary = [];
    const volwes = ["A", "E", "I", "O", "U"];
    
    function generalWords(currentWord) {
        if(currentWord.length === 5) return;
        
        for(let i = 0; i < volwes.length; i++) {
            const newWord = currentWord + volwes[i];
            dicionary.push(newWord);
            generalWords(newWord);
        }
    }
    
    generalWords("");
    
    return dicionary.indexOf(word) + 1;
}