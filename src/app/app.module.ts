import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditorModule } from './editor/editor.module';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, EditorModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
