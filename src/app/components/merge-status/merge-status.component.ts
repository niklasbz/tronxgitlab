import { Component, Input } from '@angular/core';
import { GitlabMergestatusType } from '../../types/gitlab.mergestatus.type';
import { faBug, faCircleCheck, faCircleXmark, faComment, faGear, faPenRuler, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-merge-status',
  templateUrl: './merge-status.component.html',
  styleUrls: ['./merge-status.component.css']
})
export class MergeStatusComponent
{
  @Input() mergerequest: GitlabMergestatusType = 'broken_status';

  public textMap: Record<string, string> = {
    'mergeable': 'Mergeable',
    'ci_still_running': 'CI still running',
    'ci_must_pass': 'CI must pass',
    'discussions_not_resolved': 'Discussions not resolved',
    'draft_status': 'Draft',
    'blocked_status': 'Merge blocked',
    'broken_status': 'Cannot merge',
    'checking': 'Checking',
    'unchecked': 'Unchecked',
    'external_status_checks': 'External status checks',
    'not_approved': 'Not approved',
    'not_open': 'Not open',
    'policies_denied': 'Policies denied',
  }
  public iconMap: Record<string, IconDefinition> = {
    'mergeable': faCircleCheck,
    'ci_still_running': faGear,
    'ci_must_pass': faBug,
    'discussions_not_resolved': faComment,
    'draft_status': faPenRuler,
    'blocked_status': faCircleXmark,
    'broken_status': faCircleXmark,
    'checking': faGear,
    'unchecked': faCircleXmark,
    'external_status_checks': faGear,
    'not_approved': faCircleXmark,
    'not_open': faCircleXmark,
    'policies_denied': faCircleXmark,
  }
}
