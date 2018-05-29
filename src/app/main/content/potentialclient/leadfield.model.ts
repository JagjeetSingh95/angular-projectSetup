import {SelectItem} from './selectitem.model';

export class Leadfield {

    isPublished: boolean;
    label: string;
    alias:string;
    type: string;
    group: string;
    defaultValue: string;
    isRequired: boolean;
    isFixed: boolean;
    isVisible: boolean;
    isShortVisible: boolean;
    isListable: boolean;
    isPubliclyUpdatable: boolean;
    isUniqueIdentifier: boolean;
    order: number;
    object: string;
    properties: SelectItem[];
    id: string;

    constructor(Leadfield?) {
      Leadfield = Leadfield || {};
      this.isPublished = Leadfield.isPublished || true;
      this.label = Leadfield.label || '';
      this.alias = Leadfield.alias || '';
      this.type = Leadfield.type || '';
      this.group = Leadfield.group || '';
      this.defaultValue = Leadfield.defaultValue || '';
      this.isRequired = !!Leadfield.isRequired;
      this.isFixed = Leadfield.isFixed || true;
      this.isVisible = Leadfield.isVisible || true;
      this.isShortVisible = Leadfield.isShortVisible || true;
      this.isListable = Leadfield.isListable || true;
      this.isPubliclyUpdatable = Leadfield.isPubliclyUpdatable || true;
      this.isUniqueIdentifier = Leadfield.isUniqueIdentifier || true;
      this.order = Leadfield.order || 0;
      this.object = Leadfield.object || '';
      this.id = Leadfield.id || '';

      this.properties = [];
      if (this.type == 'Select') {
        Leadfield.properties.Options.map(option => {
          this.properties.push(new SelectItem(option));
        })
      }
    }
  }
