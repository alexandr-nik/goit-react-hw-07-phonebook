
import { Contacts } from './Contacts';
import { AppBlock } from './App.styled';
import { Section } from './Section';
import { ContactsFilter } from './ContactsFilter';
import { ContactForm } from './ContactForm';

export function App() { 
  return (
    <AppBlock>
      <ContactForm  />
      <Section title="Contacts">
        <ContactsFilter  />
        <Contacts  
        />
      </Section>
    </AppBlock>
  );
}

