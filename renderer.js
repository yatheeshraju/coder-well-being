// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function setTask() {
    var rems = [
        { task: 'blink your eyes ', icon: '<i class="em em-eyes"></i> ' },
        { task: 'take a walk ', icon: '<i class="em em-man-running"></i> ' },
        { task: 'standup and stretch', icon: ' <i class="em em-man-lifting-weights"></i> ' },
        { task: 'have a sip of water', icon: ' <i class="em em-potable_water"></i> ' },
        { task: 'stand up and touch your toes', icon: ' <i class="em em-man_dancing"></i>' },
        { task: 'do some situps ', icon: ' <i class="em em-man-lifting-weights"></i> ' },
        { task: 'turn your head in circle a few times', icon: ' <i class="em em-man-gesturing-ok" ></i> ' }
    ]
    let randomTaskjson = rems[Math.floor(Math.random() * rems.length)]

    let randomTask = randomTaskjson.task;
    let randomTaskIcon = randomTaskjson.icon;
    document.getElementById("taskdiv").innerHTML = randomTask;
    document.getElementById("taskicon").innerHTML = randomTaskIcon;
}
setTask();

setInterval(setTask, 1000 * 10);
