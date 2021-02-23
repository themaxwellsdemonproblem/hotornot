function showTrack(x) {
    for (let output of document.querySelectorAll('.holder')) output.classList.add('hide');

    if (x === 1) {
        document.getElementById('home').classList.remove('show')
        document.getElementById('tr1').classList.toggle('hide')
    } else {
        document.getElementById('home').classList.add('show');
        document.getElementById('home').classList.toggle('hide');
    };


}