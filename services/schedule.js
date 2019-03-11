const rozklad = require('node-rozklad-api')

module.exports = {
  async getScheduleGroup(group) {
    const schedule = await rozklad.timetable(group);
    return schedule.weeks;
  },

  async getCurrentWeekScheduleGroup(group) {
    const [currWeek, schedule] = await Promise.all([
      rozklad.currWeek(),
      this.getScheduleGroup(group),
    ]);
    return schedule[currWeek];
  },

  async getCurrentDayScheduleGroup(group) {
    const currDay = new Date().getDay();
    const schedule = await this.getCurrentWeekScheduleGroup(group);
    return schedule.days[currDay];
  },
}