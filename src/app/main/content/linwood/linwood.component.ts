import { Component, OnInit } from '@angular/core';
import { FuseTranslationLoaderService } from '../../../core/services/translation-loader.service';
import { fuseAnimations } from '../../../core/animations';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

import { User } from '../login/_models/index';
import { Http } from '@angular/http'
@Component({
  moduleId: module.id,
    selector   : 'fuse-sample',
    templateUrl: './linwood.component.html',
    styleUrls: ['./linwood.component.scss'],
    animations: fuseAnimations
})
export class LinwoodComponent implements OnInit
{
  
  constructor(private translationLoader: FuseTranslationLoaderService )
    {
        this.translationLoader.loadTranslations(english, turkish);
    }
  ngOnInit() {
    
    
    
  }

}
