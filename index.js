const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = 0;

totalBatteries = batteryBatches.reduce(function(totalAmount =0, batteryBatches){
    return totalAmount += batteryBatches;
}, 0);