import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from 'src/board/entities/board.entity';
import { Card } from 'src/card/entities/card.entity';

@Entity()
export class Swimlane {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column()
    order: number;

    @Column()
    boardId: number;

    @ManyToOne(() => Board, (board) => board.swimlanes)
    @JoinColumn()
    board: Board;

    @OneToMany(() => Card, (card) => card.swimlane)
    cards: Card[];
}
