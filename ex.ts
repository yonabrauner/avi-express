function checkValid(s: string): boolean {
    s = s.replace(/[^{}()[\]|]/g,'');
    let stack: string[] = [];
    
    for (const c of s){
        if (c == '[' || c == '{' || c == '('){
            stack.push(c);
        } else if (c == '|'){
            if (stack.length) {
                let top = stack.pop();
                if (top !== '|') {
                    stack.push(top!);
                    stack.push('|');
                }
            }
        } else if (!stack.length){
            return false;
        } else {
            if (c == ']') {
                if (stack.pop() !== '[') return false;
            } else if (c == ')') {
                if (stack.pop() !== '(') return false;
            } else if (c == '}') {
                if (stack.pop() !== '{') return false;
            }
        }
    }
    if (stack.length) return false;
    return true;
}

console.log(checkValid("|[|]|")); 
console.log(checkValid("|(|)|")); 
console.log(checkValid("[|]"));   
console.log(checkValid("[|"));    
console.log(checkValid("|[|]"));  