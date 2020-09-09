import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

//const routes: Routes = 'about';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  cellPhones (): void {
    this.router.navigate(['/cell-phones'], { relativeTo: this.route});
    //this.router.navigate(['/about'], { relativeTo: this.route})
  }

  computers (): void {
    this.router.navigate(['/computers'], { relativeTo: this.route});
    //this.router.navigate(['/about'], { relativeTo: this.route})
  }

  watches (): void {
    this.router.navigate(['/watches'], { relativeTo: this.route});
    //this.router.navigate(['/about'], { relativeTo: this.route})
  }

  tablets (): void {
    this.router.navigate(['/tablets'], { relativeTo: this.route});
    //this.router.navigate(['/about'], { relativeTo: this.route})
  }

  share() {
    window.alert('The product has been shared!');
  }

}
