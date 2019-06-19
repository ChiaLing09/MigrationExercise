import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Questions } from "./Question";
import { User } from "./User";

@Entity()
export class Answers {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(type => Questions, question => question.answer)
  @JoinColumn({ name: "question_id" })
  question: Questions

  @ManyToOne(type => User, user => user.answer)
  @JoinColumn({ name: "user_id" })
  user: User

}