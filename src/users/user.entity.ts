import { differenceInCalendarYears, differenceInYears, intervalToDuration, parse } from 'date-fns';
import { Entity, Column, PrimaryGeneratedColumn, AfterLoad } from 'typeorm';

@Entity({ schema: 'public', name: 'users' })
export class User {
    public age: number;

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ select: false })
    password: string

    @Column({ type: 'date' })
    date_of_birth: string

    @Column({ type: 'varchar' })
    gender: string

    @Column({ type: 'varchar', length: 50 })
    dni: string

    @Column({ type: 'varchar', length: 250 })
    address: string

    @Column({ type: 'varchar', length: 50 })
    country: string

    @Column({ type: 'varchar', length: 50 })
    phone_number: string

    @AfterLoad()
    calculateAge() {
        this.age = 0

        if (this.date_of_birth) {
            const date = parse(this.date_of_birth, "yyyy-MM-dd", new Date());
            this.age = differenceInYears(new Date(), date);
        }
    }

}