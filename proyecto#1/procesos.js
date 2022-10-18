class stack {
    constructor () {
        this.items = {};
        this.top = 0;
    };

    push(data){
        this.top++;
        this.items[this.top] = data;
    };
    pop(){
        let deletdata;
        if(this.top){
            deletdata = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deletdata;
        }
    };
    getSize() {
        return this.top;
    };
    isEmpty() {
        if (!this.getSize()){
            return "pila vacia"
        }else{
                return "pila llena"
            }
        };
    print(){
        let result = "";
        for(let i = this,top; i > 0; i--) {
        result += this.items[i] + ''
        };
        return result;
    };
};

var stack = new stack();

document.getElementById("datos");

console.log(stack.getSize());
console.log(stack.pop());