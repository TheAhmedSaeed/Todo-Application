import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  lang: Lang = Lang.english;

  constructor() {
    const langFromLocalStorage = localStorage.getItem('lang') as Lang;
    this.lang = langFromLocalStorage ?? Lang.english;
    this.adjustHtmlDirection();
  }

  // setLang(lang: Lang): void {
  // 	// To be implemented later
  // }

  switchLang(): void {
    if (this.lang === Lang.english) this.lang = Lang.arabic;
    else this.lang = Lang.english;
    localStorage.setItem('lang', this.lang);
    this.adjustHtmlDirection();
  }

  getLangDirection(): 'ltr' | 'rtl' {
    switch (this.lang) {
      case Lang.english:
        return 'ltr';
      case Lang.arabic:
        return 'rtl';
    }
  }

  adjustHtmlDirection(): void {
    document.getElementsByTagName('html')[0].dir = this.getLangDirection();
    document.getElementsByTagName('html')[0].lang = this.lang;
  }
}

export enum Lang {
  english = 'en',
  arabic = 'ar',
}
