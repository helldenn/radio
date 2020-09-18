// import { Howl, Howler } from "howler";
class Station {
    constructor(
        public name: string,
        public url: string,
        public howl: Howl | null = null) { }
}

let stations: Station[] = [
    new Station(
        'TopFM',
        'http://mp3.topfm.c.nmdn.net/ps-topfm/livestream.mp3'
    ),
    new Station(
        'ROCK ANTENNE',
        'https://stream.rockantenne.de/rockantenne/stream/mp3'
    ),
    new Station(
        'ROCK ANTENNE Heavy Metal',
        'https://stream.rockantenne.de/heavy-metal/stream/mp3'
    ),
    new Station(
        'TopFM',
        'http://mp3.topfm.c.nmdn.net/ps-topfm/livestream.mp3'
    ),
    new Station(
        'ROCK ANTENNE',
        'https://stream.rockantenne.de/rockantenne/stream/mp3'
    ),
    new Station(
        'ROCK ANTENNE Heavy Metal',
        'https://stream.rockantenne.de/heavy-metal/stream/mp3'
    )
]

let playingStation: Station | null = null

const app = document.getElementById("Radios");

stations.forEach((station, index) => {
    const p = document.createElement("button");
    p.textContent = station.name
    p.className = "block"
    p.onclick = function () { play(index); }
    app?.appendChild(p)
});


function play(i: number) {

    if (playingStation != null && playingStation == stations[i]) {
        // playing was stopped
        playingStation.howl?.stop()
        playingStation = null
        return
    } else if (playingStation != null) {
        // playing was stopped
        playingStation.howl?.stop()
    }

    playStation(stations[i])
}

function playStation(station: Station) {
    if (station.howl == null) {
        station.howl = new Howl({
            src: [station.url],
            format: ['mp3', 'aac'],
            html5: true,
            // volume: 0.3
        });
    }

    station.howl.seek(25)
    station.howl.play()
    playingStation = station
}


function playSound(src: string) {

    var sound = new Howl({
        src: [src],
        volume: 0.6
    });
    sound.play();
}