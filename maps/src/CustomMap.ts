import { Company } from "./company";
import { User } from "./User";

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  },
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map; // 外面不能改

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      colorScheme: "black",
      clickableIcons: true,
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `<h1>${mappable.markerContent()}</h1>`
      });
      infoWindow.open(this.googleMap, marker);
    });
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })
  // }
}