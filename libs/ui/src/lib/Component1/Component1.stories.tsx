import { Story, Meta } from '@storybook/react';
import { Component1, Component1Props } from './Component1';

export default {
  component: Component1,
  title: 'Component1',
} as Meta;

const Template: Story<Component1Props> = (args) => <Component1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Title = Template.bind({});
Title.args = { title: 'Title' };
