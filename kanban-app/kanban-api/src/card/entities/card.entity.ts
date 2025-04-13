import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Swimlane } from 'src/swimlane/entities/swimlane.entity';

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column()
    content: string;

    @Column()
    order: number;

    @Column()
    swimlaneId: number;

    @Column()
    assigneId: number;

    @ManyToOne(() => User, (user) => user.cards)
    @JoinColumn()
    assigne: User;

    @ManyToOne(() => Swimlane, (swimlane) => swimlane.cards)
    @JoinColumn()
    swimlane: Swimlane;
}
