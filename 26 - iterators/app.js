// const users = ["Bakai", "Adilbek", "Beknazar"];

// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function () {
//             return nextIndex < names.length ? {
//                 value: names[nextIndex++],
//                 done: false
//             } : {
//                 done: true
//             };
//         }
//     };
// }
// const names = nameIterator(users);
// console.log(names.next());



////22222222
// function* generateId(){
//     let index = 1;

//     while(true){
//         yield index++;                             //уражай   тушум
//     }
// }

// const ids = generateId();
// console.log(ids.next().value);
// ///......
// console.log(ids.next().value);


const data = [
    {
        name: "Bakai",
        age: 21,
        location: "san vransisco",
        image: "https://randomuser.me/api/portraits/med/men/9.jpg",
    },
    {
        name: "Adi",
        age: 20,
        location: "London",
        image: "https://randomuser.me/api/portraits/med/men/9.jpg",
    },
    {
        name: "Asan",
        age: 18,
        location: "Bishkek",
        image: "https://randomuser.me/api/portraits/med/men/79.jpg",
    },
];

//profile iterator

function profileIterator(profiles) {
    let nextIndex = 0;
  
    return {
      next: () => {
        return nextIndex < profiles.length 
          ? {
              value: profiles[nextIndex++],
              done: false,
            }
          : {
              done: true,
            };
      },
    };
  }
  
  const profiles = profileIterator(data);
  
  nextProfile();
  
  document.getElementById("next").addEventListener("click", nextProfile);
  
  function nextProfile() {
    const currentProfile = profiles.next().value;
  
    if (currentProfile !== undefined) {
      document.getElementById("profile-display").innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">
            <h3>Name: ${currentProfile.name}</h3>
            <p>Age: ${currentProfile.age}</p>
            <p>Location: ${currentProfile.location}</p>
          </li>
        </ul>
      `;
  
      document.getElementById("image-display").innerHTML = `
        <img src="${currentProfile.image}">
      `;
    } else {
      alert("No more Users");
    }
  }