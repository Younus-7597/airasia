const mediaQuery = window.matchMedia('(max-width: 600px)');
myFunction(mediaQuery);
mediaQuery.addListener(myFunction);

function myFunction() {
    if (mediaQuery.matches) {
        document.getElementsByClassName("change")[0].innerHTML = '<i class="bi bi-globe"></i>&nbsp;';
        document.getElementsByClassName("change")[1].innerHTML = '<i class="bi bi-person-circle"></i>';
    }
    else {
        document.getElementsByClassName("change")[0].innerHTML = '<i class="bi bi-globe"></i>&nbsp;&nbsp;&nbsp;EN / US';
        document.getElementsByClassName("change")[1].innerHTML = '<i class="bi bi-person-circle"></i>&nbsp;&nbsp;&nbsp;Login/Signup';
    }
}

