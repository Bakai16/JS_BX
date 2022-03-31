const UICtl = (function (){
    let text = "Hello";
     
    const changeText = function (){
        const element = document.querySelector("h1");
        element.textContent = text;
    };

    return {
        callChangeText: function(){
            changeText();
            console.log(text);
        }
    };
})();

UICtl.callChangeText();



//Reveling module    раскрытие     ачып берүү