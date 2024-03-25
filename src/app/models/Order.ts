import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
class Order {
  @Column('uuid')
  userId: string;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  project_name: string;

  @Column()
  general_costs: string;

  @Column()
  developer_name: string;

  @Column()
  developer_doc: string;

  @Column()
  client_name: string;

  @Column()
  client_doc: string;

  @Column()
  monthlyPrice?: string;

  @Column()
  totalPrice: string
  
  @Column({ type: 'varchar', nullable: true, default: [] })
  listOfTechnologies: string[];

  @Column()
  development_time: string;

  @Column({
    default: 'save'
  })
  status: 'concluded' | 'in-progress' | 'save' | 'canceled';

  @Column({
    default: new Date()
  })
  createdAt: string

  @Column({
    default: new Date()
  })
  updatedAt: string

  concludedAt?: string
}

export default Order