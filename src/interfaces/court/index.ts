import { MatchInterface } from 'interfaces/match';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CourtInterface {
  id?: string;
  name: string;
  location: string;
  availability_status: boolean;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  match?: MatchInterface[];
  user?: UserInterface;
  _count?: {
    match?: number;
  };
}

export interface CourtGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  user_id?: string;
}
