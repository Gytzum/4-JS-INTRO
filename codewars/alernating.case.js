

String.prototype.toAlternatingCase = function () {
    let str = '';
for (let i = 0; i < this.length; i++) {
    if (this[i] == this[i].toLowerCase()) { str += this[i].toUpperCase()}
        else { str += this[i].toLowerCase() }
    }
    return str
}

    console.log("hello world".toAlternatingCase(), "HELLO WORLD");
    console.log("HELLO WORLD".toAlternatingCase(), "hello world");
    console.log("hello WORLD".toAlternatingCase(), "HELLO world");
    console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
    console.log("12345".toAlternatingCase(), "12345");
    console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
    console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
    console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");