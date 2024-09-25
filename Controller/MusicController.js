const musicController = {
    index: (req, res) => {
        res.render('home');
    },
    trending: (req, res) => {
        res.render('trending');
    },
    favorites: (req, res) => {
        res.render('favorites');
    },
    playlist: (req, res) => {
        res.render('playlist');
    },
    artist: (req, res) => {
        res.render('artist');
    },
    playlistDetail: (req, res) => {
        const playlistId = req.params.id;
        
        const songs = [
            { title: "Song 1", artist: "Artist 1", src: "/music/song1.mp3" },
            { title: "Song 2", artist: "Artist 2", src: "/music/song2.mp3" }
        ];
    
        res.render('playlistDetail', { songs });
    },

    search: (req, res) => {
        const query = req.query.query;
        

        const results = [
            {
                title: "Boyfriend",
                artist: "Dove Cameron",
                src: "/music/boyfriend.mp3",
                image: "/images/cameron.jpg"
            },
            {
                title: "Zuttomo", 
                artist: "Zuttomo",
                src: "/music/zuttomo.mp3",
                image: "/images/zuttomo.jpg"
            },
            {
                title: "Wanderer", 
                artist: "Ren Zotto",
                src: "/music/wanderer.mp3",
                image: "/images/renzotto.jpg"
            }
        ];

       
        const filteredResults = results.filter(song =>
            song.title.toLowerCase().includes(query.toLowerCase()) ||
            song.artist.toLowerCase().includes(query.toLowerCase())
        );

        res.render('searchResults', { query, results: filteredResults });
    },
    
    addToFavorites: (req, res) => {
        const songId = req.params.id;

        res.json({ success: true, message: 'Song added to favorites', songId });
    },

    removeFromFavorites: (req, res) => {
        const songId = req.params.id;

        res.json({ success: true, message: 'Song removed from favorites', songId });
    }
};

module.exports = musicController;
