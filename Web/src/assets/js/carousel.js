var slideIndex = 1;

export const MyFunctions = {

    myFunction: function plusDivs(n)
        {
            MyFunctions.myFunction2(slideIndex += n);
        },

    myFunction2: function showDivs(n) {
        //
        var i;
        var x = document.getElementsByClassName("mySlides");
        var b = document.getElementsByClassName("ButtonStart");
        var m = document.getElementsByClassName("ButtonNo");
        var y = document.getElementsByClassName("ButtonYes");

        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            b[0].style.display = "none";
            m[0].style.display = "block";
            y[0].style.display = "block";
        }
        x[slideIndex-1].style.display = "block";
    }
}