/* 
This file is purely extra stuff that help generate numbers, colours and more.
It is not meant to be modified and is only here for additional features.

This boilerplate was made by github.com/Maxson52
*/

function randNumberGenerator(a) {
    var rand = Math.floor(Math.random() * a + 1);
    return rand;
}

function randColourGenerator() {
    var colours = ['#f30067', '#00d1cd', '#7b88ff', '#621e81'];
    
    var rand = colours[Math.floor(Math.random() * colours.length)];
    return rand;
}