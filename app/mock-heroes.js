/**
 * Created on 24.05.16.
 */
//require hero.js

(function(app) {

  //a-la import hero
  var Hero = app.Hero;

  app.HEROES = [
    new Hero(10, 'Mr. First'),
    new Hero(11, 'Mr. Second'),
    new Hero(12, 'Ms. Third'),
    new Hero(13, 'Rocket'),
    new Hero(14, 'Star Lord'),
    new Hero(15, 'Groot'),
    new Hero(16, 'Mantis')
  ];

})(window.app || (window.app = {}));