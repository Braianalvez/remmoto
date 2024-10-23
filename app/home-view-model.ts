import { Observable } from '@nativescript/core';
import { getCurrentLocation, enableLocationRequest, 
         isEnabled } from '@nativescript/geolocation';

export class HomeViewModel extends Observable {
    private _userLocation: any;
    private _status: string;

    constructor() {
        super();
        this._status = '';
        this.initLocation();
    }

    async initLocation() {
        try {
            const hasPermission = await enableLocationRequest();
            if (!hasPermission) {
                this.status = "Location permission denied";
                return;
            }

            const location = await getCurrentLocation({
                desiredAccuracy: 3,
                maximumAge: 5000,
                timeout: 10000
            });

            this.userLocation = {
                latitude: location.latitude,
                longitude: location.longitude
            };
        } catch (error) {
            this.status = "Error getting location";
            console.error(error);
        }
    }

    showLocationSearch() {
        // TODO: Implement Google Places search
        this.status = "Location search coming soon";
    }

    requestRide() {
        // TODO: Implement ride request logic
        this.status = "Searching for nearby riders...";
        setTimeout(() => {
            this.status = "No riders found nearby. Please try again later.";
        }, 3000);
    }

    get userLocation(): any {
        return this._userLocation;
    }

    set userLocation(value: any) {
        if (this._userLocation !== value) {
            this._userLocation = value;
            this.notifyPropertyChange('userLocation', value);
        }
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        if (this._status !== value) {
            this._status = value;
            this.notifyPropertyChange('status', value);
        }
    }
}