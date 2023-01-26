import { Component, OnInit } from '@angular/core';
import { Constant,TeamMemberSummary,TeamMemb } from "../../shared/constants"
import { DashboardService } from 'src/app/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //* variable declaration
Designation:string;
Username:string;
TotalCostofAllProjects:number;
PendingTasks:number;
UpComingProjects:number;
ProjectCost:number;
CurrentExpenditure:number;
AvailableFunds:number;
NoOfTeamMemebers:number;
Clients:string[];
Projects:string[];
Years:number[]=[];
TeamMemberSummary:TeamMemberSummary[]=[];
// TeamMems:TeamMemb[];
TeamMems:TeamMemb[] = []

// Teams=[];

constructor(private dashboardService:DashboardService){
  this.Designation="TeamLead";
  this.Username="John Smith";
  this.NoOfTeamMemebers=67;
  this.TotalCostofAllProjects=240;
  this.PendingTasks=15;
  this.UpComingProjects=2;
  this.ProjectCost=2113507;
  this.CurrentExpenditure=96788;
  this.AvailableFunds=52536;
  this.Clients=["ABC Infotech","DEF Software Solutions","GHI industry"];
  this.Projects=["Project A","Project B","Project C","Project D"];
  for(let i=2019;i>2010;i--){
    this.Years.push(i);
  }

  //   Region:string,
  // Members:{
  //   ID:number,
  //   Name:string,
  //   Status:string,

  // }
  this.TeamMems=[
      {
        Region:"East",
        Members:[
          {ID:1,Name:"Ford",Status:"Available"},
          {ID:2,Name:"Bob",Status:"Available"},
          {ID:3,Name:"Fred",Status:"Busy"},
          {ID:4,Name:"Betty",Status:"Busy"}

      ]
    },
     {
        Region:"West",
        Members:[
          {ID:1,Name:"Ford",Status:"Available"},
          {ID:2,Name:"Bob",Status:"Available"},
          {ID:3,Name:"Fred",Status:"Busy"},
          {ID:4,Name:"Betty",Status:"Busy"}

      ]
    },
    {
        Region:"North",
        Members:[
          {ID:1,Name:"Ford",Status:"Available"},
          {ID:2,Name:"Bob",Status:"Available"},
          {ID:3,Name:"Fred",Status:"Busy"},
          {ID:4,Name:"Betty",Status:"Busy"}

      ]
    },
     {
        Region:"South",
        Members:[
          {ID:1,Name:"Ford",Status:"Available"},
          {ID:2,Name:"Bob",Status:"Available"},
          {ID:3,Name:"Fred",Status:"Busy"},
          {ID:4,Name:"Betty",Status:"Busy"}

      ]
    },
    ]
}

  ngOnInit(): void {
  this.dashboardService.getTeamMemebers();
  console.log("🚀 ~ file: dashboard.component.ts:39 ~ DashboardComponent ~ ngOnInit ~ ngOnInit");

  }
  chk($event:any){
    // console.log('event',$event.target.innerHTML)
    if($event.target.innerHTML === "Project A"){
    this.ProjectCost = 300000
    this.CurrentExpenditure = 400000
    this.AvailableFunds = 50000
  }else if($event.target.innerHTML === "Project B"){
    this.ProjectCost = 400000
    this.CurrentExpenditure = 500000
    this.AvailableFunds = 60000
}else if($event.target.innerHTML === "Project C"){
    this.ProjectCost = 500000
    this.CurrentExpenditure = 600000
    this.AvailableFunds = 70000
}else if($event.target.innerHTML === "Project D"){
  this.ProjectCost = 600000
    this.CurrentExpenditure = 700000
    this.AvailableFunds = 80000
}
}
}
