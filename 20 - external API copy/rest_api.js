//  GET 
//  POST 
//  PUT
//  DELETE


//  ENDPOINTS

// GET --- http://api.myapp.com/users  --- GET All users
// GET --- http://api.myapp.com/users/1  --- GET single user 

// POST --- http://api.myapp.com/users  --- Create new user

// PUT --- http://api.myapp.com/users/1  --- Update user 

// DELETE --- http://api.myapp.com/users/1  --- DELETE 

const posts = [
    {
        title: 'Post 1 title',
        body: "Post 1 body text",
    },
    {
        title: 'Post 2 title',
        body: "Post 2 body text",
    }
];

function createPost(post){
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        posts.push(post);
        
        const error = true;

        if(error){
            resolve();
        }else{
            reject(error);
        }
    }, 3000); 
  });  
}


function getPosts (){
    setTimeout(()=>
    {
        let output = "";

        posts.forEach((post)=> {
            output += `
            <li>
            ${post.title}
            </li>`;
        });

        document.body.innerHTML = output;

    }, 1000);
}



createPost({title: "Post 3 title", body: "Post body 3 text"})
.then(getPosts)
.catch((error)=>{
    console.log(error);
});



