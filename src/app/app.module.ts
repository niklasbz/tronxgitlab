import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextElementComponent } from './components/text-element/text-element.component';
import { ElementComponent } from './components/element/element.component';
import { PluckPipe } from './pipes/pluck.pipe';
import { JoinPipe } from './pipes/join.pipe';
import { AsGitlabMergereqeustInterfacePipe } from './pipes/as-gitlab-mergereqeust-interface.pipe';
import { MergeStatusComponent } from './components/merge-status/merge-status.component';
import { YouPipe } from './pipes/you.pipe';
import { PipelineStatusComponent } from './components/pipeline-status/pipeline-status.component';
import { AsGitlabPipelineInterfacePipe } from './pipes/as-gitlab-pipeline-interface.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TextElementComponent,
    ElementComponent,
    PluckPipe,
    JoinPipe,
    AsGitlabMergereqeustInterfacePipe,
    MergeStatusComponent,
    YouPipe,
    PipelineStatusComponent,
    AsGitlabPipelineInterfacePipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ]
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef) {
    const element = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define('tron-x-gitlab', element);
  }
}
