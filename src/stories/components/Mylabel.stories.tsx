import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel, Props } from '../../components/MyLabel';


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }


    }

} as ComponentMeta<typeof MyLabel>


const template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />


// Historias.
export const Basic = template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: true
}

export const AllCaps = template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Terciary = template.bind({});
Terciary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const cumtomColor = template.bind({});
cumtomColor.args = {
    fontColor: '#000',
    
}