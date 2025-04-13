import { User } from 'src/user/entities/user.entity';
import { Swimlane } from 'src/swimlane/entities/swimlane.entity';
export declare class Card {
    id: number;
    name: string;
    content: string;
    order: number;
    swimlaneId: number;
    assigneId: number;
    assigne: User;
    swimlane: Swimlane;
}
