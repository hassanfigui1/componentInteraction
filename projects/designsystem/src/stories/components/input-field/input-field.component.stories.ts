import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { InputFieldComponent } from './input-field.component';
import { InputFieldsModule } from '../input-fields.module';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'cStandard Input',
  component: InputFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [InputFieldsModule],
    }),
  ],
  argTypes: { change: { action: 'onInputChange' } },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<InputFieldComponent> = (args: InputFieldComponent) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'placeholder',
  internal: false,
  iconClass: 'security',
  tooltip: 'Confidential',
  required: false,
};
Default.storyName = 'Standard input with appearance switch';
export const MaxLenght = Template.bind({});
MaxLenght.args = {
  ...Default.args,
  maxlength: '6',
};
MaxLenght.storyName = 'max lenght of caracter';
export const ValueBinding = Template.bind({});
ValueBinding.args = {
  ...Default.args,
  value: 'Input Value',
};
ValueBinding.storyName = 'Given input for field';

export const DisabledField = Template.bind({});
DisabledField.args = {
  ...Default.args,
  disabled: true,
  value: 'I am disabled',
};
DisabledField.storyName = 'Disabled field allows no input';

export const RequiredField = Template.bind({});
RequiredField.args = {
  ...Default.args,
  required: true,
};
RequiredField.storyName = 'Required Filed which needs to be filled';

export const IconLabelField = Template.bind({});
IconLabelField.args = {
  ...Default.args,
  iconClass: 'lock',
};
IconLabelField.storyName = 'Input field with label icon';

export const IconLabelFieldFilled = Template.bind({});
IconLabelFieldFilled.args = {
  ...Default.args,
  iconClass: 'lock',
  value: 'Geheim',
};
IconLabelFieldFilled.storyName = 'Input field with label icon filled';

export const ShowHint = Template.bind({});
ShowHint.args = {
  ...Default.args,
  showHint: true,
  hintMessage: 'I am hint',
};
ShowHint.storyName = 'Display an input hint';

export const RequiredFieldErrorState = Template.bind({});
RequiredFieldErrorState.args = {
  ...Default.args,
  required: true,
  showError: true,
  errorMessage: 'I am error',
};
RequiredFieldErrorState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputField = canvas.getByTestId('input');

  await userEvent.click(inputField);
  await userEvent.tab();
};
RequiredFieldErrorState.storyName = 'Required field show error when left empty';

export const type = Template.bind({});
type.args = {
  ...Default.args,
  type: 'text',
  internal: false,
  iconClass: '',
  tooltip: 'Confidential',
};
type.storyName = 'Checkbox  with the theme colors';
type.argTypes = {
  type: {
    options: ['text', 'number', 'email'],
    control: { type: 'select' },
  },
};
