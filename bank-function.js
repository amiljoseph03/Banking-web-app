// db = {
//   1000: {
//     acno: 1000,
//     username: 'Neer',
//     password: 1000,
//     balance: 5000,
//     transaction: [],
//   },
//   1001: {
//     acno: 1001,
//     username: 'Laisha',
//     password: 1001,
//     balance: 5000,
//     transaction: [],
//   },
//   1002: {
//     acno: 1002,
//     username: 'Vyom',
//     password: 1002,
//     balance: 3000,
//     transaction: [],
//   },
// };

// //1 create a function for validate account number. To validate account check
// //if account number in db return true otherwise return false

// function validate(acno){
//     if(acno in db){
//     //  return acno in db
//     // return console.log("yes")
//     return true
//     }
//     else{
//         console.log("no")
//         return false
//     }

// }
// console.log(validate(1001))
// console.log(validate(100))

// // or
// function val(acno){
//     return acno in db?true:false
// }
// console.log(val(1001))

// //2 create a function for authenticate user using
// // account number and password
// //if both are in db then print 'access granted'
// //  otherwise print 'permission denied'
// //authenticated(acno,pswd)?access granted else permission denied

// function authenticate(acno,pass){
//     if(val(acno)){
//         actualpassword=db[acno].password

//         if(pass==actualpassword){
//             console.log("successful")
//         }else{
//             console.log("invalid")
//         }
//     }
//     else{
//         console.log("invalid acno")
//     }

// }

// authenticate(1001,1001)
// authenticate(1001,100)
// authenticate(10,100)

///////////db inside a class /////////////////////////////////////////////////////////////////
class Bank {
  db = {
    1000: {
      acno: 1000,
      username: 'Neer',
      password: 1000,
      balance: 5000,
      transaction: [],
    },
    1001: {
      acno: 1001,
      username: 'Laisha',
      password: 1001,
      balance: 5000,
      transaction: [],
    },
    1002: {
      acno: 1002,
      username: 'Vyom',
      password: 1002,
      balance: 3000,
      transaction: [],
    },
  };

  // validate
  bankval(acno) {
    return acno in this.db;
  }

  // authenticate
  bankauthenticate(acno, pass) {
    if (this.bankval(acno)) {
      if (pass == this.db[acno].password) {
        console.log('Login successful');
      } else {
        console.log('Invalid password');
      }
    } else {
      console.log('Invalid account number');
    }
  }
  // }

  // balance

  getbalance(acno) {
    return this.bankval(acno) ? this.db[acno].balance : 'invalid';
  }

  // fundtransfer
  fundtransfer(fromacno, toacno, amount) {
    if (this.bankval(fromacno) && this.bankval(toacno)) {
      if (this.db[fromacno].balance > amount)
        this.db[fromacno].balance -= amount;
      this.db[toacno].balance += amount;
      console.log('done');
    } else {
      console.log('faild');
    }
  }
}
let bank = new Bank();

bank.bankauthenticate(1001, 1001);
bank.bankauthenticate(1001, 100);
bank.bankauthenticate(10, 100);

console.log(bank.bankval(1001));

console.log(bank.getbalance(1000));
bank.fundtransfer(1000, 1002, 3000);
bank.fundtransfer(10, 102, 3000);
