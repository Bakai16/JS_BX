function peelPotatoes(numberOfPototoes){
    console.log("Potatoes left: " + numberOfPototoes);

    numberOfPototoes -= 1;
    if (numberOfPototoes > 0){
        peelPotatoes(numberOfPototoes);
    }
}

peelPotatoes(20);
//expected output: Potatoes left: 20  .... 1



//циклы
function peelPotatoes2(numberOfPotatoes){
    for(let i = numberOfPotatoes; i > 0; i--){
        console.log('Potatoes lefffft: ' + i );
    }
}
peelPotatoes2(20);
//expected output: Potatoes lefffft: 20  .... 1