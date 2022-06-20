const router = require('express').Router();
const e = require('express');
const { Tournament, TourGame, User } = require('../db/models');

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
        order: [
          ['position', 'ASC'],
        ],
        include: {
          model: User,
          attributes: { exclude: ['role', 'pass'] },
        },
      },
    },
  );
  // console.log(JSON.parse(JSON.stringify(tournament)));
  // приводим это все к виду который понадобится на фронте
  const tournamentWithSpacesLength = Number(tournament.first_round.slice(2)) * 2;
  const tournamentWithSpaces = [];
  for (let i = 1; i <= tournamentWithSpacesLength; i += 1) {
    const player = tournament.TourGames.find((el) => (el.position === i));
    if (player) {
      tournamentWithSpaces.push(player);
    } else {
      tournamentWithSpaces.push({ got_to: '1/8', position: i, User: { nickName: 'none' } });
    }
  }
  console.log(JSON.parse(JSON.stringify(tournamentWithSpaces)));

  const firstRoundIndex = placements.indexOf(tournament.first_round);
  const response = [];
  const thirdPlaceGamePlayers = tournamentWithSpaces.filter((el) => (el.got_to === 'third' || el.got_to === 'fourth'));
  const thirdPlaceGame = { round: '3rd', players: thirdPlaceGamePlayers };
  for (let i = firstRoundIndex; i < placements.length; i += 1) {
    // eslint-disable-next-line max-len
    const players = tournamentWithSpaces.filter((el) => el.got_to === placements[i] || placements.indexOf(el.got_to) >= i);
    if (players.length === 4) {
      const round = { round: '1/2', players };
      response.push(round);
    } else if (players.length === 2) {
      response.push(thirdPlaceGame);
      const round = { round: 'final', players };
      response.push(round);
    } else if (players.length !== 3 && players.length !== 1) {
      const round = { round: placements[i], players };
      response.push(round);
    }
  }
  // console.log(JSON.parse(JSON.stringify(response)));
  res.json(response);
});

module.exports = router;
