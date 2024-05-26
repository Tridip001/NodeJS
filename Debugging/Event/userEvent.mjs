//Make a class of Event:
// Import event module
// const EventEmitter = require('events');
// do this to es6 way..
import * as Events from "events";
export class UserEvents extends Events.EventEmitter {
  //event
   createPost(content){
    console.log('Post is Created\n');
    this.emit("postCreated");
   }
}