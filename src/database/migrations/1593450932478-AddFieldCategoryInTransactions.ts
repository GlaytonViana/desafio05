import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddFieldCategoryInTransactions1593450932478
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'transactions',
      new TableColumn({
        name: 'category_id',
        type: 'uuid',
        generationStrategy: 'uuid',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropColumn('transactions', 'category_id');
  }
}
