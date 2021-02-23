function showTrack(x) {
    for (let output of document.querySelectorAll('.holder')) output.classList.add('hide');
    for (let output of document.querySelectorAll('.holder')) output.classList.remove('show');

    if (x === 1) {
        document.getElementById('tr1').classList.toggle('hide')
        document.getElementById('tr1').classList.add('show')

    } else if (x === 2) {
        document.getElementById('tr2').classList.toggle('hide');
        document.getElementById('tr2').classList.add('show')
    } else {
        document.getElementById('home').classList.add('show');
    };


}