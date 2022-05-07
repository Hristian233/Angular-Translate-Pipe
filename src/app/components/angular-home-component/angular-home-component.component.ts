import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-angular-home-component',
  templateUrl: './angular-home-component.component.html',
  styleUrls: ['./angular-home-component.component.scss'],
})
export class AngularHomeComponentComponent implements OnInit {
  title = 'Translation Service';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {}

  changeLanguage(language: string): void {
    this.translationService.language = language;
  }
}
