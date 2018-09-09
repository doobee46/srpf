class TabLink{
  constructor(element){
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {this.selectTab()});
  }
  selectTab () {
    const links = document.querySelectorAll('.tabs-link');
    Array.from(links).map(link => {
      link.classList.remove('tabs-link-selected')
    });
    this.element.classList.add('tabs-link-selected');
    this.tabItem.selectItem();

  }
}

class TabItem{
  constructor(element){
    this.element = element;
  }

  selectItem () {
    const items =  document.querySelectorAll('.tabs-item')
    Array.from(items).map(item =>{
      item.classList.remove('tabs-item-selected');
    });

    this.element.classList.add('tabs-item-selected');

  }
}

let  links = document.querySelectorAll('.tabs-link');

links = Array.from(links).map(link => new TabLink(link));

links[0].selectTab();
