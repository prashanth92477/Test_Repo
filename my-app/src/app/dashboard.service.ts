import { Injectable } from '@angular/core';
// providedIn: 'root'
@Injectable()
export class DashboardService {
TeamMemberSummary:any;
  constructor() {

  }

  getTeamMemebers():any{
    this.TeamMemberSummary=[
      {Region:"East",TeamMemberCount:20,TemporarilyUnavailableMemebers:4},
      {Region:"West",TeamMemberCount:10,TemporarilyUnavailableMemebers:5},
      {Region:"South",TeamMemberCount:21,TemporarilyUnavailableMemebers:3},
      {Region:"North",TeamMemberCount:22,TemporarilyUnavailableMemebers:2}
    ]
  }
}
