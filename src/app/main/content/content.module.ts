import { NgModule } from '@angular/core';
import { ContactsCostPerSfModule } from './contacts-cost-per-sf/contacts-cost-per-sf.module';
import { CustomerFormModule } from './customer-form/customer-form.module';
import { DraftingScheduleModule } from './drafting-schedule/drafting-schedule.module';
import { InfoSheetModule } from './info-sheet/info-sheet.module';
import { NewCustomerModule } from './new-customer/new-customer.module';
import { OrdertrackingModule } from './order-tracking/ordertracking.module';
import { PriceListsModule } from './price-lists/price-lists.module';
import { ProductionScheduleModule } from './production-schedule/production-schedule.module';
import { RemindersModule } from './reminders/reminders.module';
import { SalesFunnelModule } from './sales-funnel/sales-funnel.module';
import { SalesPipelineModule } from './sales-pipeline/sales-pipeline.module';
import { ShippingScheduleModule } from './shipping-schedule/shipping-schedule.module';
import { TransferCustomerModule } from './transfer-customer/transfer-customer.module';

@NgModule({
  imports: [
    ContactsCostPerSfModule,
    CustomerFormModule,
    DraftingScheduleModule,
    InfoSheetModule,
    NewCustomerModule,
    NewCustomerModule,
    OrdertrackingModule,
    PriceListsModule,
    ProductionScheduleModule,
    RemindersModule,
    SalesFunnelModule,
    SalesPipelineModule,
    ShippingScheduleModule,
    TransferCustomerModule
  ]
})

export class ContentModule { }
