$(document).ready(function () {
    function refreshData() {

        // time
        x = 1;  
        var d = new Date();
        var h = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();

        var currentTime = new Date();
        // Set UTC time
        var h = currentTime.getUTCHours();
        var m = currentTime.getUTCMinutes();
        var s = currentTime.getUTCSeconds();

        if ($(".active").text() === "Tokyo") {
            h = h + 9;
        }
        if ($(".active").text() === "Taipei") {
            h = h + 8;
        }
        if ($(".active").text() === "New York") {
            h = h +20;
        }
        if ($(".active").text() === "Los Angeles") {
            h = h+ 17;
        }
        if ($(".active").text() === "London") {
            h = h + 1;
        }
        if ($(".active").text() === "Bangkok") {
            h = h + 7;
        }

        // '.active'
        $("li").click(function () {
            // remove.active效果
            $("li").removeClass("active");
            // addclass.active效果
            $(this).addClass("active");
        });

        // AM & PM
        var ampm = h >= 12 ? 'PM' : 'AM';
        var hh = h % 12;
        hh = hh ? hh : 12; 

        //time 0
        if (h <= 9) { h = '0' + h };
        if (m <= 9) { m = '0' + m };
        if (s <= 9) { s = '0' + s };

        // 12:00 black PM ; white AM
        var nd = h >= 12 ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'; 
        var r = 6 * s;

        //colors
        var color = 'rgb(' + (10 * h) + ',' + (2 * s) + ',' + (3 * m) + ')';
        var color2 = 'rgb(' + (3 * h) + ',' + (150 + m) + ',' + ((2 * s) + 100) + ')';

        $("div.background").css("background", '-webkit-linear-gradient(' + r + 'deg,' + color + ' 10%,' + color2 + ' 90%');

        $("#date,#hex").css("color", nd);

        //display time
        $("p#date").text(hh + ':' + m + ':' + s + ' ' + ampm);
        //display colors
        $("p#hex").text(color + ' – ' + color2);

        setTimeout(refreshData, x * 1000);
    }

    refreshData(); // execute function
   
});
