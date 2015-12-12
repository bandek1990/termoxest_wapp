var Cylon = require('cylon');

module.exports = function(app) {

  Cylon.robot({

    connections: { raspi: { adaptor: 'raspi' }},

    devices: {
      red: { driver: 'led', pin: 15 },
      yellow: { driver: 'led', pin: 11 },
      green: { driver: 'led', pin: 7 }
    },

    work: function (my) {
      app.route('/api/:led/:position').get(function(req, res, next) {
        var led = req.params.led;

        if(req.params.position == 'on') {
          if( led == 'red' )     my.red.turnOn();
          if( led == 'yellow' )  my.yellow.turnOn();
          if( led == 'green' )   my.green.turnOn();
        }
        else {
          if( led == 'red' )     my.red.turnOff();
          if( led == 'yellow' )  my.yellow.turnOff();
          if( led == 'green' )   my.green.turnOff();
        }

        res.send(200);
      });
    }

  }).start();

};
