// No. 5
import {Database} from "./database.js";
import {EventEmitter} from "./emiter.js";



// Użycie EventEmittera
let ev = new EventEmitter();

ev.on("hello", message => {
    console.log(`Witaj ${message} !`);
});

ev.on("hello", message => {
    console.log(`Siema ${message} .`);
});

ev.on("goodbye", () => {
    console.log(`Do widzenia!`);
});

ev.emit("hello", "Marek");
ev.emit("goodbye");
ev.emit("custom"); // nic się nie wydarzy

// DO ZROBIENIA!
// Docelowe użycie klasy Database
let db = new Database("db://localhost:3000"); // fikcyjny adres

db.on("connect", url => {
    console.log(`Połączenie z bazą pod adresem " + ${url} + " zostało ustanowione.`);
});

db.on("disconnect", url => {
    console.log(`Połączenie z bazą pod adresem " + ${url} + " zostało zakończone.`);
});

db.connect();

// po 5 sekundach rozłączamy się
setTimeout(() => {
    db.disconnect();
}, 5000);
