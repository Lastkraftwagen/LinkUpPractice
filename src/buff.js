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
    prevSecond.classList.remove(prevSecond.className);
    prevSecond.classList.add('prevLeftSecond');

    // next = nextAll(nextSecond);
	// next.forEach(function(el) {
    //     el.classList.remove(el.className);
    //     el.classList.add('hideRight');
	// });

    // prev = prevAll(prevSecond);
	// prev.forEach(function(el) {
    //     el.classList.remove(el.className);
    //     el.classList.add('hideLeft');
	// });

}

// function nextAll(elem) {
//     var next = false;
//     return [].filter.call(elem.parentNode.children, function(child) {
//         if (child === elem) next = true;
//         return next && child !== elem
//     })
// };
// function prevAll(element) {
//     var result = [];
//     while (element = element.previousElementSibling)
//         result.push(element);
//     return result;
// };

function prev_click() 
{
    moveToSelected('prev');
};

function next_click() 
{
    moveToSelected('next');
};