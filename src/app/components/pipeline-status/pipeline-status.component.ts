import { Component, Input } from '@angular/core';
import { GitlabPipelinestatusType } from '../../types/gitlab.pipelinestatus.type';
import {
  faBan, faCalendar,
  faCircleCheck,
  faCircleXmark,
  faClockRotateLeft, faForward,
  faGear,
  faGears,
  faPause, faPerson,
  faPlus,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pipeline-status',
  templateUrl: './pipeline-status.component.html',
  styleUrls: ['./pipeline-status.component.css']
})
export class PipelineStatusComponent
{
  @Input() pipeline: GitlabPipelinestatusType | null = 'created';

  public textMap: Record<string, string> = {
    'created': 'Created',
    'waiting_for_resource': 'Waiting for resource',
    'preparing': 'Preparing',
    'pending': 'Pending',
    'running': 'Running',
    'success': 'Success',
    'failed': 'Failed',
    'canceled': 'Canceled',
    'skipped': 'Skipped',
    'manual': 'Manual',
    'scheduled': 'Scheduled',
  }
  public iconMap: Record<string, IconDefinition> = {
    'created': faPlus,
    'waiting_for_resource': faPause,
    'preparing': faGears,
    'pending': faClockRotateLeft,
    'running': faGear,
    'success': faCircleCheck,
    'failed': faCircleXmark,
    'canceled': faBan,
    'skipped': faForward,
    'manual': faPerson,
    'scheduled': faCalendar,
  }
}
