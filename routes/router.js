const express = require('express');
const router = express.Router();
const musicController = require('../Controller/MusicController');

router.get('/', musicController.index);
router.get('/music/trending', musicController.trending);
router.get('/music/favorites', musicController.favorites);
router.get('/music/playlist', musicController.playlist);
router.get('/music/artist', musicController.artist);
router.get('/music/playlist/:id', musicController.playlistDetail);
router.get('/search', musicController.search); // Add this line for the search functionality
router.post('/favorites/add/:id', musicController.addToFavorites);

// Route to remove song from favorites
router.post('/favorites/remove/:id', musicController.removeFromFavorites);

module.exports = router;
