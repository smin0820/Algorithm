function solution(babbling) {
    const joka = ['aya','ye','woo','ma'];
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < joka.length; j++){
            if(babble.includes(joka[j].repeat(2))){
                break;
            }
            babble = babble.split(joka[j]).join(" ");
        }
        if(babble.split(" ").join("").length === 0){
            count += 1;
        }
    }
    return count;
}