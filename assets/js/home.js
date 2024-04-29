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
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider('next');
}

prevDom.onclick = function () {
  showSlider('prev');
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
  nextDom.click();
}, timeAutoNext)

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

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext)
}


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

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext)
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
