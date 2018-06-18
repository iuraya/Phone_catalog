// Cargar modulos y crear nueva aplicacion
var express = require("express"); 
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados


const PORT = 8080


// Listado de teléfonos mockeados 
const phones = [
  {
    id: 1,
    image: 'https://tomaju.com/wp-content/uploads/2018/06/iphonex_spacegray.png',
    name: 'iPhone X',
    brand: 'Apple',
    description: 'The iPhone X is the huge leap forward that Apples handsets needed after ten years, and its even better in 2018 thanks to a more stable iOS 11.3 update. Aside from the original iPhone in 2007, this new iPhone is having the biggest impact on Apple’s smartphone direction ever. Update: iPhone X has been updated to iOS 11.3, and iOS 12 will launch in beta in a few weeks at Apples WWDC 2018 keynote. Weve updated this review to note the software changes. See all Apple iPhone X deals Apple itself is calling it the future of the smartphone, the embodiment of what it’s been trying to achieve for a decade. But while the iPhone X is all about premium parts and an all-new experience, it’s a huge gamble for the Cupertino brand too, as it tries to reclaim some leadership in smartphone innovation. Losing known, reliable elements like the Touch ID fingerprint scanner, the home button; introducing new methods of navigating and unlocking the phone – and charging a lot more for the privilege – seems risky for a company that was already treading new ground by doing away with the traditional headphone jack last year. But the iPhone X is the handset we’ve been demanding from Apple for years – a world away from the increasingly-tired designs that those who just want a new iPhone have had to make do with. ',
    camera_description: '12 + 12 megapíxeles gran angular y teleobjetivo (f/1.8 y f/2.4), doble OIS zoom óptico, grabación 4K@24/30/60fps, flash 4 LED'
  },
  {
    id: 2,
    image: 'https://d243u7pon29hni.cloudfront.net/imagesOnDemand/get?imagePath=/images/products/movil-samsung-galaxy-s9-5.8-negro-1398567-1_l-2.png&width=480&height=480&quality=65&imgType=product',
    name: 'S9',
    brand: 'Samsung',
    description: 'Oh darn, you just missed it...Samsung Galaxy S9 deals had a massive price drop, but have now returned to more realistic levels. That said, you can still get a faintly ridiculous £23 per month tariff with an upfront spend of less than £200. Thats not to say that S9 deals have become unaffordable - theyre still a couple of hundred quid less than they were when the Samsung S9 was released. You can compare Galaxy S9 deals and get the best data, call and text allowance for for your needs using our daily refreshed comparison chart. Or scroll down to our handpicked S9 deals below to see which are the hot ones you should take advantage of now. Vodafone may be having the best of things at the moment, but there are still decent offerings on EE and O2, as well. You can get the lowdown on the fantastic new flagship phone from Samsung in our whistle-stop review below (or just head to our Samsung Galaxy S9 review here). You one of the best cameras weve ever seen on a smartphone and the Android Oreo operating system makes the Galaxy S9 a delight to use. And of course you get a dazzling display - 5.8 inches of QHD+ no less.',
    camera_description: 'Cámara dual, Principal: 12 megapíxeles, AF Dual Pixel, OIS, apertura variable f/1.5-2.4, gran angular, Secundaria: 12 megapíxeles telefoto, f/2.4, Vídeo cámara súper lenta a 960fps con detección de movimiento'
  },
  {
    id: 3,
    image: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/weu/common/mkt/pdp/phones/p20-pro/pl-p20-pro-black.png',
    name: 'P20 Pro',
    brand: 'Huawei',
    description: 'The Huawei P20 Pro is one of a growing number of mega-phones. We’re not talking about the speakers that protesters chant into, but very expensive phones that incorporate new tech, for those willing to pay big for it.\nTop rivals in this class include the Samsung Galaxy S9 Plus and iPhone X. Huawei may be the least powerful brand of the three, but the cost is lower too. \nThat said (and perhaps giving away the review verdict a little bit) the P20 Pro performs so well that it is given a pretty high spot in our best smartphone ranking. This is not just a week into use - we have been using this phone for a month and are still seriously impressed.\nFor the Huawei P20 Pro’s price you could only get a 64GB iPhone 8 Plus, not an iPhone X, although there are some quirks to the Huawei design and software to get used to in return. \nHowever, the remarkable work done on the camera makes this the most versatile phone photo-shooter out there, regardless of price, whether you are a happy snapper or an amateur enthusiast photographer.',
    camera_description: 'Óptica Leica Vario-Summilux. Sensor RGB de 40 Megapíxeles con tecnología Light Fusion y apertura f/1.8. Sensor monocromo de 20 Megapíxeles y apertura f/1.6. Teleobjetivo de 8 Megapíxeles y apertura f/2.4. Zoom híbrido 5x. Enfoque predictivo. Grabación de vídeo slow motion a 960 FPS y 720p'
  },
]

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Listado de todos los teléfonos
app.get('/phones', function(req, res, next) {
  if(req.query.filter) {
   next();
   return;
  }
  res.send(phones);
});


// Servidor escuchando en el puerto 8080  
var server = app.listen(PORT, function () {
    console.log('Server is running  in port: ' + PORT); 
});