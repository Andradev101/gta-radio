
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
    radioaudio[0].volume = 0;
    radioaudio[0].volume = volumeValue.currentTarget.value / 100;
    var showVol = radioaudio[0].volume*100
    volVal.innerText = showVol
})

const radioaudio = document.getElementsByTagName("audio")
for (let i = 0; i < radioNames.length; i++) {
    let radio = "radio" + [i]
    radio = document.getElementById("ra" + [i]);
    radio.addEventListener("click", playAudio)
}
async function playAudio(id) {
    srcBlah2 = await checkId(id)
    srcBlah3 = await getSrc(srcBlah2)
    radioaudio[0].setAttribute("src", srcBlah3)
    radioaudio[0].play()
    console.log(srcBlah2)
}
function checkId(id) {

    radioId = id.path[1].id
    idNumber = radioId.split("ra")
    return new Promise(resolve => {
        resolve(idNumber[1])
    })
}
async function getSrc(idNumber) {
    var srcReady = radioSources[idNumber]
    SrcDuration = radioaudio[0].duration;
    console.log(SrcDuration)
    var seconds = SrcDuration.toString().split('.')
    var randomTime = Math.floor(Math.random() * seconds[0]);
    srcBlah = srcReady + randomTime
    return new Promise (resolve =>{
        resolve(srcReady)
        console.log(srcBlah);
    })
}



/*
    function playAudio(){
        var randomHour = Math.floor(Math.random() * 3);
        var randomSec = Math.floor(Math.random() * 60);
        var timeStamp = "#t="+((randomHour * 3600)+randomSec);
        console.log(timeStamp)
        radioaudio[0].setAttribute("src","https://mp3.fastupload.co/data/1614652257/nonstoppopfm.m4a"+timeStamp)
        radioaudio[0].play()
        radioaudio[0].volume = 0.04;
    }
*/