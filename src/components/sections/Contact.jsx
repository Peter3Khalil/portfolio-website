import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Container from '../Container';
import { useForm } from 'react-hook-form';
import { cn } from '../../utils/helperFunctions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const emailRegex = /^[a-z0-9._-]+@[a-z]+\.com$/;
const schema = yup.object().shape({
  name: yup.string().required('required').min(3, 'Name is too short'),
  email: yup
    .string()
    .email('not valid email')
    .matches(emailRegex, 'Not valid email')
    .required('required'),
  subject: yup.string().required('required').min(3, 'Subject is too short'),
  message: yup.string().required('Required').min(10, 'Message is too short'),
});
const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { handleSubmit, register, formState, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const { errors, isValid } = formState;
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      setIsLoading(false);
      if (res.status === 200) {
        toast.success(result.message);
        reset();
      } else {
        toast.error("Something is wrong! Try again");
      }
    } catch (error) {
      toast.error("Something is wrong! Try again");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SectionWrapper id="contact">
      <Container sectionName={'Contact Me'} className={'w-full md:w-[60%]'}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
        >
          <Input
            aria-label="Name"
            name="name"
            register={register}
            error={errors.name && errors.name.message}
          />
          <Input
            aria-label="Email"
            name="email"
            register={register}
            error={errors.email && errors.email.message}
          />

          <Input
            aria-label="Subject"
            name="subject"
            register={register}
            error={errors.subject && errors.subject.message}
          />
          <div className="flex w-full flex-col items-start gap-1">
            <textarea
              aria-label="Message"
              placeholder="Message"
              name="message"
              {...register('message')}
              className="max-h-[400px] min-h-[200px] w-full rounded border-2 border-primary/40 bg-background p-2 text-foreground outline-none focus:border-primary"
            />
            {errors.message && (
              <span className="text-md capitalize text-destructive dark:text-red-500">
                {errors.message.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className={cn('rounded bg-primary p-2 text-background', {
              'cursor-not-allowed': !isValid,
              'bg-muted text-muted-foreground': !isValid || isLoading,
            })}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </SectionWrapper>
  );
};
const Input = ({ name = '', error, register,...props }) => {
  return (
    <div className="flex w-full flex-col items-start gap-1">
      <input
      {...props}
        type="text"
        name={name}
        {...register(name)}
        placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
        className="w-full rounded border-2 border-primary/40 bg-background p-2 text-foreground outline-none focus:border-primary"
      />
      {error && (
        <span className="text-md capitalize text-destructive dark:text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};
export default Contact;
