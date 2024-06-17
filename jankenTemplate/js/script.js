$(document).ready(function() {
    $('#btn1').on('click', function() {
        const randomNumber = Math.ceil(Math.random() * 10);
        if(randomNumber >= 7 && randomNumber <= 10) {
            $('#box-title2').html('<img src="images/gu.png" />');
            $('.text-center.result').html('引き分け');
        } else if(randomNumber >= 4 && randomNumber <= 6) {
            $('#box-title2').html('<img src="images/pa.png" />');
            $('.text-center.result').html('あなたの勝ち');
        } else {
            $('#box-title2').html('<img src="images/choki.png" />');
            $('.text-center.result').html('あなたの負け');
        }
    });

    $('#btn2').on('click', function() {
        const randomNumber = Math.ceil(Math.random() * 10);
        if(randomNumber >= 7 && randomNumber <= 10) {
            $('#box-title2').html('<img src="images/gu.png" />');
            $('.text-center.result').html('あなたの負け');
        } else if(randomNumber >= 4 && randomNumber <= 6) {
            $('#box-title2').html('<img src="images/pa.png" />');
            $('.text-center.result').html('あなたの勝ち');
        } else {
            $('#box-title2').html('<img src="images/choki.png" />');
            $('.text-center.result').html('引き分け');
        }
    });

    $('#btn3').on('click', function() {
        const randomNumber = Math.ceil(Math.random() * 10);
        if(randomNumber >= 7 && randomNumber <= 10) {
            $('#box-title2').html('<img src="images/gu.png" />');
            $('.text-center.result').html('あなたの勝ち');
        } else if(randomNumber >= 4 && randomNumber <= 6) {
            $('#box-title2').html('<img src="images/pa.png" />');
            $('.text-center.result').html('引き分け');
        } else {
            $('#box-title2').html('<img src="images/choki.png" />');
            $('.text-center.result').html('あなたの負け');
        }
    });
});
