    /*Menu-toggle*/
    $("#menu-toggle").click(function (e) {
        //e.preventDefault();
        //$("#wrapper").toggleClass("active");

        //console.log(JSON.stringify($("#sidebar-wrapper")));

        var x = document.getElementById("sidebar-wrapper");


        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
        /*
        alert(1);
        */
    });
