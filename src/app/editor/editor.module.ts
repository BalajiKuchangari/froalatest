import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

// Import italian language
import 'froala-editor/js/languages/it.js';
// Import all Froala Editor plugins.
import 'froala-editor/js/plugins.pkgd.min.js';

import { EditorComponent } from './editor.component';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  exports: [EditorComponent],
})
export class EditorModule {}
