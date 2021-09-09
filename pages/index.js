import ThemeToggler from '@/components/ThemeToggler';
import Head from 'next/head';
import Home from '@/components/sections/home';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import SocialFloater from '@/components/SocialFloater';
import NavBar from '@/components/Navs/NavBar';

export default function MainPage({ dayMode, dayModeToggler }) {
  return (
    <div>
      <Head>
        <title>Silas Cundiff - Designer & Developer</title>
        <meta
          name='description'
          content='Portfolio of Silas Cundiff - a Web Designer and Developer'
        />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <NavBar />
      <SocialFloater />
      <Home dayModeToggler={dayModeToggler} dayMode={dayMode} />
      <About />
      <Projects />
      <Contact />
      <ThemeToggler dayModeToggler={dayModeToggler} dayMode={dayMode} />
    </div>
  );
}
