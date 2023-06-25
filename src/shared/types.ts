export enum SelectedPage{
    Home="home",
    Benefits="benefits",
    Profile="profile",
    Contact="contact"
  }
  export interface BenefitType{
    icon:JSX.Element;
    title:string;
    description:string;
  }