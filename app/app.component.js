(function(app) {
  //hero class, should be moved later and imported here
  function Hero (id, name) {
    this.id =  id;
    this.name = name;
  }

  Hero.prototype.getName = function() {
    return this.name + "123";
  };
  //

  app.AppComponent =
    ng.core.Component({
        selector: 'my-app',
        template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name">
        </div>
        `
        //'<h1>{{title}}</h1>' +
        //'<h2>{{hero.name}} details!</h2>' +
        //'<div><label>id: </label>{{hero.id}}</div>' +
        //'<div><label>name: </label>{{hero.name}}</div>'
      })
      .Class({
        constructor: function() {
          this.title =  'Tour of Heroes';
          this.hero = new Hero(1, 'Munin');
        }
      });

  var heroes = [
    new Hero(10, 'Mr. First'),
    new Hero(11, 'Mr. Second'),
    new Hero(12, 'Ms. Third'),
    new Hero(13, 'Rocket'),
    new Hero(14, 'Star Lord'),
    new Hero(15, 'Groot'),
    new Hero(16, 'Mantis')
  ];

  console.log(heroes);


})(window.app || (window.app = {}));