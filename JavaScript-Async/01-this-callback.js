// Probleme de this
// class Contact {
//   // class properties ES2022
//   name = 'Romain';
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   helloWithAsync() {
//     setTimeout(function() {
//       console.log(`Hello ${this.name}`);
//     }, 1000);
//   }
// }

// Aliaser this dans la portée de closure
// class Contact {
//   // class properties ES2022
//   name = 'Romain';
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   helloWithAsync() {
//     const that = this; // self, _this, me
//     setTimeout(function() {
//       console.log(`Hello ${that.name}`);
//     }, 1000);
//   }
// }

// .bind (ES5)
// class Contact {
//   // class properties ES2022
//   name = 'Romain';
//   hello() {
//     console.log(`Hello ${this.name}`);
//   }
//   helloWithAsync() {
//     setTimeout(this.hello.bind(this), 1000);
//   }
// }

// ES6 arrow function
class Contact {
  // class properties ES2022
  name = 'Romain';
  hello() {
    console.log(`Hello ${this.name}`);
  }
  helloWithAsync() {
    setTimeout(() => {
      console.log(`Hello ${this.name}`);
    }, 1000);
  }
}

const contact = new Contact();
contact.hello()
contact.helloWithAsync();

