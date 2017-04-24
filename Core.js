//Use savePhoto(true) to save photo in your album
//Use savePhoto(false) to delete photo in your album

var jquery = document.createElement('jquery');
jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(jquery);
console.log('jquery loaded !');

function saverStart(mode)
{
    switch(mode)
    {
        case true:
            var saveInterval = setInterval(function()
            {
                var obj = document.getElementById("pv_photo");
                Photoview.savePhoto()
                cur.pvClicked = true; Photoview.show(false, cur.pvIndex + 1, event);
            },1000)
            break;
        case false:
            var deleteInterval = setInterval(function()
            {
                var obj = document.getElementById("pv_photo");
                Photoview.deletePhoto()
                cur.pvClicked = true; Photoview.show(false, cur.pvIndex + 1, event);
            },1000)
            break;
        default:alert("Unknown mode.Please use 'true'/'false'");
    }
}