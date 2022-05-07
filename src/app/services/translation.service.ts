import { Injectable } from '@angular/core';

export class TranslationSet {
  public languange: string = 'en';
  public values: { [key: string]: string } = {};
}

@Injectable()
export class TranslationService {
  public languages = ['de', 'en'];

  public language = 'en';

  private dictionary: { [key: string]: TranslationSet } = {
    en: {
      languange: 'en',
      values: {
        addDependency: 'Add Dependency',
        addPWASupport: 'Add PWA Support',
        angularBlog: 'Angular Blog',
        angularDevTools: 'Angular DevTools',
        angularMaterial: 'Angular Material',
        appRunning: 'app is running!',
        buildForProd: 'Build for Production',
        cliDocs: 'CLI Documentation',
        giveOurRepoAStar: 'Give our repo a star',
        learnAngular: 'Learn Angular',
        linksToGetStarted: 'Here are some links to help you get started:',
        loveAngular: 'Love Angular',
        nextSteps: 'Next Steps',
        newComponent: 'New Component',
        resources: 'Resources',
        rocketShip: 'Rocket Ship',
        rocketShipSmoke: 'Rocket Ship Smoke',
        runAndWatchTests: 'Run and Watch Tests',
        welcome: 'Welcome',
        whatDoYouWantToDoWithYourApp:
          'What do you want to do next with your app?',
      },
    },
    de: {
      languange: 'de',
      values: {
        addPWASupport: 'PWA Support hinzufügen',
        addDependency: 'Dependency hinzufügen',
        angularBlog: 'Angular Blog',
        angularDevTools: 'Angular Entwicklerwerkzeuge',
        angularMaterial: 'Angular Material',
        appRunning: 'app läuft',
        buildForProd: 'Produktionsbuild',
        cliDocs: 'CLI Dokumentationen',
        giveOurRepoAStar: 'Geben Sie unserem Repo einen Stern',
        learnAngular: 'Angular lernen',
        linksToGetStarted:
          'Hier sind einige Links, die Ihnen den Einstieg erleichtern:',
        loveAngular: 'Sie lieben Angular?',
        nextSteps: 'Nächste Schritte',
        newComponent: 'neue Komponente',
        resources: 'Ressourcen',
        rocketShip: 'Raketenschiff',
        rocketShipSmoke: 'Rauch von Raketenschiffen',
        runAndWatchTests: 'Tests ausführen und beobachten',
        welcome: 'Willkommen',
        whatDoYouWantToDoWithYourApp:
          'Was möchten Sie als nächstes mit Ihrer App machen?',
      },
    },
  };

  constructor() {}

  translate(value: string): string | null {
    console.log(
      'translate called with value ' + value + ' and language ' + this.language
    );
    if (this.dictionary[this.language] != null) {
      return this.dictionary[this.language].values[value];
    }

    return null;
  }
}
