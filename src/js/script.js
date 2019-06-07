
function showcat() {
    let item = document.getElementById('drop_down_id');
    item = item.childNodes[1];
    console.log(item);

    if (item.className == "fa fa-sort-down") {
        item.className = "fa fa-sort-up";
    }
    else {
        item.className = "fa fa-sort-down";
    }

};