# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **FARHAN MASHUD**

Time spent: **7** hours spent in total

Link to project: https://siteprework.glitch.me (live site)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Added animated images depending on if the user won the current round or not

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](updatedsite1.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
**https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random**

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

When trying to extend the capabilities of my project, I initially had some difficulty in generating a random pattern using JavaScript. I initially took a look at the documentation at the Mozilla MDN website to see how the Math.random() built-in method can serve as a random generator for my code. However, I realized that the functionality of the Math.random() method was limited because the call to the method only returns floats within the range of 0 and 1, exclusive. With the existence of 9 buttons, I was struggling to figure out how to accustom the Math.random() method to the 9 buttons. My initial attempt in resolving this was to multiply the float by 9 so that I could get a number within the valid range of button numbers, and I decided to round the answer using the Math.round() method since the button numbers were integers. Although this did work to some extent, The random pattern arrays generated only consisted of 1's and 8's, and after a series of tests and console logging the array to see what numbers generated, I saw that the pattern still contained 1's and 9's. I decided to define an algorithmic formula afterwards to generate a random number. I would run a for loop for 14 iterations and in each iteration I would multiply the Math.random() by the current iteration, and then rounded that answer. Afterwards, I realized that the algorithm outputted 0's into the array, which is a problem since there's no id of 0 for a button. Then I saw that I could confidently add 1 to the result of the algorithm, to ensure that no 0 gets pushed into the pattern array. And, I account for a number greater than 9 by subtracting the remainder when dividing by 9, and then pushing that difference to the array. Fortunately, that algorithm helped to generate valid random numbers that are as spread-apart as possible. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  a. How can someone build their brand as a web developer and appeal to clients looking for solutions?
  b. What are some of the challenges, if any, that web development will face in the job industry, and  what can developers like us do to rise up to those challenges?
  c. What is the appropriate skillset that an aspiring web developer or software engineer should attain?
  d. What are the various things that one could accomplish using web development, and what are its limitations?
  e. Are there ways in which one can simplify HTML and CSS code?
  f. How can you come up with a design to develop from scratch, and what are ways in which one can make great designs for development if its hard to think of any ideas initially?
  g. How can one debug code faster during the web development process? Are there any tools available that allow fast frontend code debugging?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, I would try to animate the game buttons once they are clicked, add a scoreboard so that the user can compare the score that he/she earned with the scores of other users who played as well, and create a login system so that users can save their progress. I also would want to incorporate levels in the game, where difficulty of the game would increase as the user increases their level. More specifically, I would want to add more buttons after completing each level, and instead of playing one extra key, a variable number of keys would be played after currently guessing a sequence. For instance, first one button would be played, and after that button was clicked, two more buttons would be played, then three more buttons, etc.  



## License

    Copyright Farhan Mashud

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
