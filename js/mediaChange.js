function change(x){
    if(x.matches) {
        document.getElementById("burg").style.display = "block";
    } else {
        document.getElementById("burg").style.display = "none";
    }
}

var x = window.matchMedia("(min-width:720px)");
change(x);
x.addListener(change);