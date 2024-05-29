import { Component, OnInit } from '@angular/core';

interface TeamMember {
  name: string;
  profession: string;
  image: string;
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  responsiveOptions: any[];
  members: TeamMember[] = [
    {
      name: 'Julian Jameson',
      profession: 'Profession',
      image: '../../../assets/img/user-cover-1.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Julian Jameson',
      profession: 'Profession',
      image: '../../../assets/img/user-cover-2.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Julian Jameson',
      profession: 'Profession',
      image: '../../../assets/img/user-cover-3.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Julian Jameson',
      profession: 'Profession',
      image: '../../../assets/img/user-cover-4.png',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#'
      }
    }
  ];
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
  }

}
