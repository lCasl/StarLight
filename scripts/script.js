const activador = document.getElementById("activador")
visible = true

activador.addEventListener("click", (e) => {
        if (visible == true) {
            visible == false
            document.getElementById("formulario").style.display = "block";
            document.getElementById("activador").style.display = "none";
        } else {
            document.getElementById("activador").style.display = "block";
            document.getElementById("formulario").style.display = "none";
        }

    })
    //data-parallax="scroll" data-image-src="./sources/img/fondotierra.jpg"

const nubes = document.getElementById("nubes")
const carousel = document.getElementById("carousel")

window.addEventListener("scroll", function() {
    let value = window.scrollY;
    nubes.style.top = value * 0.5 + 'px';
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})();

const btn = document.getElementById("btnform")
const forms = document.getElementById("form")
btn.addEventListener('click', (e) => {
    if (!forms.validationCustom01.checkValidity()) {
        forms.validationCustom01.focus();
    } else if (!forms.validationCustom02.checkValidity()) {
        forms.validationCustom02.focus();
    } else if (!forms.validationCustom03.checkValidity()) {
        forms.validationCustom03.focus();
    } else if (!forms.validationCustom04.checkValidity()) {
        forms.validationCustom04.focus();
    } else if (!forms.validationCustom05.checkValidity()) {
        forms.validationCustom05.focus();
    }
});
//luna hoy
(function() {
    var d = new Date().getDate();
    var m = document.querySelectorAll("#contain_moon0 div");
    var a = new XMLHttpRequest();
    var url = "https://www.icalendar37.net/lunar/api/?lang=es&month=" + (new Date().getMonth() + 1) + "&year=" + (new Date().getFullYear()) + "&size=150&lightColor=rgb(255,218,91)&shadeColor=rgb(17,17,17)&t&LDZ=" + new Date(new Date().getFullYear(), new Date().getMonth(), 1) / 1000 + "";
    m[1].style.height = "150px";
    a.onreadystatechange = function() {
        if (a.readyState == 4 && a.status == 200) {
            var b = JSON.parse(a.responseText);
            m[1].innerHTML = b.phase[d].svg;
            if (typeof moon_widget_loaded == "function") moon_widget_loaded(b);
            m[2].innerHTML = b.phase[d].npWidget;
            m[3].innerHTML = "Próxima luna llena<br>" + b.nextFullMoon
        }
    };
    a.open("GET", url, true);
    a.send()
})();
//luna ayer
(function() {
    var d = new Date().getDate() - 1;
    var m = document.querySelectorAll("#contain_moon1 div");
    var a = new XMLHttpRequest();
    var url = "https://www.icalendar37.net/lunar/api/?lang=es&month=" + (new Date().getMonth() + 1) + "&year=" + (new Date().getFullYear()) + "&size=100&lightColor=rgb(255,218,91)&shadeColor=rgb(17,17,17)&t&LDZ=" + new Date(new Date().getFullYear(), new Date().getMonth(), 1) / 1000 + "";
    m[1].style.height = "100px";
    a.onreadystatechange = function() {
        if (a.readyState == 4 && a.status == 200) {
            var b = JSON.parse(a.responseText);
            m[1].innerHTML = b.phase[d].svg;
            if (typeof moon_widget_loaded == "function") moon_widget_loaded(b);
            m[2].innerHTML = b.phase[d].npWidget;

        }
    };
    a.open("GET", url, true);
    a.send()
})();
//luna mañana
(function() {
    var d = new Date().getDate() + 1;
    var m = document.querySelectorAll("#contain_moon2 div");
    var a = new XMLHttpRequest();
    var url = "https://www.icalendar37.net/lunar/api/?lang=es&month=" + (new Date().getMonth() + 1) + "&year=" + (new Date().getFullYear()) + "&size=100&lightColor=rgb(255,218,91)&shadeColor=rgb(17,17,17)&t&LDZ=" + new Date(new Date().getFullYear(), new Date().getMonth(), 1) / 1000 + "";
    m[1].style.height = "100px";
    a.onreadystatechange = function() {
        if (a.readyState == 4 && a.status == 200) {
            var b = JSON.parse(a.responseText);
            m[1].innerHTML = b.phase[d].svg;
            if (typeof moon_widget_loaded == "function") moon_widget_loaded(b);
            m[2].innerHTML = b.phase[d].npWidget;

        }
    };
    a.open("GET", url, true);
    a.send()
})();

$('.thumbnail').click(function() {
    $('.modal-body').empty();
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#modal').modal({ show: true });
    document.getElementById('body').style.overflowY = 'scroll';
});

$('#modal').on('show.bs.modal', function() {
    $('.col-6,.row .thumbnail').addClass('blur');
    document.getElementById('body').style.overflowY = 'scroll';
})

$('#modal').on('hide.bs.modal', function() {
    $('.col-6,.row .thumbnail').removeClass('blur');
    document.getElementById('body').style.overflowY = 'scroll';
});

$("#botoncerrar").click(function() {


    $("#modal-gallery").modal("hide");

    document.getElementById('body').style.overflowY = 'scroll';
});



$(document).ready(function() {

    /* activate the carousel */
    $("#modal-carousel").carousel({ interval: false });

    /* change modal title when slide changes */
    $("#modal-carousel").on("slid.bs.carousel", function() {
        $(".modal-title")
            .html($(this)
                .find(".active img")
                .attr("title"));
    });

    /* when clicking a thumbnail */
    $(".galeria .thumbnail").click(function() {
        var content = $(".carousel-inner");
        var title = $(".modal-title");


        title.empty();

        var id = this.id;
        var repo = $("#img-repo .item");
        var repoCopy = repo.filter("#" + id).clone();
        var active = repoCopy.first();

        active.addClass("active");
        title.html(active.find("img").attr("title"));
        content.append(repoCopy);

        // show the modal
        $("#modal-gallery").modal("show");

    });

    $("#modal-gallery").click(function() {

        $("#modal-gallery").modal("hide");
        document.getElementById('body').style.overflowY = 'scroll';
    });



});