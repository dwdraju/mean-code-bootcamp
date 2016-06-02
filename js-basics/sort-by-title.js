var library = [ 
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

var byTitle = library.slice(0);
byTitle.sort(function(a,b) {
    var x = a.title.toLowerCase();
    var y = b.title.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});

console.log(byTitle);