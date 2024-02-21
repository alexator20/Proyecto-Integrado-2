<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240214075634 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE usuario (id INT AUTO_INCREMENT NOT NULL, grupo_perteneciente_id INT NOT NULL, nombre VARCHAR(255) NOT NULL, edad INT DEFAULT NULL, rol VARCHAR(255) NOT NULL, INDEX IDX_2265B05DC011DA75 (grupo_perteneciente_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE usuario ADD CONSTRAINT FK_2265B05DC011DA75 FOREIGN KEY (grupo_perteneciente_id) REFERENCES grupo (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE usuario DROP FOREIGN KEY FK_2265B05DC011DA75');
        $this->addSql('DROP TABLE noticia');
        $this->addSql('DROP TABLE usuario');
    }
}
