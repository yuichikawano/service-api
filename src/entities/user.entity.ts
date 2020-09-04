import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Exclude, Expose } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    @Exclude()
    id!: number

    @Column({ length: 36, unique: true })
    @ApiProperty()
    uuid!: string

    @Column({ length: 191 })
    @ApiProperty({ title: '名前' })
    name!: string

    @Column({ length: 191, unique: true })
    @ApiProperty()
    email!: string

    @Column({ length: 255 })
    @Exclude()
    password!: string

    @Column({ default: 10 })
    @ApiProperty()
    roles!: number

    @DeleteDateColumn({ name: 'deleted_at' })
    @Exclude()
    deletedAt!: Date

    @CreateDateColumn({ name: 'created_at' })
    @ApiProperty()
    createdAt!: Date

    @UpdateDateColumn({ name: 'updated_at' })
    @ApiProperty()
    updatedAt!: Date

    constructor(partial: Partial<User>) {
        Object.assign(this, partial)
    }
}
