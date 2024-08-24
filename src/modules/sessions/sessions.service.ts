import { Injectable } from '@nestjs/common';
import { Session } from '../../interfaces/sessions.interface';

@Injectable()
export class SessionsService {
  private sessions: Session[] = [
    {
      id: '1',
      userId: '1',
      number: 1,
      date: new Date(),
      exercisesList: [
        {
          id: '1',
          name: 'Bench Press',
        },
      ],
    },
    {
      id: '2',
      userId: '2',
      number: 1,
      date: new Date(),
      exercisesList: [
        {
          id: '1',
          name: 'Bench Press',
        },
      ],
    },
  ];

  async getAll(): Promise<Session[]> {
    return this.sessions;
  }

  async getCurrent(sessionId: string): Promise<Session> {
    return this.sessions.find(({ id }) => id === sessionId);
  }

  async addNewSession() {
    const session = {
      id: String(this.sessions.length + 1),
      userId: '2',
      number: 1,
      date: new Date(),
      exercisesList: [],
    };
    this.sessions.push(session);
  }

  async deleteCurrentSession(sessionId: string) {
    this.sessions = this.sessions.filter(({ id }) => id !== sessionId);
  }
}
