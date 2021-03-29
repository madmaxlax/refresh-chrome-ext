pageloadMilliseconds = 1000;
reloadSeconds = 10;
console.log("loaded! v.2");
if (window.location.pathname.endsWith("/counties")) {
    var count = $(".btn.btn-primary:contains('Select Visit Time')").length;
    if (count) {
        console.log("found one! finding appts");
        // if(count>1)
        // {
        $(".btn.btn-primary:contains('Select Visit Time')")[count-1].click();
        // }
        // else{
        // $(".btn.btn-primary:contains('Select Visit Time')").first().click();}
    } else {
        console.log(
            "no appts found, will reload in " + reloadSeconds + " seconds"
        );
        setTimeout(() => {
            location.reload();
        }, reloadSeconds * 1000);
    }
}
if (window.location.pathname.endsWith("/dates")) {
    console.log("selecting appts");
    var myAudio = new Audio(chrome.runtime.getURL("sound.mp3"));
    myAudio.play();
    $("input[type='radio']").first().click();
    $(".btn.btn-primary.next-btn").first().click();
}
if (window.location.pathname.endsWith("/patients")) {
    console.log("found appt!");
    var myAudio = new Audio(chrome.runtime.getURL("sound.mp3"));
    myAudio.play();
}