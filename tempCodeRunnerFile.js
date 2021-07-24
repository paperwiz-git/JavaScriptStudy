{
    let days =['mon', 'tue', 'wed'];

    days.push('thu');
    days.unshift('sun');

    // console.log(days);
    for(let index = 0; index < days.length; index++) {
        console.log(days[index]);
    }
    console.log('-----');
    for(let day of days) {
        console.log(day);
    }
}