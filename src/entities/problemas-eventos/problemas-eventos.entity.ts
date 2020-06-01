import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CategoriaEvento } from '../categorias-eventos/categorias-eventos.entity';

@Entity('problemas_eventos')
export class ProblemaEvento {
  @PrimaryGeneratedColumn()
  id_problema_evento: number;

  @Column('varchar', { length: 45, nullable: true, default: null })
  descripcion: string;

  @OneToMany(type=>CategoriaEvento, categoriaEvento=>categoriaEvento.id_problema_evento)
  CategoriasEventos:CategoriaEvento[];
}
