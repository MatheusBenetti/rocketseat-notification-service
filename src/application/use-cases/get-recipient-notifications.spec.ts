import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('Get notification', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'testId' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'testId' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'testId1' }),
    );

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'testId',
    });

    expect(notifications).toEqual(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ receiptId: 'testId' }),
        expect.objectContaining({ receiptId: 'testId' }),
      ]),
    );
  });
});
