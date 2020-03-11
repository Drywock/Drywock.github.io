function init() {
    // Task 4:
    let image = document.createElement('img');
    image.setAttribute('src','flower2.png')
    document.getElementById('new_element').appendChild(image);

    // Task 5:
    let spans = document.getElementById('rainbow').getElementsByTagName("span");
    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

    for(var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors [i % colors.length];
    }
}
