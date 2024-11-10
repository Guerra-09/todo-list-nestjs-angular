import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export enum status {
    pending = 'pending',
    inProgress = 'in progress',
    done = 'done',
}

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    isImportant: boolean

    @Column()
    status: status = status.pending

}
