import { Categoria } from '../../categoria/entities/categoria.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'publicaciones' })
export class Publicacione {
  @PrimaryGeneratedColumn('uuid')
  IdPost: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  Ptitulo: string;

  @Column({
    type: 'text',
  })
  Presumen: string;

  @Column({
    type: 'text',
  })
  Pdescription: string;

  @Column({
    type: 'varchar',
    length: 20,
  })
  Plugar: string;

  @CreateDateColumn({
    type: 'timestamp without time zone',
    name: 'Pfecha',
    default: () => 'CURRENT_TIMESTAMP',
  })
  Pfecha: Date;

  @ManyToOne(() => Categoria, (Categoria) => Categoria.publicaciones, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'IdCategory' })
  categoria: Categoria;
}
