$( document ).ready(function() {
    var items = $('.gallery > li');
    var indexFromStorage = localStorage.getItem("currentIndex");

    var currentIndex = !indexFromStorage || indexFromStorage >= items.length 
        ? Math.floor(Math.random() * items.length)
        : indexFromStorage;
    var interval = setInterval(changeImg, 10000);
    var iteration = 1;

    $(items[currentIndex]).addClass('active');
    localStorage.setItem("currentIndex", currentIndex);
  
    function changeImg() {
        $(items[currentIndex]).removeClass('active');
        currentIndex=(currentIndex+1)%items.length;
        $(items[currentIndex]).addClass('active');
        localStorage.setItem("currentIndex", currentIndex);

        iteration++;
        
        if (iteration == 6) {
            clearInterval(interval);
        }
    }
},
);



