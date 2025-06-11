import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  create(data: Partial<Student>) {
    return this.studentRepo.save(data);
  }

  findAll() {
    return this.studentRepo.find();
  }

  update(id: number, data: Partial<Student>) {
    return this.studentRepo.update(id, data);
  }

  remove(id: number) {
    return this.studentRepo.delete(id);
  }
}
