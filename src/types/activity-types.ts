export interface IProgressDataType {
  id: string
  title: string
  progress: string
  description: string
}
export interface IWreckerDataType extends IProgressDataType {
  description: string
}