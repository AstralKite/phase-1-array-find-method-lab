const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


  function superbowlWin(record){
    let obj;
    obj = record.find(element => element.result === 'W');

    if(obj === undefined){
        return obj;
    } else{
        return obj.year;
    } 
}