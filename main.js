let mouseEvent = "empty";
let last_position_of_x;
let last_position_of_y;
let color = "black";
let width_of_line = 1;
c = document.getElementById('myCanvas');
ctx = c.getContext("2d");

//event listeners
c.addEventListener("mousedown", function (e) {
    color = document.getElementById("color_text").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown";
});
c.addEventListener("mouseup", function (e) {
    mouseEvent = "mouseUp";
});
c.addEventListener("mouseleave", function (e) {
    mouseEvent = "mouseleave";
});

c.addEventListener("mousemove", my_mouse_move);

function my_mouse_move(e) {
    let current_position_mouseX = e.clientX - c.offsetLeft;
    let current_position_mouseY = e.clientY - c.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y co - ordinates= ");
        console.log("X = " + last_position_of_x + "Y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y co - ordinates= ");
        console.log("X = " + current_position_mouseX + "Y = " + current_position_mouseY);
        ctx.lineTo(current_position_mouseX, current_position_mouseY);

        ctx.stroke();

        //nothing


    }
    last_position_of_x = current_position_mouseX;
    last_position_of_y = current_position_mouseY;
}

function clearArea(){
    ctx.clearRect(0,0,c.width,c.height);
}