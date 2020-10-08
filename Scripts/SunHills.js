function sunHills() {
    //Step 1: Add event listener for button click
    //On my main index Page towards the bottom


    //Step 2: Gather user input the put into an array
    let bldgHeight1 = Number(document.getElementById("txtSunsetIn1").value);
    let bldgHeight2 = Number(document.getElementById("txtSunsetIn2").value);
    let bldgHeight3 = Number(document.getElementById("txtSunsetIn3").value);
    let bldgHeight4 = Number(document.getElementById("txtSunsetIn4").value);
    let bldgHeight5 = Number(document.getElementById("txtSunsetIn5").value);

    var bldgArray = [];
    var result = [];
    bldgArray.push(bldgHeight1);
    bldgArray.push(bldgHeight2);
    bldgArray.push(bldgHeight3);
    bldgArray.push(bldgHeight4);
    bldgArray.push(bldgHeight5);



    //Step 3: traverse array from right to left. And keep track of bldgs the can see sunset
    
    for (let i = bldgArray.length - 1; i >= 2; i--) {
        if (bldgArray[i] < bldgArray[i - 1]) {
            result.push(bldgArray[i - 1])
        } else {
            result.push(bldgArray[i])
        }
    };

    result.push(bldgArray[0])
    result.reverse()


    //Step 4: Out to the user on which buildings can sunset
    //Where result will go
    document.getElementById("SSoutput").innerHTML = result;
};