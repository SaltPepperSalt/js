class Person {
  constructor(fN, lN) {
    this.fN = fN;
    this.lN = lN;
  }

  get fullName() {
    return `${this.fN} ${this.lN}`;
  }

  set fullName(name) {
    [this.fN, this.lN] = name.split(' ');
  }
}


const kim = new Person('Jin', 'Yu');
console.log(kim);
console.log(kim.fullName);
kim.fullName = 'Min mi';
console.log(kim.fullName);