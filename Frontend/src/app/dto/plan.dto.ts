export class Plan {
  id!: string;
  name!: string;
  SerialNumber!: number;
  createdDate!: string | Date | number;
  description!: string;
  notes?: string;
}
