var Cylon = require('cylon');


  Cylon.robot({

    connections: { raspi: { adaptor: 'raspi' }},

    devices: {
      green: { driver: 'led', pin: 11 }
    },

    work: function (my) {
      every((1).second(), function() {
       my.green.toggle();
      });
    }

  }).start();

