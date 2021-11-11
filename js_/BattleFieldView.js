class BattleFieldView extends BattleField {
  root = null;
  table = null;
  dock = null;
  polygon = null;

  cells = [];

  constructor() {
    super();



    const root = document.createElement('div');
    root.classList.add('battlefield');

    const table = document.createElement('table');
    table.classList.add('battlefield-table');

    const dock = document.createElement('div');
    dock.classList.add('battlefield-dock');

    const polygon = document.createElement('div');
    polygon.classList.add('battlefield-polygon');

    Object.assign(this, { root, table, dock, polygon });

    root.append(table, dock, polygon);

    for (let y = 0; y < 10; y++) {
      const row = [];
      const tr = document.createElement('tr');
      tr.classList.add('battlefield-row');
      tr.dataset.y = y;



      for (let x = 0; x < 10; x++) {
        const td = document.createElement('td');
        td.classList.add('battlefield-item');
        /*  td.dataset.x = x;
         td.dataset.y = y; */

        Object.assign(td.dataset, { x, y });


        tr.append(td);
        row.push(td);
      }


      table.append(tr);
      this.cells.push(row);

    };


    for (let x = 0; x < 10; x++) {
      const cell = this.cells[0][x];

      const marker = document.createElement('div');
      marker.classList.add('marker', 'marker-column');


      marker.textContent = 'АБВГДЕЖЗИК'[x];

      cell.append(marker)
    }


    for (let y = 0; y < 10; y++) {
      const cell = this.cells[y][0];

      const marker = document.createElement('div');
      marker.classList.add('marker', 'marker-row');


      marker.textContent = y + 1;

      cell.append(marker)
    }
  }


  addShip(ship, x, y) {
    super.addShip(ship, x, y);


    this.dock.append(ship.div);

    if (ship.placed) {
      const cells = this.cells[y][x].getBoundingClientRect();
      const rootRect = this.root.getBoundingClientRect();
      ship.div.style.left = `${Math.floor(cells.left - rootRect.left - 1)}px`;
      ship.div.style.top = `${Math.floor(cells.top - rootRect.top)}px`;
      this.addaptiv(ship);
    } else {
      ship.setDirection('row');
      ship.div.style.left = `${ship.startX}px`;
      ship.div.style.top = `${ship.startY}px`;

      this.addaptiv(ship);
    }
  }




  addShot(shot) {
    if (!super.addShot(shot)) {
      return false;
    }


    this.polygon.append(shot.div);




    const cell = this.cells[shot.y][shot.x];
    const cellRect = cell.getBoundingClientRect();
    const rootRect = this.root.getBoundingClientRect();



    shot.div.style.left = `${cellRect.left - rootRect.left}px`
    shot.div.style.top = `${cellRect.top - rootRect.top}px`

    return true;
  }


  addaptiv(ship) {
    const cell = this.cells[0][0].getBoundingClientRect();
    const heightRow3 = cell.height;
    const heightColumn3 = cell.height * 3
    const widthRow3 = cell.width * 3;
    const widthColumn3 = cell.width;


  
     if (ship.direction === 'row') {
      if (ship.div.classList.contains('ship-row-3')) {
        ship.div.style.width = `${widthRow3}px`;
        ship.div.style.height = `${heightRow3}px`;
      } else if (ship.div.classList.contains('ship-row-4')) {
        ship.div.style.width = `${widthRow3}px`;
        ship.div.style.height = `${heightRow3}px`;
      }
      console.log('true');

    } else if (ship.direction === 'column') {
      console.log(false);
      if (ship.div.classList.contains('ship-column-3')) {
        ship.div.style.width = `${widthColumn3}px`;
        ship.div.style.height = `${heightColumn3}px`;
      } else if (ship.div.classList.contains('ship-column-4')) {
        ship.div.style.width = `${widthColumn3}px`;
        ship.div.style.height = `${heightColumn3}px`;
      }
    } 
  }

};