import React from 'react';
import { Styledfeaturelist, Wrapper } from './styled/Introdropdown.styled';
import todo from './images/icon-todo.svg';
import calendar from './images/icon-calendar.svg';
import reminders from './images/icon-reminders.svg';
import planning from './images/icon-planning.svg';

export const Featurelist = () => {
  return (
    <Styledfeaturelist>
        <Wrapper>
            <img src={todo} alt='todo' width={15}/>
            <p>To do list</p>
        </Wrapper>
        <Wrapper>
            <img src={calendar} alt='calendar'width={15}/>
            <p>Calendar</p>
        </Wrapper>
        <Wrapper>
            <img src={reminders} alt='reminders' width={15}/>
            <p>Reminders</p>
        </Wrapper>
        <Wrapper>
            <img src={planning} alt='planning' width={15}/>
            <p>Planning</p>
        </Wrapper>
    </Styledfeaturelist>
  )
}
