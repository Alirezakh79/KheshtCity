let svgdarkmood = document.querySelector(".svg-darkmood")
let svglightmood = document.querySelector(".svg-lightmood")
let navbarcontainer = document.querySelector(".nav-main1")
let footercontainer = document.querySelector(".footersection")
let ouerelement = document.querySelector(".divoure")
let secendelemnt = document.querySelector(".divosecends")
let minstselemnts = document.querySelector(".divmins")
let showimgfootball = document.querySelector(".football")
let showimgdate = document.querySelector(".date")
let showimgsholsholy = document.querySelector(".sholsholy")
let showimgsmo = document.querySelector(".showmo")
let showimgscity = document.querySelector(".aboutcitybtn")
let contianerofimgithemsd = document.querySelector(".contianerofimgithemsd")
let contianerofimgithemssh = document.querySelector(".contianerofimgithemssh")
let contianerofimgithemsmo = document.querySelector(".contianerofimgithemsmo")
let contianerofimgithemsf = document.querySelector(".contianerofimgithemsf")
let contianerofimgithemcity = document.querySelector(".contianerofimgithemscity")
let iconclosed = document.querySelector(".closesd")
let iconclosesh = document.querySelector(".closesh")
let iconclosemo = document.querySelector(".closemo")
let iconclosef = document.querySelector(".closef")
let iconclosecity = document.querySelector(".closecity")
let containerimgithms = document.querySelector(".container-img-ithms")



///////////////////                    function timer            /////////////////////////



function timershow() {
    let ourelocal = new Date()
    ouerelement.innerHTML = ` ${ourelocal.getHours()} : ساعت  `
    minstselemnts.innerHTML = ` ${ourelocal.getMinutes()} : دقیقه   `
    secendelemnt.innerHTML = ` ${ourelocal.getSeconds()} : ثانیه  `
}






////////////////////                 function dark mood           ///////////////////////
function darkmood() {
    document.body.style.backgroundColor = "#222222"
    document.body.style.color = "white"
    navbarcontainer.classList.add("nav-main-darkmood")
    footercontainer.classList.add("footersection-darkmood")
    localStorage.setItem("mood", "darkmood")
    svgdarkmood.classList.add("svgclick")
    svglightmood.classList.remove("svgclick")
}
svgdarkmood.addEventListener("click", () => {
    darkmood()
})
svgdarkmood.addEventListener("Touch", () => {
    darkmood()
})
////////////////////                 function light mood           ///////////////////////

function lightmood() {
    localStorage.setItem("mood", "lightmood")
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    svglightmood.classList.add("svgclick")
    svgdarkmood.classList.remove("svgclick")
    navbarcontainer.classList.remove("nav-main-darkmood")
    footercontainer.classList.remove("footersection-darkmood")
}

svglightmood.addEventListener("click", () => {
    lightmood()

})
svglightmood.addEventListener("Touch", () => {
    lightmood()
})




//////////////////////                function onload         //////////////////////

window.addEventListener("load", () => {
    let localstorageinner = localStorage.getItem("mood")
    if (!localstorageinner) {
        darkmood()
    } else if (localstorageinner === "darkmood") {
        darkmood()
    } else {
        lightmood()
    }


    setInterval(() => {
        timershow()

    }, [1000])

})
//////////////////////                function show-img        //////////////////////
// function showallimgs(){

// }

//////////////////////                function show-img-football         //////////////////////
showimgfootball.addEventListener("click", () => {
    contianerofimgithemsf.style.opacity = 1
    contianerofimgithemsf.style.visibility = "visible"
    window.scrollTo(0, 0)
})


//////////////////////                function show-img-date         //////////////////////


showimgdate.addEventListener("click", () => {
    contianerofimgithemsd.style.visibility = "visible"
    contianerofimgithemsd.style.opacity = 1
    window.scrollTo(0, 0)
}
)
//////////////////////                function show-img-sholsholy         //////////////////////
showimgsholsholy.addEventListener("click", () => {
    contianerofimgithemssh.style.visibility = "visible"
    contianerofimgithemssh.style.opacity = 1
    window.scrollTo(0, 0)
})
//////////////////////                function show-img-moshtak         //////////////////////
showimgsmo.addEventListener("click", () => {
    contianerofimgithemsmo.style.visibility = "visible"
    contianerofimgithemsmo.style.opacity = 1
    window.scrollTo(0, 0)
})
//////////////////////                function show-img-aboutcity         //////////////////////
showimgscity.addEventListener("click", () => {
    contianerofimgithemcity.style.visibility = "visible"
    contianerofimgithemcity.style.opacity = 1
    window.scrollTo(0, 0)
})








//////////////////////                function close-img-date         //////////////////////
iconclosed.addEventListener("click", () => {

    contianerofimgithemsd.style.visibility = "hidden"
    contianerofimgithemsd.style.opacity = 1
})
//////////////////////                function close-img-sholsholy        //////////////////////
iconclosesh.addEventListener("click", () => {
    contianerofimgithemssh.style.visibility = "hidden"
    contianerofimgithemssh.style.opacity = 0

})
//////////////////////                function close-img-moshtak        //////////////////////
iconclosemo.addEventListener("click", () => {
    contianerofimgithemsmo.style.visibility = "hidden"
    contianerofimgithemsmo.style.opacity = 0

})
//////////////////////                function close-img-footbal        //////////////////////
iconclosef.addEventListener("click", () => {
    contianerofimgithemsf.style.visibility = "hidden"
    contianerofimgithemsf.style.opacity = 0

})
//////////////////////                function close-img-aboutcity         //////////////////////
iconclosecity.addEventListener("click", () => {
    contianerofimgithemcity.style.visibility = "hidden"
    contianerofimgithemcity.style.opacity = 0

})
