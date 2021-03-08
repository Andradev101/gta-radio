
var radioSources = [
    "https://mp3.fastupload.co/data/1614654030/radiolossantos.m4a",
    "https://mp3.fastupload.co/data/1614719132/space.m4a",
    "https://mp3.fastupload.co/data/1614719225/westcoastclassics.m4a",
    "https://mp3.fastupload.co/data/1614719322/rebelradio.m4a",
    "https://mp3.fastupload.co/data/1614719458/lsrm.m4a",
    "https://mp3.fastupload.co/data/1614875861/thelowdown.mp3", 
    "https://mp3.fastupload.co/data/1614875529/theblueark.mp3",
    "https://mp3.fastupload.co/data/1614652257/nonstoppopfm.m4a",
    "https://mp3.fastupload.co/data/1614875307/eastlossantos.mp3",
    "https://mp3.fastupload.co/data/1614875865/worldwide.mp3",
    "https://mp3.fastupload.co/data/1614875362/chanelx.mp3",
    "https://mp3.fastupload.co/data/1614875576/radiomirrorpark.mp3",
    "https://mp3.fastupload.co/data/1614875919/vinewoodboulevard.mp3",
    "https://mp3.fastupload.co/data/1614875501/soulwax.mp3",
    "https://mp3.fastupload.co/data/1614875360/flylo.mp3",
    "meh0",
    "https://mp3.fastupload.co/data/1614875799/wctr.mp3",
    "https://mp3.fastupload.co/data/1614875539/thelab.mp3",
    "https://mp3.fastupload.co/data/1614875197/blomdedlossantos.mp3",
    "meh1"
]
const volVal = document.getElementById("volVal")
let volume = document.querySelector("#volume-control");
    volume.addEventListener("change", function(volumeValue) {
    radioAudio.volume = 0;
    radioAudio.volume = volumeValue.currentTarget.value / 100;
    var showVol = radioAudio.volume*100
    volVal.innerText = showVol.toFixed()
    console.log(showVol);
})

const radioAudio = document.getElementsByTagName("audio")[0]
for (let i = 0; i < radioNames.length; i++) {
    let radio = "radio" + [i]
    radio = document.getElementById("ra" + [i]);
    radio.addEventListener("click", checkId)
}
function checkId() {
    replydiv = this.id
    finalId = replydiv.split("ra")[1]
    getSrc()
}
function getSrc() {
    var srcReady = radioSources[finalId]
    SrcDuration = radioAudio.duration;
    var seconds = SrcDuration.toString().split('.')
    var randomTime = Math.floor(Math.random() * seconds[0]);
    if (isNaN(randomTime)) {
        randomTime = Math.floor(Math.random() * 1800);
        console.log("it was nan");
    }
    radioAudio.setAttribute("src", srcReady +"#t="+randomTime);
    console.log(radioAudio);
    playAudio()

    
    const status = document.getElementById("status")
    console.log(status)
    status.innerText = radioNames[finalId];
    status.classList.add("glow")
}

function playAudio() {
    radioAudio.play()
}

/*
    function playAudio(){
        var randomHour = Math.floor(Math.random() * 3);
        var randomSec = Math.floor(Math.random() * 60);
        var timeStamp = "#t="+((randomHour * 3600)+randomSec);
        console.log(timeStamp)
        radioAudio.setAttribute("src","https://mp3.fastupload.co/data/1614652257/nonstoppopfm.m4a"+timeStamp)
        radioAudio.play()
        radioAudio.volume = 0.04;
    }
*/