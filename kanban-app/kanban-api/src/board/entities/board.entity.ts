import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Swimlane } from 'src/swimlane/entities/swimlane.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  lastName: string;

  @ManyToMany(() => User, (user) => user.boards)
  users: User[];

  @OneToMany(() => Swimlane, (board) => board.board)
  swimlanes: Swimlane[];
}
