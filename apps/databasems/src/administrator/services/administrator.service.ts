import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrador } from '../../entities/administrator.entity';

@Injectable()
export class AdministratorService {
    
    constructor(
        @InjectRepository(Administrador) private admin_repo: Repository<Administrador>
    ) {}

    findAll(){
        return this.admin_repo.find();
    }

    findOne(id: number) {
        return this.admin_repo.findOne(
            { where: { id_admin: id}}
        );
    }

    create(body: any) {
        const newAdministrator = this.admin_repo.create(body);
        return this.admin_repo.save(newAdministrator);
    }

    async update(id: number, body:any) {
        const administrator = await this.admin_repo.findOne(
            { where: { id_admin: id}}
        );
        this.admin_repo.merge(administrator, body);
        return this.admin_repo.save(administrator);
    }

    async delete(id: number) {
        await this.admin_repo.delete(id);
        return true;
    }

    findOneAdminByMail(body: any) {
        console.log('asdasd',body);
        return this.admin_repo.findOne(
            { where: { correo_admin: body}}
        );
    }

}
