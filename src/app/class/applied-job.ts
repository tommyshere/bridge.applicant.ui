import { Job } from './job';

export class AppliedJob extends Job {
  progress: -1 | 0 | 0.25 | 0.50 | 0.75 | 1;
  dateApplied: Date;
  dateUpdated: Date;
}
