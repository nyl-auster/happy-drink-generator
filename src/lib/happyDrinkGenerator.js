import lieux from "../data/lieux";
import moment from "moment";

function getRandomItemFromArray(items) {
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
}

function getRandomPlace() {
  getRandomDate();
  return getRandomItemFromArray(lieux);
}

function getRandomDate(from, to) {
  const dateFrom = new Date();
  const dateEnd = moment()
    .add(1, "month")
    .toDate();
  from = dateFrom.getTime();
  to = dateEnd.getTime();
  return new Date(from + Math.random() * (to - from));
}

export default function generateHappyDrink() {
  return {
    space: getRandomPlace(),
    time: getRandomDate()
  };
}
