//for (let i = 100; i >= 0; i-- ) {
//    if (i % 2 === 0) {
//      console.log (i);
//    }
//}
//let i = 0;
//while (i <= 100) {
//    console.log(i);
//    i++;
//}


//let i = 0;
//do {
//    console.log(i)
//}
//    
// while (i > 100);

// let num = parseInt(prompt('Pleas enter a number'));
// while (Number.isNaN(num)) {
//     alert('Pleas enter a number!')
//     num = parseInt (prompt('Pleas enter a number'));
// }

// let num;
// do {
//     num = parseInt(prompt('Pleas enter a number'));
// } while (Number.isNaN(num));

let productNames = [ 'Xiomi Mi8', 'Chevrolet Corvette', 'Sony'];

productNames.push('Tesla X');
 productNames.push('IPhone 8');
 productNames.push('Banana');
 productNames.push('Toyota Corolla');


console.log(productNames [2]);
console.log(productNames.length);

// for (let i = 0; i < productNames.length; i++) {
//     console.log(productNames[i]);
// }

productNames.forEach(function(el)
 {
    console.log(el); 
});

productNames.forEach( (ind, el) => console.log(el, ind));






