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
    )
]

let playingStation: Station | null = null

const app = document.getElementById("Radios");

stations.forEach((station, index) => {
    const p = document.createElement("button");
    p.textContent = station.name
    p.id = index.toString()
    p.className = "block"
    p.onclick = function () { play(index); }
    app?.appendChild(p)
});


function play(i: number) {

    if (playingStation != null && playingStation == stations[i]) {
        // playing was stopped
        playingStation.howl?.unload()
        playingStation = null
        // remove focus from station
        let station = document.getElementById(i.toString())
        station?.blur()

        return
    } else if (playingStation != null) {
        // playing was stopped
        playingStation.howl?.unload()
    }

    playStation(stations[i])
}

function playStation(station: Station) {
    if (station.howl == null) {
        station.howl = new Howl({
            src: [station.url],
            format: ['mp3', 'aac'],
            html5: true
            // volume: 0.3
        });
    }

    station.howl!!.play()
    // station.howl!!.seek(25, id)

    playingStation = station
}


function playSound(src: string) {

    var sound = new Howl({
        src: [src],
        volume: 0.6
    });
    sound.play();
}