(function(app) {

  //a-la import hero
  var Hero = app.Hero;

  app.AppComponent =
    ng.core.Component({
        selector: 'my-app',
        styleUrls: ['hero-styles.css'],
        template: `
          <h1>{{title}}</h1>
          <h2>My Heroes</h2>
          <ul class="heroes">
            <li *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
          </ul>

          <my-hero-detail [hero]="selectedHero"></my-hero-detail>
          `,
        directives: [app.HeroDetailComponent]
      })
      .Class({
        constructor: function() {
          this.title =  'Tour of Heroes';
          this.heroes = heroes;
          this.selectedHero = null;
        },
        onSelect: function(hero) {
          this.selectedHero = hero;
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

})(window.app || (window.app = {}));