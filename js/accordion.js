class PanelContainer{
  constructor(button){
    this.button = button;
    this.data = this.button.dataset.panel;
    this.panelItem = document.querySelector(`.panel-body[data-panel="${this.data}"]`);
    this.panelBody = new PanelBody(this.panelItem);
    this.button.addEventListener('click', () => {this.expand()});
  }

  toggleIcon(){
    if(this.button.classList.contains('fa-plus')){
      this.button.classList.remove('fa-plus');
      this.button.classList.add('fa-minus');
    }else if(this.button.classList.contains('fa-minus')){
      this.button.classList.remove('fa-minus');
      this.button.classList.add('fa-plus');
    }
  }

  expand() {
    this.toggleIcon();
    this.panelBody.panelToggle();
  }  
}

class PanelBody{
  constructor(panel){
    this.panel = panel;
  }

  panelToggle(){
    this.panel.classList.toggle('panel-open');
  }
}

let  buttons = document.querySelectorAll('span.ico-left')
buttons = Array.from(buttons).map(button =>{ return new PanelContainer(button)});
