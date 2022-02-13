

window.addEventListener("load", function () {
    const body = document.body;
    const card = document.createElement("div");
    const container = document.createElement("div");
    const img = document.createElement("img");
    const cardTitle = document.createElement("h3");
    const cardDescr = document.createElement("p");
    const cardCompany = document.createElement("ul");
    const descr = document.createElement("li");
    const img2 = document.createElement("img")
    const cost = document.createElement("span");
    
    const descr2 = document.createElement("li");
    const img4 = document.createElement("img")
    const lastDays = document.createElement("span");

    const author = document.createElement("ul");
    const authorImg = document.createElement("li");
    const img3 = document.createElement("img");
    const authorDesc = document.createElement("li");
    const authorName = document.createElement("a");


    body.append(card);
    card.append(container);
    container.append(img, cardTitle, cardDescr, cardCompany, author );

  card.id = "wrapper";


  body.style.cssText = `
        background-color: hsl(217, 54%, 11%);
        align-items: center;
        vertical-align: middle;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        height: 100vh;
        
  `;

    card.style.cssText = `
    
    background-color: hsl(216, 50%, 16%);
    width: 300px;
    
    border-radius: 10px;
    box-shadow: 0 0 0 21px hsl(218, 54%, 11%);
  `;



container.style.cssText = `
margin: auto;
    
    width: 90%;
    padding-bottom: 15px;
`;


    
img.setAttribute(
      "src",
      "./img/image-equilibrium.jpg"
    );
    img.style.cssText = `
    width: 100%;
    border-radius: 10px;
    margin: 15px auto;
  `;
  
    container.append(cardTitle);
    cardTitle.textContent = "Equilibrium #3429";
    cardTitle.style.cssText = `
    color: white;
    font-weight: 600;
  `;


    container.append(cardDescr);
    cardDescr.textContent = "Our Equilibrium collection ptomotes balance and calm";
    cardDescr.style.cssText = `
    color: hsl(215, 51%, 70%);
    font-weight: 400;
    
  `;



  
    container.append(cardCompany);
    cardCompany.style.cssText = `
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    color: hsl(178, 100%, 50%);
    padding-bottom: 20px;
    /* border-bottom-color: aquamarine; */
    border-bottom: 1px solid hsl(215, 51%, 70%);
    list-style: none;
    padding: 0;
    
  `;

  cardCompany.append(descr);

  descr.style.cssText = `
  align-items: flex-start;
  font-weight: 400;
  color: hsl(178, 100%, 50%);
  padding-bottom: 20px;
`;

descr.append(img2);
img2.setAttribute(
    "src",
    "./img/icon-ethereum.svg"
  );


descr.append(cost);
cost.textContent = ` 0.041ETH`;



cardCompany.append(descr2);
descr2.style.cssText = `
  align-items: flex-start;
  font-weight: 400;
  //color: hsl(178, 100%, 50%);
  padding-bottom: 20px;
`;
  descr2.append(img4);
    img4.setAttribute(
    "src",
    "./img/icon-clock.svg"
  );

  
  descr2.append(lastDays);
  lastDays.textContent = ` 3 day left`;
  lastDays.style.cssText = `
  font-weight: 400;
  color: hsl(215, 51%, 70%);
`;
  

  
    container.append(author);
    author.style.cssText = `
    display: flex;
    //justify-content: center;
    //vertical-align:center;
    align-items: center;
    list-style: none;
    padding: 0;
`;

    author.append(authorImg);
    authorImg.append(img3);
    img3.setAttribute(
        "src",
        "./img/image-avatar.png"
      );
      img3.style.cssText = `
      width: 25px;
      border: 1px solid white;
      border-radius:20px;
      
      margin: auto;
      margin-right: 10px;
    `;

    author.append(authorDesc);
    authorDesc.textContent = ` Creation of `;
    authorDesc.style.cssText = `
  
    font-weight: 400;
    color: white;
    
  
  `;

    authorDesc.append(authorName);
    authorName.textContent = ` Asan Asanov`;
    authorName.style.cssText = `
        
    font-weight: 400;
    color: hsl(178, 100%, 50%);
  
  `;
  });

  alert(`Я оцениваю свою работу на ___ баллов`);
