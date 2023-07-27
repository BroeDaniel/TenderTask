'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function MonitorPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div>
      <h2>Sign up for tender updates</h2>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='name' {...register('name', { required: true })} />
          {errors.name && <span>The name is required</span>}
          <input placeholder='email' {...register('email')} />
          <input placeholder='company' {...register('company')} />
          <input placeholder='cvr' {...register('cvr')} />
          <input type='submit' />
        </form>
      </section>
      <section>
        <p>
          What is a tender? A tender is a project going public for you to bid
          on.
        </p>
        <p>
          How does it work? You only need to fill out the form below, then we
          will contact you via the information you provided and from there the
          service is active. You will receive an email once a week with current
          tenders matching your criterias, and if a new tender becomes avaibles
          you will be notified the same day to get a head start.
        </p>
        <p>
          Why sign up for tender updates ? By signing up to our service, you
          will be updated on a regular basis and mentioned above. Our service
          acts as a salesman for you, helping you scout the marked for
          salesleads you otherwise would have missed.
        </p>
        <p>
          What does the service cost? The first 6 months are free of charge for
          you to test out the service. Afterwards there is a montly subscription
          which we will clarify with you once the free tier expires
        </p>
      </section>
    </div>
  );
}
