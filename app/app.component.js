(function(app) {

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
        directives: [app.HeroDetailComponent],
        providers: [app.HeroService]
      })
      .Class({
        constructor: [app.HeroService, function(heroService) {
          this.title =  'Tour of Heroes';
          this.selectedHero = null;
          this.heroService = heroService;
        }],
        onSelect: function(hero) {
          this.selectedHero = hero;
        },
        getHeroes: function() {
          this.heroService.getHeroes()
            .then(function(heroes) {
              this.heroes = heroes;
            }.bind(this))
            .catch(function(error) {
              console.log(error);
            });
        },
        ngOnInit: function() {
          this.getHeroes();
        }
      });

})(window.app || (window.app = {}));