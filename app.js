function sortByBirth(arr) {
    return arr.sort((a, b) => {
        let birthYearA = a.split(" ")[1];
        let birthYearB = b.split(" ")[1];
        
        if (birthYearA < birthYearB) {
            return -1;
        } else if (birthYearA > birthYearB) {
            return 1;
        } else {
            return 0;
        }
    });
}

let people = [
    "Tom 1985",
    "Adam 1990",
    "David 1980",
    "Alice 1995"
];

let sortedPeople = sortByBirth(people);
console.log(sortedPeople);
