<div id="top"></div>

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://camo.githubusercontent.com/93bafe03a143d759a2983be7cd132f70a6a186233ca455f08f3f198adb3d2381/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d5461696c77696e645f4353532d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d7768697465266c6f676f3d7461696c77696e6463737326636f6c6f723d303642364434)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Three js](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)
![Sentry](https://img.shields.io/badge/Sentry-hotpink.svg?style=for-the-badge&logo=sentry&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://apple-iphone-website-seven.vercel.app/">
    <img src="./public/assets/images/apple.svg" alt="Logo" height="80"  >
  </a>
  <h1 align="center">Apple Iphone</h1>

  <p align="center">
    <a href="https://apple-iphone-website-seven.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/SalahShallapy/Apple_Iphone_Website/issues">Report Bug</a>
  </p>
</div>

A clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.

<!-- ## Project Overview

### Main Overview

![header preview](./assets/overview.png)

### All Meals Overview

![header preview](./assets/allmeals.png)

### Community Overview

![header preview](./assets/community.png)

### Add Meal Overview

![header preview](./assets/addmeal.png)

### Added Meal and Meal Details Overview

![header preview](./assets/mealdetails.png) -->

## Features

- **Beautiful Subtle Smooth Animations using GSAP**: Enhanced user experience with seamless and captivating animations powered by GSAP.

- **3D Model Rendering with Different Colors and Sizes**: Explore the iPhone 15 Pro from every angle with dynamic 3D rendering, offering various color and size options.

- **Custom Video Carousel (made with GSAP)**: Engage users with a unique and interactive video carousel developed using GSAP for a personalized browsing experience.

- **Completely Responsive**: Consistent access and optimal viewing on any device with a fully responsive design that adapts to different screen sizes.

- Also many more, including code architecture and reusability

## Project Structure

```
Apple_Iphone_Website
│      .gitignore
│      index.html
│      package-lock.json
│      package.json
│      postcss.config.js
│      README.md
│      tailwind.config.js
│      vite.config.js
│
├───public ------> All images, videos and necessary resources for the 3rd model
│
│
├───src
│    │  App.jsx
│    │  index.css
│    │  main.jsx
│    │
│    └───components
│    │        Chio.jsx
│    │        Features.jsx
│    │        Footer.jsx
│    │        HeroSection.jsx
│    │        Highlights.jsx
│    │        IPhone.jsx
│    │        Lights.jsx
│    │        Loader.jsx
│    │        Model.jsx
│    │        ModelView.jsx
│    │        NavBar.jsx
│    │        VideoCarousel.jsx
│    │
│    └───constants
│    │        index.js
│    │
│    └───utils
│    │        animations.js
│    │        index.js
│    │
```

## Installation

To get started with the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/SalahShallapy/Apple_Iphone_Website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Apple_Iphone_Website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the project:
   ```bash
   npm run dev
   ```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
