import { FuseNavigationModelInterface } from '../core/components/navigation/navigation.model';
import { AdminGuard } from '../main/content/guard/admin-guard.service';
export class FuseNavigationModel implements FuseNavigationModelInterface {
  public model: any[];
  constructor() {
    this.model = [
      {
        'id': 'applications1',
        'title': '',
        'translate': 'NAV.APPLICATIONS1',
        'type': 'group',
        'role':'',
        'children':
        [

          {
            'id': 'home',
            'title': 'Home',
            'translate': 'NAV.Home.TITLE',
            'type': 'item',
            'icon': 'home',
            'url': '/linwood'
          },
          {
            'id': 'potentialclients',
            'title': 'Potential Clients',
            'translate': 'NAV.Potentialclients.TITLE',
            'type': 'item',
            'icon': 'people',
            'url': '/potentialclient'
          },
          {
            'id': 'ordertracking_reporting',
            'title': 'Order Tracking & Reporting',
            'translate': 'NAV.Ordertracking_reporting.TITLE',
            'type': 'item',
            'icon': 'library_books',
            'url': '/ordertracking_reporting'

          },
          {
            'id': 'reminders',
            'title': 'Reminders',
            'translate': 'NAV.Reminders.TITLE',
            'type': 'item',
            'icon': 'event_available',
            'url': '/reminders'
          },
          {
            'id': 'contacts_costpersf_activity',
            'title': 'Contacts / Cost per SF / activity',
            'translate': 'NAV.Contacts_costpersf_activity.TITLE',
            'type': 'item',
            'icon': 'contacts',
            'url': '/contacts_costpersf_activity'
          },
          {
            'id': 'salesfunnel',
            'title': 'Sales Funnel',
            'translate': 'NAV.Salesfunnel.TITLE',
            'type': 'item',
            'icon': 'trending_up',
            'url': '/salesfunnel'
          },
          {
            'id': 'salespipeline',
            'title': 'Sales Pipeline',
            'translate': 'NAV.Salespipeline.TITLE',
            'type': 'item',
            'icon': 'equalizer',
            'url': '/salespipeline'
          }
        ]
      },

      {
        'id': 'applications2',
        'title': '',
        'translate': 'NAV.APPLICATIONS2',
        'type': 'group',
        'role': '',
        'children':
        [
          {
            'id': 'Customer Forms',
            'title': 'Customer forms',
            'translate': 'NAV.Customerforms.TITLE',
            'type': 'item',
            'icon': 'people',
            'url': '/customerforms'
          },
          {
            'id': 'newcustomer',
            'title': 'New Customer',
            'translate': 'NAV.Newcustomer.TITLE',
            'type': 'item',
            'icon': 'add box',
            'url': '/newcustomer'
          },
          {
            'id': 'infosheet',
            'title': 'Info Sheet',
            'translate': 'NAV.Infosheet.TITLE',
            'type': 'item',
            'icon': 'rate_review',
            'url': '/infosheet'
          },
          {
            'id': 'transfercustomer',
            'title': 'Transfer Customer',
            'translate': 'NAV.Transfercustomer.TITLE',
            'type': 'item',
            'icon': 'transform',
            'url': '/transfercustomer'
          }

        ]
      },

      {
        'id': 'applications3',
        'title': '',
        'translate': 'NAV.APPLICATIONS3',
        'type': 'group',
        'role': '',
        'children':
        [

          {
            'id': 'draftingschedule',
            'title': 'Drafting Schedule',
            'translate': 'NAV.Draftingschedule.TITLE',
            'type': 'item',
            'icon': 'drafts',
            'url': '/draftingschedule'
          },
          {
            'id': 'productionschedule',
            'title': 'Production Schedule',
            'translate': 'NAV.Productionschedule.TITLE',
            'type': 'item',
            'icon': 'today',
            'url': '/productionschedule'
          },
          {
            'id': 'shippingschedule',
            'title': 'Shipping Schedule',
            'translate': 'NAV.Shippingschedule.TITLE',
            'type': 'item',
            'icon': 'schedule',
            'url': '/shippingschedule'
          },
          {
            'id': 'pricelists',
            'title': 'Price Lists',
            'translate': 'NAV.Pricelists.TITLE',
            'type': 'item',
            'icon': 'list',
            'url': '/pricelists'
          }

        ]
      },

      {
        'id': 'admin_manage',
        'title': 'Admin Manage',
        'translate': 'NAV.admin_manage',
        'type': 'collapse',
        'role': 'admin_access',
        'children':
        [
          {
            'id': 'custom_fields',
            'title': 'Custom Fields',
            'translate': 'NAV.custom_fields.TITLE',
            'type': 'item',
            'icon': '',
            'url': '/customfield'
          },
          {
            'id': 'lead_categories',
            'title': 'Lead Categories',
            'translate': 'NAV.lead_categories.TITLE',
            'type': 'item',
            'icon': '',
            'url': '/categories'
          },
          {
            'id': 'stages',
            'title': 'Stages',
            'translate': 'NAV.stages.TITLE',
            'type': 'item',
            'icon': '',
            'url': '/stages'

          },
          {
            'id': 'users',
            'title': 'Users',
            'translate': 'NAV.users.TITLE',
            'type': 'item',
            'icon': '',
            'url': '/users'
          }
        ]
      }

    ];
  }
}
