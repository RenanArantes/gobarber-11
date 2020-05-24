import AppError from '@shared/errors/AppError';

import FakeAppointmentsResporitory from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsResporitory = new FakeAppointmentsResporitory();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsResporitory,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123456789',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456789');
  });

  it('should not be able to create two appointments at same schedule', async () => {
    const fakeAppointmentsResporitory = new FakeAppointmentsResporitory();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsResporitory,
    );

    const appointmentDate = new Date(2020, 4, 10, 11);

    const appointment = await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123456789',
    });

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123456789',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
