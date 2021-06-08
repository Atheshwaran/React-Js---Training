function* increment() {
    console.log("Created");
    const a = yield "Enter value for A";
    console.log("Value of A = ", a);
    const b = yield "Enter value for B";
    console.log("Value of B = ", b);
    return a + b;
}

const add = increment();
console.log(add.next());
console.log(add.next(10));
console.log(add.next(20));