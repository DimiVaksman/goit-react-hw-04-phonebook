import { Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FcAddDatabase } from 'react-icons/fc';
import * as yup from 'yup';
import { Label, Text, Title, Form } from './Phonebook.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export const Phonebook = ({ title, onSave }) => {
  return (
    <div>
      <Title>{title}</Title>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, actions) => {
          onSave({
            ...values,
            id: nanoid(),
          });
          actions.resetForm();
        }}
        validationSchema={schema}
      >
        <Form>
          <Label htmlFor="">
            <Text>Name</Text>
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </Label>
          <Label htmlFor="">
            <Text>Number</Text>
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="div" />
          </Label>
          <button>
            <FcAddDatabase size="16px" />
          </button>
        </Form>
      </Formik>
    </div>
  );
};

Phonebook.propType = {
  onSubmit: PropTypes.func.isRequired,
};
