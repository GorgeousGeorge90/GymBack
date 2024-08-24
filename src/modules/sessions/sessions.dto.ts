import { Exercise } from '../../interfaces/exercise.interface';

export class SessionsDto {
  id: string;
  userId: string;
  number: number;
  date: Date;
  exercisesList: Array<Exercise>;
}
