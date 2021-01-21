document.getElementById('app').innerHTML = `<h1>Hello PWA <span class="tooltip">Esta é uma pagina PWA</span></h1>
<div>
    <ul>
        <li id="usage"></li>
        <li id="quota"></li>
        <li id="percent"></li>
    </ul>
</div>
<div>
    <button id="startrec">Iniciar gravação</button>
</div>
<div id="recresult">Nenhuma gravação</div>
`;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}