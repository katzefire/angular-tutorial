/**
 * Created on 23.05.16.
 */

(function(app) {

  app.Hero =
    ng.core.Class({
      constructor: function(id, name) {
        this.id =  id;
        this.name = name;
      }
    });


})(window.app || (window.app = {}));
