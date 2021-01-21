// console.log('Service worker registred');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

if (workbox) {
    // console.log('Carregado');
    workbox.routing.registerRoute(
        new RegExp('.*'),
        workbox.strategies.networkFirst()
    );
} else {
    console.log('Nao carregado');
}