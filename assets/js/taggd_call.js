var image = document.getElementById('crew');

var options = {hideDelay:100};

var data = [
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.145,
      "y": 0.245
    },
    "text": "Samuel"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.218,
      "y": 0.295
    },
    "text": "Nathalie"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.23516,
      "y": 0.23251
    },
    "text": "Yusuke"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.274,
      "y": 0.245
    },
    "text": "Abdessamad"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.30938,
      "y": 0.21
    },
    "text": "Alexis"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.345,
      "y": 0.275
    },
    "text": "Géraldine"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.36406,
      "y": 0.2046
    },
    "text": "Gaétan"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.395,
      "y": 0.245
    },
    "text": "Lucien"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.43,
      "y": 0.245
    },
    "text": "Julien"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.45977,
      "y": 0.275
    },
    "text": "Roxane"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.51,
      "y": 0.245
    },
    "text": "Maxime"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.57,
      "y": 0.275
    },
    "text": "Zakaria"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.635,
      "y": 0.245
    },
    "text": "Benjamin"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.68,
      "y": 0.275
    },
    "text": "Colin"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.737,
      "y": 0.275
    },
    "text": "Marie"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.78,
      "y": 0.275
    },
    "text": "Pauline"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.813,
      "y": 0.32
    },
    "text": "Nathan"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.846,
      "y": 0.275
    },
    "text": "Ana"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.18,
      "y": 0.42755
    },
    "text": "Sébastien"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.254,
      "y": 0.42755
    },
    "text": "Kamille"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.33,
      "y": 0.42755
    },
    "text": "Nicolas"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.4,
      "y": 0.42755
    },
    "text": "Jordan"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.462,
      "y": 0.42755
    },
    "text": "Théo"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.52,
      "y": 0.42755
    },
    "text": "Emmanuel"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.59,
      "y": 0.42755
    },
    "text": "Nicolas"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.66,
      "y": 0.42755
    },
    "text": "Mehdy"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.73,
      "y": 0.42755
    },
    "text": "Charlotte"
  }),
  
  Taggd.Tag.createFromObject({
    "position": {
      "x": 0.79766,
      "y": 0.42755
    },
    "text": "Jerôme"
  })
];

var taggd = new Taggd(image, options, data);