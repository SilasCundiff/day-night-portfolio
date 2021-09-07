# Silas Cundiff Portfolio Project 3.0

Designed in Figma, Assets created in Figma, Illustrator, Photoshop, and After Effects.



## Main Features:
  1. Fully responsive - (built mobile first)
  2. Day/Night mode
  3. Built with Next.js, styled-components, lottie, and framer-motion
  

## Color palette and style guide

  #### General
    font-family: 'Poppins';
  
  #### Daymode
    primary: '#FFE9DC',
    secondary: '#C7273F',
    accent: '#530132',
    text: '#2F112D',
    gradient: 'linear-gradient(to bottom right, #C7273F, #F26E50, #F26E50, #F0453B)',


  #### Nightmode
    primary: '#091215',
    secondary: '#11A9E6',
    accent: '#7BA6B7',
    text: '#BAEBFF',
    gradient: 'linear-gradient(to bottom right, #11A9E6,#BAEBFF)'


  ## TODO
  - [ ] General
    - [ ] Make Responsive
    - [ ] Add Nav
    - [x] Add Social Links floater
      - [ ] Remove toggler on desktop
      - [ ] Add desktop styling
    - [ ] Add links to all buttons
    - [ ] Add media queries/styles for larger screens
    - [ ] Additional optimizations for mobile (disable some animations, etc)
    - [x] Create a day/nightmode context/provider
    - [ ] Create custom toggle animation for day/night toggler
  - [ ] Hero/Home
    - [x] Make Responsive
    - [ ] Animation specific
      - [ ] Add debouncer to prevent day/night toggle spam
      - [ ] Optimize Hero (disable animation and toggle debouncer when hero is not in view)
      - [x] Fix Sun/Moon Alignment
      - [ ] Improve Hero animation easing
  - [ ] About Me
    - [x] Make Responsive
    - [ ] About me background parallax
    - [ ] About me Skills Icons and text highlights
    - [x] About me desktop styling
    - [x] Fix About me nightmode color of heading and first paragraph.
  - [ ] Projects
    - [x] Make Responsive
    - [x] Define better projects divider text. 
    - [ ] Add background
  - [ ] Contact
    - [x] Make Responsive
    - [ ] Add backend for contact form.


