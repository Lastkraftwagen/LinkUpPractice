function moveToSelected(element) {
    const divs = document.getElementById('carousel').children;
    const mass = [...divs];
    
    let selected = document.querySelector('.next');
    if (element == "next") {
    } else if (element == "prev") {
        selected = document.querySelector('.prev');
    } else {
        selected = element;
    }

    let index = mass.indexOf(document.querySelector(".current"));

    if(index == mass.length - 1)
    {
        hide(mass);
        mass[2].className = 'rightHide'
        mass[mass.length - 2].className = 'leftHide';

        mass[0].className = 'current';
        mass[1].className = 'next';
        mass[mass.length - 1].className = 'prev';
        console.log('1st');
        return;
    }
    else if(index == mass.length - 2)
    {
        hide(mass);
        mass[1].className = 'rightHide'
        mass[mass.length - 3].className = 'leftHide';

        mass[mass.length - 1].className = 'current';
        mass[mass.length - 2].className = 'prev';
        mass[0].className = 'next';
        console.log('2nd');
        return;
    }
    else if(index == 0)
    {
        hide(mass);
        mass[3].className = 'rightHide'
        mass[mass.length - 1].className = 'leftHide';

        mass[0].className = 'prev';
        mass[1].className = 'current';
        mass[2].className = 'next';
        console.log('3nd');

        return;
    }
    else{
        console.log('4');
        console.log(mass);
    
        let i = mass.indexOf(document.querySelector('.prev'));
        mass[i].className = 'leftHide';
        i = mass.indexOf(document.querySelector('.next'));
        mass[i].className = 'rightHide';
        mass[index+1].className = 'current';
        mass[index].className = 'prev';
        mass[index+2].className = 'next';
    }

    
    // var next = selected.nextElementSibling;
    // var prev = selected.previousElementSibling;
    // var prevSecond = prev.previousElementSibling;
    // var nextSecond = next.nextElementSibling;
    
    // selected.classList.remove(element);
    // selected.classList.add('selected');
    
    // next.classList.remove(next.className);
    // next.classList.add('next');

    // prev.classList.remove(prev.className);
    // prev.classList.add('prev');

    // nextSecond.classList.remove(nextSecond.className);
    // nextSecond.classList.add('nextRightSecond');
    // prevSecond.classList.remove(prevSecond.className);
    // prevSecond.classList.add('prevLeftSecond');

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

const hide = (mass, flag) => { 
    mass.forEach(element => {
    element.className='hide';
    });
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