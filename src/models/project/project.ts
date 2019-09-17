import {Member} from "../member/member";

export class Project {
  id: Number;
  title: string;
  invitedMembers: Member[]

  public constructor(id, title, invitedMembers) {
    this.id = id;
    this.title = title;
    this.invitedMembers = invitedMembers;
  }
}
