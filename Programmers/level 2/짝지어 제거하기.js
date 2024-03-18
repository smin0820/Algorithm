function solution(s) {
    var stack = [];
    s = s.split('');
    for(i = 0; i < s.length; i++) {
        if(s[i] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return !stack.length ? 1 : 0;
}