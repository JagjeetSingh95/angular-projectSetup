import { FuseUtils } from '../../../../core/fuseUtils';

export class Categories
{
    id: string;
    title: string;
    description: string;
    alias: string;
    type: string;

    constructor(categories) {
      {
        this.id = categories.id || FuseUtils.generateGUID();
        this.title = categories.title || '';
        this.description = categories.description || '';
        this.alias = categories.alias ;
        this.type = categories.type || '';
      }
    }
}
