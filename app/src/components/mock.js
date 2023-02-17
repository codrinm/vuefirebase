const titles = [
  'Design Meeting',
  'Dev Stand-up',
  'Project Kick-off'
];

function randomTitle() {
  return titles[getRandomInt(0, titles.length - 1)];
}

/**
 * @return {Booking}
 */
export function newBooking() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(end.getHours() + 1);
  return {
    title: randomTitle(),
    room: {
      ref: {path: 'rooms/boardroom'},
      title: 'Boardroom'
    },
    fromTime: now,
    toTime: now
  };
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
