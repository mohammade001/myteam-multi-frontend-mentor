export interface contactType {
  title: string;
  href: string;
  structureStyle: string;
  contentStyle: string;
  onClick?: () => void;
}
export interface NavebarMobailType {
  isActive: boolean;
  setIsActive: () => void;
}

export interface listStoriesType {
  id: number;
  stori: string;
  name: string;
  tasks: string;
  image: string;
}
export interface listMeetType {
  name: string;
  tasks: string;
  image: string;
  director: string;
  linkedin: string;
  twitter: string;
}
export interface inputType {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void
  error:string;
  
}
export interface dataFormType {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
}
