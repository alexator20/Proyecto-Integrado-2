<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240214091209 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE rel_usuario_evento (id INT AUTO_INCREMENT NOT NULL, usuario_id INT NOT NULL, evento_id INT NOT NULL, INDEX IDX_4B1632FDB38439E (usuario_id), INDEX IDX_4B1632F87A5F842 (evento_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE rel_usuario_evento ADD CONSTRAINT FK_4B1632FDB38439E FOREIGN KEY (usuario_id) REFERENCES usuario (id)');
        $this->addSql('ALTER TABLE rel_usuario_evento ADD CONSTRAINT FK_4B1632F87A5F842 FOREIGN KEY (evento_id) REFERENCES evento (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE rel_usuario_evento DROP FOREIGN KEY FK_4B1632FDB38439E');
        $this->addSql('ALTER TABLE rel_usuario_evento DROP FOREIGN KEY FK_4B1632F87A5F842');
        $this->addSql('DROP TABLE rel_usuario_evento');
    }
}
