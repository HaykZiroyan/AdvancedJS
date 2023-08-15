/**
 13. Given the list of the following readers:

[
{ book: "Catcher in the Rye", readStatus: true, percent: 40 },
{ book: "Animal Farm", readStatus: true, percent: 20 },
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "The Fall", readStatus: true, percent: 50 },
{ book: "White Nights", readStatus: false, percent: 60 },
{ book: "After Dark", readStatus: true, percent: 70 },
];

Output the books sorted by the percent in descending order which readStatus is true.
 */

const books = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 },
];
const newBooks = []
const percent = []
for(const elem of books) {
    if(elem.readStatus) {
        percent.push(elem.percent)
    }
}
percent.sort(function(a, b){return b-a})

for(const item of percent) {
    for(const elem of books) {
        if(elem.readStatus && elem.percent == item) {
            newBooks.push(elem)
        }
    }
}

console.log(newBooks)



