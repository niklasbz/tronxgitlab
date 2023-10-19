import { GitlabPipelinestatusType } from '../types/gitlab.pipelinestatus.type';

export interface GitlabPipelineInterface
{
  id: number;
  iid: number;
  project_id: number;
  sha: string;
  ref: string;
  status: GitlabPipelinestatusType;
  source: string;
  created_at: string;
  updated_at: string;
  web_url: string;
}
