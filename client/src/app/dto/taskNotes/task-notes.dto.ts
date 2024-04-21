import { Guid } from 'guid-typescript';

export class TaskNotesDto {
  Id!: Guid;
  Name!: string;
  SerialNumber!: number;
}
