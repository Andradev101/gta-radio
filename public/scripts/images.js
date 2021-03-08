var radioLogos = [
    "https://i.imgur.com/rlMALYs.png",
    "https://i.imgur.com/H3V8VwA.png",
    "https://i.imgur.com/GHXu3Dg.png",
    "https://i.imgur.com/jZJoU0U.png",
    "https://i.imgur.com/lfAhJjF.png",
    "https://i.imgur.com/HiH8lWR.png",
    "https://i.imgur.com/8rP90wi.png",
    "https://i.imgur.com/0YArkws.png",
    "https://i.imgur.com/5OqpBMI.png",
    "https://i.imgur.com/EfJTHJg.png",
    "https://i.imgur.com/WrHDGIn.png",
    "https://i.imgur.com/GKpwDVm.png",
    "https://i.imgur.com/JKN7z4t.png",
    "https://i.imgur.com/ebgCH4z.png",
    "https://i.imgur.com/7fWacH0.png",
    "https://i.imgur.com/7vRhXC7.png",
    "https://i.imgur.com/yGy9DC7.png",
    "https://i.imgur.com/yjJCGrc.png",
    "https://i.imgur.com/R1M41Jt.png",
    "https://i.imgur.com/xY9Con7.png",
]
var radioNames = [
    "Radio Los Santos",
    "Space",
    "West Coast",
    "Rebel Radio",
    "Los Santos Rock Radio",
    "The Low Down",
    "The Blue Ark",
    "Non Stop Pop FM",
    "East Los Santos",
    "Worldwide FM",
    "Channel X",
    "Radio Mirror Park",
    "Vinewood Boulevard Radio",
    "Soulwax FM",
    "Flyd FM",
    "Blaine County",
    "West Coast talk radio",
    "The lab",
    "Blonded Los Santos",
    "LS UR"
]

//create divs
const radiocontainerdiv = document.querySelectorAll(".radiocontainer")
for (let i = 0; i < radioLogos.length; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "radio");
    div.setAttribute("id", "ra" + [i]);
    div.classList.add("radio");
    radiocontainerdiv[0].append(div);
}
//adds elements insive the divs created above
const radiodiv = document.querySelectorAll(".radio");
for (let i = 0; i < radioLogos.length; i++) {
    var imgdiv = document.createElement("img");

    imgdiv.setAttribute("src", radioLogos[i])
    radiodiv[i].append(imgdiv);

    var radioname = document.createElement("p");
    radiodiv[i].append(radioname);
    radioname.setAttribute("class", "radioname");
    radioname.innerText = radioNames[i]
    var delay = i*0.05;
    radiodiv[i].style.animationDelay=delay+"s"
}

const bgarr = document.getElementsByClassName("bg")
const flexradioarr = document.getElementsByClassName("flexradio")
const bg = bgarr[0]
const flexradio = flexradioarr[0]

bg.addEventListener("load", bgColor())

function bgColor(){
    setTimeout(() => {
        bg.setAttribute("style","background: linear-gradient(180deg, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.6) 100%)")
        flexradio.setAttribute("style","opacity: 1")
    }, 200);
}
