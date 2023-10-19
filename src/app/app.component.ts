import { Component, Input, OnInit } from '@angular/core';
import { GitlabMergereqeustInterface } from './interfaces/gitlab.mergereqeust.interface';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { GitlabPipelineInterface } from './interfaces/gitlab.pipeline.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit
{
  @Input() mergerequest: string | GitlabMergereqeustInterface | null = null;
  @Input() pipeline: string | GitlabPipelineInterface | null = null;
  @Input() version: string | null = null;

  public gitlab = faGitlab;
  public angleUp = faAngleUp;

  public accordion: boolean = true;

  public ngOnInit(): void
  {
    this.mergerequest = JSON.parse(this.mergerequest as string)[0]
    this.pipeline = JSON.parse(this.pipeline as string)[0]
  }
}
