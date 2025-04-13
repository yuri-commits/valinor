import { User } from 'src/user/entities/user.entity';
import { Swimlane } from 'src/swimlane/entities/swimlane.entity';
export declare class Board {
    id: number;
    name: string;
    lastName: string;
    users: User[];
    swimlanes: Swimlane[];
}
