import React from 'react';


const Recepies = [
    // BEAR
    {
      "head": `HEAD`,
      "ear": "EAR",
      "neck": "NECK",
      "chuck": "CHUCK",
      "rib": "RIB",
      "shotr-loin": "shotr-loin",
      "loin": "loin",
      "rump": "RUMP",
      "tail": "TAIL",
      "brisket": "brisket",
      "shoulder": "shoulder",
      "short-ribs":"short-ribs",
      "plate":"plate",
      "flank":"flank",
      "round":"round",
      "fore-shank":"fore-shank",
      "fore-shank-1":"fore-shank-1",
      "hind-shank":"hind-shank",
      "hind-shank-1":"hind-shank-1",
      img: '/ashot-images/bear.jpg'
    },
    // BEEF
    {
      "head": `HEAD`,
      "chuck": "CHUCK",
      "rib":"RIB",
      "loin":"LOIN",
      "sirloin":"sirloin",
      "round":"ROUND",
      "brisket": "BRISKET",
      "plate":"PLATE",
      "flank":"FLANK",
      "shank":"SHANK",
      img: '/ashot-images/beef.png'
    },
    // PORK 
    {
      "head": `HEAD`,
      "arm-shoulder": "arm-shoulder",
      "blade-shoulder": "blade-shoulder",
      "hock": "hock",
      "loin":"LOIN",
      "spare-rib":"spare-rib",
      "side":"side",
      "leg":"leg",
      img: '/ashot-images/pork.jpg'
    },
    // CHICKEN
    {
      "neck": `neck`,
      "breast": "BREAST",
      "leg":"LEG",
      "wing":"WING",
      "tail":"TAIL",
      "thign":"THIGN",
      img: '/ashot-images/pork.jpg'
    },
    // LAMB
    {
      "neck": `NECK`,
      "chuck":"CHUCK",
      "sholder":"sholder",
      "breast":"breast",
      "loin":"loin",
      "leg":"leg",
      img: '/ashot-images/pork.jpg'
    },
    // RABBIT
    {
      "shoulder": `shoulder`,
      "front-leg":"front-leg",
      "saddle":"saddle",
      "rib":"rib",
      "loin":"loin",
      "hind-leg":"LEG",
      img: '/ashot-images/pork.jpg'
    },
    // FISH
    {
      "head": `HEAD`,
      "back":"BACK",
      "caviar":"CAVIAR",
      "abdomen-meat":"abdomen-meat",
      "tail-meat":"MEAT",
      img: '/ashot-images/pork.jpg'
    },
    // CRAB
    {
      "claw-meat": `CLAW-MEAT`,
      "white-meat": "WHITE-MEAT",
      img: '/ashot-images/pork.jpg'
    },
    // SHRINK
    {
      "tail-meat": `tail-meat`,
      img: '/ashot-images/pork.jpg'
    },
    // KNIVES
    {
      "knives-french-or-chef": `knives-french-or-chef`,
      "knives-boning":"knives-boning",
      "knives-filleting":"knives-filleting",
      "knives-cleaver":"knives-cleaver",
      "knives-carving":"knives-carving",
      "knives-fork":"knives-fork",
      "knives-slicing":"knives-slicing",
      "knives-scimitar":"knives-scimitar",
      "knives-butcher":"knives-butcher",
      img: '/ashot-images/pork.jpg'
    },
];

let renderBear = () => {
  return(
    <div>
      <div className="bear">
          <div className="head hovered"></div>
          <div className="ear hovered"></div>
          <div className="neck hovered"></div>
          <div className="chuck hovered"></div>
          <div className="rib hovered"></div>
          <div className="shotr-loin hovered"></div>
          <div className="loin hovered"></div>
          <div className="rump hovered"></div>
          <div className="tail hovered"></div>
          <div className="brisket hovered"></div>
          <div className="shoulder hovered"></div>
          <div className="short-ribs hovered"></div>
          <div className="plate hovered"></div>
          <div className="flank hovered"></div>
          <div className="round hovered"></div>
          <div className="fore-shank hovered"></div>
          <div className="fore-shank-1 hovered"></div>
          <div className="hind-shank hovered"></div>
          <div className="hind-shank-1 hovered"></div>
          <div className="foot-1"></div>
          <div className="foot-2"></div>
          <div className="foot-3"></div>
          <div className="foot-4"></div>
      </div>
      <div className="caption">Bear</div>
    </div>
  );
}

let renderBeef = () => {
  return(
    <div>
      <div className="beef">
          <div className="head hovered"></div>
          <div className="chuck hovered"></div>
          <div className="rib hovered"></div>
          <div className="loin hovered"></div>
          <div className="sirloin hovered"></div>
          <div className="round hovered"></div>
          <div className="brisket hovered"></div>
          <div className="plate hovered"></div>
          <div className="flank hovered"></div>
          <div className="shank hovered"></div>
      </div>
      <div className="caption">Beef</div>
    </div>
  );
}

