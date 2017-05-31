import {EventEmitter} from "./emiter.js";

    export  class Database extends EventEmitter {

          constructor(url) {
            super();
            this.url = url;
          }
          connect(){
            this.emit("connect", this.url);
          }
          disconnect(){
            this.emit("disconnect", this.url);
          }

        }
