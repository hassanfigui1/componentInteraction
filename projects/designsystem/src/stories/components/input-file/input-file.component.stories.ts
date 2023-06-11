import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { InputFileComponent } from './input-file.component';
import { InputFieldsModule } from '../input-fields.module';

export default {
  title: 'Input file',
  component: InputFileComponent,
  decorators: [
    moduleMetadata({
      imports: [InputFieldsModule],
    }),
  ],
  argTypes: { changeFile: { action: 'onInputChange' } },
} as Meta;

const Template: Story<InputFileComponent> = (args: InputFileComponent) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  id: 'idinputfile'
};
Default.storyName = 'Standard input with appearance switch';



