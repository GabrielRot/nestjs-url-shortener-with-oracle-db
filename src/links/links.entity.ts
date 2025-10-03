import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { nanoid } from "nanoid";

@Entity('LINKS')
export class Links {
  @PrimaryGeneratedColumn()
  @Column({ name: 'ID_LINK', type: 'number', primary: true })
  id: number;

  @Column({ name: "CODIGO_LINK_ENCURTADO" })
  codigoLinkEncurtado: string;

  @Column({ name: 'LINK_ORIGEM', type: 'varchar2', length: 255, nullable: false, unique: true })
  linkOrigem: string;

  @Column({ name: 'LINK_DESTINO', type: 'varchar2', length: 255, nullable: false, unique: true })
  linkEncurtado: string;

  @BeforeInsert()
  async linkDestinoMont() {
    const codigo = nanoid(7);

    this.codigoLinkEncurtado = codigo;
    this.linkEncurtado       = `http://localhost:3000/${ codigo }`;
  }
}