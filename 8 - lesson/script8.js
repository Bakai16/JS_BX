function peelPotatoes(numberOfPototoes){
    console.log("Potatoes left: " + numberOfPototoes);

    numberOfPototoes -= 1;
    if (numberOfPototoes > 0){
        peelPotatoes(numberOfPototoes);
    }
}

peelPotatoes(20);