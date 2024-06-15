
// Print the first 100 natural numbers:

// 1 , 100


// for(let i = 1; i<=100; i=i+1){
//     console.log(i)
// }


// Print the first 100  odd numbers:


// for(let i = 1;  i<=199; i=i+2){
//     console.log(i) // 1,3,5,7,9,11,13,15,17,19,21,23,25,27,29
// }


// print the first 87 odd numbers

// print all odd number between 1 and 87




// Print all the even numbers between 1 and 100
// count all the even numbers between 1 and 100 => 2,4,6,8,10 => 5
// sum of all the even numbers between 1 and 100 => 2+4+6+8+10 => 30



// for(let i = 1; i<=100; i++){
//     // console.log(i)
//     if(i%2==0){
//          console.log(i)
//     }
// }


// for(let i = 2; i<=100;  i=i+2){
//     console.log(i)
// }





// let count = 0
// // 1,2,3,4,5






// s1(w), s2, s3(w), s4, s5, s6(w), s7, s8, s9(w), s10


// count = 4




// sum  = 0

// s1(5), s2(10), s3(4), s4(6), s5(10), s6(20), s7(50), s8(10), s9(5), s10(5)


// sum = 125




let sum = 0
// 1,2,3,4,5,6,7,8,9,10
for(let i = 1; i<=10; i++){

    if(i%2==0){
       
        //    conut = count+1

        sum = sum + i 
    // i = 2 => sum = 0+2 => 2
    // i = 4 => sum = 2+4 => 6
    // i = 6 => sum = 6+6 => 12
    // i = 8 => sum = sum+i => 12+8 => 20
    // i = 10 => sum = sum+i => 20+10 => 30
     
    }

    


}

console.log(sum) // 30