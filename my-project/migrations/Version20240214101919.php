<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240214101919 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE rel_grupo_evento (id INT AUTO_INCREMENT NOT NULL, grupo_id INT NOT NULL, evento_id INT NOT NULL, INDEX IDX_7D43B8549C833003 (grupo_id), INDEX IDX_7D43B85487A5F842 (evento_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE rel_grupo_evento ADD CONSTRAINT FK_7D43B8549C833003 FOREIGN KEY (grupo_id) REFERENCES grupo (id)');
        $this->addSql('ALTER TABLE rel_grupo_evento ADD CONSTRAINT FK_7D43B85487A5F842 FOREIGN KEY (evento_id) REFERENCES evento (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE rel_grupo_evento DROP FOREIGN KEY FK_7D43B8549C833003');
        $this->addSql('ALTER TABLE rel_grupo_evento DROP FOREIGN KEY FK_7D43B85487A5F842');
        $this->addSql('DROP TABLE rel_grupo_evento');
    }
}
