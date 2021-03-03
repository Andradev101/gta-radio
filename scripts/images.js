var radioLogos = [
    "https://static.wikia.nocookie.net/gta/images/2/20/Radio-Los-Santos-V.png/revision/latest/scale-to-width-down/135?cb=20181023140150&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/2/27/Space.png/revision/latest/scale-to-width-down/135?cb=20181023140151&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/6/6e/West-coast-classics.png/revision/latest/scale-to-width-down/135?cb=20181023140151&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/b/b7/Rebel-radio.png/revision/latest/scale-to-width-down/135?cb=20181023140151&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/4/4f/Los-santos-rock-radio.png/revision/latest/scale-to-width-down/135?cb=20181023140150&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/2/2e/The-lowdown-official.png/revision/latest/scale-to-width-down/135?cb=20181023140151&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/a/a8/The-blue-ark-official.png/revision/latest/scale-to-width-down/135?cb=20181023140151&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/7/70/Non-stop-pop.png/revision/latest/scale-to-width-down/135?cb=20150212115927&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/9/98/East-los-fm.png/revision/latest/scale-to-width-down/135?cb=20150212232545&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/5/59/Worldwide-fm.png/revision/latest/scale-to-width-down/135?cb=20181023140151&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/3/39/Channel-x.png/revision/latest/scale-to-width-down/135?cb=20181023140150&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/a/a1/Radio-mirror-park-official.png/revision/latest/scale-to-width-down/135?cb=20200907222443&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/c/cf/Vinewood-boulevard-radio.png/revision/latest/scale-to-width-down/135?cb=20181023140151&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/1/16/Soulwax-fm-official.png/revision/latest/scale-to-width-down/135?cb=20181023140507&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/c/ce/Fly-lo-fm.png/revision/latest/scale-to-width-down/135?cb=20181023140150&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/0/05/Blaine-county-talk-radio-official.png/revision/latest/scale-to-width-down/135?cb=20181023140150&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/d/d3/Wctr.png/revision/latest/scale-to-width-down/135?cb=20160118222343&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/1/1a/TheLab-Logo-GTAV.png/revision/latest/scale-to-width-down/135?cb=20181023140151&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/c/c3/BlondedLosSantos-GTAV-OfficialLogoColoured.png/revision/latest/scale-to-width-down/135?cb=20180216165759&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/a/ad/LSUR_Radio_Logo.png/revision/latest/scale-to-width-down/135?cb=20181023140150&path-prefix=pt",
    "https://static.wikia.nocookie.net/gta/images/b/b6/IFruitRadio-GTAO.png/revision/latest/scale-to-width-down/135?cb=20200430021353&path-prefix=pt",
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
    "LS UR",
    "iFruit Radio"
]
var radioSources = [
    "https://mp3.fastupload.co/data/1614652257/nonstoppopfm.m4a",
    "https://mp3.fastupload.co/data/1614719132/space.m4a",
    "https://mp3.fastupload.co/data/1614719225/westcoastclassics.m4a",
    "https://mp3.fastupload.co/data/1614719322/rebelradio.m4a",
    "https://mp3.fastupload.co/data/1614719458/lsrm.m4a", 5, 6,
    "https://mp3.fastupload.co/data/1614654030/radiolossantos.m4a"
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
}