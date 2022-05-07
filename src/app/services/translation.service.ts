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
        welcome: 'Welcome',
        appRunning: 'app is running!',
        rocketShip: 'Rocket Ship',
        rocketShipSmoke: 'Rocket Ship Smoke',
        resources: 'Resources',
        linksToGetStarted: 'Here are some links to help you get started:',
        learnAngular: 'Learn Angular',
        cliDocs: 'CLI Documentation',
        angularMaterial: 'Angular Material',
        angularBlog: 'Angular Blog',
        angularDevTools: 'Angular DevTools',
        nextSteps: 'Next Steps',
        whatDoYouWantToDoWithYourApp:
          'What do you want to do next with your app?',
        newComponent: 'New Component',
        addPWASupport: 'Add PWA Support',
        addDependency: 'Add Dependency',
        runAndWatchTests: 'Run and Watch Tests',
        buildForProd: 'Build for Production',
        loveAngular: 'Love Angular',
        giveOurRepoAStar: 'Give our repo a star',
      },
    },
    de: {
      languange: 'de',
      values: {
        welcome: 'Willkommen',
        appRunning: 'app läuft',
        rocketShip: 'Raketenschiff',
        resources: 'Ressourcen',
        rocketShipSmoke: 'Rauch von Raketenschiffen',
        linksToGetStarted:
          'Hier sind einige Links, die Ihnen den Einstieg erleichtern:',
        learnAngular: 'Angular lernen',
        cliDocs: 'CLI Dokumentationen',
        angularMaterial: 'Angular Material',
        angularBlog: 'Angular Blog',
        angularDevTools: 'Angular Entwicklerwerkzeuge',
        nextSteps: 'Nächste Schritte',
        whatDoYouWantToDoWithYourApp:
          'Was möchten Sie als nächstes mit Ihrer App machen?',
        newComponent: 'neue Komponente',
        addPWASupport: 'PWA Support hinzufügen',
        addDependency: 'Dependency hinzufügen',
        runAndWatchTests: 'Tests ausführen und beobachten',
        buildForProd: 'Produktionsbuild',
        loveAngular: 'Sie lieben Angular?',
        giveOurRepoAStar: 'Geben Sie unserem Repo einen Stern',
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
