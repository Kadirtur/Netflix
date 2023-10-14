const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//select tab content item
function selectItem(e) {
    	// Remove all show and border classes
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //grab content item from DOM
    const tabContentItem =document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}

// Remove show class from all content items
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

//listen for tab click
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});