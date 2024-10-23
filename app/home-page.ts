import { EventData, Page, Observable, Dialogs } from '@nativescript/core';
import { getCurrentLocation, enableLocationRequest, 
         isEnabled } from '@nativescript/geolocation';
import { HomeViewModel } from './home-view-model';

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
}