import { Guid } from 'guid-typescript';

export class UserDto {
  Id!: Guid;
  Username!: string;
  Password!: string;
  Token!: string;
  Email!: string;
}
