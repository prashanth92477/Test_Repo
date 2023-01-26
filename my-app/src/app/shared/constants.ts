export interface Constant {
  Designation:string;
  Username:string;
  NoOfTeamMembers:number;
  TotalCostofAllProjects:number;
  PendingTasks:number;
  UpComingProjects:number;
  ProjectCost:number;
  CurrentExpenditure:number;
  AvailableFunds:number;
  NoOfTeamMemebers :number;
  Clients:string[];
}
export interface TeamMemberSummary {
 Region:string,
 TeamMemberCount:number,
 TemporarilyUnavailableMemebers:number;
}

//* I have dashboardcomponent.ts file
//* and i am exporting this
//* interface into that file
export interface TeamMemb{
  Region:string,
  Members:Array<memlist>
}

export interface memlist {
    ID:number,
    Name:string,
    Status:string,
}
