import { ButtonsModule } from '../buttons.module';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { BasicButtonComponent } from './basic-button.component';
export default {
  title: 'Basic-Button',
  component: BasicButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [ButtonsModule],
    }),
  ],
} as Meta;

const Template: Story<BasicButtonComponent> = (args: BasicButtonComponent) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  fullWidth: false,
};

export const Color = Template.bind({});
Color.args = {
  ...Default.args,
  color: 'primary',
};
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
Disabled.storyName = 'Button Disabled';
Color.storyName = 'Button colors';
Color.argTypes = {
  color: {
    options: ['primary', 'accent', 'warn'],
    control: { type: 'radio' },
  },
};
export const Tooltip = Template.bind({});
Tooltip.args = {
  ...Default.args,
  tooltipLabel: 'Label tooltip',
  toolTipPosition: 'below',
  toolTipHideDelay: '1000',
};
Tooltip.storyName = 'Tooltip of buttons';
Tooltip.argTypes = {
  toolTipPosition: {
    options: ['left', 'right', 'above', 'below'],
    control: { type: 'select' },
  },
};
