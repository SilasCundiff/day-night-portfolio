import styled from 'styled-components';
import Button from '@/components/general/Buttons/Button';
const StyledForm = styled.form`
  width: 85%;
  margin-inline: auto;
  margin-top: 18vh;
  margin-bottom: 15vh;
  background: ${({ theme: { formBG } }) => formBG};
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  font-size: 1.25rem;

  .contact-form__field-wrapper {
    display: flex;
    flex-direction: column;
    width: 95%;

    margin-bottom: 1.5rem;
    & input,
    textarea {
      margin-left: 2.5%;
      padding: 0.75rem 1rem;
      border: none;
      background: ${({ theme: { formField } }) => formField};
      outline: none;
      resize: none;
      color: ${({ theme: { formContent } }) => formContent};
      font-size: clamp(1rem, 1.25rem, 1.5rem);
      font-weight: ${({ theme: { thin } }) => thin};
      font-family: 'Poppins', sans-serif;
    }
  }
  .contact-form__field-label {
    margin-bottom: 0.75rem;
    margin-left: 2.5%;
    color: ${({ theme: { formField } }) => formField};
  }
  .contact-form__button {
    color: ${({ theme: { formField } }) => formField};
  }
  .contact-form__button {
    border: ${({ theme: { formField } }) => formField} solid 3px;
    color: ${({ theme: { formField } }) => formField};
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    &:after {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background-color: ${({ theme: { secondary } }) => secondary};
      transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
    }
    &:hover {
      color: ${({ theme: { formField } }) => formField};
      transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
      border: ${({ ghost, theme: { primary } }) =>
        ghost && `${primary} solid 3px`};
    }
    &:hover:after {
      width: 100%;
    }
    & a {
      color: ${({ theme: { secondary } }) => secondary};
    }
    &:hover a {
      color: ${({ theme: { primary } }) => primary};
    }
  }
  @media only screen and (min-width: 1280px) {
    max-width: 30%;
  }
  @media only screen and (min-width: 1920px) {
    margin: 0 auto 0 0;
    max-width: 50%;
    width: 30%;
    height: 35%;
  }
  @media only screen and (min-width: 2500px) {
    /* width: 35%; */
  }
`;

function Form() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <StyledForm
      name='contact'
      method='POST'
      data-netlify='true'
      action='/success'
    >
      <input type='hidden' name='form-name' value='contact' />
      <div className='contact-form__field-wrapper'>
        <label className='contact-form__field-label' htmlFor='name'>
          Name
        </label>
        <input
          className='contact-form__field-input'
          type='text'
          id='name'
          name='name'
          required
        />
      </div>
      <div className='contact-form__field-wrapper'>
        <label className='contact-form__field-label' htmlFor='email'>
          Email
        </label>
        <input
          className='contact-form__field-input'
          type='email'
          id='email'
          name='email'
          required
        />
      </div>
      <div className='contact-form__field-wrapper'>
        <label className='contact-form__field-label' htmlFor='message'>
          Message
        </label>
        <textarea
          className='contact-form__field-input'
          id='message'
          name='message'
          rows='4'
          required
        />
      </div>
      <Button ghost className='contact-form__button' type='submit'>
        Send Message!
      </Button>
    </StyledForm>
  );
}

export default Form;
