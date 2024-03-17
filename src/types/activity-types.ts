export interface IProgressDataType {
    id : string;
    title : string;
    progress : string;
    description : string;
}
export interface IWreckerDataType {
    id: string
    title: string
    progress: string
    description: string
}
export interface IASScoreCardProps {
    average: number
}
interface IWrecker {
    id: string
    title: string
    progress: string
    description: string
  }
  
  export interface IASTopWreckersProps {
    wreckers: IWrecker[]
  }
  