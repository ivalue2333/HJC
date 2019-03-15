

function compute() {
    var begin_time = new Date("2019/02/17 23:24:00");
    var now = new Date();
    // 秒数
    var time_diff = (now.getTime() - begin_time.getTime()) / 1000;
    var day_diff = Math.floor(time_diff / (24 * 3600));
    time_diff = time_diff % (24 * 3600);
    var hour_diff = Math.floor(time_diff / 3600);
    time_diff = time_diff % (3600);
    var min_diff = Math.floor(time_diff / 60);
    time_diff = time_diff % 60;
    var sec_diff = Math.floor(time_diff);

    var dateTime = day_diff + 'days' + hour_diff + 'hours' + min_diff + 'minutes' + sec_diff + 'seconds';
    var divNode = document.getElementById("our_time");
    divNode.innerHTML = dateTime;
}

window.setInterval("compute()",1000);