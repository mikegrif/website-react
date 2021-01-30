const express = require('express');
const dayjs = require('dayjs');
const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params; // same as speakersService = params.speakersService

  router.get('/', async (request, response, next) => {
    try {
      const now = dayjs().format().toString();
      console.log(now + ' - Getting list of speakers...');
      //const names = await speakersService.getNames();
      //console.log(names);
      //return response.send(names);

      const artwork = await speakersService.getAllArtwork();
      const topSpeakers = await speakersService.getList();
      return response.send({ speakers: topSpeakers, artwork: artwork });
      /*
      return response.render('layout', {
        pageTitle: 'Welcome',
        template: 'index',
        topSpeakers,
        artwork,
      });
      */
    } catch (err) {
      return next(err);
    }
  });

  // configure routes
  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));
  return router;
};
