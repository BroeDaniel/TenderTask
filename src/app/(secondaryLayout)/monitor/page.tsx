'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './page.module.css';
import Image from 'next/image';
import { TextField, Button, FormHelperText, FormControl } from '@mui/material';

export default function MonitorPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <section className={styles.monitorSection}>
      <h1 className={`${styles.headerCenter} ${styles.h1}`}>
        Tilmeld dig her for at abonnere på udbud
      </h1>
      <div className={`${styles.card} ${styles.my1}`}>
        <div className={`${styles.cardItem} ${styles.relative} ${styles.p1}`}>
          <Image
            src='/images/opgaver_i_udbud.jpg'
            alt={'person ved computer tjekker opgaver i udbud'}
            fill
          />
        </div>
        <div className={`${styles.cardItem} ${styles.p1} `}>
          <div className={`${styles.textGroup}`}>
            <h2 className={`${styles.h2}`}>
              Opdag udbud du ellers ikke ville have hørt om
            </h2>
            <p>
              Når du har tilmeldt dig vil du ugentlig modtage en mail med
              nuværende opgaver i udbud, som matcher dine kriterier, og hvis der
              kommer en ny opgave i udbud, så vil du blive informeret den samme
              dig, for bedst muligt at reagere på udbuddet.
            </p>
            <p>
              Vores services vil agere som en sælger for dig, der hjælper dig
              med at undersøge markedet for <b>nye mulige salgsleads</b> du
              ellers kunne have misset.
            </p>
            <p>Servicen er gratis, da vi kører det i en testperiode.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.flexCol}>
            <TextField
              error={errors.name ? true : false}
              label='Navn'
              variant='outlined'
              className={styles.my3}
              {...register('name', { required: true })}
              helperText={
                errors.name ? (
                  <FormHelperText style={{ marginLeft: 0, color: 'red' }}>
                    Navn skal udfyldes
                  </FormHelperText>
                ) : (
                  <FormHelperText> </FormHelperText>
                )
              }
            />
            <TextField
              error={errors.email ? true : false}
              label='E-mail'
              variant='outlined'
              className={styles.my3}
              {...register('email', {
                required: true,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: '',
                },
              })}
              helperText={
                errors.email ? (
                  <FormHelperText style={{ marginLeft: 0, color: 'red' }}>
                    Ugyldig email
                  </FormHelperText>
                ) : (
                  <FormHelperText> </FormHelperText>
                )
              }
            />
            <TextField
              error={errors.company ? true : false}
              label='Virksomhed'
              variant='outlined'
              className={styles.my3}
              {...register('company', { required: true })}
              helperText={
                errors.company ? (
                  <FormHelperText style={{ marginLeft: 0, color: 'red' }}>
                    Virksomhedens navn skal udfyldes
                  </FormHelperText>
                ) : (
                  <FormHelperText style={{ color: 'red' }}> </FormHelperText>
                )
              }
            />
            <Button
              type='submit'
              variant='contained'
              // className={styles.my2}
              style={{ background: 'rgba(	80, 200, 120, 0.8)', color: 'black' }}>
              Send
            </Button>
          </form>
          <p style={{ height: '50px' }}></p>
        </div>
      </div>
    </section>
  );
}
