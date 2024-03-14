# Pet Dashboard Web Application

## Introduction

*Welcome to the Pet Dashboard project! This interactive web application allows users to engage with a virtual pet through simple controls to ensure it remains happy and healthy. With intuitive buttons to feed, play with, and put the pet to sleep, this app provides a charming experience that simulates the care of a digital companion.*

## Features

- Interactive buttons to feed, play with, and put the pet to sleep.
- Dynamic visual feedback on the pet's current mood and health status.
- Persistent state through browser sessions using local storage.
- Gradual changes to the pet's mood and health over time if not interacted with.

## Getting Started

To use the Pet Dashboard, simply open `petdashboard.html` in a modern web browser. Ensure that `petscript.js` and `petstyling.css` are in the same directory as the HTML file for the application to function correctly.

## Interaction

- **Feed:** Improves the pet's health to 'Nourished' and mood to 'Happy'.
- **Play:** Boosts the pet's health to 'Excellent' and mood to 'Excited'.
- **Sleep:** Sets the pet's health to 'Resting' and mood to 'Sleepy'.

## Visual Indicators

The pet's current state is visually indicated by the color and text displayed on the web page:

- **Happy Mood:** Bright yellow color.
- **Excited Mood:** Vibrant pink color.
- **Sleepy Mood:** Calm blue color.
- **Neutral Mood:** Steady green color.
- **Sad Mood:** Deep red color.

The mood and health indicators are updated in real-time as you interact with the controls.

## Automatic Updates

If no interaction is made, the pet's mood and health will gradually decline over time. An alert will be triggered if the pet's health reaches a 'Bad' state, prompting you to take action.

## CSS Styling

The `petstyling.css` file contains the CSS rules for the appearance of the pet and the user interface. This includes the pet's shape, the layout of the controls, and the color changes reflecting the pet's mood.

## JavaScript Logic

The `petscript.js` file contains the logic for updating the pet's state and the user interface. It manages event listeners for button clicks, the updating mechanism for the pet's mood and health, and local storage interactions to persist the pet's state across browser sessions.

## Tips for Users

- Regular interaction with the pet is necessary to keep it in a good mood and health.
- Check the pet's mood and health status frequently and respond with appropriate actions.
- The pet's state will persist even after closing the browser, so remember to check back in!
