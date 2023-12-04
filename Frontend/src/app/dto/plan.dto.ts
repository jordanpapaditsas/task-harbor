export class PlanDto {
  id!: string;
  name!: string;
  serialNumber!: number;
  createdDate!: string | number | Date;
  description!: string;
  notes?: string;
}
