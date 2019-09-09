import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtml implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {} 
  
  transform(html): any {
    return this._sanitizer.bypassSecurityTrustResourceUrl(html);
  }
}
