var image = document.getElementById('crew');

var options = {hideDelay:100};
var data = [
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.11602,
      "y": 0.34063
    },
    "text": "Boucle d'Or"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.2957,
      "y": 0.33368
    },
    "text": "Crane d'Oeuf"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.63945,
      "y": 0.42396
    },
    "text": "LPB <3<3<3"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.91289,
      "y": 0.4934
    },
    "text": "Poil de Carotte"
  })
];

var taggd = new Taggd(image, options, data);