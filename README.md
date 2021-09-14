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
    - [x] Make Responsive
    - [x] Add Nav
      - [x] Add Logo Icon
      - [x] Make Links function
    - [x] Add Social Links floater
      - [x] Remove toggler on desktop
      - [x] Add desktop styling
    - [x] Add links to all buttons
    - [x] Add media queries/styles for larger screens
    - [ ] Additional optimizations for mobile (disable some animations, etc)
    - [x] Create a day/nightmode context/provider
    - [ ] Create custom toggle animation for day/night toggler
    - [x] Add 404 page
  - [ ] Hero/Home
    - [x] Make Responsive
    - [ ] Hero Animation specific
      - [x] Add debouncer to prevent day/night toggle spam
      - [x] Optimize Hero (disable animation and toggle debouncer when hero is not in view)
      - [x] Fix Sun/Moon Alignment
      - [ ] Improve Hero animation easing
  - [ ] About Me
    - [x] Make Responsive
    - [x] About me background parallax
    - [x] ~~About me Skills Icons and text highlights~~
    - [ ] Add Skills modal
      - [x] Add Tabs for skill categories
      - [x] Add Accordion for skills
      - [ ] Flesh out full list of skills (in skillInfo.js)
    - [x] About me desktop styling
    - [x] Fix About me nightmode color of heading and first paragraph.
  - [x] Projects
    - [x] Make Responsive
    - [x] Define better projects divider text. 
    - [x] Add background
  - [ ] Contact
    - [x] Make Responsive
    - [x] Add backend for contact form.
    - [x] Add Success page
  - [ ] Redesign contact page
  - [ ] Misc
    - [ ] Reformat Social Floater to be reusable


