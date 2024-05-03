var words = ['MERN-Stack Developer', 'MEAN-Stack Developer', 'Designer',];

var currentIndex = 0;
function updateWord() {
    var paragraph = document.getElementById('paragraph');
    paragraph.innerText = words[currentIndex];
    currentIndex = (currentIndex + 1) % words.length;
}

setInterval(updateWord, 2000);