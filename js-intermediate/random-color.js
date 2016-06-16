// randomColor() -> ‪#‎ab2c92‬
// randomColor() -> ‪#‎6f220a‬


var randomColor = function makeid()
{
    var color = "";
    var possible = "abcdef0123456789";

    for( var i=0; i < 6; i++ )
        color += possible.charAt(Math.floor(Math.random() * possible.length));

    console.log("#" + color);
}
randomColor();