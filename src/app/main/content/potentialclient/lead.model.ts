import { LeadFieldValues } from './leadFieldValues.model';
export class Lead {
    firstname: string;
    lastname: string;
    company: {
      score: number,
      email: string,
      address1: string,
      address2: string,
      phone: number,
      city: string,
      state: string,
      zipcode: number,
      country: string,
      name: string,
      website: string,
      industry: string,
      description: string,
      numberOfEmployees: number
    };
    position: string;
    email: string;
    phone: number;
    mobile: number;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zipCode: number;
    id: string;
    LeadFieldValues: LeadFieldValues[];

    constructor(Lead?) {
      Lead = Lead || {};
      this.firstname = Lead.firstname || '';
      this.lastname = Lead.lastname || '';
      this.company = Lead.company || '';
      this.position = Lead.position || '';
      this.email = Lead.email || '';
      this.phone = Lead.phone || 0;
      this.mobile = Lead.mobile || 0;
      this.address1 = Lead.address1 || '';
      this.address2 = Lead.address2 || '';
      this.city = Lead.city || '';
      this.state = Lead.state || '';
      this.zipCode = Lead.zipCode || 0;
      this.id = Lead.id ;
      this.LeadFieldValues = Lead.LeadFieldValues || [];
    }
  }
