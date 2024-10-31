var config = {
    style: 'mapbox://styles/mapbox/dark-v11',
  accessToken: 'pk.eyJ1IjoiY2Fyb2xpbmVncmFjZSIsImEiOiJjbTJ4cXR0am8wODhoMmtvcXptcGY2cG1vIn0.5FvnZFwrTodlX_YAuXIsBg',
showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Spooky Trick or Treat',
    subtitle: 'A Chillingly Warm Halloween Evening',
    byline: 'By CG Williams',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Halloween in San Francisco',
            image: './path/to/image/source.png',
            description: 'While the kids were still sitting in class and swapping candy during afternoon reccess, the children on the East Coast were finishing up dinner and getting ready to venture out into the night.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Halloween in Washington D.C.',
            image: './path/to/image/source.png',
            description: 'The children on the East Coast were happy that it was warm enough outside to not wear a coat over their costume. Parents naturally were worried about the hot temperature for what should be a cool October evening. The spoke about how important it was to vote in the election to make sure climate inititives would be considered and taken seriously.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Geneva, Switzerland',
            image: './path/to/image/source.png',
            description: 'The children in Switzerland had just finished trick-or-treating and were empty-ing their pillowcases full of Swiss Candy which included: Sugus, Massmogge, and Frey Milk.',
            location: {
                center: [6.15116, 46.20595],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
