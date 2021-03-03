
//gets id and adds eventlistener
const radioaudio = document.getElementsByTagName("audio")
for (let i = 0; i < radioNames.length; i++) {
    let radio = "radio" + [i]
    radio = document.getElementById("ra" + [i])
    radio.addEventListener("click", checkId)
}
function checkId(id) {
    radioId = id.path[1].id
    idNumber = radioId.split("ra")
    getSrc(idNumber);
}
/*
    gets id of a triggered event div i.e. idNum = 19
    gets the metadata.duration info
    randomize the time in #t=
    sets an attribute in src
    calls playaudio function
*/
function getSrc(idNumber) {
    idNum = idNumber[1]
    SrcDuration = radioaudio[0].duration;
    var seconds = SrcDuration.toString().split('.')
    var randomTime = Math.floor(Math.random() * seconds[0]);
    radioaudio[0].setAttribute("src", radioSources[idNum] + "#t=" + randomTime)
    playAudio()
}
function playAudio() {
    radioaudio[0].play()
    radioaudio[0].volume = 0.04;
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