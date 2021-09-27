let search = async (slot, prop, carArray) => {
    for (var i = 0; i < carArray.length; i++) {
      if (carArray[i][prop].no === slot) {
        return carArray[i];
      }
    }
    return false;
  }
  
let remove = async (slot, prop, carArray) => {
    var i = carArray.length;
    let removedItem = [];
    while (i--) {
        console.log(carArray[i][prop].no, '===', slot)
        if (carArray[i]
        && carArray[i].hasOwnProperty(prop)
        && (arguments.length > 2 && carArray[i][prop].no === slot)) {
        removedItem = carArray.splice(i, 1);
        }
    }
    return removedItem;
}

let receipt = async (slot, prop, carArray) => {
    //var time = '';
        let row = carArray[0];
        console.log(row,'----------',row.slot.start_time);
        console.log(new Date(row.slot.start_time).getTime());
        var diff =(new Date().getTime() - new Date(row.slot.start_time).getTime()) / 1000;
        console.log(diff);
        diff /= (60 * 60);
        let hours   = Math.floor(diff / 3600); // get hours
        let minutes = Math.floor((diff - (hours * 3600)) / 60); // get minutes
        let seconds = diff - (hours * 3600) - (minutes * 60); //  get seconds
        // add 0 if value < 10; Example: 2 => 02
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        let time = hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
        console.log(`Slot ${row.slot.no} parking time is ${time} `)
        return `Slot ${row.slot.no} parking time is ${time} `;
        //console.log(row.slot + "\t         " + row.registratonNo + "\t         " + row.color);
    
    //return time;
}

module.exports = {
    search,
    remove,
    receipt
}
  
  
