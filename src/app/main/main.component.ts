import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
		panelOpenState: boolean = false;
		
myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
  constructor(private route: ActivatedRoute, private router: Router) {
  	this.router.navigate(['../main',{outlets:{div:'home'}}]);

   }

  ngOnInit() {
    this.myStyle = {
            'position': 'fixed',
            'width': '100px',
            'height': '100px',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
 
    this.myParams = {
            particles: {
                number: {
                    value: 30,
                },
                color: {
                    value: '#fff'
                },
                shape: {
                    type: 'triangle',
                },
        }
    };
  }

}
