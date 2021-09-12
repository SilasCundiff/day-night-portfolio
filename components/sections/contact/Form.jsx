import styled from 'styled-components';
import Button from '@/components/general/Buttons/Button';
const StyledForm = styled.form`
  width: 300px;
  margin-inline: auto;
  margin-top: 18vh;
  margin-bottom: 15vh;
  background: ${({ theme: { formBG } }) => formBG};
  border-radius: 0.5rem;
  padding: 2rem 2rem;
  font-size: 1.25rem;

  .contact-form__field-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1.5rem;
    & input,
    textarea {
      padding: 0.75rem 1rem;
      border: none;
      background: ${({ theme: { formField } }) => formField};
      outline: none;
      resize: none;
      color: ${({ theme: { formContent } }) => formContent};
      font-size: 1.25rem;
      font-weight: ${({ theme: { thin } }) => thin};
      font-family: 'Poppins', sans-serif;
    }
  }
  .contact-form__field-label {
    margin-bottom: 0.75rem;
    color: ${({ theme: { formField } }) => formField};
  }
  .contact-form__button {
    color: ${({ theme: { formField } }) => formField};
  }
  @media only screen and (min-width: 1920px) {
    margin: 30vh auto auto;
    max-width: 50%;
    width: 30%;
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
