class Ship {
  size = null;
  direction = null;
  killed = false;


  constructor(size, direction) {
   Object.assign(this, { size, direction });
  }

  x = null;
  y = null;

  get placed () {
      return this.x !== null && this.y !== null;
  };


};