# Tech Challenge
A challenge to take a design spec to a fully functioning webpage.  
[Live Demo](https://natejfoster.github.io/tech-challenge/)

## Technology
To complete this project I used React because components are awesome&mdash;in seriousness, this project was a good use case for React as there are a lot of codeblocks (i.e. the character cards) that would be duplicated otherwise. I am most familiar with React, so that's what I chose. I set up the project using the create-react-app cli, as futzing with configuration files is not *that* much fun&mdash;why reinvent the wheel right? For styling, I used SASS paired with the BEM principle. I decided to break out the styles into separate sheets for each individual component to improve readability. I didn't leverage variables in SASS, but if I had more time and was building more than a single page webapp, I would have.

Uses The Star Wars API ([SWAPI](https://swapi.co/))

## Extra Treats
- As an extra bonus, I decided to build my own reusable dropdown selector for this project. I built it in such a way, that it should be reusable in other projects. Guess I should look into turning it into an npm module now...
- I deployed this to GitHub Pages, so functionality can be tested. The final product is live [here](https://natejfoster.github.io/tech-challenge/)
- I committed my progress along the way to GitHub to provide version control. I pushed changes to the master branch, since I was the only one working on the project. The build lives in the gh-pages branch, which is what GitHub Pages is using to serve the site.
- I used a solitary media query to make this look decently well on smaller screens. For the most part, how I styled the site scaled quite nicely. The only part that needed the query was where the results number and gender filter were displayed. I didn't spend too much extra time on making it super nice in mobile, but it's better than nothing. 
- Lastly, I made a favicon for the site, because why not have a little Darth Vader keeping the tab bar in check?

## Closing Thoughts
I had a really fun time working on this project, and it was quite a refreshing change from some of the other tech challenges I have had to do for front-end developer positions.


PS: I did notice after completing the project that there are some some gender options that I omitted, as there wasn't a convenient way to determine all the possible options. Hope the three I provided are sufficient.
