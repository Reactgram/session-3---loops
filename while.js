

// let i = 1
// for( ; i<=5; ){
    
//     console.log('Loop:', i); // 1,2,3,4,5

//     i=i+1 // 2,3
// }


// let i = 1
// while(i<=5){

//     console.log(i)

//     i=i+1
// }


// let n = 1257

//  while(n>0){ // 125, 12, 1
//     let last = n%10 // 7,5,2,1
//     // console.log(last)
//     n = parseInt(n/10) //0.1 => 0
//  }

// let n = 1257     //0
// for(i = n; i>0; i = parseInt(i/10)){

//     let last = i%10 // 7,5,2,1
//     console.log(last)

// }



// for(let i = 1; i<=100; i=i*10)














// step 1:  n = 1257
// last = n%10  // 7
// n = parseInt(n/10) // 125.7 => 125

// // step 2: n = 125
// last  = n%10  // 5
// n = parseInt(n/10) // 12.5 => 12

// // step 3: n = 12
// last = n%10  // 2
// n = parseInt(n/10) // 1.2 => 1

// // step 4: n = 1
// last = n%10  // 1
// n = parseInt(n/10) // 0.1 => 0






// let n = 1257

// let rev = 0
// // reverse a number
//  while(n>0){ // 125, 12, 1
//     let last = n%10 // 7,5,2,1 // 7521
//     rev = rev*10 + last //70+5= 750+2 = 752*10 = 7520+1 = 7521
//     n = parseInt(n/10) //0.1 => 0
//  }
//  console.log(rev)


// displays each digit
// 7521
//  n = rev // 7521
//  while(n>0){ 
//     let last = n%10 // 1,2,5,7
//     console.log(last)
//     n = parseInt(n/10) 
//  }



 