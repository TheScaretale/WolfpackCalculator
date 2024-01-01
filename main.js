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