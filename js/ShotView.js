class ShotView extends Shot {
  div = null;
  img = null;

  constructor(x, y, variant = 'miss') {
      super(x, y, variant);

      const div = document.createElement('div');
      const img = document.createElement('img');

   
    
      div.classList.add('shot');
      

      this.div = div;
      this.img = img;
      this.setVariant(variant, true);
  }

  setVariant(variant, force = false) {
    if(!force && this.variant === variant) {
        return false;
    }

    this.variant = variant;


    

    this.div.classList.remove('shot-missed', 'shot-wounded', 'shot-killed');

    if(this.variant === 'miss') {
      this.div.classList.add('shot-missed');
      this.div.append(this.img);
      this.img.src = 'img/cross.svg';
      console.log('true');
      
    } else if (this.variant === 'wounded') {
      this.div.classList.add('shot-wounded');
      console.log('true1');
      this.img.src = 'img/fire.svg';
    } else if (this.variant === 'killed') {
      this.div.classList.add('shot-killed');
      console.log('true2');
      this.img.src = 'img/skull.svg';
    }

     return true;
  }
};