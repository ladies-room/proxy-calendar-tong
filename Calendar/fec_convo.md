# INTRO:
Hi, this is Tong, in my team we have chose to implement airbnb's listing page with 4 diffreent components, location gallery, reservation calendar, host reviews, and contact host, I was assigned to work on the reservation component, it allows user to pick the date they potentially want to stay at that listing, and shows the total price for those given dates.

# Approach:
my component's setup is fairly straight forward, a page with form and calendar block, then inside of the form component there is another component for canlendar modal.

i started my project by using react-dates, an open sourse npm package from airbnb to handle functionalities for the canlendar, it worked out great, however, because this project is for us to proactice our front end skills, so I decided to refactored my calendar components without using react-dates. Coming up with the logic for the calendar was definitely a chanllege, theree are a lot of things to consider...

In eacch month table theree aree weeks, in weeks there are days, and for each calendar table of that month, I also need to consider dates from the previouus month, and th emonth following, in the middle of that  I ran into a strange bug with using table tag in react, appeartly you can't have div inside of table, you have to usee tbody instead, otherwise i will break the wholething, that took me a while to figure out,

<!-- For this project the most challenging part I found was setting up for webpack, I learned some interesting things about webpack 2 and webpack 4, I spent a significant amount of time on setups for enzyme  -->

For this project the most challenging part I found was learning how to setup webpack, babal, and all the other required modules, at the beginning I set my entry point to a file that doesn't exsist, then I followed a tutorial for webpack 2 but somehow I have webpack 4 installed, and I spent a significiant amount of time wonder why it's not working.

<!-- The most interesting thing I learned through working on this project is there might just be an answer for everything on google -->

through doing this project, I learned the pros and cons of css module and react styled component, I have been really enjoy writing styled ccomponent, however, your files can get real chunky real quick.

<!-- I would say the biggest take away for me so far is  -->

the bst practice i would reocmmand to myself, or to other people is, to start the project early, don't be affraid to spent time on laying out the skeleton of the whole app before coding, and that can avoid a lot of back and forth;

<!-- what is the most important improvement you could make to your module for user experience at this point? -->
the second half of the fec I will try to improve user experience a little bit, add some animation and make modal transition more smooth;

Thank you;