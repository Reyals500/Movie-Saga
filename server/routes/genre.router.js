const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log("req.params.id", req.params.id);
  const movieID = req.params.id
  // Add query to get all genres
  // const newInquery = req.body
  const query = `
  SELECT movies.title, movies.poster, movies.description, STRING_AGG(genres.name , ',') FROM "movies"
  JOIN "movies_genres" ON movies.id = movies_genres.movie_id
  JOIN "genres" ON genres.id = movies_genres.genre_id
  WHERE movies.id = $1
  GROUP BY movies.title, movies.poster, movies.description
  ORDER BY movies.title ASC;
  `;
  const params = [movieID]
  // let params = [newInquery.id]
  // console.log(params);
  pool.query(query, params)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log("Error in GET all genres", err);
      res.sendStatus(500)
    })
  
});

module.exports = router;