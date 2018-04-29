import React from 'react';
import './styles/Ashot.scss';
import ImageGallery from 'react-image-gallery';

export default class Ashot extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      recipes:[
        {
          text: `Bears are carnivoran mammals of the family Ursidae. They are classified as caniforms, or doglike carnivorans.
                Although only eight species of bears are extant, they are widespread, appearing in a wide variety of habitats throughout the
                Northern Hemisphere and partially in the Southern Hemisphere. Bears are found on the continents of North America, South America,
                Europe, and Asia. Common characteristics of modern bears include large bodies with stocky legs, long snouts, small rounded ears,
                shaggy hair, plantigrade paws with five nonretractile claws, and short tails. While the polar bear is mostly carnivorous, and the
                giant panda feeds almost entirely on bamboo, the remaining six species are omnivorous with varied diets. With the exception of
                courting individuals and mothers with their young, bears are typically solitary animals. They may be diurnal or nocturnal and
                have an excellent sense of smell. Despite their heavy build and awkward gait, they are adept runners, climbers, and swimmers.
                Bears use shelters, such as caves and logs, as their dens; most species occupy their dens during the winter for a long period
                of hibernation, up to 100 days. Bears have been hunted since prehistoric times for their meat and fur; they have been used for
                bear-baiting and other forms of entertainment, such as being made to dance. With their powerful physical presence, they play a
                prominent role in the arts, mythology, and other cultural aspects of various human societies. In modern times, bears have come
                under pressure through encroachment on their habitats and illegal trade in bear parts, including the Asian bile bear market.
                The IUCN lists six bear species as vulnerable or endangered, and even least concern species, such as the brown bear, are at risk of
                extirpation in certain countries. The poaching and international trade of these most threatened populations are prohibited,
                but still ongoing.`,
          img: '/ashot-images/bear.jpg'
        },
        {
          text: `Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef
                since prehistoric times.[1] Beef is a source of high-quality protein and nutrients. Beef skeletal muscle meat can
                be used as is by merely cutting into certain parts roasts, short ribs or steak (filet mignon, sirloin steak, rump
                steak, rib steak, rib eye steak, hanger steak, etc.), while other cuts are processed (corned beef or beef jerky).
                Trimmings, on the other hand, are usually mixed with meat from older, leaner (therefore tougher) cattle, are ground,
                minced or used in sausages. The blood is used in some varieties called blood sausage. Other parts that are eaten
                include other muscles and offal, such as the oxtail, liver, tongue, tripe from the reticulum or rumen, glands (particularly
                the pancreas and thymus, referred to as sweetbread), the heart, the brain (although forbidden where there is a danger
                of bovine spongiform encephalopathy, BSE, commonly referred to as mad cow disease), the kidneys, and the tender testicles
                of the bull (known in the United States as calf fries, prairie oysters, or Rocky Mountain oysters). Some intestines
                are cooked and eaten as is[3], but are more often cleaned and used as natural sausage casings. The bones are used for making beef stock.
                Beef from steers and heifers is similar.[4] Depending on economics, the number of heifers kept for breeding varies.
                The meat from older bulls, because it is usually tougher, is frequently used for mince (known as ground beef in the United States).
                Cattle raised for beef may be allowed to roam free on grasslands, or may be confined at some stage in pens as part of
                a large feeding operation called a feedlot (or concentrated animal feeding operation), where they are usually fed a
                ration of grain, protein, roughage and a vitamin/mineral preblend. Beef is the third most widely consumed meat in
                the world, accounting for about 25% of meat production worldwide, after pork and poultry at 38% and 30% respectively.
                In absolute numbers, the United States, Brazil, and the People's Republic of China are the world's three largest
                consumers of beef; Uruguay, however, has the highest beef and veal consumption per capita, followed by Argentina
                and Brazil. According to the data from OECD, the average Uruguayan ate over 42 kg (93 lb) of beef or veal in 2014,
                representing the highest beef/veal consumption per capita in the world. In comparison, the average American consumed
                only about 24 kg (53 lb) beef or veal in the same year, while African countries, such as Mozambique, Ghana, and
                Nigeria, consumed the least beef or veal per capita. Cows are considered sacred in the Hinduism and most
                observant Hindus who do eat meat almost always abstain from beef. In 2015, the world's largest exporters of
                beef, (including buffalo meat), were India (buffalo meat only), Brazil and Australia.[6][7] Beef production
                is also important to the economies of Uruguay, Canada, Paraguay, Mexico, Argentina, Belarus and Nicaragua.`,
          img: '/ashot-images/beef.png'
        },
        {
          text: `2
          Season pork with pepper and salt.
          Heat oil in large pot over high heat. Working in batches, cook pork in the hot oil until browned on all sides, about 5 minutes. Return all cooked pork and accumulated juice to pot.
          Season pork with bay leaves, cumin, dried oregano, and cayenne pepper. Stir in fresh orange juice, orange zest, and milk. Bring mixture to a boil over high heat; reduce heat to low. Cover and simmer, stirring occasionally, until meat is fork tender but not falling apart, about 2 hours.
          Preheat oven to 450 degrees F (230 degrees C).
          Remove pork from liquid. Skim some fat from the pot to grease a baking dish. Transfer the pieces of pork to the baking dish. Drizzle about 2 more tablespoons of the floating fat over the meat. Season with more salt, if needed.
          Bake in preheated oven until pork is browned, about 15 minutes. Stir pork.
          Turn on oven's broiler. Cook pork under broiler until crisp, 2 to 3 minutes.`,
          img: '/ashot-images/pork.jpg'
        },
        {
          text: `3
          Season pork with pepper and salt.
          Heat oil in large pot over high heat. Working in batches, cook pork in the hot oil until browned on all sides, about 5 minutes. Return all cooked pork and accumulated juice to pot.
          Season pork with bay leaves, cumin, dried oregano, and cayenne pepper. Stir in fresh orange juice, orange zest, and milk. Bring mixture to a boil over high heat; reduce heat to low. Cover and simmer, stirring occasionally, until meat is fork tender but not falling apart, about 2 hours.
          Preheat oven to 450 degrees F (230 degrees C).
          Remove pork from liquid. Skim some fat from the pot to grease a baking dish. Transfer the pieces of pork to the baking dish. Drizzle about 2 more tablespoons of the floating fat over the meat. Season with more salt, if needed.
          Bake in preheated oven until pork is browned, about 15 minutes. Stir pork.
          Turn on oven's broiler. Cook pork under broiler until crisp, 2 to 3 minutes.`,
          img: '/ashot-images/pork.jpg'
        },
        {
          text: `4
          Season pork with pepper and salt.
          Heat oil in large pot over high heat. Working in batches, cook pork in the hot oil until browned on all sides, about 5 minutes. Return all cooked pork and accumulated juice to pot.
          Season pork with bay leaves, cumin, dried oregano, and cayenne pepper. Stir in fresh orange juice, orange zest, and milk. Bring mixture to a boil over high heat; reduce heat to low. Cover and simmer, stirring occasionally, until meat is fork tender but not falling apart, about 2 hours.
          Preheat oven to 450 degrees F (230 degrees C).
          Remove pork from liquid. Skim some fat from the pot to grease a baking dish. Transfer the pieces of pork to the baking dish. Drizzle about 2 more tablespoons of the floating fat over the meat. Season with more salt, if needed.
          Bake in preheated oven until pork is browned, about 15 minutes. Stir pork.
          Turn on oven's broiler. Cook pork under broiler until crisp, 2 to 3 minutes.`,
          img: '/ashot-images/pork.jpg'
        },
        {
          text: `5
          Season pork with pepper and salt.
          Heat oil in large pot over high heat. Working in batches, cook pork in the hot oil until browned on all sides, about 5 minutes. Return all cooked pork and accumulated juice to pot.
          Season pork with bay leaves, cumin, dried oregano, and cayenne pepper. Stir in fresh orange juice, orange zest, and milk. Bring mixture to a boil over high heat; reduce heat to low. Cover and simmer, stirring occasionally, until meat is fork tender but not falling apart, about 2 hours.
          Preheat oven to 450 degrees F (230 degrees C).
          Remove pork from liquid. Skim some fat from the pot to grease a baking dish. Transfer the pieces of pork to the baking dish. Drizzle about 2 more tablespoons of the floating fat over the meat. Season with more salt, if needed.
          Bake in preheated oven until pork is browned, about 15 minutes. Stir pork.
          Turn on oven's broiler. Cook pork under broiler until crisp, 2 to 3 minutes.`,
          img: '/ashot-images/pork.jpg'
        },
        {
          text: `6
          Season pork with pepper and salt.
          Heat oil in large pot over high heat. Working in batches, cook pork in the hot oil until browned on all sides, about 5 minutes. Return all cooked pork and accumulated juice to pot.
          Season pork with bay leaves, cumin, dried oregano, and cayenne pepper. Stir in fresh orange juice, orange zest, and milk. Bring mixture to a boil over high heat; reduce heat to low. Cover and simmer, stirring occasionally, until meat is fork tender but not falling apart, about 2 hours.
          Preheat oven to 450 degrees F (230 degrees C).
          Remove pork from liquid. Skim some fat from the pot to grease a baking dish. Transfer the pieces of pork to the baking dish. Drizzle about 2 more tablespoons of the floating fat over the meat. Season with more salt, if needed.
          Bake in preheated oven until pork is browned, about 15 minutes. Stir pork.
          Turn on oven's broiler. Cook pork under broiler until crisp, 2 to 3 minutes.`,
          img: '/ashot-images/pork.jpg'
        },
        {
          text: `7
          Season pork with pepper and salt.
          Heat oil in large pot over high heat. Working in batches, cook pork in the hot oil until browned on all sides, about 5 minutes. Return all cooked pork and accumulated juice to pot.
          Season pork with bay leaves, cumin, dried oregano, and cayenne pepper. Stir in fresh orange juice, orange zest, and milk. Bring mixture to a boil over high heat; reduce heat to low. Cover and simmer, stirring occasionally, until meat is fork tender but not falling apart, about 2 hours.
          Preheat oven to 450 degrees F (230 degrees C).
          Remove pork from liquid. Skim some fat from the pot to grease a baking dish. Transfer the pieces of pork to the baking dish. Drizzle about 2 more tablespoons of the floating fat over the meat. Season with more salt, if needed.
          Bake in preheated oven until pork is browned, about 15 minutes. Stir pork.
          Turn on oven's broiler. Cook pork under broiler until crisp, 2 to 3 minutes.`,
          img: '/ashot-images/pork.jpg'
        },
        {
          text: `8
          Season pork with pepper and salt.
          Heat oil in large pot over high heat. Working in batches, cook pork in the hot oil until browned on all sides, about 5 minutes. Return all cooked pork and accumulated juice to pot.
          Season pork with bay leaves, cumin, dried oregano, and cayenne pepper. Stir in fresh orange juice, orange zest, and milk. Bring mixture to a boil over high heat; reduce heat to low. Cover and simmer, stirring occasionally, until meat is fork tender but not falling apart, about 2 hours.
          Preheat oven to 450 degrees F (230 degrees C).
          Remove pork from liquid. Skim some fat from the pot to grease a baking dish. Transfer the pieces of pork to the baking dish. Drizzle about 2 more tablespoons of the floating fat over the meat. Season with more salt, if needed.
          Bake in preheated oven until pork is browned, about 15 minutes. Stir pork.
          Turn on oven's broiler. Cook pork under broiler until crisp, 2 to 3 minutes.`,
          img: '/ashot-images/pork.jpg'
        },
        {
          text: `9
          Season pork with pepper and salt.
          Heat oil in large pot over high heat. Working in batches, cook pork in the hot oil until browned on all sides, about 5 minutes. Return all cooked pork and accumulated juice to pot.
          Season pork with bay leaves, cumin, dried oregano, and cayenne pepper. Stir in fresh orange juice, orange zest, and milk. Bring mixture to a boil over high heat; reduce heat to low. Cover and simmer, stirring occasionally, until meat is fork tender but not falling apart, about 2 hours.
          Preheat oven to 450 degrees F (230 degrees C).
          Remove pork from liquid. Skim some fat from the pot to grease a baking dish. Transfer the pieces of pork to the baking dish. Drizzle about 2 more tablespoons of the floating fat over the meat. Season with more salt, if needed.
          Bake in preheated oven until pork is browned, about 15 minutes. Stir pork.
          Turn on oven's broiler. Cook pork under broiler until crisp, 2 to 3 minutes.`,
          img: '/ashot-images/pork.jpg'
        },
      ]
    }
  }

  renderBear(){
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

  renderBeef(){
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

  renderPork(){
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

  renderChicken(){
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

  renderLamb(){
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

  renderRabbit(){
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

  renderFish(){
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

  renderCrab(){
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

  renderShrink(){
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

  renderKnives(){
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

  renderRecept(index){
    return(
      <div className="recepts">
        <p>{this.state.recipes[index].text}</p>
        <img src={this.state.recipes[index].img}/>
      </div>
    );
  }

  _onSlide(index) {
    this.setState({currentIndex: index});
  }

  render () {
    const images = [
      {
        renderItem: this.renderBear,
        thumbnail: 'icons/1x/bear.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Bear"
      },
      {
        renderItem: this.renderBeef,
        thumbnail: 'icons/1x/beef.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Beef"
      },
      {
        renderItem: this.renderPork,
        thumbnail: 'icons/1x/pork.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Pork"
      },
      {
        renderItem: this.renderChicken,
        thumbnail: 'icons/1x/chicken.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Chicken"
      },
      {
        renderItem: this.renderLamb,
        thumbnail: 'icons/1x/lamb.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Lamb"
      },
      {
        renderItem: this.renderRabbit,
        thumbnail: 'icons/1x/rabbit.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Rabbit"
      },
      {
        renderItem: this.renderFish,
        thumbnail: 'icons/1x/fish.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Fish"
      },
      {
        renderItem: this.renderCrab,
        thumbnail: 'icons/1x/crab.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Crab"
      },
      {
        renderItem: this.renderShrink,
        thumbnail: 'icons/1x/shrink.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Shrimp"
      },
      {
        renderItem: this.renderKnives,
        thumbnail: 'icons/1x/knives.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Knives"
      },
    ]

    return (
      <div>
        <div className="carousel">
          <ImageGallery
            items={images}
            thumbnailPosition="top"
            showFullscreenButton={false}
            showPlayButton={false}
            onSlide={this._onSlide.bind(this)}
          />
        </div>
        {this.renderRecept(this.state.currentIndex)}
      </div>
    );
  }
}
