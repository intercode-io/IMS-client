import {Permissions} from "../../enums/privileges/permissions";

export class ProjectUserPermissions {
  public projectId: Number;
  public userId: Number;

  public permissions: Permissions[]
}
