document.addEventListener('DOMContentLoaded', function() {
    // HEADER EVENT
    var dropDown = document.querySelector('.dropDown');
            dropDown.addEventListener('mouseover', function(event) {
            var showDropList = document.querySelector('.dropDownMenu');
                showDropList.classList.toggle('hide');
        });

    // SLIDER EVENT

    var leftArr = document.querySelector('.left-arrow');
    var rightArr= document.querySelector('.right-arrow');
    var slide = document.querySelectorAll('.slide');
    var counter = 0;
    slide[0].classList.add('visible');


    rightArr.addEventListener('click', function() {

        slide[counter].classList.remove('visible');

        counter++;
        if (counter >= slide.length) {
            counter = 0;
        }
        slide[counter].classList.add('visible');
    });

    leftArr.addEventListener('click', function() {
        slide[counter].classList.remove('visible');
        counter--;
        if (counter < 0) {
            counter = slide.length - 1;
        }
        slide[counter].classList.add('visible');
    });


    // GALLERY EVENT
    var imageGallery = document.querySelectorAll('.image-gallery');

    for (var i = 0; i < imageGallery.length; i++) {
        imageGallery[i].addEventListener('mouseover', function() {
            this.querySelector('.opacity-gallery').classList.toggle('hide');
           });
        imageGallery[i].addEventListener('mouseout', function() {
            this.querySelector('.opacity-gallery').classList.toggle('hide');
            });
    };

});