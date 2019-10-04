import {string} from "prop-types";

export interface ActivityInterface {
  id: number;
  projectId: number;
  userId: number;
  description: string;
  hours: number;
  startTime: string;
  endTime: string;

}

export class Activity implements ActivityInterface {
  id: number;
  projectId: number;
  projectTitle: string;
  userId: number;
  description: string;
  hours: number;
  startTime: string;
  endTime: string;


  constructor(id: number, projectId: number, projectTitle: string, userId: number,
              description: string = null, hours: number,
              startTime: string, endTime: string) {
    this.id = id;
    this.projectId = projectId;
    this.projectTitle = projectTitle;
    this.userId = userId;
    this.description = description;
    this.hours = hours;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
