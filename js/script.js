// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of a parrallelogram.
 */
function calculate () {
  // input
  const a = parseInt(document.getElementById("base-a-of-trapezoid").value)
  const b = parseInt(document.getElementById("base-b-of-trapezoid").value)    
  const height = parseInt(document.getElementById("height-of-trapezoid").value)

  // process
  const area = [ ( a + b ) / 2 * height ]

  // output
  document.getElementById('answers').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
}