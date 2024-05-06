document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0,
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener('click', () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });
});

// enable grid & list view
const listViewButton = document.querySelector('.list-view-button');
const gridViewButton = document.querySelector('.grid-view-button');
const list = document.querySelector('.list-items');
const listItem = document.querySelectorAll('.listItem');
const details = document.querySelectorAll('.details');
const priceSection = document.querySelectorAll('.priceSection');
const menuCardPrice = document.querySelectorAll('.menu-card-price');
const detailsTable = document.querySelectorAll('.detailsTable');
const btnList = document.querySelector('.btnList');

if (listViewButton)
  listViewButton.onclick = function () {
    listItem.forEach(element => {
      element.classList.remove('is-6-mobile');
    });
    details.forEach(element => {
      element.classList.remove('is-flex-wrap-wrap');
    });
    priceSection.forEach(element => {
      element.classList.remove('has-gap-20', 'mt-4');
      element.classList.add('is-flex-direction-column');
    });
    detailsTable.forEach(element => {
      element.classList.remove('fs-10');
    });
    menuCardPrice.forEach(element => {
      element.classList.remove('full-width', 'small-f-on-mobile', 'lh-39');
    });
  }

if (gridViewButton)
  gridViewButton.onclick = function () {
    listItem.forEach(element => {
      element.classList.add('is-6-mobile');
    });
    details.forEach(element => {
      element.classList.add('is-flex-wrap-wrap');
    });
    priceSection.forEach(element => {
      element.classList.remove('is-flex-direction-column');
      element.classList.add('has-gap-20', 'mt-4');
    });
    detailsTable.forEach(element => {
      element.classList.add('fs-10');
    });
    menuCardPrice.forEach(element => {
      element.classList.add('full-width', 'small-f-on-mobile', 'lh-39');
    });
    btnList.classList.remove('btn-active')
  }


//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 500;


nextDom.onclick = function () {
  showSlider('next');
}

prevDom.onclick = function () {
  showSlider('prev');
}
let runTimeOut;

function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
  let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

  if (type === 'next') {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add('next');
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add('prev');
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning);




  thumbnailItemsDom.forEach(card => {
    card.addEventListener('click', () => {
      let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
      let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

      const index = getOrderAmongSiblings(card)
      const image = card.querySelector('img').src.split('/').pop()
      SliderDom.prepend(findChildWithImage(SliderItemsDom, image));
      thumbnailBorderDom.appendChild(thumbnailItemsDom[index]);
      carouselDom.classList.add('next');

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);


    })
  })

  function getOrderAmongSiblings(element) {
    // Get the parent node of the element
    let parent = element.parentNode;

    // Get all children of the parent node
    let siblings = parent.children;

    // Loop through the siblings to find the index of the given element
    for (let i = 0; i < siblings.length; i++) {
      if (siblings[i] === element) {
        // Return the index of the element among its siblings
        return i;
      }
    }

    // If the element is not found among the siblings, return -1
    return -1;
  }

  function findChildWithImage(children, filename) {
    // Loop through the children
    for (var i = 0; i < children.length; i++) {
      var child = children[i];

      // Check if the child contains an image element
      var images = child.getElementsByTagName('img');
      for (var j = 0; j < images.length; j++) {
        var src = images[j].getAttribute('src');
        // Check if the image src contains the specified filename
        if (src && src.includes(filename)) {
          // Return the child element if found
          return child;
        }
      }
    }

    // Return null if no child with the specified image filename is found
    return null;
  }
}