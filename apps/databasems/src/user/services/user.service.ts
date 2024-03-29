import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../entities/user.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Usuario) private user_repo: Repository<Usuario>
    ) {}

    findAll(){
        return this.user_repo.find();
    }

    findOne(id: number) {
        return this.user_repo.findOne(
            { where: { id_user: id}}
        );
    }

    findOneUserByMail(correo: string) {
        return this.user_repo.findOne(
            { where: { correo_user: correo}}
        );
    }

    create(body: any) {
        console.log(body);
        const newAdministrator = this.user_repo.create(body);
        return this.user_repo.save(newAdministrator);
    }

    async update(id: number, body:any) {
        const administrator = await this.user_repo.findOne(
            { where: { id_user: id}}
        );
        this.user_repo.merge(administrator, body);
        return this.user_repo.save(administrator);
    }

    async delete(id: number) {
        await this.user_repo.delete(id);
        return true;
    }

    async count(): Promise<number> {
        return this.user_repo.count();
      }
}
