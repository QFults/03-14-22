// const exPromise = () => new Promise((resolve, reject) => {
//   resolve(true)
//   // reject(new Error('Something went wrong'))
// })

// const exPromise1 = () => new Promise((resolve, reject) => {
//   resolve('hello')
//   // reject(new Error('Something went wrong'))
// })

// const exPromise2 = () => new Promise((resolve, reject) => {
//   resolve(5)
//   // reject(new Error('Something went wrong'))
// })

// exPromise()
// .then(() => console.log('hi'))
// .catch(err => console.log(err))

// exPromise()
//   .then(bool => {
//     exPromise1()
//       .then(msg => {
//         exPromise2()
//           .then(num => {
//             console.log(bool, msg, num)
//           })
//           .catch(err => console.log(err))
//       })
//       .catch(err => console.log(err))
//   })
//   .catch(err => console.log(err))

// Promise.all([exPromise(), exPromise1(), exPromise2()])
//   .then(values => {
//     console.log(values)
//   })
//   .catch(err => console.log(err))

// console.log(5 / 7)

class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }
  printInfo () {
    console.log(`Width: ${this.width}cm | Height: ${this.height}cm`)
  }
}

const shape = new Rectangle(500, 900)

// console.log(shape)
shape.printInfo()
