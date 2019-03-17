const asyncMiddleWare = require('../utils/asyncMiddleWare');
const schedule = require('../services/schedule');

module.exports = (router) => {
  router.get('/api/schedule/group/:numberGroup', asyncMiddleWare(async (req, res) => {
    const scheduleGroup = await schedule.getScheduleGroup(req.params.numberGroup);
    res.json(scheduleGroup);
  }));

  router.get('/api/schedule/group/:numberGroup/currentweek', asyncMiddleWare(async (req, res) => {
    const scheduleGroup = await schedule.getCurrentWeekScheduleGroup(req.params.numberGroup);
    res.json(scheduleGroup);
  }));

  router.get('/api/schedule/group/:numberGroup/currentday', asyncMiddleWare(async (req, res) => {
    const scheduleGroup = await schedule.getCurrentDayScheduleGroup(req.params.numberGroup);
    res.json(scheduleGroup);
  }));
};