let renderPork = () => {
  return(
    <div>
      <div className="pork">
          <div className="head hovered"></div>
          <div className="arm-shoulder hovered"></div>
          <div className="blade-shoulder hovered"></div>
          <div className="hock hovered"></div>
          <div className="loin hovered"></div>
          <div className="spare-rib hovered"></div>
          <div className="side hovered"></div>
          <div className="leg hovered"></div>
      </div>
      <div className="caption">Pork</div>
    </div>
  );
}

let renderChicken = () => {
  return(
    <div>
      <div className="chicken">
        <div className="neck hovered"></div>
        <div className="breast hovered"></div>
        <div className="leg hovered"></div>
        <div className="wing hovered"></div>
        <div className="tail hovered"></div>
        <div className="thign hovered"></div>
      </div>
      <div className="caption">Chicken</div>
    </div>
  );
}

let renderLamb = () => {
  return(
    <div>
      <div className="lamb">
        <div className="neck hovered"></div>
        <div className="chuck hovered"></div>
        <div className="sholder hovered"></div>
        <div className="breast hovered"></div>
        <div className="loin hovered"></div>
        <div className="leg hovered"></div>
      </div>
      <div className="caption">Lamb</div>
    </div>
  );
}

let renderRabbit = () => {
  return(
    <div>
      <div className="rabbit">
        <div className="head-tail"></div>
        <div className="shoulder hovered"></div>
        <div className="front-leg hovered"></div>
        <div className="saddle hovered"></div>
        <div className="rib hovered"></div>
        <div className="loin hovered"></div>
        <div className="hind-leg hovered"></div>
      </div>
      <div className="caption">Rabbit</div>
    </div>
  );
}

let renderFish = () => {
  return (
    <div>
      <div className="fish">
        <div className="head hovered"></div>
        <div className="back hovered"></div>
        <div className="caviar hovered"></div>
        <div className="abdomen-meat hovered"></div>
        <div className="tail-meat hovered"></div>
      </div>
      <div className="caption">Fish</div>
    </div>
  );
}

let renderCrab = () => {
  return (
    <div>
      <div className="crab">
        <div className="legs"></div>
        <div className="claw-meat hovered"></div>
        <div className="white-meat hovered"></div>
      </div>
      <div className="caption">Crab</div>
    </div>
  );
}

let renderShrink = () => {
  return(
    <div>
      <div className="shrimp">
        <div className="shrimp-body"></div>
        <div className="tail-meat hovered"></div>
      </div>
      <div className="caption">Shrimp</div>
    </div>
  );
}

let renderKnives = () => {
  return (
    <div>
      <div className="knives">
        <div className="knives-french-or-chef hovered"></div>
        <div className="knives-boning hovered"></div>
        <div className="knives-filleting hovered"></div>
        <div className="knives-cleaver hovered"></div>
        <div className="knives-carving hovered"></div>
        <div className="knives-fork hovered"></div>
        <div className="knives-slicing hovered"></div>
        <div className="knives-scimitar hovered"></div>
        <div className="knives-butcher hovered"></div>
      </div>
      <div className="caption">Knives</div>
    </div>

  );
}

const images = [
  {
    renderItem: renderBear,
    thumbnail: 'icons/1x/bear.png',
    thumbnailClass: "ashot-icons-item",
    thumbnailLabel: "Bear"
  },
  {
    renderItem: renderBeef,
    thumbnail: 'icons/1x/beef.png',
    thumbnailClass: "ashot-icons-item",
    thumbnailLabel: "Beef"
  },
  {
    renderItem: renderPork,
    thumbnail: 'icons/1x/pork.png',
    thumbnailClass: "ashot-icons-item",
    thumbnailLabel: "Pork"
  },
  {
    renderItem: renderChicken,
    thumbnail: 'icons/1x/chicken.png',
    thumbnailClass: "ashot-icons-item",
    thumbnailLabel: "Chicken"
  },
  {
    renderItem: renderLamb,
    thumbnail: 'icons/1x/lamb.png',
    thumbnailClass: "ashot-icons-item",
    thumbnailLabel: "Lamb"
  },
  {
    renderItem: renderRabbit,
    thumbnail: 'icons/1x/rabbit.png',
    thumbnailClass: "ashot-icons-item",
    thumbnailLabel: "Rabbit"
  },
  {
    renderItem: renderFish,
    thumbnail: 'icons/1x/fish.png',
    thumbnailClass: "ashot-icons-item",
    thumbnailLabel: "Fish"
  },
  {
    renderItem: renderCrab,
    thumbnail: 'icons/1x/crab.png',
    thumbnailClass: "ashot-icons-item",
    thumbnailLabel: "Crab"
  },
  {
    renderItem: renderShrink,
    thumbnail: 'icons/1x/shrink.png',
    thumbnailClass: "ashot-icons-item",
    thumbnailLabel: "Shrimp"
  },
  {
    renderItem: renderKnives,
    thumbnail: 'icons/1x/knives.png',
    thumbnailClass: "ashot-icons-item",
    thumbnailLabel: "Knives"
  },
]

export default {
    Recepies: Recepies,
    images: images

}

