function moveToSelected(element) {

    if (element == "next") {
        var selected = document.querySelector('.next');
    } else if (element == "prev") {
        var selected = document.querySelector('.prev');
    } else {
        var selected = element;
    }

    var next = selected.nextElementSibling;
    var prev = selected.previousElementSibling;
    var prevSecond = prev.previousElementSibling;
    var nextSecond = next.nextElementSibling;
    
    selected.classList.remove(element);
    selected.classList.add('selected');
    
    next.classList.remove(next.className);
    next.classList.add('next');

    prev.classList.remove(prev.className);
    prev.classList.add('prev');

    nextSecond.classList.remove(nextSecond.className);
    nextSecond.classList.add('nextRightSecond');
    prevSecond.classList.remove(nextSecond.className);
    prevSecond.classList.add('prevLeftSecond');

    // $(nextSecond).removeClass().addClass("nextRightSecond");
    // $(prevSecond).removeClass().addClass("prevLeftSecond");

    // $(nextSecond).nextAll().removeClass().addClass('hideRight');
    // $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// $('#carousel div').click(function () {
//     moveToSelected($(this));
// });

function prev_click() 
{
    moveToSelected('next');
};

function next_click() 
{
    moveToSelected('next');
};