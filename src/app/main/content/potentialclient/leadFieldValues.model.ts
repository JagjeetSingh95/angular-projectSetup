import { Leadfield } from './leadfield.model';
import { Lead } from './lead.model';

export class LeadFieldValues {
  LeadField : Leadfield[];
  lead : Lead[];
  value: string;

  constructor(LeadFieldValues) {
    this.lead = LeadFieldValues.Lead;
    this.LeadField = LeadFieldValues.LeadField;
  }
}
