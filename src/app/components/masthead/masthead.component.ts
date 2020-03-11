import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css']
})
export class MastheadComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  // fill from rest endpoint or sitecore data
  links = [
    {
      text: 'Learning Center',
      href: '#nogo'
    },
    {
      text: 'Refinance',
      href: '#nogo',
      subNav: [
        {
          text: 'Refinance Guide',
          href: '#nogo'
        },
        {
          text: 'Get Cash From Your Home',
          href: '#nogo'
        },
        {
          text: 'Lower Your Payment',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Buy a House',
      href: '#nogo',
      subNav: [
        {
          text: 'Home Buyer\'s Guide',
          href: '#nogo'
        },
        {
          text: 'First-time Homebuyer',
          href: '#nogo'
        },
        {
          text: 'Buying a Vacation Home',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Loan Options',
      href: '#nogo',
      subNav: [
        {
          text: 'Compare All Loan Options',
          href: '#nogo'
        },
        {
          text: 'Adjustable Rate Mortgage',
          href: '#nogo'
        },
        {
          text: '30-Year Fixed',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Mortgage Rates',
      href: '#nogo',
      subNav: [
        {
          text: 'Mortgage Rates Today',
          href: '#nogo'
        },
        {
          text: 'Email & Text Updates',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'Calculators',
      href: '#nogo',
      subNav: [
        {
          text: 'See All Calculators',
          href: '#nogo'
        },
        {
          text: 'Refinance Mortgage Calculator',
          href: '#nogo'
        },
        {
          text: 'Purchase Mortgage Calculator',
          href: '#nogo'
        }
      ]
    },
    {
      text: 'About Us',
      href: '#nogo',
      subNav: [
        {
          text: 'Who We Are',
          href: '#nogo'
        },
        {
          text: 'Our Mortgage Process',
          href: '#nogo'
        },
        {
          text: 'Quicken Loans Deposit',
          href: '#nogo'
        }
      ]
    }
  ];

  extendedItems = [
    {
      text: '(800) 251-9080',
      href: '#nogo',
      active: false,
    },
    {
      text: 'Sign In',
      href: '#nogo',
      active: false,
    }
  ];

  extendedNarrowLinks = this.links.concat(this.extendedItems);

  siteDropdownChoices = [
    {
      content: {
        title: 'Choice Title',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information'
      },
      value: 'Choice Title 1',
      active: false
    },
    {
      content: {
        title: 'Choice Title',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information'
      },
      value: 'Choice Title 2',
      active: true
    }
  ];

  simpleChoices = [
    {
      text: 'Change Username',
      value: 'change-username'
    },
    {
      text: 'Change Password',
      value: 'change-password'
    },
    {
      text: 'Sign Out',
      value: 'sign-out'
    }
  ];

  ngOnInit() {
    // remove this after implementation is done
    console.log('Masthead component initialized with component data', this.rendering);
  }
}
