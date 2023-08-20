import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Proposition } from "./components/Proposition/Proposition";
import { Channels } from "./components/Channels/Channels";
import { Devices } from "./components/Devices/Devices";
import { dataHelpCenter } from "./components/HelpCenter/dataHelpCenter.js";
import { HelpCenter } from "./components/HelpCenter/HelpCenter";
import { About } from "./components/About/About";

import { dataProposition } from "./components/Proposition/data.js";
import { categories } from "./components/Channels/dataCategories.js";
import { channels } from "./components/Channels/dataChannels.js";
import {dataAbout,dataContacts} from "./components/About/dataAbout.js"
import { dataHero } from "./components/Hero/dataHero.js";


function App() {
  return (
    <>
      <header>
        <Header />
        <Hero 
        dataHero={dataHero}
        />
      </header>
      <main>
        <Proposition dataProposition={dataProposition} />
        <Channels categories={categories} channel={channels} /> 
        <Devices /> 
        <HelpCenter dataHelpCenter={dataHelpCenter} /> 
      </main>
      <footer>
        <About
        dataAbout={dataAbout}
        dataContacts={dataContacts}
        />
      </footer>
    </>
  );
}

export default App;
