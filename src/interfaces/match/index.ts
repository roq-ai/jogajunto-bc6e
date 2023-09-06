import { UserInterface } from 'interfaces/user';
import { CourtInterface } from 'interfaces/court';
import { GetQueryInterface } from 'interfaces';

export interface MatchInterface {
  id?: string;
  date: any;
  time: any;
  location: string;
  status: string;
  user_id: string;
  court_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  court?: CourtInterface;
  _count?: {};
}

export interface MatchGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  status?: string;
  user_id?: string;
  court_id?: string;
}
