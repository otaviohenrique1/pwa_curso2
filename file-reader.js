const fileReader = function(e) {
    console.log(e.target.files.length);
    document.getElementById('counter').innerHTML = e.target.files.length;
};

document.getElementById('file').addEventListener('change', fileReader());