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
  const halfFinal = { round: '1/2', players: [] };
  const gameForThird = { round: 'gameForThird', players: [] };
  const final = { round: 'final', players: [] };

  for (let i = firstRoundIndex; i < placements.length; i += 1) {
    const players = tournament.TourGames.filter((el) => el.got_to === placements[i]);
    if (players.length === 1) {
      if (players[0].got_to === 'fourth' || players[0].got_to === 'third') {
        halfFinal.players.push(players[0]);
        gameForThird.players.push(players[0]);
      }
      if (players[0].got_to === 'second' || players[0].got_to === 'first') {
        halfFinal.players.push(players[0]);
        final.players.push(players[0]);
      }
      // const round = { round: placements[i], players: players[0] };
      // response.push(round);
    } else {
      const round = { round: placements[i], players };
      response.push(round);
    }
  }
  response.push(halfFinal, gameForThird, final);
  console.log(JSON.parse(JSON.stringify(response)));
  res.json(response);
});

module.exports = router;
