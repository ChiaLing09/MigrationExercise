import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Answers } from "./Answers";
import { Questions } from "./Question";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Answers, answer => answer.user)
    answer: Answers[]

    @OneToMany(type => Questions, question => question.user)
    question: Questions[]
}
