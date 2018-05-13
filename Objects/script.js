const myComputer = {
  operatingSystem: 'macOS High Sierra',
  screenSize: '13-inch',
  year: 2013
}

const zac = {
  name: 'Zac',
  sayName: function() {
    // 'this' refers to the object that contains this function.
    console.log(this.name);
  }
}