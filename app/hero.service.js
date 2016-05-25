/**
 * Created on 24.05.16.
 */
//require mock-heroes

(function(app) {

  app.HeroService =
    ng.core.Class({
      constructor: function() {

      },
      getHeroes: function() {
        return new Promise(function(resolve, reject) {
          resolve(app.HEROES);
        });
      }
    });

})(window.app || (window.app = {}));
