import styled from 'styled-components';

import StyledGrid from './StyledGrid';
import Form from './Form';
import Label from './Label';
import Error from './Error';
import Button from './Button';
import Split from './Split';

const ContactForm = styled.div`
  margin: auto;
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: center;
  font-family: 'Open Sans', Sans-Serif;
`;

ContactForm.Grid = StyledGrid;
ContactForm.Form = Form;
ContactForm.Label = Label;
ContactForm.Error = Error;
ContactForm.Button = Button;
ContactForm.Split = Split;

export default ContactForm;
