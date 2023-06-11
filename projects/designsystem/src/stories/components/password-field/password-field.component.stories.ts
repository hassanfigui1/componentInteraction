import { PasswordFieldComponent } from './password-field.component';
import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { userEvent, within } from '@storybook/testing-library';
import { InputFieldsModule } from '../input-fields.module';

export default {
  title: 'Password Input',
  component: PasswordFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [InputFieldsModule],
    }),
  ],
} as Meta;

const Template: Story<PasswordFieldComponent> = (args: PasswordFieldComponent) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Password',
  placeholder: 'Enter Password',
  required: false,
  showError: false,
  errorMessage: 'I am error',
  matchError: false,
  matchPasswordMessage: 'I am match error',
  pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
  minlength: '8',
};

Default.storyName = 'Standard password input with appearance switch';

export const PasswordValue = Template.bind({});
PasswordValue.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('password-input'), 'SuperGeheim', { delay: 100 });
};
PasswordValue.storyName = 'Password field filled';

export const PasswordValueShown = Template.bind({});
PasswordValueShown.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId('password-input'), 'SuperGeheim', { delay: 100 });

  const showHideBtn = canvas.getByTestId('pw-show-btn');

  await userEvent.click(showHideBtn);
};
PasswordValueShown.storyName = 'Password field filled and shown';

export const PasswordErrorState = Template.bind({});
PasswordErrorState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const passwordInput = canvas.getByTestId('password-input');

  await userEvent.click(passwordInput);
  await userEvent.tab();
};
PasswordErrorState.storyName = 'Password field error when left empty';
