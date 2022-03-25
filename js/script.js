// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jaejun Lee
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street number and street name  shows it back to user.
 */
function enterClicked() {
  // input
  const firstName = document.getElementById("first-name").value
  const userAge = parseInt(document.getElementById("age-entered").value)
  // output
  document.getElementById("address").innerHTML =
    "Your address is: " + userAge + " " + firstName + "."
}
