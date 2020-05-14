const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Death Cap',
    description: 'Perhaps the deadliest of all mushrooms, the death cap is found throughout Europe and closely resembles edible straw mushrooms and caesar’s mushrooms. Its heat-stable amatoxins withstand cooking temperatures and quickly damage cells throughout the body. Within 6 to 12 hours after consumption, violent abdominal pain, vomiting, and bloody diarrhea appear, causing rapid loss of fluid from the tissues and intense thirst. Signs of severe involvement of the liver, kidneys, and central nervous system soon follow. This condition leads to coma and death in more than 50 percent of the incidents.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/79/145379-050-4461FF66/Death-cap-mushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  { 
    id: 'mushroom2',
    name: 'Deadly Dapperling',
    description: 'The deadly dapperling is a gilled mushroom known to contain amatoxins. Widely distributed throughout Europe and parts of Asia, the mushroom is fairly innocuous and has been mistaken for edible varieties, though poisonings are not very common. Accidental consumption leads to severe liver toxicity and can have lethal consequences if immediate treatment is not received.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/53/201253-050-8DEDED86/mushrooms-Massy-France.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'Conocybe filaris',
    description: 'Conocybe filaris is an innocent-looking lawn mushroom that is especially common in the Pacific Northwest. Featuring the same mycotoxins as the death cap mushroom, C. filaris is potentially fatal if eaten. The onset of gastrointestinal symptoms often occurs 6-24 hours after the mushrooms were consumed, frequently leading to an initial misdiagnosis of food poisoning or the stomach flu. The patient may appear to recover, only to suffer from a life-threatening reappearance of the gastrointestinal distress, coupled with liver and kidney failure.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/94/180794-050-AAD9AE56/mushrooms-lawn-mushroom-Conocybe-filaris-Ingestion-region.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  { 
    id: 'mushroom4',
    name: 'Webcaps',
    description: 'The two species of webcap, the deadly webcap (Cortinarius rubellus) and the fool’s webcap (Cortinarius orellanus), are very similar in appearance to both each other and to a number of edible varieties. These mushrooms feature a poison known as orellanin, which initially causes symptoms similar to the common flu. Orellanin has an insidiously long latency period and may take 2 days to 3 weeks to cause symptoms, often leading to a misdiagnosis. The toxin ultimately causes kidney failure and death if left untreated.',
    imgUrl: 'https://cdn.britannica.com/s:800x1000/66/180666-050-FED69BBD/webcaps-Europe-Ingestion-mushrooms-symptoms.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  { 
    id: 'mushroom5',
    name: 'Reishi Mushrooms',
    description: 'The reishi or lingzhi mushroom is often considered the gold standard when it comes to medicinal mushrooms. It is a polypore, which means it is a tough cork-like mushroom that grows on the side of trees and is to tough to eat. Not all effects of reishi mushrooms have been scientifically tested, but some purported uses include treating fatigue, lowering cholesterol, boosting the immune system (even sometimes claimed to be able to fight HIV and AIDs), lowering blood pressure and inflammation, and to treat lower urinary tract symptoms.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Reishi-Mushrooms.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  { 
    id: 'mushroom6',
    name: 'Maitake Mushrooms',
    description: 'Maitake mushrooms are also called hen-of-the-woods. Maitake means \'dancing mushroom\' in Japanese.These mushrooms are too tough to eat once they reach any reasonable size. However, they are used for their medicinal properties. Maitake mushrooms have been shown to boost the immune system. They also have a hypoglycemic effect that can help with lowering blood sugar and managing diabetes, and can also help with high cholesterol.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Maitake-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Shiitake Mushrooms',
    description: 'Shiitake mushrooms are commonly used in Asian cuisine​. They are also considered to have medicinal benefits in traditional Asian medicine. ​Shiitake mushrooms have a meaty texture much like portobellos. They have a more smoky, earthy flavor when cooked. Shiitake mushrooms are most commonly sold dried.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Shiitake-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Shimeji Mushrooms',
    description: 'Shimeji is another mushroom native to East Asia, but they can also be found in Northern Europe. They are also known as white beech mushrooms. They add a rich umami flavor to dishes. However, they taste quite bitter when eaten raw, so they should always be cooked. They go great in stir fries or with seafood or wild game.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Shimeji-Mushrooms-1.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Enoki Mushrooms',
    description: 'You can often spot enoki mushrooms in the supermarket​. These mushrooms are most commonly used in Asian cooking. They come in large clusters of tiny mushrooms with very long stems and small caps. They go nicely in soups, especially ramen.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/shutterstock_1013649136.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Morel Mushrooms',
    description: 'Morels are some of the most sought after wild mushrooms. They aren\'t farmed and sold in stores. ​Morels have a nutty, earthy flavor. They have a meaty texture but they\'re still tender.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Morel-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Wood Blewit Mushrooms',
    description: 'Wood blewits are considered edible, although they may cause allergic reactions in some people. Especially when eaten raw, although they can cause reactions even when cooked. So it is best to start by eating small amounts. They can be found wild, and are also cultivated in for instance the UK​, France, and the Netherlands. Blewits can be eaten sauteed in butter or in a cream sauce, as an omelette filling, or in a stew.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Wood-Blewit-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Black Trumpet Mushrooms',
    description: 'Black trumpets are sometimes called black chanterelles. They aren\'t a very attractive mushroom to look at, but their flavor is quite sought after. People describe the flavor as rich and smoky. When allowed to dry, their flavor even takes on hints of black truffle.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/black-chanterelles.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Chicken Of The Woods Mushrooms',
    description: 'Chicken Of The Woods is more scientifically called Laetiporus which means \'with bright pores.\' This mushroom grows in clusters on the side of trees and is a beautiful orange color. Normally deep orange in the middle with a lighter orange color around the edges. As you might expect, it gets its name because many people think it tastes like chicken. In fact, you can cook it many of the same ways that you\'d prepare chicken. This makes it a​ great meat substitute for vegetarians.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Chicken-Of-The-Woods-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Hedgehog Mushrooms',
    description: 'Hedgehog or sweet tooth mushrooms get their name from the gills underneath their cap. They hang down, forming spiky shapes that resemble a hedgehog.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Hedgehog-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Porcini Mushrooms',
    description: 'Porcini, also known as Cep mushrooms,  are most commonly used in Italian cooking. They\'ve got a distinctive taste that some people compare to sourdough bread, with slightly creamy and nutty flavors. They can get very large, up to 10 inches across! But most are harvested much smaller, around 1 inch in size. Porcini mushrooms can be bought fresh or canned, but are most commonly sold dried. To use dried porcini, you need to soak them in hot water for 10 to 15 minutes and then they can be cooked like normal.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Porcini-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Chanterelle Mushrooms',
    description: 'Chanterelle mushrooms have a distinctive bright yellow color. They\'ve got a sweet and peppery flavor that goes well with eggs. They last longer in the fridge than most other varieties of mushrooms: about 10 days.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Chanterelle-Mushrooms2.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'King Oyster Mushrooms',
    description: 'King oysters look similar to regular oyster mushrooms that are growing on top of a thick, white stem. They\'re a large mushroom, and normally come 4 or 5 to a tray. They have a very firm meaty texture compared to regular oyster mushrooms.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Pleurotus-eryngii.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Oyster Mushrooms',
    description: 'If you\'ve only ever eaten button mushrooms, then the appearance of oyster mushrooms might be a bit intimidating at first. Don\'t worry if you don\'t enjoy seafood. They might look like oysters, but they don\'t taste like them. They offer a mild and sweet flavor and make a great transition from portobellos into more adventurous types of mushrooms.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Oyster-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Portobello Mushrooms',
    description: 'Portobellos are the final full-grown stage of the button mushroom\'s life. These mushrooms are much larger than cremini or button mushrooms and have a more meaty texture, but still retain a mild flavor. They have their cap fully open, exposing the dark gills underneath. Portobellos are large enough to be used as vegetarian burgers or stuffed with other ingredients, and are often baked instead of fried.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Portobello-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Cremini Mushrooms',
    description: 'Cremini mushrooms, also called crimini mushrooms, are actually part of the same ​species as button mushrooms (Agaricus bisporus), but are a brown variation with a slightly deeper flavour. ​All button mushrooms ​used to be brown until 1926, when a mushroom farmer in Pennsylvania found a cluster of white buttons growing in his beds, which he cloned and began selling as a new variety​.',
    imgUrl: 'https://grocycle.com/wp-content/uploads/2019/04/Cremini-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];

const basket = [];

const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const pickAMushroom = (mushroomId) => {
  const randomNum = Math.floor(Math.random() * mushrooms.length);
  console.error('random number', randomNum);
  const selectedMushroom = mushrooms[randomNum];
  console.error('selected mushroom', selectedMushroom);
  basket.push(selectedMushroom);
  console.error('basket after new mushroom picked', basket);
};

export default { getMushrooms, getBasket, pickAMushroom };
