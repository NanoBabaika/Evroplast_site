console.log('Hi from map!');

let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [59.906178, 30.435714],
        zoom: 13,
        controls:[]
    });
    
    const coords = [
        [59.904431, 30.450221],
        // [38.961065, 45.022922],
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable:false,
        iconLayout: 'default#image',
        iconImageHref: "./img/place_mark.svg",
        iconImageSize:[46,57],
        iconImageOffset:[-35,-52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);
}

ymaps.ready(init);