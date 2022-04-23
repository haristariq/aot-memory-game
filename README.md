# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's FTL Program. 

Submitted by: Haris Tariq

Time spent: 9 hours spent in total

Link to project: (https://sixth-chocolate-honeydew.glitch.me/)

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
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Respective sounds of the characters!
- [X] Added a Moves counter that shows moves made
- [X] Added a Mistakes counter that shows mistakes made

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:


* [X] **Mistake and Moves Counter and Lost Game after 3 Mistakes**

![](http://g.recordit.co/0JmU5D1MBt.gif)

* [X] **Speedup and Win after all correct patterns**

![](http://g.recordit.co/o0cIIRi2uM.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[https://www.w3schools.com/w3css/defaulT.asp]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[The main challenge that I faced while doing this work was implementing one of the optional features called "Speed it up". I have used custom audio that include the actual voices of the Attack on Titan characters. The smallest length of audio that I could make was one sec which was similar to the starting constant for the computer thus It would have been really hard to decrease the clue playback time while keeping sure the audio is played. I tried increasing the playback but this resulted in an unnecessary delay in the sound. I started decreasing the playback time by 50ms each turn but this resulted in the computer not playing the sound at all after a few turns and then later on not completing showing the photos and not giving enough time to the player to read and memorize the pattern. This issue also created a bug in the code which resulted in only the sound playing and the photo not showing and the player not being able to press any button. I fixed this problem by using a different value of playback decrease ranging from 50 to 10 and then also played around with the audio length to have a constant match between the photo, the light and the sound. Adding the voices of characters was a fun challenge and I am glad I was able to create the game as I wanted it to be with the additional features working too.]


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

[• Web development is a fun and really intriguing work that really captivated me as I was working through the project. Cookies is an interesting concept that I want to learn deeply about and see how they work with data and website. I want to learn more about how websites come together and how the functions that we create are working and carrying each other. I also want to understand how the work behind the website i.e CSS file differs between a static website and a social network or business website. The features that these websites have, how they are created behind the curtain and are they built on the base of a static website or there is a 
different approach that can also be taken. How long is the planning before the rough website is created. How would an engineer know when to write a code themself or use a function from the library and why.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours to work on this project, after doing some thinking on the game, I would have try to make a function that makes the game endless or a huge number of levels which would be challenigng and as players progress they would get more mistakes. I would also create a difficulty meter where the clue playback and the number of moves are limited. I would also like to optimize the game for mobile, the button area shown in vertical order and aren’t fitting on the same page, so what I would do is decrease the size of the button for the mobile and also change its alignment.I wasn’t able to set a timer on the game, it would be a good feature to add if I had more time and a bit more experience with javascript. If I had more time, I would have liked to implement a global public leaderboard that shows lifetime score.]



## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/5ruN_FUQouE)


## License

    Copyright Haris Tariq

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
