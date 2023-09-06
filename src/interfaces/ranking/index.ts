import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RankingInterface {
  id?: string;
  score: number;
  fair_play: number;
  playability: number;
  punctuality: number;
  availability: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface RankingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
