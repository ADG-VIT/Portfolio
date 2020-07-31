import React from 'react';
import Contact from './Contact';
import CardList from './CardList';
import Links from './Links';

function App() {

  let cards = [
    {image : 'https://www.researchgate.net/profile/Gareth_Roberts10/publication/251839685/figure/fig3/AS:652228557803529@1532514814266/a-A-SEVIRI-400-x-400-pixel-scene-of-southern-Africa-September-4-th-1212pm.png', title: 'Title for img 1'},
    {image : 'https://www.researchgate.net/profile/Gareth_Roberts10/publication/251839685/figure/fig3/AS:652228557803529@1532514814266/a-A-SEVIRI-400-x-400-pixel-scene-of-southern-Africa-September-4-th-1212pm.png', title: 'Title for img 2'},
    {image : 'https://www.researchgate.net/profile/Gareth_Roberts10/publication/251839685/figure/fig3/AS:652228557803529@1532514814266/a-A-SEVIRI-400-x-400-pixel-scene-of-southern-Africa-September-4-th-1212pm.png', title: 'Title for img 2'},
    {image : 'https://www.researchgate.net/profile/Gareth_Roberts10/publication/251839685/figure/fig3/AS:652228557803529@1532514814266/a-A-SEVIRI-400-x-400-pixel-scene-of-southern-Africa-September-4-th-1212pm.png', title: 'Title for img 4'},
    {image : 'https://www.researchgate.net/profile/Gareth_Roberts10/publication/251839685/figure/fig3/AS:652228557803529@1532514814266/a-A-SEVIRI-400-x-400-pixel-scene-of-southern-Africa-September-4-th-1212pm.png', title: 'Title for img 5'}
  ]

  return (
    <div className="App">
      <CardList className="card-container" cards={cards}/>
      <Contact />
      <Links />
    </div>
  );
}

export default App;
