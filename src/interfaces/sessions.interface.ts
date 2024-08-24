import { Exercise } from './exercise.interface';

export interface Session {
  id: string;
  userId: string;
  number: number;
  date: Date;
  exercisesList: Exercise[];
}
