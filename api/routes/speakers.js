const express = require('express');
const dayjs = require('dayjs');
const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (request, response, next) => {
    try {
      const now = dayjs().format().toString();
      console.log(now + ' - Getting list of speakers...');
      const speakers = await speakersService.getList();
      const artwork = await speakersService.getAllArtwork();
      return response.send({ speakers: speakers, artwork: artwork });
    } catch (err) {
      return next(err);
    }
  });

  router.get('/:shortname', async (request, response, next) => {
    try {
      const shortname = request.params.shortname;
      const now = dayjs().format().toString();
      console.log(now + ` - Getting info for speaker ${shortname}...`);
      const speaker = await speakersService.getSpeaker(shortname);
      const artwork = await speakersService.getArtworkForSpeaker(
        request.params.shortname
      );

      return response.send({ speaker: speaker, artwork: artwork });
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
