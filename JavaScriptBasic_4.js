console.log('Tast Number 4');


// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

let a = 5;
let b = 6;
let c = 7;

// 1. Area = h * C / 2   h - heigth for base side

function areaH(a, b, c) {
    
    let trBase = ((c * c + a * a - b * b) / 2 * 1 / c);
    let H = Math.sqrt(a * a - trBase * trBase);
    let areaTr = H * c / 2;
        return `Triangle AREA is - ${areaTr}: H - height is - ${H}`;
}

//Reslut 1
let fooAreaH = areaH(a, b, c);
console.log(fooAreaH);


// 2. Area = sqrt( S(S - a)(S - b)(S - b) )   S - perimeter

function areaPerimeter(a, b, c) {
    let s = (a + b + c) / 2;
    areaTr = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return `Triangle AREA is - ${areaTr}`;
    
}
//Reslut 2

let fooAreaPerimeter = areaPerimeter(a, b, c);
console.log(fooAreaPerimeter);









