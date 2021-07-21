let bottle = {
  volume: 0,
  fillUp: function () {
    // calling this function should completely fill your bottle (volume = 100);
    this.volume = 100;
  },
  pour: function () {
    // calling this function should increase your bottle volume by 10 units;
  },
  drink: function () {
    // calling this function should decrease your bottle volume by 10 units;
  },
  isFull: function () {
    // this function should return true if your bottle is full;
  },
  isEmpty: function () {
    // this function should return true if your bottle is empty;
  },
};

bottle.fillUp();
console.log(bottle);
