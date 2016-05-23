/**
 * Created on 23.05.16
 */

(function(app) {

  app.HeroDetailComponent =
    ng.core.Component({
      inputs : ['hero'],
      selector: 'my-hero-detail',
      template: `
        <div *ngIf="hero">
          <h2>{{hero.name}} details:</h2>
          <div><label>id: </label>{{hero.id}}</div>
          <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name" />
          </div>
        </div>
      `
    })
    .Class({
      constructor: function() {
      },
      ngOnInit: function() {
        console.log(this.hero);
      },
      ngOnChanges : function() {
        console.log(this.hero);
      }
    });

})(window.app || (window.app = {}));

