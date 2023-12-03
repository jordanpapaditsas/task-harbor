export class TaskDTO {
  id!: string;
  name?: string;
  serialNumber!: number;
  createdDate!: string | Date | number
  description!: string;
  notes?: string;
}
