export class LinkListItem {
  constructor(liClass, aClass, aHref, aTitle, iClass) {
    this.liClass = liClass;
    this.aClass = liClass;
    this.aHref = aHref;
    this.aTitle = aTitle;
    this.iClass = iClass;
  }

  liClass: string = "";
  aClass: string = "";
  aHref: string = "";
  aTitle: string = "";
  iClass: string = "";
}
