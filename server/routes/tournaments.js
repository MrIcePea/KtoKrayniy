const router = require('express').Router();
const { Tournament, TourGame } = require('../db/models');

const placements = ['1/64', '1/32', '1/16', '1/8', '1/4', 'fourth', 'third', 'second', 'first'];

router.get('/', async (req, res) => {
  const tournaments = await Tournament.findAll();
  res.json(tournaments);
});

router.get('/:id', async (req, res) => {
  const tournament = await Tournament.findOne(
    {
      where: {
        id: req.params.id,
      },
      include: {
        model: TourGame,
      },
    },
  );
  console.log(JSON.parse(JSON.stringify(tournament)));
  // приводим это все к виду который понадобится на фронте
  const firstRoundIndex = placements.indexOf(tournament.first_round);
  const response = [];

  for (let i = firstRoundIndex; i < placements.length; i += 1) {
    const players = tournament.TourGames.filter((el) => el.got_to === placements[i]);
    if (players.length === 1) {
      const round = { round: placements[i], players: players[0] };
      response.push(round);
    } else {
      const round = { round: placements[i], players };
      response.push(round);
    }
  }
  // console.log(response);
  res.json(response);
});

module.exports = router;
