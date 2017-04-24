//Use savePhoto(true) to save photo in your album
//Use savePhoto(false) to delete photo in your album
document.onkeydown = function checkKeycode(event)//Press "S" for savig photo in your album
{
    var keycode;
    if(!event) var event = window.event;
    if (event.keyCode) keycode = event.keyCode; // IE
    else if(event.which) keycode = 83; // all browsers
    Photoview.savePhoto();
}

function saverStart(mode)
{
    switch(mode)
    {
        case true:
            var x = setInterval(function()
            {
                var obj = $("#pv_photo");
                Photoview.savePhoto()
                cur.pvClicked = true; Photoview.show(false, cur.pvIndex + 1, event);
            },1000)
            break;
        case false:
            var x = setInterval(function()
            {
                var obj = document.getElementById("pv_photo");
                Photoview.deletePhoto()
                cur.pvClicked = true; Photoview.show(false, cur.pvIndex + 1, event);
            },1000)
            break;
        default:alert("Unknown mode.Please use 'true'/'false'");
    }
}
clearInterval(x);