import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
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

    const { count } = await countRecipientNotification.execute({
      recipientId: 'testId',
    });

    expect(count).toEqual(2);
  });
});
