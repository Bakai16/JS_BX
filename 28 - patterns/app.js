// const UICtl = (function (){
//     let text = "Hello";

//     const changeText = function (){
//         const element = document.querySelector("h1");
//         element.textContent = text;
//     };

//     return {
//         callChangeText: function(){
//             changeText();
//             console.log(text);
//         }
//     };
// })();

// UICtl.callChangeText();



//Reveling module    раскрытие     ачып берүү

//  const ItemCtrl = (function (){
//     let data = [];

//     function add(item){
//         data.push(item);
//         console.log('Item Added...'); 
//     }

//     function get(id){
//         return data.find(item => {
//             return item.id === id;
//         });
//     }

//     return {
//         add: add,
//         get: get,
//     };
//  });

//  ItemCtrl.add({id: 1, name: "John"});
//  console.log(ItemCtrl(1));


//singleton

//  const Singleton = (function(){
//      let instance;

//      function createInstance(){
//          const object = new Object ({name: "Pete"}); 
//          return object; 
//      }

//      return {
//          getInstance: function(){
//              if(!instance){
//                 instance = createInstance();
//              }
//              return instance;
//          }
//      };
//  })();

//  const instance1 = Singleton.getInstance();
//  const instance2 = Singleton.getInstance();

//  console.log(instance1);
//  console.log(instance2);



//Factory 

// function MemberFactory() {
//   this.createMember = function (name, type) {
//     let member;

//     if (type === "simple") {
//       member = new SimpleMembership(name);
//     } else if (type === "standard") {
//       member = new StandardMembership(name);
//     } else if (type === "vip") {
//       member = new VipMembership(name);
//     }

//     member.type = type;

//     member.define = function () {
//       console.log(`${this.name} - (${this.type} - ${this.cost})`);
//     };

//     return member;
//   };
// }

// const SimpleMembership = function (name) {
//   this.name = name;
//   this.cost = 5;
// };

// const StandardMembership = function (name) {
//   this.name = name;
//   this.cost = 50;
// };

// const VipMembership = function (name) {
//   this.name = name;
//   this.cost = 500;
// };

// const members = [];

// const factory = new MemberFactory();

// members.push(factory.createMember("John", "simple"));
// members.push(factory.createMember("Tom", "standard"));
// members.push(factory.createMember("Pete", "vip"));

// members.forEach((member) => {
//   member.define();
// });

//observer

// function EventObserver() {
//   this.observers = [];
// }

// EventObserver.prototype = {
//   subscribe: function (fn) {
//     this.observers.push(fn);
//     console.log(`Subscribed to: ${fn.name}`);
//   },

//   unsubscribe: function (fn) {
//     this.observers = this.observers.filter((item) => {
//       if (item !== fn) {
//         return item;
//       }
//     });

//     console.log(`Unsubscribed from ${fn.name}`);
//   },

//   fire: function () {
//     this.observers.forEach((item) => {
//       item.call();
//     });
//   },
// };

// const click = new EventObserver();

// document.querySelector(".sub-ms").addEventListener("click", () => {
//   click.subscribe(getCurrentMilliseconds);
// });

// document.querySelector(".unsub-ms").addEventListener("click", () => {
//   click.unsubscribe(getCurrentMilliseconds);
// });

// document.querySelector(".fire").addEventListener("click", () => {
//   click.fire();
// });

// const getCurrentMilliseconds = function () {
//   console.log(`Current ms: ${new Date().getMilliseconds()}`);
// };


//Mediator 

const User = function (name) {
    this.name = name;
    this.chatroom = null;
  };
  
  User.prototype = {
    send: function (message, to) {
      this.chatroom.send(message, this, to);
    },
  
    receive: function (message, from) {
      console.log(`${from.name} to ${this.name}: ${message}`);
    },
  };
  
  const ChatRoom = function () {
    let users = {};
  
    return {
      register: function (user) {
        users[user.name] = user;
        user.chatroom = this;
      },
  
      send: function (message, from, to) {
        if (to) {
          to.receive(message, from);
        } else {
          for (key in users) {
            if (users[key] !== from) {
              users[key].receive(message, from);
            }
          }
        }
      },
    };
  };
  
  const john = new User("john");
  const pete = new User("pete");
  const bob = new User("bob");
  
  const chatroom = new ChatRoom();
  
  chatroom.register(john);
  chatroom.register(pete);
  chatroom.register(bob);
  
  john.send("Hello Pete", pete);
  pete.send("Hello Bob", bob);
  bob.send("Hello everyone");