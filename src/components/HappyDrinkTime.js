import React from "react";
import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");

const HappyDrinkTime = ({ time }) =>
  "le " +
  moment(time)
    .lang("fr")
    .format("LL") +
  " à 19h";

export default HappyDrinkTime;
