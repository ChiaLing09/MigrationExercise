import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, OneToOne, ManyToMany } from "typeorm";
import { Answers } from "./Answers";
import { User } from "./User";
import { Questions } from "./Question";

@Entity()
export class QuestionsVotes {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vote_value: number;

  @OneToOne(type => Answers)
  @JoinColumn({ name: "answer_id" })
  answer: Answers

}