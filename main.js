 /*
    D = Distance Traveled = Ship travel it's own length = Example ship 132m
    T = Distance Travel Time = Time for ship to travel it's own length = Example ship 51.39s
    U = U-Boat Speed in Knots
*/

function finalSpeed() {
    var uboatSpeed = parseFloat(document.getElementById("uboatSpeed").value);
    var targetLength = parseFloat(document.getElementById("targetLength").value); // D
    var targetTime = parseFloat(document.getElementById("targetTime").value); // T
    var targetSpeed;
    var d = targetLength / targetTime;
    
    //Conditions, check HTML radios

    if (document.getElementById('radio1').checked == true) {
        targetSpeed = uboatSpeed - (d * 1.944); // U - ( ( D / T ) * 1.944 ) = Speed (Kts)
    } else if (document.getElementById('radio2').checked == true) {
        targetSpeed = uboatSpeed + (d * 1.944); // U + ( (D / T) *1.944) = Speed (Kts)
    } else if (document.getElementById('radio3').checked == true) {
        targetSpeed = d * 1.944; // (D / T) * 1.944 = Speed (Kts)
    }

    targetSpeed = Math.abs(targetSpeed);

    document.getElementById("tgtSpeed").innerHTML = 'Target speed is: ' + targetSpeed.toFixed(1) + ' knots';
}

function AOBcalc(){
    var lengthRadian = parseFloat(document.getElementById("radiansLength").value)
    var heightRadian = parseFloat(document.getElementById("radiansHeight").value)
    var lengthShip = parseFloat(document.getElementById("shipLength").value)
    var heightShip = parseFloat(document.getElementById("shipHeight").value)
    var radiansCalc = (lengthRadian/(heightRadian/16))/(lengthShip/heightShip)
    //tests
    console.log('measured radians length: ', lengthRadian)
    console.log('measured radian height: ',heightRadian)
    console.log('ship length: ',lengthShip)
    console.log('ship height: ',heightShip)
    

    if(radiansCalc < 1.0){
        if(document.getElementById('radio1').checked == true){
            //tryint to figure out NaN
            console.log('first div: ', lengthRadian/(heightRadian/16))
            console.log('second div: ', lengthShip/heightShip)
            console.log('third div: ',(lengthRadian/(heightRadian/16))/(lengthShip/heightShip))
            
    
            var radians = Math.asin(radiansCalc);
            var degrees = radians * (180/Math.PI)
    
            //calc tests
            console.log('radians calculated: ',radians)
            console.log('AOB: ',degrees)
        }
        else if(document.getElementById('radio2').checked == true){
            //tryint to figure out NaN
            console.log('first div: ', lengthRadian/(heightRadian/16))
            console.log('second div: ', lengthShip/heightShip)
            console.log('third div: ',(lengthRadian/(heightRadian/16))/(lengthShip/heightShip))
    
            var radians = Math.asin(radiansCalc)
            var degrees = 180 - (radians*(180/Math.PI))
    
            //calc tests
            console.log('radians calculated: ',radians)
            console.log('AOB: ',degrees)
            
        }
        else{
            alert("Please check one of the options and fill in the data!")
        }
    }
    else{
        console.log('first div: ', lengthRadian/(heightRadian/16))
        console.log('second div: ', lengthShip/heightShip)
        console.log('third div: ',(lengthRadian/(heightRadian/16))/(lengthShip/heightShip))
        alert("Please check if data is correct or ship ID is correct.")
    }

    tgtAOB = Math.abs(degrees)
    document.getElementById("tgtAOB").innerHTML = 'Target AOB seems to be: ' + tgtAOB.toFixed(2) + '° left or right'
    
}