import { Pipe, PipeTransform } from '@angular/core';
import { GitlabMergereqeustInterface } from '../interfaces/gitlab.mergereqeust.interface';

@Pipe({
  name: 'asGitlabMergereqeustInterface'
})
export class AsGitlabMergereqeustInterfacePipe implements PipeTransform
{

  transform(value: string | GitlabMergereqeustInterface | null): GitlabMergereqeustInterface
  {
    return value as GitlabMergereqeustInterface;
  }

}
