function receivesAFunction(thing) { return thing() }
function returnsANamedFunction() {
    function namedFunction() {
        console.log("done")
    }
    return namedFunction;
}
function returnsAnAnonymousFunction() {
    return () => console.log("done")
}