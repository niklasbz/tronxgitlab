import { Pipe, PipeTransform } from '@angular/core';
import { GitlabPipelineInterface } from '../interfaces/gitlab.pipeline.interface';

@Pipe({
  name: 'asGitlabPipelineInterface'
})
export class AsGitlabPipelineInterfacePipe implements PipeTransform {

  transform(value: string | GitlabPipelineInterface | null): GitlabPipelineInterface
  {
    return value as GitlabPipelineInterface;
  }

}
