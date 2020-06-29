import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transactions from '../models/Transaction';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionsRepository = getRepository(Transactions);

    const deletedTransaction = await transactionsRepository.delete(id);

    if (!deletedTransaction.affected) {
      throw new AppError('transaction does not exist');
    }
  }
}

export default DeleteTransactionService;
