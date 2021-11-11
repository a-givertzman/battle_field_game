class ComputerScene extends Scene {



  init() {
    console.log('preparation init');
  }


  start() {
    const { opponent } = this.app;

    document.querySelectorAll('.app-actions').forEach((Element => Element.classList.add('hidden')));
    document.querySelector('[data-scene="computer"]').classList.remove('hidden');

    opponent.clear();
    opponent.randomize(ShipView);
  }

  update() {
    const { mouse, player, opponent } = this.app;


    const cells = opponent.cells.flat();


    cells.forEach((cell) => {
      cell.classList.remove('js__td-backgroundhover')
    })

    if (isUnderPoint(mouse, opponent.table)) {
      const cell = cells.find((cell) => isUnderPoint(mouse, cell));

      if (cell) {
        cell.classList.add('js__td-backgroundhover');

        if (mouse.left) {
          const x = parseInt(cell.dataset.x);
          const y = parseInt(cell.dataset.y);

           const shot = new ShotView(x, y);
           opponent.addShot(shot);
        }
      }

    }



  }
}