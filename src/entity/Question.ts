import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany } from "typeorm";
import { Answers } from "./Answers";
import { User } from "./User";

@Entity()
export class Questions {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(type => Answers, answer => answer.question)
  answer: Answers[]

  @ManyToOne(type => User, user => user.question)
  @JoinColumn({ name: "user_id" })
  user: User
}