import { Pipe, PipeTransform } from '@angular/core';
import { GitlabMergereqeustInterface } from '../interfaces/gitlab.mergereqeust.interface';

@Pipe({
  name: 'you'
})
export class YouPipe implements PipeTransform
{

  transform(value: string, mr: GitlabMergereqeustInterface, username: string, reviewerAssignee: boolean): unknown
  {
    return value === username ? 'You' : reviewerAssignee ? mr.reviewers.find(reviewer => reviewer.username === value)?.name : mr.assignee.name;
  }

}
