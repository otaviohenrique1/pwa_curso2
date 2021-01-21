const getReadedFile = function(reader, item) {
    return function() {
        let img = document.createElement('img');
        img.src = reader;
        // item.innerHTML = 'Arquivo começa com"' + reader.result.subString(0, 30) + '"';
        item.appendChild(img);
    };
};

const fileReader = function(e) {
    // console.log(e.target.files.length);
    const files = e.target.files;
    document.getElementById('counter').innerHTML = files.length;

    const list = document.getElementById('list');

    for (let i = 0; i < files.length; i++) {
        let item = document.createElement('li');
        const reader = new FileReader();
        reader.addEventListener('load', getReadedFile(reader, item));
        // reader.readAsText(files[i]);
        reader.readAsDataURL(files[i]);
        // item.innerHTML += JSON.parce(files[i]);
        item.innerHTML += files[i].name + ' - ' + file.type;
        list.appendChild(item);
    }
};

const init = function() {
    document.getElementById('file').addEventListener('change', fileReader());
};

if (window.File) {
    alert('Recurso não suportado');
    return;
} else {
    init();
}