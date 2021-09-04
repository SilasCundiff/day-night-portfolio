import styled from 'styled-components';
import Button from '@/components/reusables/Buttons/Button';
const StyledForm = styled.form`
  width: 300px;
  margin-inline: auto;
  background: ${({ theme: { secondary } }) => secondary};
  padding: 1rem 2rem;
  font-size: 1.25rem;
  .contact-form__field-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;

    & input,
    textarea {
      padding: 0.75rem 1rem;
      border: none;
      background: ${({ theme: { primary } }) => primary};
      outline: none;
      resize: none;
      color: ${({ theme: { text } }) => text};
      font-size: 1.25rem;
      font-weight: ${({ theme: { thin } }) => thin};
      font-family: 'Poppins', sans-serif;
    }
  }
  .contact-form__field-label {
    margin-bottom: 0.75rem;
    color: ${({ theme: { primary } }) => primary};
  }
`;

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className='contact-form__field-wrapper'>
        <label className='contact-form__field-label' htmlFor='name'>
          Name
        </label>
        <input
          className='contact-form__field-input'
          type='text'
          id='name'
          name='name'
        />
      </div>
      <div className='contact-form__field-wrapper'>
        <label className='contact-form__field-label' htmlFor='email'>
          Email
        </label>
        <input
          className='contact-form__field-input'
          type='text'
          id='email'
          name='email'
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
        />
      </div>
      <Button ghost type='submit'>
        Send Message!
      </Button>
    </StyledForm>
  );
}

export default Form;
