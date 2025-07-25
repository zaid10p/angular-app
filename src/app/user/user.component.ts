import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `<h2>User ID: {{ userId }}</h2>`,
  standalone: true,
  imports: [],
})
export class UserComponent {
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {
    // If you want to get the userId only once when the component is initialized:
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  //   //   If you want to listen to changes:
  //   ngOnInit() {
  //     this.route.paramMap.subscribe((params) => {
  //       this.userId = params.get('id');
  //     });
  //   }
}
