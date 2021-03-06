import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YahooSharedModule } from 'app/shared/shared.module';
import { QuoteComponent } from './quote.component';
import { QuoteDetailComponent } from './quote-detail.component';
import { QuoteUpdateComponent } from './quote-update.component';
import { QuoteDeleteDialogComponent } from './quote-delete-dialog.component';
import { quoteRoute } from './quote.route';

@NgModule({
  imports: [YahooSharedModule, RouterModule.forChild(quoteRoute)],
  declarations: [QuoteComponent, QuoteDetailComponent, QuoteUpdateComponent, QuoteDeleteDialogComponent],
  entryComponents: [QuoteDeleteDialogComponent],
})
export class YahooQuoteModule {}
