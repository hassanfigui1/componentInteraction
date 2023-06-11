import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';
import { InputFieldsModule } from '../input-fields.module';
import { userEvent, within } from '@storybook/testing-library';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Textatea',
  component: TextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [InputFieldsModule, BrowserAnimationsModule],
    }),
  ],
  argTypes: { inputChange: { action: 'onInputChange' } },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<TextareaComponent> = (args: TextareaComponent) => ({
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
  value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  required: false,
  maxRow: '5',
  minRow: '1',
};
Default.storyName = 'Standard input with appearance switch';

export const ValueBinding = Template.bind({});
ValueBinding.args = {
  ...Default.args,
  value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
};
ValueBinding.storyName = 'Given input for field';

export const DisabledField = Template.bind({});
DisabledField.args = {
  ...Default.args,
  disabled: true,
  value: 'I am disabled',
};
DisabledField.storyName = 'Disabled field allows no input';
export const AutoResize = Template.bind({});
AutoResize.args = {
  ...Default.args,
  autoResize: true,
};
AutoResize.storyName = 'Autoresize';

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
};
type.storyName = 'Checkbox  with the theme colors';
type.argTypes = {
  type: {
    options: ['text', 'number', 'email'],
    control: { type: 'select' },
  },
};
