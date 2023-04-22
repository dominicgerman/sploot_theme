class Person {
  constructor(name) {
    this.name = name
    this.greet()
  }

  greet() {
    console.log(`Hey ${this.name} 👋`)
  }
}

export default Person
