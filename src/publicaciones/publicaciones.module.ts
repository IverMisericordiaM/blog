import { Module } from '@nestjs/common';
import { PublicacionesService } from './publicaciones.service';
import { PublicacionesController } from './publicaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publicacione } from './entities/publicacione.entity';
import { CategoriaModule } from 'src/categoria/categoria.module';
import { CategoriaService } from '../categoria/categoria.service';

@Module({
  imports: [TypeOrmModule.forFeature([Publicacione]), CategoriaModule],
  controllers: [PublicacionesController],
  providers: [PublicacionesService, CategoriaService],
  exports: [TypeOrmModule],
})
export class PublicacionesModule {}
