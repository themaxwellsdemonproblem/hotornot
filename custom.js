function showTrack(x) {
    for (let output of document.querySelectorAll('.holder')) output.classList.add('hide');
    for (let output of document.querySelectorAll('.holder')) output.classList.remove('show');

    if (x === 1) {
        document.getElementById('tr1').classList.toggle('hide')
        document.getElementById('tr1').classList.add('show')
        window.location.href = "#tr1";

    } else if (x === 2) {
        document.getElementById('tr2').classList.toggle('hide');
        document.getElementById('tr2').classList.add('show');
        window.location.href = "#tr2";

    } else if (x === 3) {
        document.getElementById('tr3').classList.toggle('hide');
        document.getElementById('tr3').classList.add('show')
    } else if (x === 4) {
        document.getElementById('tr4').classList.toggle('hide');
        document.getElementById('tr4').classList.add('show')
    } else if (x === 5) {
        document.getElementById('tr5').classList.toggle('hide');
        document.getElementById('tr5').classList.add('show')
    } else if (x === 6) {
        document.getElementById('tr6').classList.toggle('hide');
        document.getElementById('tr6').classList.add('show')
    } else if (x === 7) {
        document.getElementById('tr7').classList.toggle('hide');
        document.getElementById('tr7').classList.add('show')
    } else if (x === 8) {
        document.getElementById('tr8').classList.toggle('hide');
        document.getElementById('tr8').classList.add('show')
    } else if (x === 9) {
        document.getElementById('tr9').classList.toggle('hide');
        document.getElementById('tr9').classList.add('show')
    } else if (x === 10) {
        document.getElementById('tr10').classList.toggle('hide');
        document.getElementById('tr10').classList.add('show')
    } else if (x === 11) {
        document.getElementById('tr11').classList.toggle('hide');
        document.getElementById('tr11').classList.add('show')
    } else if (x === 12) {
        document.getElementById('tr12').classList.toggle('hide');
        document.getElementById('tr12').classList.add('show')
    } else if (x === 13) {
        document.getElementById('tr13').classList.toggle('hide');
        document.getElementById('tr13').classList.add('show')
    } else if (x === 14) {
        document.getElementById('tr14').classList.toggle('hide');
        document.getElementById('tr14').classList.add('show')
    } else if (x === 15) {
        document.getElementById('tr15').classList.toggle('hide');
        document.getElementById('tr15').classList.add('show')
    } else if (x === 999) {
        document.getElementById('appendix').classList.toggle('hide');
        document.getElementById('appendix').classList.add('show');
    } else {
        document.getElementById('home').classList.add('show');
        document.getElementById('home').classList.remove('hide');
        window.location.href = "#top";

    };


}



