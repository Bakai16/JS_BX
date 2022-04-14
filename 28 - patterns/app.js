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