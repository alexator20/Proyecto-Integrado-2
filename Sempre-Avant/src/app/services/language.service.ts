import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes this service available throughout the app
})
export class LanguageService {
  private langSubject = new BehaviorSubject<boolean>(true); // Initial value is false
  lang$ = this.langSubject.asObservable(); // Expose the observable for subscribers

  setLang(lang: boolean) {
    this.langSubject.next(lang); // Emit the new language value
  }

  getLang(): boolean {
    return this.langSubject.getValue(); // Get the current language value
  }
}