import lieux from "../data/lieux";
import tweets from "../data/tweets";
import facebookMessages from "../data/facebookMessages";
import "moment/locale/fr";
import moment from "moment";

export function getRandomItemFromArray(items) {
  var item = items[Math.floor(Math.random() * items.length)];
  return item;
}

export function getRandomPlace() {
  return getRandomItemFromArray(lieux);
}

export function getRandomTweet() {
  return getRandomItemFromArray(tweets);
}

export function getRandomFacebookMessage() {
  return getRandomItemFromArray(facebookMessages);
}

export function getRandomDate(from, to) {
  const dateFrom = new Date();
  const dateEnd = moment()
    .add(1, "month")
    .toDate();
  from = dateFrom.getTime();
  to = dateEnd.getTime();
  return new Date(from + Math.random() * (to - from));
}

function replacePlaceholders(message, { space, time }) {
  let newMessage = message.replace("{{LIEU.ADRESSE}}", space.adresse);
  newMessage = newMessage.replace("{{LIEU.NOM}}", space.nom);
  newMessage = newMessage.replace(
    "{{DATE}}",
    moment(time).format("LL") + " à 19h"
  );
  return newMessage;
}

export default function generateHappyDrink() {
  const space = getRandomPlace();
  const time = getRandomDate();
  const facebookMessage = replacePlaceholders(
    getRandomFacebookMessage().message,
    {
      space,
      time
    }
  );
  const tweet = replacePlaceholders(getRandomTweet().message, { space, time });
  const happyDrink = {
    space,
    time,
    tweet,
    facebookMessage
  };
  return happyDrink;
}
