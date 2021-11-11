class Mouse {
  left = false;


  x = null;
  y = null;

  delta = 0;




  constructor(element) {
    const under = (event) => {
      this.x = event.clientX;
      this.y = event.clientY;
    }



    element.addEventListener('mousemove', (event) => {
      under(event)
    });

    element.addEventListener('mouseenter', (event) => {
      under(event)
    });

    element.addEventListener('mouseleave', (event) => {
      under(event)
    });

    element.addEventListener('mousedown', (event) => {
      under(event);

      if (event.button === 0) {
        this.left = true;
      }
    });

    element.addEventListener('mouseup', (event) => {
      under(event)

      if (event.button === 0) {
        this.left = false;
      }
    });

    element.addEventListener('wheel', (event) => {
      under(event)

      this.delta = 1;
    });
  };


  tick() {
    this.delta = 0;
  }
};